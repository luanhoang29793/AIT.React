import React from 'react'
import newsService from "../Service/NewsService";

class Categorynew extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            listNewsTop5: []
        }
    }
    async componentDidMount() {
        console.log("Mounted list");
        const res = await newsService.listTop5()
        console.log(res);
        if (res) {
            this.setState({ listNewsTop5: res })
            console.log(res)
        }
        else {
            alert("Error ==> " + res.message)
        }
    }


    render(){
        return(
            <div className="most-recent-area">
            <div className="small-tittle mb-20">
                <h4>Most Recent</h4>
            </div>
         {
             this.state.listNewsTop5.map((data) => {
                return (
            <div className="most-recent-single">
                <div className="most-recent-images">
                    <img src={data.imageNews} style={{width:"85px", height:"79px"}} alt="data.imageNews" />
                </div>
                <div className="most-recent-capt">
                    <h4><a href={"/Views/"+ data.idNews}>{data.nameNews}</a></h4>
                </div>
            </div>
              )
            })
        }
            </div>
        )
    }
}
export default Categorynew;