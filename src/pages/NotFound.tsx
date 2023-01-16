import { Link } from 'react-router-dom';
import React from 'react';

export default function NotFound() {
  return (
    <div style={{ margin: 15 }}>
      <h1 style={{ marginLeft: 0, marginBottom: 15 }}>Page not found</h1>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
