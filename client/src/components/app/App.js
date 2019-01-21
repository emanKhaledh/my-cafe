import React, { Component } from 'react';
import './App.css';
import {
Nav,ImageHeader 
  } from '../header';
  import About from '../about';
  import Menu from '../menu';
  import Map from '../location-map';
  import {Info,SendMsg} from '../contact-us'


class App extends Component {
  // state = {
  //   response: ''
  // };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };
  render() {
    return (
      <div className="App">
   
     
        <Nav />
        <ImageHeader />
        <About />
        <Menu />
        {/* <Map /> */}
        <Info />
        <SendMsg />
        {/* <p className="App-intro">hi express{this.state.response}</p> */}
      </div>
    );
  }
}

export default App;
