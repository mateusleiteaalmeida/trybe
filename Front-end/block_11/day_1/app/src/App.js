import './App.css';

const taskArray = [ 'study', 'read', 'workout' ]

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      {taskArray.map(item => task(item))}
    </div>
  );
}

export default App;
