import React from 'react';

class Toggle extends React.Component{
    render(){
        return(
            <div>
                <span className="gray_color">Annually &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                  <label className="switch" >
                    <input type="checkbox" onClick={this.props.toggle} />
                    <span className="slider round"></span>
                  </label>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;Monthly
                </span> 
            </div>
        )
    }
}
export default Toggle;
