
 import { Component } from "react";
import Formm from "./components/Formm"
class App extends Component {
  constructor()
  {
  super()
  this.state=
  {
    name:'Chombi',
    age:26
  };
  }




render(){
  return (

<div className="contianer">

<Formm name={this.state.name} age={this.state.age}></Formm>
</div>
  );
}
}

export default App;
