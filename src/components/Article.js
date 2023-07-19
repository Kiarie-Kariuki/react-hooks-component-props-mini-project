import React from "react";

function Article({ title, date, preview }) {
  const defaultDate = "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;







{/* <h3>{posts.title}</h3>
        <small>{posts.date}</small>
        <p>{posts.preview}</p> */}