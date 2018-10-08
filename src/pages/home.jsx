import React, { Component } from 'react'

class Home extends Component {

  hello(){
    console.log('Hello bois')
  }

  render() {
    return (
      <div>
        <button onClick={() => this.hello()}>My home page</button>
        <p>Some content</p>
      </div>
    )
  }
}

export default Home;