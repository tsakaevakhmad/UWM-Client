import React, { Component } from 'react'
import AuthorizationsServices from '../../Axios/AuthorizationsServices'
import { Link, Navigate } from "react-router-dom";

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props)
        this.authorization = new AuthorizationsServices();

        this.state = {
            email: "",
            redirect: false
        }

        this.submitMail = this.submitMail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async submitMail() {
        const data = {
            email: this.state.email
        }
        let status = (await this.authorization.forgotPassword(data)).status
        if (status === 200)
            await this.setState({ redirect: true })
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });
    }

    render() {
        if (this.state.redirect)
            return (
                <Navigate to={"/authorization/login"} />
            )
        return (
            <div className="centerContentBox col-4">
                <form>
                    <div className="form-outline mb-4">
                        <input type="email" id="form7" name="email" onChange={this.handleChange} className="form-control" />
                        <label className="form-label" htmlFor="form7">Почта</label>
                    </div>
                    <button type="button" onClick={this.submitMail} className="btn btn-outline-success col-12 mb-4">Отправить</button>

                    <div className="text-center">
                        <p><Link className="btn btn-outline-primary col-7 btn-sm" to={"/authorization/login"}>Войти</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}
