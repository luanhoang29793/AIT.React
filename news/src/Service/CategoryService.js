
import Axios from "axios";
const baseUrl = "http://localhost:8080/api/category"
const category = {};

category.listCategory = async () => {
  const urlList = baseUrl
  const res = await Axios.get(urlList)
  .then(response=> {return response.data })
  .catch(Error=>{ return console.log("khong tim thay"); })
  return res;
}

export default category