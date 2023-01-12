import ItemAxios from '../../Axios/ItemServices';
import React, { Component } from 'react'
import { useParams } from 'react-router-dom'


export default function Itemdetail(props) {

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
      item: {},
    }
  }

  async componentDidMount() {
    this.setState({ item: await this.itemServices.getItem(this.props.itemId) })
  }

  render() {
    console.log(this.state.item);
    let item = this.state.item;
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
              <div className='row '>
                <div class="col-8 d-grid gap-2 d-md-flex">
                  <button type="button" class="btn btn-outline-dark fw-bolder">Назад</button>
                  <button type="button" class="btn btn-outline-warning fw-bolder">Редактировать</button>
                </div>
                <div class="col-4 d-grid gap-2 d-md-flex justify-content-end">
                  <button type="button" class="btn btn-outline-danger fw-bolder">Удалить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}
// Запись характеристик
// название характеристики - Характеристика; След характеристика - характеристика 