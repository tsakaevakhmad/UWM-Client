import React, { Component } from 'react'

export default class MainComponent extends Component {
    render() {
        return (
            <div>
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
                        <tr>
                            <td>NVIDIA RTX 3080</td>
                            <td>1200$</td>
                            <td>30 штук</td>
                            <td>Amazon</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
