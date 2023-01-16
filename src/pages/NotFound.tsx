import { Link } from 'react-router-dom';
import { ArticleBtnArrow } from '../components/Icons/articleBtnArrow.js';
import Button from '@mui/material/Button';
import React from 'react';

export default function NotFound() {
  return (
    <div style={{ margin: 15 }}>
      <h1 style={{ marginLeft: 0, marginBottom: 15 }}>Page not found</h1>
      <Button color="secondary" disabled={false} className="card__button">
        <span style={{ marginRight: 6, display: 'block' }}>
          <ArticleBtnArrow />
        </span>
        <Link to="/" className="link">
          Back to homepage
        </Link>
      </Button>
    </div>
  );
}
