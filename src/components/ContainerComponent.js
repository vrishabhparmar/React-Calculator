import React, { Component } from 'react'
import Calculator from './CalculatorComponent'
import Main from './MainComponent'
import CalculatorDisplay from './CalculatorDisplay'
// import {BrowserRouter as Router, Link, Switch, Route, withRouter} from 'react-router-dom'


class Container extends Component {
    render() {
        return (
            <div>
                <Main/>
                <CalculatorDisplay/>
            </div>
        )
    }
}

export default Container
