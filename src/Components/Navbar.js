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
import CategoryCreate from './CategoryComponents/CategoryCreate';
import CategoryEdit from './CategoryComponents/CategoryEdit';
import CategoryList from './CategoryComponents/CategoryList';
import SubCategoryEdit from './CategoryComponents/SubcategoryEdit';
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
                <nav className="navbar navbar-expand-lg navbar-light border-bottom border-2">
                    <div className="container-fluid ">
                        <a className="navbar-brand fw-bold">UWM</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarToggler">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item dropdown fw-bold">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Предметы
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" aria-current="page" to="/">Список</Link></li>
                                        <li><Link className="dropdown-item" aria-current="page" to="/ItemCreate">Добавить предмет</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Склады
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" aria-current="page" to="/WarehouseList">Список складов</Link></li>
                                        <li><Link className="dropdown-item" aria-current="page" to="/WarehouseCreate">Добавить склад</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Поставщики
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" aria-current="page" to="/ProviderList">Список поставщикаов</Link></li>
                                        <li><Link className="dropdown-item" aria-current="page" to="/ProviderCreate">Добавить поставщика</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Категории
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" aria-current="page" to="/CategoryList">Список поставщикаов</Link></li>
                                        <li><Link className="dropdown-item" aria-current="page" to="/CategoryCreate">Добавить категорию</Link></li>
                                    </ul>
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
                    <Route path="/CategoryCreate" element={<CategoryCreate />} />
                    <Route path="/CategoryList" element={<CategoryList />} />
                    <Route path="/SubCategoryEdit/:id/:categoryId" element={<SubCategoryEdit />} />
                    <Route path="/CategoryEdit/:id" element={<CategoryEdit />} />
                </Routes>
            </div>
        )
    }
}