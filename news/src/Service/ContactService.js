
import Axios from "axios";
const baseUrl = "http://localhost:8080/api/contact"
const contact = {};

contact.listContacts = async () => {
  const urlList = baseUrl
  const res = await Axios.get(urlList)
  .then(response=> {return response.data })
  .catch(Error=>{ return console.log("khong tim thay"); })
  return res;
}
contact.create = async (state) => {

    const dataPost = {
        nameContacts: state.fieldName,
        message: state.fieldMessage,
    }

    const urlPost = baseUrl

    const res = await Axios.post(urlPost,dataPost)
        .then(response=>{
            const data = { success: true, message: response.data }
            return data;
        })
        .catch(error=>{
            const data = { success: false, message: error.response.data }
            return data;
        })

    return res;
}

export default contact
