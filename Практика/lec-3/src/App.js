import "./App.css";
import Nav from "./components/header";
import BasicList from "./components/list";
import ParentCounter from "./components/parent";
import Student from "./components/propType";
import HoverRating from "./components/rating";

function App() {
  return (
    <div className="App">
      <HoverRating></HoverRating>
      <Nav></Nav>
      <ParentCounter></ParentCounter>
      <BasicList></BasicList>
      <Student name="Dima" age={34} isStudent={true}></Student>
    </div>
  );
}

export default App;
