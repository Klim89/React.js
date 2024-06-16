import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TogoList';

function App() {
  return (
    <div className="App">
      <TemperatureConverter></TemperatureConverter>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
