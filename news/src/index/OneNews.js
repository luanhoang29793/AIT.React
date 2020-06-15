import React from 'react'
import { Card } from 'react-bootstrap';
import newsService from "../Service/NewsService";
import Link from'react-router-redux'


class OneNews extends React.Component {
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



                                {
                                    this.state.listNewsByCategory.map((data) => {
                                        return (
                                            <div>
                                                <Card >
                                                    <Card.Img variant="top" src= {data.imageNews}  alt={data.imageNews} />
                                                    <Card.Body>
                                                        <Card.Title >{data.nameNews}</Card.Title>
                                                        <Card.Text>
                                                            {data.category.nameCategory}
                                                        </Card.Text>
                                                        <a href={"/Views/"+data.idNews}  className="btn btn-light">Go to Page </a>
                                                    </Card.Body>
                                                </Card>

                                            </div>
                                        )
                                    })
                                }
                </div>
            </div>
        )
    }

}

export default OneNews;