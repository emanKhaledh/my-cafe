import React, { Component } from 'react';
import './index.css';

class handelInputMsg  extends Component{
  constructor(props){
    super(props);
    this.state={
      response:'',
      name1:'',
      quantity:'',
      message:'',
      date:''

    }
  }


handelInputMsg = (e) => {
  const x = e.target.name
  this.setState({[x]: e.target.value });
}

sendMsg =(e)=>{
  e.preventDefault();
  const inputMsg ={
    name1:this.state.name1,
    quantity:this.state.quantity,
    message:this.state.message,
    date:this.state.date
  }

  
   const url = '/api/sendEmail';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(inputMsg),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .then((res) => {
        if(res = 'ok'){
          console.log('res',res);
          
        this.setState(() => ({
          response: res,
        }));
      }})
  .catch(error => console.error('Error:', error))

}

  render(){
    
    return(
      <div className="info-style">

      <form action="/action_page.php">  
        <input className="input-style" type='text' name="name1" placeholder='Name' value={this.state.name1} onChange={this.handelInputMsg }
        ></input>
        <input className="input-style" type="number" name="quantity" value={this.state.quantity} min="1" max="100" placeholder="How Many Pepole" onChange={this.handelInputMsg }></input>

        <input className="input-style" type="date" name="date"  placeholder="Date and time"  value={this.state.date} onChange={this.handelInputMsg }></input>

        <input className="input-style" type="text" name="message" placeholder="message" 
         value={this.state.message} onChange={this.handelInputMsg }></input>
        <button className="button" onClick={this.sendMsg}>SEND MESSAGE </button>
      </form> 
      {this.state.response && <h1>ok send msg</h1>} 
      </div>

    


    )
  }
}

export default handelInputMsg ;