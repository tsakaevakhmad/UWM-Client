import SubCategoryServices from '../../Axios/SubcategoryServices';
import React, { Component } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import {
    Link,
} from "react-router-dom";

export default function SubCategoryEdit(props) {

    let { id, categoryId } = useParams();

    return (
        <div>
            <SubCategory id={id} categoryId={categoryId} />
        </div>
    );
}


class SubCategory extends Component {

    constructor(props) {
        super(props);

        this.subCategoryServices = new SubCategoryServices();

        this.state = {
            id: 0,
            name: "",
            redirect: false,
            category: {}
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
        const category = {
            id: this.state.id,
            name: this.state.name,
            categoryId: this.state.category.categoryId,
            category: {},
        }

        await this.subCategoryServices.updateSubCategory(this.props.id, category);
        this.setState({ redirect: true });
    }

    async Delete() {
        await this.subCategoryServices.deleteSubCategory(this.props.id);
        this.setState({ redirect: true });
    }

    async componentDidMount() {
        const c = await this.subCategoryServices.getSubCategoryById(this.props.id)
        this.setState({
            id: c.id,
            name: c.name,
            category: c,
        })
    }

    render() {
        const { category, name } = this.state;


        if (this.state.redirect) {
            return <Navigate to={`/CategoryEdit/${this.state.category.categoryId}`} />
        }
        
        if (category != null)
            return (
                <div >
                    <br /><br />
                    <div className="mx-auto col-md-11 card border-dark" >
                        <div className="card-header bg-transparent border-dark"><h3>Редактор подкатегории</h3></div>
                        <div className="card-body text-dark">
                            <label className="form-label">Категория</label>
                            <input className="form-control" type="text" value={name} name="name" onChange={this.handleChange} placeholder="Имя поставщика" />
                        </div>
                        <div className="card-footer border-dark bg-transparent">
                            <div className="row" >
                                <div className="col-8 d-grid gap-2 d-md-flex">
                                    <button type="button" onClick={() => this.setState({ redirect: true })} className="btn btn-outline-dark fw-bolder">Отмена</button>
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