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
        this.setState({ id:id.data, redirect: true });
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
                    <div className="card-header bg-transparent border-dark"><h3>Создание склада</h3></div>
                    <div className="card-body text-dark">
                        <label className="form-label">Номер склада</label>
                        <input className="form-control" type="text" value={number} name="number" onChange={this.handleChange} placeholder="Номер склада" />
                        <br />
                        <h3>Адрес</h3>
                        <br />
                        <label className="form-label">Страна</label>
                        <input className="form-control" type="text" value={country} name="country" onChange={this.handleChange} placeholder="Страна" />
                        <label className="form-label">Город</label>
                        <input className="form-control" type="text" value={city} name="city" onChange={this.handleChange} placeholder="Город" />
                        <label className="form-label">Здание (локальный адрес)</label>
                        <input className="form-control" type="text" value={building} name="building" onChange={this.handleChange} placeholder="Здание" />
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