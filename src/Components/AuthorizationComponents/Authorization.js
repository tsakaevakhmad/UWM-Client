import React, { Component } from 'react'
import AuthorizationsServices from '../../Axios/AuthorizationsServices'

export default class Authorization extends Component {

    constructor(props) {
        super(props)
        this.authorization = new AuthorizationsServices();

        this.state = {
            loginOn: true,
            responseMessage: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

        this.logining = this.logining.bind(this);
        this.registering = this.registering.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async logining() {
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        let result = await this.authorization.login(data);
        await this.setState({ responseMessage: result.data })

        if (typeof (result.data.token) !== "undefined") {
            window.location.href = '/';
        }
        else {
            await alert(result.data)
        }
    }

    async registering() {
        const data = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }
        let result = await this.authorization.Register(data);
        await this.setState({ responseMessage: result.data })
        await alert(result.data)
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });
    }

    render() {
        if (this.state.loginOn)
            return (
                <div className="centerContentBox col-4">
                    <form>
                        <div className="form-outline mb-4">
                            <input type="email" id="form7" name="email" onChange={this.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="form7">Почта</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" name="password" onChange={this.handleChange} id="form8" className="form-control" />
                            <label className="form-label" htmlFor="form8">Пароль</label>
                        </div>

                        <button type="button" onClick={this.logining} className="btn btn-outline-primary col-12 mb-4">Войти</button>

                        <div className="text-center">
                            <p><button className="btn btn-outline-dark col-7 " onClick={async () => await this.setState({ loginOn: false })}>Зарегистрироваться</button></p>
                            <p><button className="btn btn-outline-success col-7 btn-sm">Забыл пароль</button></p>
                        </div>
                    </form>
                </div>
            )
        else
            return (
                <div className="centerContentBox col-4">
                    <form>
                        <div className="form-outline mb-4">
                            <input type="text" id="form1" name="userName" onChange={this.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="form1">Имя пользователя</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="email" id="form2" name="email" onChange={this.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="form2">Почта</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form3" name="password" onChange={this.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="form3">Пароль</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form4" name="confirmPassword" onChange={this.handleChange} className="form-control" />
                            <label className="form-label" htmlFor="form4">Подтвердите пароль</label>
                        </div>

                        <button type="button" onClick={this.registering} className="btn btn-outline-primary col-12 mb-4">Подтвердить</button>
                        <div className="text-center">
                            <p><button className="btn btn-outline-dark col-8" onClick={async () => await this.setState({ loginOn: true })}>Войти</button></p>
                        </div>
                    </form>
                </div>
            )
    }
}
