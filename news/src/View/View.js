import React from 'react'
import Header from '../index/Header'
import Footer from '../index/footer'
import ViewsNews from './ViewsCategory'
class Views extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
            <div>
         <Header />
         <ViewsNews match={this.props.match} />
         </div>
         <div>
        
         <Footer />
         </div>
         </div>
        )
    }
}
export default Views;