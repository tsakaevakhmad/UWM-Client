import React, { Component } from 'react'
import AuthorizationsServices from '../../Axios/AuthorizationsServices'
import { Link, Navigate } from "react-router-dom";
import * as validation from "../../ValidationSchema/Authorization/ForgotPasswordValidation"

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props)
        this.authorization = new AuthorizationsServices();

        this.state = {
            email: "",
            redirect: false,
            validEmail: {
                valid: false,
                message: []
            },
        }

        this.submitMail = this.submitMail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async submitMail() {
        const data = {
            email: this.state.email
        }
        if (this.state.validEmail.valid) {
            let status = (await this.authorization.forgotPassword(data)).status
            if (status === 200)
                await this.setState({ redirect: true })
        }
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });

        await this.setState({
            validEmail: await validation.email(this.state.email)
        })
    }

    render() {
        if (this.state.redirect)
            return (
                <Navigate to={"/authorization/login"} />
            )
        return (
            <div>
                <form>

                    <div className="form-outline mb-5">
                        <div className="form-floating">
                            <input type="email" id="email" name="email" onChange={this.handleChange} className={`form-control ${this.state.validEmail.valid ? "is-valid" : "is-invalid"}`} placeholder="Почта" />
                            <label htmlFor="email">Почта</label>
                            <div className="invalid-feedback">
                                {this.state.validEmail.message[0]}
                            </div>
                        </div>
                    </div>

                    <button type="button" onClick={this.submitMail} className={`btn btn-outline-success col-12 mb-4 ${this.state.validEmail.valid ? "" : "disabled"}`}>Отправить</button>
                    <div className="text-center">
                        <p><Link className="btn btn-outline-primary col-7 btn-sm" to={"/authorization/login"}>Войти</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}
