import React, { Component } from 'react'
import AuthorizationsServices from '../../Axios/AuthorizationsServices'

export default class Authorization extends Component {

    constructor(props) {
        super(props)
        this.authorization = new AuthorizationsServices();

        this.state = {
            userName: "",
            email: "",
            password: "",
            passwordconfirmed: ""
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
        if (result)
            window.location.href = '/';
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="centerContentBox col-4">
                <form>
                    <div className="form-outline mb-4">
                        <input type="email" id="form1" name="email" onChange={this.handleChange} className="form-control" />
                        <label className="form-label" htmlFor="form1">Почта</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" name="password" onChange={this.handleChange} id="form2" className="form-control" />
                        <label className="form-label" htmlFor="form2">Пароль</label>
                    </div>

                    <button type="button" onClick={this.logining} className="btn btn-outline-primary col-12 mb-4">Войти</button>

                    <div className="text-center">
                        <p><a href="#!">Зарегистрироваться</a></p>
                        <p><a href="#!">Забыл пароль</a></p>
                    </div>
                </form>
            </div>
        )
    }
}
