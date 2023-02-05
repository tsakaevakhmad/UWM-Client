import React, { Component } from 'react'
import AuthorizationsServices from '../../Axios/AuthorizationsServices';
import { Navigate, useSearchParams } from 'react-router-dom'
import * as validation from "../../ValidationSchema/Authorization/ResetpasswordValidation"

export default function ResetPassword(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get("code").replace(/\s/g, "+");

    return (
        <Reset code={code} />
    )
}

class Reset extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            confirmed: false,
            validForm: false,
            validEmail: {
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
        this.authorizationsServices = new AuthorizationsServices();
        this.handleChange = this.handleChange.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });

        const data = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }

        await this.setState({
            validPassword: await validation.password(data),
            validConfirmPassword: await validation.confirmPassword(data),
            validEmail: await validation.email(data),
            validForm: await validation.form(data),
        })
    }

    async resetPassword() {
        const data = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            code: this.props.code
        }
        const status = (await this.authorizationsServices.resetPassword(data)).status

        if (status === 200)
            await this.setState({ confirmed: true });
    }

    render() {
        if (this.state.confirmed)
            return (
                <Navigate to={"/authorization/login"} />
            )
        return (
            <div className="centerContentBox col-4">
                <form>

                    <div className="form-outline mb-5">
                        <div class="form-floating">
                            <input type="email" id="email" name="email" onChange={this.handleChange} className={`form-control ${this.state.validEmail.valid ? "is-valid" : "is-invalid"}`} placeholder="Почта" />
                            <label for="email">Почта</label>
                            <div className="invalid-feedback">
                                {this.state.validEmail.message[0]}
                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-5">
                        <div class="form-floating">
                            <input type="password" id="password" name="password" onChange={this.handleChange} className={`form-control  ${this.state.validPassword.valid ? "is-valid" : "is-invalid"}`} placeholder="Пароль" />
                            <label for="password">Пароль</label>
                            <div className="invalid-feedback">
                                {this.state.validPassword.message[0]}
                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-5">
                        <div class="form-floating">
                            <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.handleChange} className={`form-control  ${this.state.validConfirmPassword.valid ? "is-valid" : "is-invalid"}`} placeholder="Подтвердите пароль" />
                            <label for="confirmPassword">Подтвердите пароль</label>
                            <div className="invalid-feedback">
                                {this.state.validConfirmPassword.message[0]}
                            </div>
                        </div>
                    </div>

                    <button type="button" className={`btn btn-outline-success col-12 mb-4 ${this.state.validForm ? "" : "disabled"}`} onClick={this.resetPassword}>Сбросить</button>
                </form>
            </div>
        )
    }
}
