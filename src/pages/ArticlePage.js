import React from 'react';
import { Outlet } from 'react-router-dom';
import Article from './Article';

export default function ArticlePage() {
  return (
    <div>
      {/* <Article /> */}
      <Outlet />
    </div>
  );
}
