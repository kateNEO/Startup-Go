import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";

const url="https://161.35.196.135:5013/api/campaigns/1";
let n = async () => {
    const line = await axios.get(url);
    console.log(line);
};
n();


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


reportWebVitals();

//const root = ReactDOM.createRoot(document.getElementById('root'));
//
// root.render(
//   <React.StrictMode>
//
//       <div>
//           <Button primary>Primary</Button>
//           <Button secondary>Secondary</Button>
//       </div>
//   </React.StrictMode>
// );
// ReactDOM.createRoot();

