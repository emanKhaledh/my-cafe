import React, { Component } from 'react';
import './index.css';
import coffeImage from './coffee-and-cake.jpg'
import MenuEat from './menu-eat';
import MenuCaffe from './menu-coffe'




class Menu extends Component {
  constructor(props){
  super(props);
  this.state ={
      button1:false,
      button2:false
    }
    this.clickEat =this.clickEat.bind(this)
  }

  clickEat(){
    this.setState({button1:true,button2:false})
  }

  clickDrink =()=>{
  this.setState({button2:true,button1:false})
  }
  render(){
    const cake = "image to coffe and cake"
    return(
      <div id="menu">
        <div className="menu-titel"><h3>THE MENU</h3></div>
        <div className="menu">
          <button onClick={this.clickEat} className='button-style'>Eat</button>
          <button onClick={this.clickDrink} className='button-style'>Drink</button>
        </div>
        <div className="menuList">
           { !this.state.button1 && !this.state.button2 &&
        <div className="menu-style">
        <MenuEat />
        </div>
        }
       
        {this.state.button1 &&
        <div className="menu-style">
         <MenuEat />
        </div>
      }
        {this.state.button2 &&
        <div className="menu-style">
        <MenuCaffe />
        </div>
      }
      <br/>
      <br/>
      
        </div>
        <div>
        <img src={coffeImage} alt={cake}/>
        </div>
      </div>
    )
  }
}



export default Menu;