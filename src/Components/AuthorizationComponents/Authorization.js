import React, { Component } from 'react'

export default class Authorization extends Component {
    render() {
        return (
            <div className="centerContentBox col-4">
                <form>
                    <div className="form-outline mb-4">
                        <input type="email" id="form1" className="form-control" />
                        <label className="form-label" htmlFor="form1">Почта</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form2" className="form-control" />
                        <label className="form-label" htmlFor="form2">Пароль</label>
                    </div>

                    <button type="button" className="btn btn-outline-primary col-12 mb-4">Войти</button>

                    <div className="text-center">
                        <p><a href="#!">Зарегистрироваться</a></p>
                        <p><a href="#!">Забыл пароль</a></p>
                    </div>
                </form>
            </div>
        )
    }
}
