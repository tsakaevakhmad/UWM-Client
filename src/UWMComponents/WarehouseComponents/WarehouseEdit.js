import WarehouseServices from '../../Axios/WarehouseServices';
import React, { Component } from 'react'
import { useParams, Navigate } from 'react-router-dom'

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
            city: "",
            building: "",
        }

        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeBuilding = this.handleChangeBuilding.bind(this);
        this.Update = this.Update.bind(this);
        this.Delete = this.Delete.bind(this);
    }

    handleChangeNumber(e) {
        this.setState({
            number: e.target.value
        });
    }

    handleChangeCountry(e) {
        this.setState({
            country: e.target.value
        });
    }

    handleChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    handleChangeBuilding(e) {
        this.setState({
            building: e.target.value
        });
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

        await this.warehouseServices.updateWarehouse(this.props.id, warehouse);
        this.setState({ redirectToList: true });
    }

    async Delete() {
        await this.warehouseServices.deleteWarehouse(this.state.id);
        this.setState({ redirectToList: true });
    }

    async componentDidMount() {
        let w = {};
        w = await this.warehouseServices.getWarehouseById(this.props.id)
        this.setState({
            id: w.id,
            number: w.number,
            addressId: w.addressDto.id,
            country: w.addressDto.country,
            city: w.addressDto.city,
            building: w.addressDto.building,
        })
    }

    render() {
        const { number, country, city, building } = this.state;

        if (this.state.redirectToList) {
            return <Navigate to={"/"} />
        }
        return (
            <div >
                <br /><br />
                <div className="mx-auto col-md-11 card border-dark" >
                    <div className="card-header bg-transparent border-dark"><h3>{this.state.number}</h3></div>
                    <div className="card-body text-dark">
                        <label className="form-label">Номер склада</label>
                        <input className="form-control" type="text" value={number} name="number" onChange={this.handleChangeNumber} placeholder="Номер склада" />
                        <br/>
                        <h3>Адрес</h3>
                        <br/>
                        <label className="form-label">Страна</label>
                        <input className="form-control" type="text" value={country} name="country" onChange={this.handleChangeCountry} placeholder="Страна" />
                        <label className="form-label">Город</label>
                        <input className="form-control" type="text" value={city} name="city" onChange={this.handleChangeCity} placeholder="Город" />
                        <label className="form-label">Здание (локальный адрес)</label>
                        <input className="form-control" type="text" value={building} name="building" onChange={this.handleChangeBuilding} placeholder="Здание" />
                    </div>
                    <div className="card-footer border-dark bg-transparent">
                        <div className="row" >
                            <div className="col-8 d-grid gap-2 d-md-flex">
                                <Link to={`/WarehouseList`}><button type="button" className="btn btn-outline-dark fw-bolder">Отмена</button></Link>
                                <button type="button" onClick={this.Update} className="btn btn-outline-success fw-bolder">Сохранить</button>
                            </div>
                            <div className="col-4 d-grid gap-2 d-md-flex justify-content-end">
                                <button type="button" onClick={this.Delete} className="btn btn-outline-danger fw-bolder">Удалить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}