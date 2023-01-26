import React, { Component } from 'react'
import CategoryServices from '../../Axios/CategoryServices';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.categoryServices = new CategoryServices();

        this.state = {
            categorys: [],
            subcategoryid: 0,
        }
    }

    async componentDidMount() {
        this.setState({ categorys: await this.categoryServices.getCategory() });
    }


    render() {
        if (this.state.categorys != null)
            return (
                <div>
                    {this.state.categorys.map(category =>
                        <div key={category.id} className="accordion" id={category.name.replace(" ", "") + "Wrapper"}>
                            <br />
                            <div className="accordion-item">
                                <button className="btn btn-outline-dark rounded colapsed col-12"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={"#" + category.name.replace(" ", "")}
                                    aria-expanded="true"
                                    aria-controls={category.name.replace(" ", "")}>
                                    {category.name}
                                </button>
                                <div id={category.name.replace(" ", "")} className="accordion-collapse collapse"
                                    data-bs-parent={"#" + category.name.replace(" ", "") + "Wrapper"}>
                                    <div className="accordion-body">
                                        <div className="list-group rounded">
                                            {category.subCategoryDto.map(subcategory =>
                                                <button key={subcategory.id} value={subcategory.id} onClick={() => this.props.getBy(subcategory.id)} type="button" className="btn btn-outline-secondary">{subcategory.name}</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )
        return (
            <div>
                <br /><br />
                <br />
                <div className="text-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            </div>
        )
    }
}

