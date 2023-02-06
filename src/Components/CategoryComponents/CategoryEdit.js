import CategoryServices from '../../Axios/CategoryServices';
import React, { Component } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import {
    Link,
} from "react-router-dom";

export default function CategoryEdit(props) {

    let { id } = useParams();

    return (
        <div>
            <Category id={id} />
        </div>
    );
}


class Category extends Component {

    constructor(props) {
        super(props);

        this.categoryServices = new CategoryServices();

        this.state = {
            id: 0,
            name: "",
            edit: false,
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
        }

        await this.categoryServices.updateCategory(this.props.id, category);
        this.setState({ edit: false });
        await this.componentDidMount();
    }

    async Delete() {
        await this.categoryServices.deleteCategory(this.state.id);
        this.setState({ redirectToList: true });
    }

    async componentDidMount() {
        const c = await this.categoryServices.getCategoryByid(this.props.id)
        this.setState({
            id: c.id,
            name: c.name,
            category: c,
        })
    }

    render() {
        const { category, name, edit } = this.state;

        if (this.state.redirectToList) {
            return <Navigate to={"/"} />
        }

        if (category != null)
            if (edit) {
                return (
                    <div >
                        <br /><br />
                        <div className="mx-auto col-md-11 card border-dark" >
                            <div className="card-header bg-transparent border-dark"><h3>Редактор категории</h3></div> 
                            <div className="card-body text-dark">
                                
                                <div className="form-floating">
                                    <input className="form-control mb-4" type="text" value={name} id="name" name="name" onChange={this.handleChange} placeholder="Категория" />
                                    <label className="form-label" htmlFor="name">Категория</label>
                                    <div className="invalid-feedback">
                                        {/* {this.state.validConfirmPassword.message[0]} */}
                                    </div>
                                </div>
                            
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
            }
            else {
                if (category.subCategoryDto !== undefined)
                    return (
                        <div >
                            <br /><br />
                            <div className="mx-auto col-md-11 card border-dark" >
                                <div className="card-header bg-transparent border-dark"><h3>{category.name}</h3></div>
                                <div className="card-body text-dark">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th>Категория</th>
                                                <th>{category.name}</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br />
                                    <h4>Подкатегории</h4>
                                    <table className="table table-hover">
                                        <tbody>
                                            {category.subCategoryDto.map(item =>
                                                <tr key={item.id}>
                                                    <th>{item.name}</th>
                                                    <td><Link className="btn btn-outline-warning btn-sm fw-bolder" to={`/SubCategoryEdit/${item.id}`}>Редактировать</Link></td>
                                                </tr>

                                            )}
                                            <tr>
                                                <th></th>
                                                <td><Link className="btn btn-outline-success btn-sm fw-bolder" to={`/SubCategoryCreate/${category.id}`}>Добавить</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br />
                                </div>
                                <div className="card-footer border-dark bg-transparent">
                                    <div className="row" >
                                        <div className="col-8 d-grid gap-2 d-md-flex">
                                            <Link className="btn btn-outline-dark fw-bolder" to={`/`}>Назад</Link>
                                            <button type="button" onClick={() => this.setState({ edit: true })} className="btn btn-outline-warning fw-bolder">Редактировать</button>
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