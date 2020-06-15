
import Axios from "axios";
const baseUrl = "http://localhost:8080/api/news/"
const news = {};

news.listN = async () => {
  const urlList = baseUrl
  const res = await Axios.get(urlList)
  .then(response=> {return response.data })
  .catch(Error=>{ return console.log("khong tim thay"); })
  return res;
}
news.listTop5 = async ()=>{
  const urlListtop5 = baseUrl +"top5"
  const res1 = await Axios.get(urlListtop5)
  .then( response => {return response.data})
  .catch(error => {return console.log("không tìm thấy");})
  return res1;
}
news.listNewsCategory = async (id) => {
  const urlGet = baseUrl+"listNews/" +id
  const res = await Axios.get(urlGet)
      .then(response=> {return response.data })
      .catch(error=>{ return error; })
  return res;
}
news.getN = async (id) => {
  const urlGet = baseUrl+id
  const res = await Axios.get(urlGet)
      .then(response=> {return response.data })
      .catch(error=>{ return error; })
  return res;
}

export default news