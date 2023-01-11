import React, { Component } from 'react'
import ListItem from "./ListItem";
import ItemDetail from "./ItemDetail";

import {
    Routes,
    Route,
    Link,
} from "react-router-dom";

export default class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
        }
    }

    render() {
        return (
            <div>
                <div className="border-bottom">
                    <nav className="navbar navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand">Navbar</a>
                            <Link to="/" >Home</Link>
                            <Link to="/itemDetail/" >ID</Link>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={<ListItem />}/>
                    <Route path="/itemDetail/:id" element={<ItemDetail />}/>
                </Routes>
            </div>
        )
    }
}