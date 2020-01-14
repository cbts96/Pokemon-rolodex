import React, { Component } from "react";
import Search from "./Search/Search";
import Cardlist from "./card/Cardlist";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      monster:[],
      search:"",
    }

  }
  
  deleteCard=(id)=>{
    const sortCard=this.state.monster.filter(item=>item.id!==id);
    this.setState({monster:sortCard})
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(user=>this.setState({monster:user})
    )
  }

  render() { 
     const {monster,search}=this.state;
  
     
     const filterMonster= monster.filter(a=>a.name.toLowerCase().includes(search.toLowerCase()))
  
  
    return (
      <div className="App">
        <h1>Pokemon Rolodex</h1>
        <Search placeholder="Search" handleChange={e=>this.setState({search:e.target.value})} monster={this.state.monster} />
        <Cardlist monster={filterMonster} deleteCard={this.deleteCard}/>
      </div>
    );
  }
}
export default App;