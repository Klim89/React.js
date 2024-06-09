import { useState } from "react";
import Button from '@mui/material/Button';

function ParentCounter() {
  const [count, setCount] = useState(0);
  const upCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Родитель</h2>
      <ChildCount count={count}></ChildCount>
      <Button onClick={upCount} variant="contained">Плюс 1</Button>
    </>
  );
}
function ChildCount({ count }) {
  return (
    <>
      <p>Счетчик Внутри</p>
      <p>Значение счетчика {count}</p>
    </>
  );
}

export default ParentCounter;
