import React from 'react'

export default function ResetPassword() {
    return (
        <div>
            <form>

                <div className="form-outline mb-4">
                    <input type="email" id="form2" name="email" onChange={this.handleChange} className="form-control" />
                    <label className="form-label" htmlFor="form2">Почта</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form3" name="password" onChange={this.handleChange} className="form-control" />
                    <label className="form-label" htmlFor="form3">Пароль</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form4" name="confirmPassword" onChange={this.handleChange} className="form-control" />
                    <label className="form-label" htmlFor="form4">Подтвердите пароль</label>
                </div>

                <button type="button" onClick={this.registering} className="btn btn-outline-success col-12 mb-4">Сбросить</button>
            </form>
        </div>
    )
}
