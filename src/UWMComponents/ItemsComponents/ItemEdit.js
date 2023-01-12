import ItemServices from '../../Axios/ItemServices';
import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
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
            warehouseId: 0,
        }
    }

    async componentDidMount() {
        let item = {};
        item = await this.itemServices.getItem(this.props.itemId)

        this.setState({
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
        })
    }

    render() {
        console.log(this.state.id);
        return (
            <div >
                <br /><br />
                <div className="mx-auto col-md-11 card border-dark" >
                    <div className="card-header bg-transparent border-dark"><h3>{this.state.title}</h3></div>
                    <div className="card-body text-dark">
                        <label className="form-label">Название</label>
                        <input className="form-control" type="text" name="title" placeholder="Название" aria-label="manufacturer" />
                        <label className="form-label">Производитель</label>
                        <input className="form-control" type="text" name="manufacturer" placeholder="Производитель" aria-label="manufacturer" />
                        <label className="form-label">Цена</label>
                        <input className="form-control" type="text" name="price" placeholder="Цена" aria-label="price" />
                        <label className="form-label">Количество / единица измерения</label>
                        <div className="input-group ">
                            <input className="form-control col-6" type="number" name="quantity" placeholder="Количество" aria-label="quantity" />
                            <input className="form-control col-6" type="text" name="unit" placeholder="Единица" aria-label="unit" />
                        </div>
                        <label className="form-label">Поставщик</label>
                        <select className="form-select" name="providerId" aria-label="providerId">
                            <option value="1">One</option>
                        </select>
                        <label className="form-label">Категория</label>
                        <select className="form-select" name="subCategoryId" aria-label="subCategoryId">
                            <option value="1">One</option>
                        </select>
                        <label className="form-label">Склад</label>
                        <select className="form-select" name="warehouseId" aria-label="warehouseId">
                            <option value="1">One</option>
                        </select>
                        <label className="form-label">Описание товара</label>
                        <textarea className="form-control" name="specifications" rows="3"></textarea>
                    </div>
                    <div className="card-footer border-dark bg-transparent">
                        <div className="row" >
                            <div className="col-8 d-grid gap-2 d-md-flex">
                                <Link to={`/ItemDetail/${this.state.id}`}><button type="button" className="btn btn-outline-dark fw-bolder">Отмена</button></Link>
                                <button type="button" className="btn btn-outline-success fw-bolder">Сохранить</button>
                            </div>
                            <div className="col-4 d-grid gap-2 d-md-flex justify-content-end">
                                <button type="button" className="btn btn-outline-danger fw-bolder">Удалить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}