import React, {Component} from 'react'
import {connect} from 'react-redux'
import { increment ,del, decrement} from '../redux/ActionCreator'





const mapStateToProps = (state) =>
{

    return {
        id: state.id,
        count: state.count,
        history : state.History
    }
        
}

const mapDispatchToProps = dispatch => {

    return {
        increment:  () => dispatch(increment()),
        decrement : () => dispatch(decrement()),

        onDelete : (val) => dispatch(del(val))

    }

}
class Main extends Component{

   

   

    // increment(){

    //     this.setState({
    //         ...this.state,
    //         count : ++this.state.count

    //     })
     
    // //    this.setState({
    // //        count :  this.state.count += 1
    // //    })
    // }
    // decrement(){
    //     this.setState({
    //         count :  this.state.count -= 1
    //     })
    // }

    
    render()
    {
        var a = this.props.history.map(val => {
            return(
                <li key={val.id} onClick={() => this.props.onDelete(val.id)}>
                    {val.count} {val.id}
                </li>
            )
        });
        return(
            <div>
                <h1>This is the increment Component</h1>
                <hr/>
                {this.props.count}
                <br/>

                <button onClick={this.props.increment} >Add</button>
                
                <button onClick={this.props.decrement}>Sub</button>

                <div>
                    <h4>History</h4>
                    <ul>
                        {a}
                    </ul>
                </div>
            </div>

            
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)