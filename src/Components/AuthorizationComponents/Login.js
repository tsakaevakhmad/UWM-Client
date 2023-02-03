import React, { Component } from 'react'
import AuthorizationsServices from '../../Axios/AuthorizationsServices'
import { Link } from "react-router-dom";
import { loginSchema } from '../../ValidationSchema/Authorization/Login';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.authorization = new AuthorizationsServices();

        this.state = {
            email: "",
            password: "",
            validEmail: {
                valid: false,
                message: []
            },
            validPassword: {
                valid: false,
                message: []
            }
        }

        this.logining = this.logining.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async logining() {
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        let result = await this.authorization.login(data);
        if (typeof (result.data.token) !== "undefined") {
            window.location.href = '/';
        }
        else {
            await alert("Убедитесь что подтвердили ваш аккаунт через почту")
        }
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });

        await this.validpassword()
        await this.validEmail()
    }

    async validpassword() {
        try {
            await loginSchema.fields.password.validate(this.state.password, { abortEarly: true })
            await this.setState({
                validPassword: { valid: true, message: [] },
            })
        }
        catch (error) {
            await this.setState({
                validPassword: { valid: false, message: error.errors },
            })
        }
    }

    async validEmail() {
        try {
            await loginSchema.fields.email.validate(this.state.email, { abortEarly: true })
            await this.setState({
                validEmail: { valid: true, message: [] },
            })
        }
        catch (error) {
            await this.setState({
                validEmail: { valid: false, message: error.errors },
            })
        }
    }

    render() {
        return (
            <div className="centerContentBox col-4">
                <form className="needs-validation">
                    <div className="form-outline mb-5">
                        <input type="email" id="email" name="email" onChange={this.handleChange} className={`form-control  ${this.state.validEmail.valid ? "is-valid" : "is-invalid"}`} placeholder="Почта" />
                        <div className="invalid-feedback">
                            {this.state.validEmail.message[0]}
                        </div>
                    </div>

                    <div className="form-outline mb-5">
                        <input type="password" id="password" name="password" onChange={this.handleChange} className={`form-control  ${this.state.validPassword.valid ? "is-valid" : "is-invalid"}`} placeholder="Пароль" />
                        <div className="invalid-feedback">
                            {this.state.validPassword.message[0]}
                        </div>
                    </div>

                    <button type="button" onClick={this.logining} className="btn btn-outline-primary col-12 mb-4">Войти</button>

                    <div className="text-center">
                        <p><Link className="btn btn-outline-dark col-7 " to={"/authorization/registration"}>Зарегистрироваться</Link></p>
                        <p><Link className="btn btn-outline-success col-7 btn-sm" to={"/authorization/forgotpassword"}>Забыл пароль</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}
