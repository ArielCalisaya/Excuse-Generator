import React from 'react';
import './App.css';

window.onload = () =>{
  document.querySelector("#button").addEventListener('click', () =>{
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};

let excuseGenerator = () =>{
  let who = ['Ariel','The dog', 'My granma','Byron', 'His turtle','Diego', 'My bird'];
  let what = ['eat', 'pissed', 'crushed', 'broked'];
  let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];

  let whoPlus = Math.floor(Math.random() * who.length);
  let whatPlus= Math.floor(Math.random() * what.length);
  let whenPlus= Math.floor(Math.random() * when.length);

  return who[whoPlus] + ' '+ what[whatPlus]+ ' ' + when[whenPlus];
}
console.log("holaaa")

export default excuseGenerator;
