import React, { Component } from 'react'
import ListItem from "./ItemsComponents/ListItem";
import ItemEdit from './ItemsComponents/ItemEdit';
import ItemCreate from './ItemsComponents/ItemCreate';
import WarehouseEdit from './WarehouseComponents/WarehouseEdit';
import WarehouseCreate from './WarehouseComponents/WarehouseCreate';
import WarehouseList from './WarehouseComponents/WarehouseList';
import ProviderCreate from './ProviderComponents/ProviderCreate';
import ProviderList from './ProviderComponents/ProviderList';
import ProviderEdit from './ProviderComponents/ProviderEdit';

import {
    Routes,
    Route,
    Link,
} from "react-router-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">UWM</a>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Список</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/ItemCreate">Добавить предмет</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/WarehouseCreate">Добавить склад</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/WarehouseList">Список складов</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/ProviderCreate">Добавить поставщика</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/ProviderList">Список поставщикаов</Link>
                                </li>
                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Поиск</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<ListItem />} />
                    <Route path="/ItemEdit/:id" element={<ItemEdit />} />
                    <Route path="/ItemCreate/" element={<ItemCreate />} />
                    <Route path="/WarehouseEdit/:id" element={<WarehouseEdit />} />
                    <Route path="/WarehouseCreate" element={<WarehouseCreate />} />
                    <Route path="/WarehouseList" element={<WarehouseList />} />
                    <Route path="/ProviderEdit/:id" element={<ProviderEdit />} />
                    <Route path="/ProviderCreate" element={<ProviderCreate />} />
                    <Route path="/ProviderList" element={<ProviderList />} />
                </Routes>
            </div>
        )
    }
}