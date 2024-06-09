function Message({ text }) {
  return (
    <div>
      <h2 className="heading" >
          Переданное сообщение:
      </h2>
      <h2>{text}</h2>
    </div>
  );
}

export default Message;
