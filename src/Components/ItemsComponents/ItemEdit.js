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

        this.handleChange = this.handleChange.bind(this);
        this.Update = this.Update.bind(this);
        this.Delete = this.Delete.bind(this);
    }

    async handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
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
        const item = await this.itemServices.getItem(this.props.itemId)
        this.setState({
            item: item,
            id: item.id,
            title: item.title,
            manufacturer: item.manufacturer,
            price: item.price,
            providerId: item.providerId,
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
        if (item != null)
            if (edit) {
                return (
                    <div >
                        <br /><br />
                        <div className="mx-auto col-md-11 card border-dark" >
                            <div className="card-header bg-transparent border-dark"><h3>{this.state.title}</h3></div>
                            <div className="card-body text-dark">
                                <label className="form-label">Название</label>
                                <input className="form-control" type="text" value={title} name="title" onChange={this.handleChange} placeholder="Название" />
                                <label className="form-label">Производитель</label>
                                <input className="form-control" type="text" value={manufacturer} name="manufacturer" onChange={this.handleChange} placeholder="Производитель" />
                                <label className="form-label">Цена</label>
                                <input className="form-control" type="number" value={price} name="price" onChange={this.handleChange} placeholder="Цена" />
                                <label className="form-label">Количество / единица измерения</label>
                                <div className="input-group ">
                                    <input className="form-control col-6" type="number" value={quantity} name="quantity" onChange={this.handleChange} placeholder="Количество" />
                                    <input className="form-control col-6" type="text" value={unit} name="unit" onChange={this.handleChange} placeholder="Единица" />
                                </div>
                                <label className="form-label">Поставщик</label>
                                <select className="form-select" name="providerId" value={providerId} onChange={this.handleChange}>
                                    {this.state.provider.map(p =>
                                        <option key={p.id} value={p.id}>{p.name}</option>
                                    )}
                                </select>
                                <label className="form-label">Категория</label>
                                <select className="form-select" name="subCategoryId" value={subCategoryId} onChange={this.handleChange}>
                                    {this.state.subCategory.map(sc =>
                                        <option key={sc.id} value={sc.id}>{sc.name}</option>
                                    )}
                                </select>
                                <label className="form-label">Склад</label>
                                <select className="form-select" name="warehouseId" value={warehouseId} onChange={this.handleChange}>
                                    {this.state.wahehouse.map(w =>
                                        <option key={w.id} value={w.id}>{w.number}</option>
                                    )}
                                </select>
                                <label className="form-label">Описание товара</label>
                                <textarea className="form-control" name="specifications" value={specifications} onChange={this.handleChange} rows="3"></textarea>
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
                                            <Link className="btn btn-outline-dark fw-bolder" to="/">Назад</Link>
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