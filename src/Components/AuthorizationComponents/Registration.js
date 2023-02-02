import React, { Component } from 'react';
import AuthorizationsServices from '../../Axios/AuthorizationsServices';
import { Link, Navigate } from "react-router-dom";
import { RegistrationSchema } from '../../ValidationSchema/Authorization/Registration';

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.authorization = new AuthorizationsServices();

        this.state = {
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            loginOn: false,

            validEmail: {
                valid: false,
                message: []
            },
            validUserName: {
                valid: false,
                message: []
            },
            validPassword: {
                valid: false,
                message: []
            },
            validConfirmPassword: {
                valid: false,
                message: []
            }
        }

        this.registering = this.registering.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async registering() {
        const data = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }
        let result = await this.authorization.Register(data);
        if (typeof (result.data) !== "undefined") {
            await alert(result.data)
            this.setState({ loginOn: true })
        }
        else {
            await alert("Ошибка!")
        }
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        })

        this.validUserName()
        this.validEmail()
        this.validPassword()
        this.validConfirmPassword()
    }

    async validPassword() {
        try {
            await RegistrationSchema.fields.password.validate(this.state.password, { abortEarly: true })
            await this.setState({
                validPassword: { valid: true, message: [] },
            })
            document.getElementById("password").classList.add("is-valid")
            document.getElementById("password").classList.remove("is-invalid")
        }
        catch (error) {
            await this.setState({
                validPassword: { valid: false, message: error.errors },
            })
            document.getElementById("password").classList.add("is-invalid")
            document.getElementById("password").classList.remove("is-valid")
        }
    }

    async validEmail() {
        try {
            await RegistrationSchema.fields.email.validate(this.state.email, { abortEarly: true })
            await this.setState({
                validEmail: { valid: true, message: [] },
            })
            document.getElementById("email").classList.add("is-valid")
            document.getElementById("email").classList.remove("is-invalid")
        }
        catch (error) {
            await this.setState({
                validEmail: { valid: false, message: error.errors },
            })
            document.getElementById("email").classList.add("is-invalid")
            document.getElementById("email").classList.remove("is-valid")
        }
    }

    async validConfirmPassword() {
        try {
            await RegistrationSchema.fields.confirmPassword.validate(this.state.confirmPassword, { abortEarly: true })
            await this.setState({
                validConfirmPassword: { valid: true, message: [] },
            })
            document.getElementById("confirmPassword").classList.add("is-valid")
            document.getElementById("confirmPassword").classList.remove("is-invalid")
        }
        catch (error) {
            await this.setState({
                validConfirmPassword: { valid: false, message: error.errors },
            })
            console.log(error.errors)
            document.getElementById("confirmPassword").classList.add("is-invalid")
            document.getElementById("confirmPassword").classList.remove("is-valid")
        }
    }

    async validUserName() {
        try {
            await RegistrationSchema.fields.userName.validate(this.state.userName, { abortEarly: true })
            await this.setState({
                validUserName: { valid: true, message: [] },
            })
            document.getElementById("userName").classList.add("is-valid")
            document.getElementById("userName").classList.remove("is-invalid")
        }
        catch (error) {
            await this.setState({
                validUserName: { valid: false, message: error.errors },
            })
            document.getElementById("userName").classList.add("is-invalid")
            document.getElementById("userName").classList.remove("is-valid")
        }
    }

    render() {
        if (this.state.loginOn)
            return (
                <Navigate to={"/authorization/login"} />
            )
        return (
            <div className="centerContentBox col-4">
                <form>
                    <div className="form-outline mb-5">
                        <input type="text" id="userName" name="userName" onChange={this.handleChange} className="form-control" placeholder="Имя пользователя" />
                        <div className="invalid-feedback">
                            {this.state.validUserName.message[0]}
                        </div>
                    </div>

                    <div className="form-outline mb-5">
                        <input type="email" id="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Почта" />
                        <div className="invalid-feedback">
                            {this.state.validEmail.message[0]}
                        </div>
                    </div>

                    <div className="form-outline mb-5">
                        <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Пароль" />
                        <div className="invalid-feedback">
                            {this.state.validPassword.message[0]}
                        </div>
                    </div>

                    <div className="form-outline mb-5">
                        <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.handleChange} className="form-control" placeholder="Подтвердите пароль" />
                        <div className="invalid-feedback">
                            {this.state.validConfirmPassword.message[0]}
                        </div>
                    </div>

                    <button type="button" onClick={this.registering} className="btn btn-outline-dark col-12 mb-4">Подтвердить</button>
                    <div className="text-center">
                        <p><Link className="btn btn-outline-primary col-7 " to={"/authorization/login"}>Войти</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

