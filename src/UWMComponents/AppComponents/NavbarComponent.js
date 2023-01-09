import React, { Component } from 'react'

export default class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand">Navbar</a>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
