import React from 'react';
import ReactDOM from 'react-dom/client';
import HeadingComponent from './App'  // HeadingComponent is a default export

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        {HeadingComponent}

    </div>
);

