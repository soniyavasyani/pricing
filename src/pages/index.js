import React from "react";
import "../../css/style.css";
import Cards from "../components/cards.js";
import Navbar from "../components/navbar.js"
import Toggle from "../components/toggle.js";


// const IndexPage = () => (
//  <div>
//   <Navbar />
//   {/* <Toogle 
//     // ans={this.props.price}
    
    
//   /> */}
//   <Cards />
//   </div>  
// )

class IndexPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
      isMonthlyActive: false
      
  };
   this.handleClick = this.handleClick.bind(this);
}
handleClick() {
  this.setState((prevState) => {
    console.log(prevState)
    return { isMonthlyActive:!prevState.isMonthlyActive}
  });
}
render(){
  return(
    <div>
      <Navbar />
      <Toggle toggle={this.handleClick}/>
      <Cards isMonthlyActive={this.state.isMonthlyActive}/>
    </div>
  )
}
}

export default IndexPage
