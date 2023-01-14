import React from 'react';
import './ResultsBar.scss';

export default function ResultsBar({total}) {
  return (
    <div className="results__paragraph--bottom-border">
      <p className="results__paragraph">Results: {total} </p>
    </div>
  );
}
