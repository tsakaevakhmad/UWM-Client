import React from 'react'
import { useParams, Navigate, useSearchParams } from 'react-router-dom'

export default function ResetPassword(props) {
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    const code = searchParams.get("code");
    
    async function handleChange(e) {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        });
    }

    return (
        <div className="centerContentBox col-4">
            <form>
                <p/> {code}
                <div className="form-outline mb-4">
                    <input type="email" id="form2" name="email" onChange={handleChange} className="form-control" />
                    <label className="form-label" htmlFor="form2">Почта</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form3" name="password" onChange={handleChange} className="form-control" />
                    <label className="form-label" htmlFor="form3">Пароль</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form4" name="confirmPassword" onChange={handleChange} className="form-control" />
                    <label className="form-label" htmlFor="form4">Подтвердите пароль</label>
                </div>

                <button type="button" className="btn btn-outline-success col-12 mb-4">Сбросить</button>
            </form>
        </div>
    )
}
