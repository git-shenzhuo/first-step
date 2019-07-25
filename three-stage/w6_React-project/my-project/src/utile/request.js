import axios from 'axios'

let instance = axios.create({
    baseURL: 'https://www.nanshig.com/mobile'
  });

function get(url='',params={}){
    return instance.get(url,params)
}

function post(url='',data={},params={}){
    return instance.post(url,data,params)
}

export default {
    get,
    post
}