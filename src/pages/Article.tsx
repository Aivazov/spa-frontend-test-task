import { Link } from 'react-router-dom';
import React from 'react';
import { ArticleBtnArrow } from '../components/Icons/articleBtnArrow.js';
import Button from '@mui/material/Button';
import '../App.css';

export default function Article({ articlesTitle, articlesContent }) {
  console.log(articlesContent);

  return (
    <div style={{ margin: 15 }}>
      <h1>{articlesTitle}</h1>
      <p>{articlesContent}</p>
      <Button color="secondary" disabled={false} className="card__button">
        <span style={{ marginRight: 6, display: 'block' }}>
          <ArticleBtnArrow />
        </span>
        <Link to="/">Back</Link>
      </Button>
    </div>
  );
}
