import React, { Component } from 'react'
import ListItem from "./ListItem";
import ItemDetail from './ItemDetail';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

export default class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="border-bottom">
                    <nav className="navbar navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand">Navbar</a>
                            <a href={"/"}> Home </a>
                            <a href={"/ItemDetail/2"}> ID </a>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<ListItem />} />
                        <Route exact path='/ItemDetail/:id' element={<ItemDetail/>} />
                    </Routes>
                </Router>
            </div>
        )
    }
}
