import "./App.css";

function App() {
  const userName = "Alex";
  return (
    <div className="App">
      <h1>Hello {userName}</h1>
      <Heading></Heading>
      <Heading></Heading>
      <NewComp></NewComp>
      <Article number="1" name="Info"></Article>
      <Article number="2" name="Blog"></Article>
    </div>
  );
}

function NewComp() {
  return <div>New text</div>;
}

function Heading() {
  return (
    <div>
      <h2>Новый текст внутри заголовка</h2>
      <p>Новый текст</p>
    </div>
  );
}

function Article({ name, number }) {
  return (
    <div>
      <h2 style={{ background: "green" }} className="heading">
        Статья про {name} номер {number}
      </h2>
    </div>
  );
}

export default App;
