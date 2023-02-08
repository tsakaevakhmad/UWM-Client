import WarehouseServices from '../../Axios/WarehouseServices';
import * as valid from "../../ValidationSchema/Warehouse/WaregouseValidation";
import React, { Component } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import {
    Link,
} from "react-router-dom";

export default function WarehouseEdit(props) {

    let { id } = useParams();

    return (
        <div>
            <Warehouse id={id} />
        </div>
    );
}

class Warehouse extends Component {

    constructor(props) {
        super(props);

        this.warehouseServices = new WarehouseServices();

        this.state = {
            id: 0,
            addressId: 0,
            number: "",
            country: "",
            edit: false,
            city: "",
            building: "",
            warehouse: {},

            validNumber: {
                valid: false,
                message: []
            },
            validCountry: {
                valid: false,
                message: []
            },
            validCity: {
                valid: false,
                message: []
            },
            validBuilding: {
                valid: false,
                message: []
            },
            formValid: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.Update = this.Update.bind(this);
        this.Delete = this.Delete.bind(this);
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });
        await this.validator()
    }

    async validator() {
        const data = {
            number: this.state.number,
            country: this.state.country,
            city: this.state.city,
            building: this.state.building,
        }

        await this.setState({
            validNumber: await valid.number(data),
            validCountry: await valid.country(data),
            validCity: await valid.city(data),
            validBuilding: await valid.building(data),
            formValid: await valid.form(data)
        })
    }

    async Update() {
        const warehouse = {
            id: this.state.id,
            addressId: this.state.addressId,
            number: this.state.number,
            country: this.state.country,
            city: this.state.city,
            building: this.state.building,
        }
        if (this.state.formValid) {
            await this.componentDidMount();
            await this.warehouseServices.updateWarehouse(this.props.id, warehouse);
            await this.setState({ edit: false });
        }
    }

    async Delete() {
        await this.warehouseServices.deleteWarehouse(this.state.id);
        this.setState({ redirectToList: true });
    }

    async componentDidMount() {
        const w = await this.warehouseServices.getWarehouseById(this.props.id)
        await this.setState({
            warehouse: w,
            id: w.id,
            number: w.number,
            addressId: w.addressDto.id,
            country: w.addressDto.country,
            city: w.addressDto.city,
            building: w.addressDto.building,
        })
        await this.validator()
    }

    render() {
        const { warehouse, number, country, city, building } = this.state;
        if (this.state.redirectToList) {
            return <Navigate to={"/"} />
        }

        if (typeof (warehouse.addressDto) !== 'undefined')
            if (this.state.edit) {
                return (
                    <div >
                        <br /><br />
                        <div className="shadow mb-4 mx-auto col-md-11 card" >
                            <div className="card-header bg-transparent border-dark"><h3>{this.state.number}</h3></div>
                            <div className="card-body text-dark">

                                <div className="form-floating">
                                    <input className={`form-control ${this.state.validNumber.valid ? "is-valid" : "is-invalid"}`} type="text" value={number} id="number" name="number" onChange={this.handleChange} placeholder="Номер склада" />
                                    <label className="form-label" htmlFor="number">Номер склада</label>
                                    <div className="invalid-feedback">
                                        {this.state.validNumber.message[0]}
                                    </div>
                                </div>

                                <br />
                                <h3>Адрес</h3>
                                <br />

                                <div className="form-floating mb-4">
                                    <input className={`form-control ${this.state.validCountry.valid ? "is-valid" : "is-invalid"}`} type="text" value={country} id="country" name="country" onChange={this.handleChange} placeholder="Страна" />
                                    <label className="form-label" htmlFor="country">Страна</label>
                                    <div className="invalid-feedback">
                                        {this.state.validCountry.message[0]}
                                    </div>
                                </div>

                                <div className="form-floating mb-4">
                                    <input className={`form-control ${this.state.validCity.valid ? "is-valid" : "is-invalid"}`} type="text" value={city} id="city" name="city" onChange={this.handleChange} placeholder="Город" />
                                    <label className="form-label" htmlFor="city">Город</label>
                                    <div className="invalid-feedback">
                                        {this.state.validCity.message[0]}
                                    </div>
                                </div>

                                <div className="form-floating mb-4">
                                    <input className={`form-control ${this.state.validBuilding.valid ? "is-valid" : "is-invalid"}`} type="text" value={building} id="building" name="building" onChange={this.handleChange} placeholder="Локальный адрес" />
                                    <label className="form-label" htmlFor="building">Локальный адрес</label>
                                    <div className="invalid-feedback">
                                        {this.state.validBuilding.message[0]}
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer border-dark bg-transparent">
                                <div className="row" >
                                    <div className="col-8 d-grid gap-2 d-md-flex">
                                        <button type="button" onClick={() => { this.setState({ edit: false }) }} className="btn btn-outline-dark fw-bolder">Отмена</button>
                                        <button type="button" onClick={this.Update} className={`btn btn-outline-success fw-bolder ${this.state.formValid ? "" : "disabled"}`}>Сохранить</button>
                                    </div>
                                    <div className="col-4 d-grid gap-2 d-md-flex justify-content-end">
                                        <button type="button" onClick={this.Delete} className="btn btn-outline-danger fw-bolder">Удалить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div >
                        <br /><br />
                        <div className="shadow mb-4 mx-auto col-md-11 card" >
                            <div className="card-header bg-transparent border-dark"><h3>{warehouse.number}</h3></div>
                            <div className="card-body text-dark">
                                <table className="table table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Номер</th>
                                            <th>{warehouse.number}</th>
                                        </tr>
                                        <tr>
                                            <th>Страна</th>
                                            <th>{warehouse.addressDto.country}</th>
                                        </tr>
                                        <tr>
                                            <th>Город</th>
                                            <th>{warehouse.addressDto.city}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <h4>Локальный адрес</h4>
                                <br />
                                <div className="col-6">
                                    <table className="table table-hover">
                                        <tbody>
                                            {warehouse.addressDto.building.split(";").map((x, i) =>
                                                <tr key={i}>
                                                    {x.split(":").map((e, i) =>
                                                        <th key={i}>{e}</th>)}
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer border-dark bg-transparent">
                                <div className="row" >
                                    <div className="col-8 d-grid gap-2 d-md-flex">
                                        <Link className="btn btn-outline-dark fw-bolder" to={`/`}>Назад</Link>
                                        <button type="button" onClick={() => { this.setState({ edit: true }) }} className="btn btn-outline-warning fw-bolder">Редактировать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
        return (
            <div>
                <br /><br />
                <br />
                <div className="text-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            </div>
        )

    }
}