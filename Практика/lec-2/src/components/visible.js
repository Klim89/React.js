import { useState } from "react";

function Show({data}) {
  const [block, setBlock] = useState();
  const BlockShow = () => {
    setBlock(!block);
  };

  return (
    <div>
      <button onClick={BlockShow}>Показать или скрыть</button>
      <p style={{ display: block ? "block" : "none" }}>
        {data}
      </p>
    </div>
  );
}

export default Show;
