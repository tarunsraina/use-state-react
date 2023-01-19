
import './App.css';
import Header from './myComponents/header';
import Footer from './myComponents/footer';
import React , { useState } from 'react'
import Button from './myComponents/button';
function App() {

  const [count , setCount ] = useState(0);

  const [cnt1 , setCnt1] = useState(0);

  const [cnt2 , setCnt2] = useState(0);
  const [cnt3 , setCnt3] = useState(0);

  function setCnt2f(){
    setCnt2(cnt2+1)
  }

  function setCnt3f(){
    setCnt3(cnt3+1)
  }
  function setCnt(){
    setCnt1(cnt1+1);
  }

  function incCounter(){
    document.getElementById("counter").innerText = count+1;
    setCount(count+1);
  }

  function decCounter(){
    document.getElementById("counter").innerText = count-1;
    setCount(count-1);
  }

  return(
    <>
      <Header title="TODO" name="Todo list."/>
      <center>
          <h1 id='counter'></h1>
          <button onClick={incCounter}>+</button>
          <button onClick={decCounter}>-</button>
          <br />
          <a href='https://www.google.com' target="_blank">Github link for Count Incrementor and decrementor</a>
          <h2>Components that update Separately</h2>
          <Button onClick={setCnt2f} count={cnt2}/>
          <Button onClick={setCnt3f} count={cnt3}/>

          <h2>Components that update together</h2>
          <Button onClick={setCnt} count={cnt1}/>
          <Button onClick={setCnt} count={cnt1}/>
          
      </center>
      <Footer />
    </>
  )
}

export default App;
