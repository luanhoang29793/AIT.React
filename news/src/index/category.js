import React from 'react';
import { Link, Switch } from 'react-router-dom';
import categoryService from "../Service/CategoryService";
import newsService from "../Service/NewsService";
import Categorynew from "./categorynew";
import Contacts from './contacts';
import NewsByCategory from './NewsByCategory';
import OneNews from './OneNews'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

class Category extends React.Component {
    constructor() {
        super()
        this.state = {
            listNews: [],
            listCategory: []
        }
    }
    async componentDidMount() {
        console.log("Mounted list");
        const res = await newsService.listN()
        console.log(res);
        if (res) {
            this.setState({ listNews: res })
            console.log(res)
        }
        else {
            alert("Error ==> " + res.message)
        }

        const res1 = await categoryService.listCategory()
        console.log(res1);
        if (res1) {
            this.setState({ listCategory: res1 })
            console.log(res1)
        }
        else {
            alert("Error ==> " + res1.message)
        }
    }

    render() {
        return (

            <div className="about-area2 gray-bg pt-60 pb-60" id="home">
                <div className="container">
                    <div className="row">
                        <Router>
                            <div className="col-lg-8">
                                <div className="whats-news-wrapper">
                                    {/* Heading & Nav Button */}
                                    <div className="row justify-content-between align-items-end mb-15">
                                        <div className="col-xl-4">
                                            <div className="section-tittle mb-30">
                                                <h3>Whats New</h3>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-md-9">
                                            <div className="properties__button">
                                                {/*Nav Button  */}
                                                <nav>
                                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                        {
                                                            this.state.listCategory.map((data) => {
                                                                return (
                                                                    <div>
                                                                        <Link className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" to={"/" + data.idCategory} role="tab" aria-controls="nav-home" aria-selected="true">{data.nameCategory}</Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <Switch>
                                    <Route exact  path={"/"} component={OneNews } />
                                    <Route exact  path={"/:id"} component={NewsByCategory } />
                                    </Switch>                       

                                </div>
                            </div>
                        </Router>
                        <div className="col-lg-4">
                            < Categorynew />
                            <Contacts />
                        </div>
                    </div>


                </div>
            </div>


        )
    }
}
export default Category;