import React, { Component } from 'react'
import Sidebar from "./Sidebar";
import ItemAxios from '../../Axios/ItemServices';
import { Link } from "react-router-dom";

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.getBySubCategory = this.getBySubCategory.bind(this);
        this.itemServices = new ItemAxios();

        this.state = {
            items: [],
        }
    }

    async getBySubCategory(scategoryId) {
        this.setState({ items: await this.itemServices.getItemByCategory(scategoryId) });
    }

    render() {
        return (
            <div className="row">

                <div className="col-md-3 border-end">
                    <Sidebar getBy={this.getBySubCategory} />
                </div>

                <div className="col-6 col-md-9">
                    <br />
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Название</th>
                                <th scope="col">Цена</th>
                                <th scope="col">Количество</th>
                                <th scope="col">Поставщик</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items.map(item =>
                                <tr key={item.id}>
                                    <td><Link to={`/ItemDetail/${item.id}`}>{item.title}</Link> </td>
                                    <td>{item.price} $</td>
                                    <td>{item.quantity} | {item.unit}</td>
                                    <td>{item.providerName}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
