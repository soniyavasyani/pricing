import React from 'react';
let cardData1 = [
            {
              "storage": "500GB Storage",
              "usersAllowed": "2 users allowed",
              "dataLimit": "Send upto 3GB"
            }]
let cardData2=[{
              "storage": "1TB Storage",
              "usersAllowed": "5 users allowed",
              "dataLimit": "Send upto 5GB"
            }]
let cardData3=[{
            "storage": "2TB Storage",
            "usersAllowed": "10 users allowed",
            "dataLimit": "Send upto 10 GB",
            "id":"1"
           }] 
class Cards extends React.Component{
basic_price(){
  return this.props.isMonthlyActive ? 50 : 100
}
professional_price(){
  return this.props.isMonthlyActive ? 250 : 350
}
master_price(){
  return this.props.isMonthlyActive ? 500 : 1000
}
  render(){

    //{console.log("cardData",cardData )}
    // console.log(this.props)
    // const {card} =this.state
    // const post=card_data.map(temp=>)
    // const datas=card.card_data;
   return(
        <div>
           {/* {console.log("cardData",cardData )} */}
        <header className="container">
        <div className="cardcontainer">
        <div className="card">
          <h2>Basic</h2>
          {
           cardData1.map(post=>(
              <>
              <hr />
              <h3>${this.basic_price()}</h3>
              <p>{post.storage}</p>
              <hr />
              <p>{post.usersAllowed}</p>
              <hr />
              <p>{post.dataLimit}</p>
              <hr/>
             </>
            ))
          }
         
          {/* {console.log("hii form")}
          {console.log(this.price())}
           */}
          <button className="color_button1">Learn more</button>
        </div>
        <div className="card2">
        <h2 className="white_text">Professional</h2>
        {
           cardData2.map(post=>(
              <>
              <hr />
              <h3 className="white_text">${this.professional_price()}</h3>
              <p>{post.storage}</p>
              <hr />
              <p>{post.usersAllowed}</p>
              <hr />
              <p>{post.dataLimit}</p>
              <hr/>
             </>
            ))
          }
          <button className="color_button_card2">Learn more</button> 
        </div>
        <div className="card">
        <h2>Master</h2>
        {
           cardData3.map(post=>(
              <>
              <hr />
              <h3>${this.basic_price()}</h3>
              <p>{post.storage}</p>
              <hr />
              <p>{post.usersAllowed}</p>
              <hr />
              <p>{post.dataLimit}</p>
              <hr/>
             </>
            ))
          }
          <button className="color_button1">Learn more</button> 
        </div>
      </div>
  </header>
        </div>
      );
    }
}
export default Cards ; 