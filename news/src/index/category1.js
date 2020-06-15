import React from 'react'
import { Card } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import newsService from "../Service/NewsService";
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'



class Category1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listNewsByCategory: [],
            }
    }
  
 async componentDidMount() {
  
        const res = await newsService.listNewsCategory(1)
        console.log(res);
        if (res) {
            this.setState({ listNewsByCategory: res })
        }
        else {
            alert("Error ==> " + res.message)
        }
    }
  
   
    render() {

        return (
            <div className="row">
                <div className="col-12">

                    <div className="tab-content" id="nav-tabContent">

                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="row">

                                {
                                    this.state.listNewsByCategory.map((data) => {
                                        return (
                                            <div>
                                                <Card style={{ width: '20rem', height: '26rem', marginBottom: "50", marginRight: "30px", marginTop: "20px", marginLeft: "30px" }}>
                                                    <Card.Img variant="top" src="holder.js/100px180" style={{ width: "320px", height: "200px" }} alt={data.imageNews} />
                                                    <Card.Body>
                                                        <Card.Title>{data.nameNews}gfsdgsdgsdgsdgsgfsdgsdgsdgsdgs</Card.Title>
                                                        <Card.Text>
                                                            {data.category.nameCategory}1111gfsdgsdgsdgsdggfsdgsdgsdgsdgsgfsdgsdgsdgsdgss
                                                        </Card.Text>
                                                        <Link to={"/Views"} className="btn btn-light">Go to Page </Link>
                                                    </Card.Body>
                                                </Card>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Category1;