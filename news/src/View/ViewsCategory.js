import React from 'react'
import Categorynew from '../index/categorynew';
import Contacts from '../index/contacts';
import newsService from "../Service/NewsService";

class ViewsNews extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        id:0,
        fieldNameNews:"",
        fieldContentNews:"",
        fieldImageNews:""
    }
}

async componentDidMount()


{
  console.log("Mounted Edit");
  const id =this.props.match.params.id

  console.log(id,"prop1")

  const res = await newsService.getN(id)
  console.log(res);
  if (res) {
      console.log(res);
      this.setState({
          id: res.idNews,
          fieldNameNews:res.nameNews,
          fieldContentNews:res.contentNews,
          fieldImageNews:res.imageNews
      })
  }
  else {
      alert("Error ==>"+res.message)
  }
}
    



    render(){

     
        return(
          

            <div className="about-area2 gray-bg pt-60 pb-60" id ="home">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  {/* Trending Tittle */}
                  <div className="about-right mb-90">
                    <div className="about-img">
                      <img src={this.state.fieldImageNews} alt="" />
                    </div>
                    <div className="heading-news mb-30 pt-30">
                      <h3>{this.state.fieldNameNews}</h3>
                    </div>
                  <div>{this.state.fieldContentNews}</div>
            
                  </div>
                
                </div>
                <div className="col-lg-4">
                  {/* Flow Socail */}
                  <Categorynew />
                  {/* New Poster */}
                  <Contacts />
                </div>
              
              </div>
            </div>
          </div>
          
  
        )
    }
}
export default ViewsNews;