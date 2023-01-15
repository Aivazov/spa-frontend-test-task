import React from 'react';
import '../../App.css';

export default function Article({ articlesTitle, articlesContent }) {
  console.log(articlesContent.length);

  return (
    <div>
      <h1>{articlesTitle}</h1>
      <p>{articlesContent.split('')}</p>
    </div>
  );
}
