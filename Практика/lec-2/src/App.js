import "./App.css";
import Counter from "./components/counter";
import MessagesList from "./components/message";
import Timer from "./components/timer";
import Show from "./components/visible";

function App() {
  const userName = "Alex";
  return (
    <div className="App">
      <h1>Hello {userName}</h1>
      <Timer></Timer>
      <Counter></Counter>
      <Show data='Текст из компонента'></Show>
      <Show data='Другой текст'></Show>
      <MessagesList></MessagesList>
    </div>
  );
}

export default App;
