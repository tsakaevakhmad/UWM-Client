import SubCategoryServices from '../../Axios/SubcategoryServices';
import CategoryServices from '../../Axios/CategoryServices';
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

import {
    Link,
} from "react-router-dom";

export default class CategoryCreate extends Component {

    constructor(props) {
        super(props);

        this.categoryServices = new CategoryServices();
        this.subCategoryServices = new SubCategoryServices();

        this.state = {
            id: 0,
            name: "",
            subcategoryname: "",
            redirect: false,
            addSubcategory: false,
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeNameSubcategory = this.handleChangeNameSubcategory.bind(this);
        this.Create = this.Create.bind(this);
        this.CreateSubcategory = this.CreateSubcategory.bind(this);
        this.addSubcategory = this.addSubcategory.bind(this);
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handleChangeNameSubcategory(e) {
        this.setState({
            subcategoryname: e.target.value,
        });
    }

    async Create() {
        const category = {
            name: this.state.name,
        }

        const id = await this.categoryServices.createCategory(category);

        if (this.state.addSubcategory) {
            await this.CreateSubcategory(id.data);
        }
        await this.setState({ id: id.data, redirect: true });
    }

    async CreateSubcategory(categoryId) {
        console.log(categoryId)
        const subCategory = {
            name: this.state.subcategoryname,
            categoryId: categoryId
        }

        await this.subCategoryServices.createSubCategory(subCategory)
    }

    async addSubcategory() {
        let check = document.getElementById("check").checked;
        await this.setState({ addSubcategory: check })

        if (this.state.addSubcategory) {
            document.getElementById("subcategory").hidden = false;
            document.getElementById("yes").hidden = true;
            document.getElementById("no").hidden = false;
        } else {
            document.getElementById("subcategory").hidden = true;
            document.getElementById("yes").hidden = false;
            document.getElementById("no").hidden = true;
        }
    }

    render() {


        if (this.state.redirect) {
            return <Navigate to={`/CategoryEdit/${this.state.id}`} />
        }

        return (
            <div >
                <br /><br />
                <div className="mx-auto col-md-11 card border-dark" >
                    <div className="card-header bg-transparent border-dark"><h3>Добавление категории</h3></div>
                    <div className="card-body text-dark">
                        <label className="form-label">Категория</label>
                        <input className="form-control" type="text" name="name" onChange={this.handleChangeName} placeholder="Название" />
                        <div className="card-body text-dark col-4" id="subcategory" hidden>
                            <label className="form-label">Подкатегория</label>
                            <input className="form-control" type="text" name="subname" onChange={this.handleChangeNameSubcategory} placeholder="Название" />
                        </div>
                    </div>
                    <div className="card-footer border-dark bg-transparent">
                        <div className="row" >
                            <div className="col-8 d-grid gap-2 d-md-flex">
                                <Link className="btn btn-outline-dark fw-bolder" to={`/`}>Отмена</Link>
                                <button type="button" onClick={this.Create} className="btn btn-outline-success fw-bolder">Сохранить</button>
                                <label className="btn btn-outline-primary" id="yes" htmlFor="check" >Добавить подкатегорию</label>
                                <label className="btn btn-outline-danger" id="no" htmlFor="check" hidden>Не добавлять подкатегорию</label>
                                <input autoComplete="off" className="btn-check"  onClick={this.addSubcategory} type="checkbox" value={this.state.addSubcategory} id="check"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}