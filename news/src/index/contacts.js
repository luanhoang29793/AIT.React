import React from 'react';
import {Form, Button} from 'react-bootstrap'
import contactService from '../Service/ContactService'
class Contacts extends React.Component{
    constructor(){
        super();
        this.state = {
            fieldName:"",
            fieldMessage:"",
        }
    }
    async onClickSave()
    {
        const res = await contactService.create(this.state)
        if (res.success) {
            alert("thanh cong")
        }
        else if (res.status===400) {
            console.log(res.status,"error 400");
            const dataError = []
            const error = res.data.errors

            if (error) {
                error.map((itemerror)=>{
                    console.log(itemerror.defaultMessage,"error mess");
                    dataError.push(itemerror.defaultMessage)
                })
                this.setState({errorField:dataError})
            }
            else {
                dataError.push(res.data.message)
                this.setState({errorField:dataError})
            }
        }
        else {
            // alert("Error ==>"+JSON.stringify(res))
            console.log(res ,"res");
            const dataError = []
            dataError.push(res.message);
            this.setState({errorField:dataError});
        }
    }

    
    render(){
        return(
            <div className="about-area2 gray-bg pt-60 pb-60" id ="contacts">
            <div className="container">
                <h3 style={{textAlign:"center"}}> Liên hệ với chúng tôi</h3>
                <Form>
        
                        <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name"value={this.state.fieldName}
                               onChange={(event)=>this.setState({fieldName:event.target.value})} />
                        </Form.Group>
                    
                     
                        <Form.Group >
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="4" value={this.state.fieldMessage}
                               onChange={(event)=>this.setState({fieldMessage:event.target.value})} />
                        </Form.Group>
                    <Button variant="primary" type="submit" style={{marginLeft:"111px"}} onClick={()=>this.onClickSave()}>
                        Send
  </Button>
                </Form>
            </div>
            </div>
        )
    }
}
export default Contacts;