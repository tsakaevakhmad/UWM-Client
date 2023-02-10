import React, { Component } from 'react'
import AuthorizationsServices from '../../Axios/AuthorizationsServices'
import { Link } from "react-router-dom";
import * as validation from "../../ValidationSchema/Authorization/LoginValidation"

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.authorization = new AuthorizationsServices();

        this.state = {
            email: "",
            password: "",
            errorMessage: "",
            validForm: false,
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
        if (this.state.validForm) {
            try {
                let result = await this.authorization.login(data);
                if (typeof (result.data.token) !== "undefined")
                    window.location.href = '/';
                else
                    await alert("Убедитесь что подтвердили ваш аккаунт через почту")
            }
            catch (error) {
                if (error.response.status === 404)
                    await this.setState({
                        errorMessage: "Почта или пароль введены не правильно"
                    })
            }
        }
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });

        const data = {
            email: this.state.email,
            password: this.state.password
        }
        await this.setState({
            validEmail: await validation.email(data),
            validPassword: await validation.password(data),
            validForm: await validation.form(data)
        })
    }

    render() {
        return (
            <div>
                <form className="needs-validation">
                    <div className="form-outline mb-5">
                        <div className="form-floating">
                            <input type="email" id="email" name="email" onChange={this.handleChange} className={`form-control  ${this.state.validEmail.valid ? "is-valid" : "is-invalid"}`} placeholder="Почта" />
                            <label htmlFor="email">Почта</label>
                            <div className="invalid-feedback">
                                {this.state.validEmail.message[0]}
                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-5">
                        <div className="form-floating">
                            <input type="password" id="password" name="password" onChange={this.handleChange} className={`form-control  ${this.state.validPassword.valid ? "is-valid" : "is-invalid"}`} placeholder="Пароль" />
                            <label htmlFor="password">Пароль</label>
                            <div className="invalid-feedback">
                                {this.state.validPassword.message[0]}
                            </div>
                        </div>
                        <div className="invalid text-danger">
                            <hr />
                            {this.state.errorMessage}
                        </div>
                    </div>

                    <button type="button" onClick={this.logining} className={`btn btn-outline-primary col-12 mb-4 ${this.state.validForm ? "" : "disabled"}`}>Войти</button>

                    <div className="text-center">
                        <p><Link className="btn btn-outline-dark col-lg-7" to={"/authorization/registration"}>Зарегистрироваться</Link></p>
                        <p><Link className="btn btn-outline-success col-7 btn-sm" to={"/authorization/forgotpassword"}>Забыл пароль</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}
