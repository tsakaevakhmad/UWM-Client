import React, { Component } from 'react'
import AuthorizationsServices from '../../Axios/AuthorizationsServices'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.authorization = new AuthorizationsServices();

        this.state = {
            email: "",
            password: "",
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
    }

    render() {
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
                        <p><button className="btn btn-outline-dark col-7 " onClick={() => this.props.updateData(false)}>Зарегистрироваться</button></p>
                        <p><button className="btn btn-outline-success col-7 btn-sm">Забыл пароль</button></p>
                    </div>
                </form>
            </div>
        )
    }
}
