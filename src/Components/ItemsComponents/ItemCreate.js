import ItemServices from '../../Axios/ItemServices';
import ProviderServices from '../../Axios/ProviderServices';
import WarehouseServices from '../../Axios/WarehouseServices';
import SubCategoryServices from '../../Axios/SubcategoryServices';
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

import {
    Link,
} from "react-router-dom";


export default class ItemCreate extends Component {

    constructor(props) {
        super(props);

        this.itemServices = new ItemServices();
        this.providerServices = new ProviderServices();
        this.warehouseServices = new WarehouseServices();
        this.subCategoryServices = new SubCategoryServices();
        this.state = {
            id: 0,
            manufacturer: "",
            price: 0,
            providerId: 0,
            quantity: 0,
            specifications: "",
            subCategoryId: 0,
            title: "",
            unit: "",
            redirect: false,
            warehouseId: 0,
            subCategory: [],
            provider: [],
            wahehouse: [],
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeProviderId = this.handleChangeProviderId.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeSpecifications = this.handleChangeSpecifications.bind(this);
        this.handleChangeUnit = this.handleChangeUnit.bind(this);
        this.handleChangeWarehouseId = this.handleChangeWarehouseId.bind(this);
        this.handleChangeSubCategoryId = this.handleChangeSubCategoryId.bind(this);
        this.Create = this.Create.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleChangeManufacturer(e) {
        this.setState({
            manufacturer: e.target.value
        });
    }

    handleChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    handleChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    handleChangeSpecifications(e) {
        this.setState({
            specifications: e.target.value
        });
    }

    handleChangeUnit(e) {
        this.setState({
            unit: e.target.value
        });
    }

    handleChangeWarehouseId(e) {
        this.setState({
            warehouseId: e.target.value
        });
    }

    handleChangeProviderId(e) {
        this.setState({
            providerId: e.target.value
        });
    }

    handleChangeSubCategoryId(e) {
        this.setState({
            subCategoryId: e.target.value
        });
    }

    async Create() {
        const item = {
            title: this.state.title,
            specifications: this.state.specifications,
            manufacturer: this.state.manufacturer,
            quantity: this.state.quantity,
            price: this.state.price,
            unit: this.state.unit,
            providerId: this.state.providerId,
            warehouseId: this.state.warehouseId,
            subCategoryId: this.state.subCategoryId,
        }
        let id = await this.itemServices.createItem(item);
        this.setState({ id: id.data, redirect: true });
    }


    async componentDidMount() {
        this.setState({
            subCategory: await this.subCategoryServices.getSubCategory(),
            provider: await this.providerServices.getProvider(),
            wahehouse: await this.warehouseServices.getWarehouse(),
        })
    }

    render() {
        const { id } = this.state;

        if (this.state.redirect) {
            return <Navigate to={`/Itemdetail/${id}`} />
        }

        return (
            <div >
                <br /><br />
                <div className="mx-auto col-md-11 card border-dark" >
                    <div className="card-header bg-transparent border-dark"><h3>Новый предмет</h3></div>
                    <div className="card-body text-dark">
                        <label className="form-label">Название</label>
                        <input className="form-control" type="text" name="title" onChange={this.handleChangeTitle} placeholder="Название" />
                        <label className="form-label">Производитель</label>
                        <input className="form-control" type="text" name="manufacturer" onChange={this.handleChangeManufacturer} placeholder="Производитель" />
                        <label className="form-label">Цена</label>
                        <input className="form-control" type="number" name="price" onChange={this.handleChangePrice} placeholder="Цена" />
                        <label className="form-label">Количество / единица измерения</label>
                        <div className="input-group ">
                            <input className="form-control col-6" type="number" name="quantity" onChange={this.handleChangeQuantity} placeholder="Количество" />
                            <input className="form-control col-6" type="text" name="unit" onChange={this.handleChangeUnit} placeholder="Единица" />
                        </div>
                        <label className="form-label">Поставщик</label>
                        <select className="form-select" defaultValue={'Default'} name="providerId" onChange={this.handleChangeProviderId}>
                            <option value="Default" disabled>Пусто</option>
                            {this.state.provider.map(p =>
                                <option key={p.id} value={p.id}>{p.name}</option>
                            )}
                        </select>
                        <label className="form-label">Категория</label>
                        <select className="form-select" defaultValue={'Default'} onChange={this.handleChangeSubCategoryId}>
                            <option value="Default" disabled>Пусто</option>
                            {this.state.subCategory.map(sc =>
                                <option key={sc.id} value={sc.id}>{sc.name}</option>
                            )}
                        </select>
                        <label className="form-label">Склад</label>
                        <select className="form-select" defaultValue={'Default'} name="warehouseId" onChange={this.handleChangeWarehouseId}>
                            <option value="Default" disabled>Пусто</option>
                            {this.state.wahehouse.map(w =>
                                <option key={w.id} value={w.id}>{w.number}</option>
                            )}
                        </select>
                        <label className="form-label">Описание товара</label>
                        <textarea className="form-control" name="specifications" onChange={this.handleChangeSpecifications} rows="3"></textarea>
                    </div>
                    <div className="card-footer border-dark bg-transparent">
                        <div className="row" >
                            <div className="col-8 d-grid gap-2 d-md-flex">
                                <Link className="btn btn-outline-dark fw-bolder" to="/">Отмена</Link>
                                <button type="button" onClick={this.Create} className="btn btn-outline-success fw-bolder">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}