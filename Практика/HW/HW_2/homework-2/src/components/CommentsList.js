import { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="container">
      <h2 className="title">Комментарии</h2>
      <ul className="list">
        {comments.map((comment) => (
          <li key={comment.id} className="listItem">
            {comment.text}
            <button className="button" onClick={() => handleDelete(comment.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
