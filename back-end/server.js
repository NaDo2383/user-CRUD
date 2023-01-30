const express = require('express')
const port = 9000
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.json())
const file = "./data.json"

app.post("/user", (req, res) => {
    const body = req.body
    fs.readFile(file, "utf-8", (readErr, data) => {
        console.log(data);
        let savedData = data ? JSON.parse(data) : []
        if (readErr) {
            res.json({
                status: readErr
            })
        }

        const newUser = {
            id: Date.now().toString(36),
            username: body.username,
            age: body.age
        };

        savedData.push(newUser);

        fs.writeFile(file, JSON.stringify(savedData), (err) => {
            if (err) {
                res.json({ status: false, message: err })
            }
            res.json({ status: true, result: savedData });
        })
    })
})

app.delete("/user", (req, res) => {
    const body = req.body

    fs.readFile(file, "utf-8", (readErr, data) => {
        let savedData = data ? JSON.parse(data) : []
        if (readErr) {
            res.json({
                status: readErr
            })
        }

        const newUsers = savedData.filter(e => (e.id !== body.id));

        fs.writeFile(file, JSON.stringify(newUsers), (err) => {
            if (err) {
                res.json({ status: false, message: err })
            }
            res.json({ status: true, result: newUsers })
        })
    })
})

app.put("/user", (req, res) => {
    const body = req.body
    fs.readFile(file, "utf-8", (readErr, data) => {
        let savedData = data ? JSON.parse(data) : []
        if (readErr) {
            res.json({
                status: readErr
            })
        }

        savedData.map(e => {
            if (e.id == body.id) {
                e.username = body.username
                e.age = body.age
            }
        })

        fs.writeFile(file, JSON.stringify(savedData), (err) => {
            if (err) {
                res.json({ status: false, message: err })
            }
            res.json({ status: true, result: savedData })
        })
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}) 