import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label for="exampleInput">Email address</label>
          <input type="text" id="exampleInput" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1">Name</label>
          <input type="test" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1">Job</label>
          <input type="text" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
