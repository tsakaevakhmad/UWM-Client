import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CategoryServices from '../../Axios/CategoryServices';


export default class CategoryList extends Component {
    constructor(props) {
        super(props);

        this.categoryServices = new CategoryServices();

        this.state = {
            categorys: [],
        }
    }

    async componentDidMount() {
        this.setState({ categorys: await this.categoryServices.getCategory() })
    }

    render() {
        if (this.state.categorys != null)
            return (
                <div>
                    <div className="row mb-4 justify-content-md-center">
                        <div className="col-md-9 shadow">
                            <br />
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Категории</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.categorys.map(item =>
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td><Link to={`/CategoryEdit/${item.id}`}><button type="button" className="btn btn-outline-dark btn-sm fw-bolder">Открыть</button></Link></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
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
