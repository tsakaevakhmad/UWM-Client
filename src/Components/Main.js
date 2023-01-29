import Navbar from "./Navbar";
import Authorization from "./AuthorizationComponents/Authorization";
import ConfirmAccaunt from "./AuthorizationComponents/ConfirmAccaunt";
import {
    Routes,
    Route,
} from "react-router-dom";
import React, { Component } from 'react'


export default class Main extends Component {

    render() {
        return (
            <div className="container">
                <br />
                <Routes>
                    <Route path="*" element={<Navbar />} />
                    <Route path="/authorization/*" element={<Authorization />} />
                </Routes>
            </div>
        )
    }
}
