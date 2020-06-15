import React from 'react'
import Header from './Header'
import Category from'./category'
import Footer from './footer'
class Index extends React.Component{
 
    
    render(){
        return(
            <div className="index">
         <Header />
         <Category />
        
         <Footer />
         </div>
        )
    }
}
export default Index;