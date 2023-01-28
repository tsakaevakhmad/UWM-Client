import React, { Component } from 'react'
import AuthorizationsServices from '../../Axios/AuthorizationsServices'

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.authorization = new AuthorizationsServices();

        this.state = {
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""
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
    }

    render() {
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
                        <p><button className="btn btn-outline-dark col-8" onClick={() => this.props.updateData(true)}>Войти</button></p>
                    </div>
                </form>
            </div>
        )
    }
}

