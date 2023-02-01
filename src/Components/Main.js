import Navbar from "./Navbar";
import Authorization from "./AuthorizationComponents/Authorization";
import {
    Routes,
    Route,
} from "react-router-dom";
import React, { Component } from 'react'


export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {}
        }
    }

    async componentDidMount() {
        let parse = JSON.parse(localStorage.getItem("UserInfo"))
        await this.setState({ userInfo: parse });
    }

    render() {
        return (
            <div className="container">
                <br />
                <Routes>
                    <Route path="*" element={<Navbar userInfo={this.state.userInfo} />} />
                    <Route path="/authorization/*" element={<Authorization />} />
                </Routes>
            </div>
        )
    }
}
