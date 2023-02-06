import WarehouseServices from '../../Axios/WarehouseServices';
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

import {
    Link,
} from "react-router-dom";

export default class WarehouseCreate extends Component {

    constructor(props) {
        super(props);

        this.warehouseServices = new WarehouseServices();

        this.state = {
            id: 0,
            number: "",
            country: "",
            city: "",
            building: "",
            redirect: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.Create = this.Create.bind(this);
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });
    }

    async Create() {
        const warehouse = {
            number: this.state.number,
            country: this.state.country,
            city: this.state.city,
            building: this.state.building,
        }

        let id = await this.warehouseServices.createWarehouse(warehouse);
        this.setState({ id: id.data, redirect: true });
    }

    render() {
        const { redirect, number, country, city, building, id } = this.state;

        if (redirect) {
            return <Navigate to={`/WarehouseEdit/${id}`} />
        }
        return (
            <div >
                <br /><br />
                <div className="mx-auto col-md-11 card border-dark" >
                    <div className="card-header bg-transparent border-dark"><h3>Добавление склада</h3></div>
                    <div className="card-body text-dark">

                        <div className="form-floating">
                        <input className="form-control" type="text" id="number" name="number" onChange={this.handleChange} placeholder="Номер склада" />
                            <label className="form-label" htmlFor="number">Номер склада</label>
                            <div className="invalid-feedback">
                                {/* {this.state.validConfirmPassword.message[0]} */}
                            </div>
                        </div>

                        <br />
                        <h3>Адрес</h3>
                        <br />

                        <div className="form-floating">
                        <input className="form-control mb-4" type="text" id="country" name="country" onChange={this.handleChange} placeholder="Страна" />
                            <label className="form-label" htmlFor="country">Страна</label>
                            <div className="invalid-feedback">
                                {/* {this.state.validConfirmPassword.message[0]} */}
                            </div>
                        </div>

                        <div className="form-floating">
                        <input className="form-control mb-4" type="text" id="city" name="city" onChange={this.handleChange} placeholder="Город" />
                            <label className="form-label" htmlFor="city">Город</label>
                            <div className="invalid-feedback">
                                {/* {this.state.validConfirmPassword.message[0]} */}
                            </div>
                        </div>

                        <div className="form-floating">
                        <input className="form-control mb-4" type="text" id="building" name="building" onChange={this.handleChange} placeholder="Локальный адрес" />
                            <label className="form-label" htmlFor="building">Локальный адрес</label>
                            <div className="invalid-feedback">
                                {/* {this.state.validConfirmPassword.message[0]} */}
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