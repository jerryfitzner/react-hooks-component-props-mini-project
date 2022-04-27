import React from "react";
import Article from "./Article";

const ArticleList = ({ components }) => {
  // console.log(components);

  const compMapper = components.map((comp) => (
      <Article
        key={comp.id}
        title={comp.title}
        date={comp.date}
        preview={comp.preview}
        minutes={comp.minutes}
      />
    )
  );

  return (
    <main>
        {compMapper}
    </main> 
  )
};

export default ArticleList;