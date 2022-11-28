import React from 'react';
import './style.css';

export default function App() {
  console.clear();
  function ibr() {
    var kjh = '{"roll":"contains","arun":"ambili","age":20}';
    var rollz = JSON.parse(kjh);
    console.log(rollz);
  }
  ibr();
  return <div></div>;
}
