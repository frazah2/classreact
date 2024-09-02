import { Component } from "react";





class Hello extends component{
  constructor(props){
    super(props)
    this.state = {
      number: 1,
      text: 'Hello'
    }
  }
 
  changeNumber = () => {
    this.setState(
      (prev) => ({
        number: prev.number + 1,
        text: "not Hello"
      })
    )
  }



}

function App(){
  const {number,text} = this.state
  return
} 




export default App; 