import React, { Component } from 'react'
import Login from './Login';
import Registration from './Registration';
import ForgotPassword from './ForgotPassword';
import { Routes, Route, } from "react-router-dom";

export default class Authorization extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="forgotpassword" element={< ForgotPassword />} />
                    <Route path="resetpassword/:code" element={< ForgotPassword />} />
                    <Route path="confirmaccaunt/:email/:code" element={< ForgotPassword />} />
                </Routes>
            </>
        )
    }
}
