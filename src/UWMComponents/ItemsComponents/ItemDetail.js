import ItemAxios from '../../Axios/ItemServices';
import React, { Component } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import {
  Link,
} from "react-router-dom";


export default function ItemDetail(props) {

  let { id } = useParams();

  return (
    <div>
      <Item itemId={id} />
    </div>
  );
}


class Item extends Component {

  constructor(props) {
    super(props);

    this.itemServices = new ItemAxios();

    this.state = {
      redirectToList: false,
      item: {},
    }

    this.Delete = this.Delete.bind(this);
  }

  async componentDidMount() {
    this.setState({ item: await this.itemServices.getItem(this.props.itemId) })
  }

  async Delete() {
    console.log("-")
    await this.itemServices.deleteItem(this.props.itemId);
    this.setState({ redirectToList: true });
  }

  render() {
    let item = this.state.item;

    if (this.state.redirectToList) {
      return <Navigate to={"/"} />
    }

    if (typeof item.specifications === 'string')
      return (
        <div >
          <br /><br />
          <div className="mx-auto col-md-11 card border-dark" >
            <div className="card-header bg-transparent border-dark"><h3>{item.title}</h3></div>
            <div className="card-body text-dark">
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th>Издатель</th>
                    <th>{item.manufacturer}</th>
                  </tr>
                  <tr>
                    <th>Поставщик</th>
                    <th>{item.providerName}</th>
                  </tr>
                  <tr>
                    <th>Количество</th>
                    <th>{item.quantity}/{item.unit}</th>
                  </tr>
                  <tr>
                    <th>Категория</th>
                    <th>{item.subCategoryName}</th>
                  </tr>
                  <tr>
                    <th>Номер склада</th>
                    <th>{item.warehouseNumber}</th>
                  </tr>
                </tbody>
              </table>
              <br />
              <h4>Характеристики</h4>
              <br />
              <table className="table table-hover">
                <tbody>
                  {item.specifications.split(";").map((x, i) =>
                    <tr key={i}>
                      {x.split(":").map((e, i) =>
                        <th key={i}>{e}</th>)}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="card-footer border-dark bg-transparent">
              <div className="row" >
                <div className="col-8 d-grid gap-2 d-md-flex">
                  <Link to="/"><button type="button" className="btn btn-outline-dark fw-bolder">Назад</button></Link>
                  <Link to={`/itemEdit/${item.id}`}><button type="button" className="btn btn-outline-warning fw-bolder">Редактировать</button></Link>
                </div>
                <div className="col-4 d-grid gap-2 d-md-flex justify-content-end">
                  <button type="button" onClick={this.Delete} className="btn btn-outline-danger fw-bolder">Удалить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}
// Запись характеристик
// Название характеристики: Характеристика; След характеристика: характеристика 