import ItemServices from '../../Axios/ItemServices';
import ProviderServices from '../../Axios/ProviderServices';
import WarehouseServices from '../../Axios/WarehouseServices';
import SubCategoryServices from '../../Axios/SubcategoryServices';
import React, { Component } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import {
    Link,
} from "react-router-dom";

export default function ItemEdit(props) {

    let { id } = useParams();

    return (
        <div>
            <Item itemId={id} />
        </div>
    );
}


class Item extends Component {

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
            edit: false,
            redirect: false,
            redirectToList: false,
            warehouseId: 0,
            subCategory: [],
            provider: [],
            wahehouse: [],
            item: {}
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
        this.Update = this.Update.bind(this);
        this.Delete = this.Delete.bind(this);
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

    async Update() {
        const item = {
            id: this.state.id,
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
        await this.itemServices.updateItem(this.props.itemId, item);
        await this.componentDidMount();
        this.setState({ edit: false });
    }

    async Delete() {
        await this.itemServices.deleteItem(this.state.id);
        this.setState({ redirectToList: true });
    }

    async componentDidMount() {
        let item = {};
        item = await this.itemServices.getItem(this.props.itemId)
        this.setState({
            item: item,
            id: item.id,
            title: item.title,
            manufacturer: item.manufacturer,
            price: item.price,
            providerId: item.providerId,
            providerId: item.providerName,
            quantity: item.quantity,
            specifications: item.specifications,
            subCategoryId: item.subCategoryId,
            unit: item.unit,
            warehouseId: item.warehouseId,
            subCategory: await this.subCategoryServices.getSubCategory(),
            provider: await this.providerServices.getProvider(),
            wahehouse: await this.warehouseServices.getWarehouse(),
        })
    }

    render() {
        const { edit, item, manufacturer, price, providerId, quantity, specifications, subCategoryId, title, unit, warehouseId } = this.state;

        if (this.state.redirectToList) {
            return <Navigate to={"/"} />
        }

        if (edit) {
            return (
                <div >
                    <br /><br />
                    <div className="mx-auto col-md-11 card border-dark" >
                        <div className="card-header bg-transparent border-dark"><h3>{this.state.title}</h3></div>
                        <div className="card-body text-dark">
                            <label className="form-label">Название</label>
                            <input className="form-control" type="text" value={title} name="title" onChange={this.handleChangeTitle} placeholder="Название" />
                            <label className="form-label">Производитель</label>
                            <input className="form-control" type="text" value={manufacturer} name="manufacturer" onChange={this.handleChangeManufacturer} placeholder="Производитель" />
                            <label className="form-label">Цена</label>
                            <input className="form-control" type="number" value={price} name="price" onChange={this.handleChangePrice} placeholder="Цена" />
                            <label className="form-label">Количество / единица измерения</label>
                            <div className="input-group ">
                                <input className="form-control col-6" type="number" value={quantity} name="quantity" onChange={this.handleChangeQuantity} placeholder="Количество" />
                                <input className="form-control col-6" type="text" value={unit} name="unit" onChange={this.handleChangeUnit} placeholder="Единица" />
                            </div>
                            <label className="form-label">Поставщик</label>
                            <select className="form-select" name="providerId" value={providerId} onChange={this.handleChangeProviderId}>
                                {this.state.provider.map(p =>
                                    <option key={p.id} value={p.id}>{p.name}</option>
                                )}
                            </select>
                            <label className="form-label">Категория</label>
                            <select className="form-select" value={subCategoryId} onChange={this.handleChangeSubCategoryId}>
                                {this.state.subCategory.map(sc =>
                                    <option key={sc.id} value={sc.id}>{sc.name}</option>
                                )}
                            </select>
                            <label className="form-label">Склад</label>
                            <select className="form-select" name="warehouseId" value={warehouseId} onChange={this.handleChangeWarehouseId}>
                                {this.state.wahehouse.map(w =>
                                    <option key={w.id} value={w.id}>{w.number}</option>
                                )}
                            </select>
                            <label className="form-label">Описание товара</label>
                            <textarea className="form-control" name="specifications" value={specifications} onChange={this.handleChangeSpecifications} rows="3"></textarea>
                        </div>
                        <div className="card-footer border-dark bg-transparent">
                            <div className="row" >
                                <div className="col-8 d-grid gap-2 d-md-flex">
                                    <button type="button" onClick={() => this.setState({ edit: false })} className="btn btn-outline-dark fw-bolder">Отмена</button>
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
        } else {
            if (typeof item.specifications === 'string')
                return (
                    <div >
                        <br /><br />
                        <div className="mx-auto col-md-11 card border-dark" >
                            <div className="card-header bg-transparent border-dark"><h3>{item.title}</h3></div>
                            <div className="card-body text-dark">
                                <table className="table table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Издатель</th>
                                            <th>{item.manufacturer}</th>
                                        </tr>
                                        <tr>
                                            <th>Поставщик</th>
                                            <th>{item.providerName}</th>
                                        </tr>
                                        <tr>
                                            <th>Количество</th>
                                            <th>{item.quantity}/{item.unit}</th>
                                        </tr>
                                        <tr>
                                            <th>Категория</th>
                                            <th>{item.subCategoryName}</th>
                                        </tr>
                                        <tr>
                                            <th>Номер склада</th>
                                            <th><Link to={`/WarehouseEdit/${item.warehouseId}`}>{item.warehouseNumber}</Link></th>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <h4>Характеристики</h4>
                                <br />
                                <table className="table table-hover">
                                    <tbody>
                                        {item.specifications.split(";").map((x, i) =>
                                            <tr key={i}>
                                                {x.split(":").map((e, i) =>
                                                    <th key={i}>{e}</th>)}
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer border-dark bg-transparent">
                                <div className="row" >
                                    <div className="col-8 d-grid gap-2 d-md-flex">
                                        <Link to="/"><button type="button" className="btn btn-outline-dark fw-bolder">Назад</button></Link>
                                        <button type="button" onClick={() => this.setState({ edit: true })} className="btn btn-outline-warning fw-bolder">Редактировать</button>
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
}