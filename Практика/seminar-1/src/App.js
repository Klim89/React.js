import "./App.css";
import Greeting from "./Greeting";
import CurrentTime from "./CurrentTime";
import EventCard from "./EventCard";

function App() {
  return (
    <div className="App">
      <Greeting></Greeting>
      <CurrentTime></CurrentTime>
      <EventCard name="Концерт" date="08.06.2024" в place="Москва"></EventCard>
      <EventCard name="Балет" date="08.07.2024" в place="Санкт-Петербург"></EventCard>
    </div>
  );
}

export default App;
