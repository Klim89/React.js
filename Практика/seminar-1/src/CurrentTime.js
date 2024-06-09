function CurrentTime() {
  const now = new Date().toLocaleTimeString();
  const nowHour = new Date().getHours;
  return (
    <div className="App">
      <h1 className="heading">Текущее время {now}</h1>
      {nowHour > 12 ? (
        <h1 className="heading">Добрый день, сейчас на часах {now}</h1>
      ) : (
        <h1 className="heading">Доброе утро, сейчас на часах {now}</h1>
      )}
    </div>
  );
}

export default CurrentTime;
