import React, { Component } from 'react'
import AuthorizationsServices from '../../Axios/AuthorizationsServices';
import { useParams, Navigate, useSearchParams } from 'react-router-dom'

export default function ResetPassword(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get("code").replace(/\s/g, "+");

    return(
        <Reset code={code}/>
    )
}

class Reset extends Component{
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            confirmed: false,
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
    }

    async resetPassword() {
        const data = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            code: this.props.code
        }
        const status = (await this.authorizationsServices.resetPassword(data)).status
        
        if(status === 200)
            await this.setState({confirmed: true});
    }

    render() {
        if (this.state.confirmed)
            return (
                <Navigate to={"/authorization/login"} />
            )
        return (
            <div className="centerContentBox col-4">
                <form>
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

                    <button type="button" className="btn btn-outline-success col-12 mb-4" onClick={this.resetPassword}>Сбросить</button>
                </form>
            </div>
        )
    }
}
