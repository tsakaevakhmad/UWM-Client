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
          <div className="row ">
            <div className="mx-auto col-md-11 card border-dark" >
              <div className="card-header">{item.title}</div>
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
                  </tbody>
                </table>
                <br />
                <h4>Характеристики</h4>
                <br />
                <p className="card-text">
                  <table className="table table-hover">
                    <tbody>
                      {item.specifications.split(";").map(x =>
                        <tr>
                          <th>{x.split("-")[0]} </th>
                          <th>{x.split("-")[1]} </th>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </p>
              </div>
              <div className="card-footer border-dark">Footer</div>
            </div>
          </div>
        </div>
      )
  }
}
// Запись характеристик
// название характеристики - Характеристика; След характеристика - характеристика