import React, { Component } from 'react'
import CategoryAxios from '../../Axios/Category';

export default class Sidebarcomponent extends Component {
    
    constructor(props) {
        super(props);
        this.cat = new CategoryAxios;
    }

    state = {
        categorys: [],
    }

    async componentDidMount() {
        this.setState({ categorys: await this.cat.getCategory() }); 
    }

    render() {
        return (
            <div>
                {this.state.categorys.map((category) =>
                    <div key={category.id} className="col-md-10">
                        <br />
                        <button className="btn btn-outline-secondary rounded-pill colapsed col-12" type="button" data-bs-toggle="collapse" data-bs-target={"#" + category.name.replace(" ", "")} aria-expanded="false" aria-controls={category.name.replace(" ", "")}>
                            <h6 className="accordion-header">{category.name}</h6>
                        </button>
                        <div id={category.name.replace(" ", "")} className="accordion-collapse collapse" aria-labelledby={category.name.replace(" ", "")} data-bs-parent="#accordionExample">
                            <div className="accordion-body ">
                                <div className="list-group rounded-pill">
                                    {category.subCategoryDto.map((subcategory) =>
                                        <button key={subcategory.id} type="button" className="list-group-item list-group-item-action">{subcategory.name}</button>
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

