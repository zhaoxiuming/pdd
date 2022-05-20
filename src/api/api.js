import axios from 'axios'
let instance = axios.create({
    baseURL:"",
    timeout:3000
})
//拦截
instance.interceptors.request.use(function(config){
    return config
})
instance.interceptors.response.use(function(res){
    return res
})
export default instance