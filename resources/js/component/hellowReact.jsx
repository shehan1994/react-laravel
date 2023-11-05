import React from 'react';
import ReactDom from 'react-dom/client';

export default function HellowReact(){
    return(
        <h1>Hellow react</h1>
    );
}

const container = document.getElementById('hello-react');
const root = ReactDom.createRoot(container);
root.render(<HellowReact/>);