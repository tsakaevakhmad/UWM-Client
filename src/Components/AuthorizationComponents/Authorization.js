import React, { Component } from 'react'
import Login from './Login';
import Registration from './Registration';


export default class Authorization extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loginOn: true,
        }
        this.updateData = this.updateData.bind(this);
    }

     updateData(value) {
        this.setState({ loginOn: value })
    }

    render() {
        if (this.state.loginOn)
            return (
                <Login updateData={this.updateData}></Login>
            )
        else
            return (
                <Registration updateData={this.updateData}></Registration>
            )
    }
}
