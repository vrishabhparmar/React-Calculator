import React, { Component } from 'react'
import Calculator from './CalculatorComponent'

class CalculatorDisplay extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             result : ""
        }
    }
    
    onClick = num => {
       
        console.log(num.target.name);
       
       
        this.setState({
            result :  this.state.result + num.target.name
        })

        if(num.target.name == "reset"){
            this.setState({ result : ""})
        }

        if(num.target.name == "="){
            this.setState({ result : eval(this.state.result)})
        }


        

    }
    render() {

       
        return (
            <div>
                
                
                <div className="display">
                    {this.state.result}
                </div>
                
                <Calculator onClick={this.onClick}/>
                
            </div>
        )
    }
}

export default CalculatorDisplay