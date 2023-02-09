import ProviderServices from '../../Axios/ProviderServices';
import * as valid from "../../ValidationSchema/Provider/ProviderValidation"
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

import {
    Link,
} from "react-router-dom";

export default class ProviderCreate extends Component {

    constructor(props) {
        super(props);

        this.providerServices = new ProviderServices();

        this.state = {
            name: "",
            redirectToList: false,
            
            validName: {
                valid: false,
                message: []
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.Create = this.Create.bind(this);
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });

        await this.validator();
    }

    async validator() {
        const data = {
            name: this.state.name,
        }

        await this.setState({
            validName: await valid.name(data),
        })
    }

    async Create() {
        const provider = {
            name: this.state.name,
        }

        let id = await this.providerServices.createProvider(provider);
        this.setState({ id: id.data, redirectToList: true });
    }

    render() {
        const { id } = this.state;

        if (this.state.redirectToList) {
            return <Navigate to={`/ProviderEdit/${id}`} />
        }
        return (
            <div >
                <br /><br />
                <div className="mx-auto col-md-11 card shadow mb-4" >
                    <div className="card-header bg-transparent border-dark"><h3>Добавление поставщика</h3></div>
                    <div className="card-body text-dark">

                        <div className="form-floating">
                            <input className={`form-control ${this.state.validName.valid ? "is-valid" : "is-invalid"}`}  type="text" name="name" onChange={this.handleChange} placeholder="Имя поставщика" />
                            <label className="form-label" htmlFor="manufacturer">Поставщик</label>
                            <div className="invalid-feedback">
                                {this.state.validName.message[0]}
                            </div>
                        </div>

                    </div>
                    <div className="card-footer border-dark bg-transparent">
                        <div className="row" >
                            <div className="col-8 d-grid gap-2 d-md-flex">
                                <Link className="btn btn-outline-dark fw-bolder" to={`/`}>Отмена</Link>
                                <button type="button" onClick={this.Create} className="btn btn-outline-success fw-bolder">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}