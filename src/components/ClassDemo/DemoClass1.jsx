import React, { Component } from 'react'

export default class DemoClass1 extends Component {
  constructor(){
    super();
    this.state={
      name:"Peter Parker",
      count:2
    }
  }
  counter(){
    this.setState({count:this.state.count+1})
  }
  counter1(){
    this.setState({count:this.state.count-1})
  }
  render() {
    return (
      <>
        <h1>Demo Class</h1>
        <p>The name of spiderman {this.state.name}</p>
        <p>Total likes are {this.state.count}</p>
        <button onClick={()=>this.counter()}>Like</button>
        <button onClick={()=>this.counter1()}>DisLike</button>
      </>
    )
  }
}
