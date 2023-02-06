import React, { Component } from 'react'
import Login from './Login';
import Registration from './Registration';
import ForgotPassword from './ForgotPassword';
import ConfirmAccaunt from './ConfirmAccaunt';
import ResetPassword from './ResetPassword';
import { Routes, Route, } from "react-router-dom";

export default class Authorization extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="centerContentBox col-4">
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="forgotpassword" element={< ForgotPassword />} />
                    <Route path="resetpassword" element={< ResetPassword />} />
                    <Route path="confirmaccaunt" element={< ConfirmAccaunt />} />
                </Routes>
            </div>
        )
    }
}
