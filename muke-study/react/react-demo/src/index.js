import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx'

// function tick () {
//   const el = (
//     <div>
//         <h1>Hello React</h1>
//         <h2>It is { new Date().toLocaleTimeString() }</h2>
//     </div>
//   )
//   ReactDOM.render(el, document.getElementById('root'));
// }

// setInterval(tick,1000)

ReactDOM.render(<App />, document.getElementById('root'));
