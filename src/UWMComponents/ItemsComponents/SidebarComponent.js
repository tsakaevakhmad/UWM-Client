import React, { Component } from 'react'
import CategoryAxios from '../../Axios/CategoryServices';

export default class SidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.categoryServices = new CategoryAxios();
        
        this.state = {
            categorys: [],
            subcategoryid: 0,
        }
    }  

    async componentDidMount() {
        this.setState({ categorys: await this.categoryServices.getCategory() }); 
    }


    render() {
        return (
            <div>
                <div>{this.props.subcategoryid}</div>
                {this.state.categorys.map((category) =>
                    <div key={category.id} className="col-md-10">
                        <br />
                        <button className="btn btn-outline-secondary rounded colapsed col-12" type="button" data-bs-toggle="collapse" data-bs-target={"#" + category.name.replace(" ", "")} aria-expanded="false" aria-controls={category.name.replace(" ", "")}>
                            <h6 className="accordion-header">{category.name}</h6>
                        </button>
                        <div id={category.name.replace(" ", "")} className="accordion-collapse collapse" aria-labelledby={category.name.replace(" ", "")} data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                                <div className="list-group rounded">
                                    {category.subCategoryDto.map((subcategory) =>
                                        <button key={subcategory.id} value={subcategory.id} onClick={() => this.props.getBy(subcategory.id)} type="button" className="list-group-item list-group-item-action">{subcategory.name}</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

