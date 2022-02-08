/* eslint-disable class-methods-use-this */
import axios, {  AxiosResponse } from 'axios';

class HTTPService {

  constructor() {
    axios.defaults.timeout = 5000;
    axios.defaults.baseURL =  'https://imdb-api.com/API/AdvancedSearch'
  }

  async getServer<T = any>(url: string): Promise<AxiosResponse<T>> {
    return axios.get<T>(url, {
        headers:{
            Accept: "application/json", 
            redirect: 'follow'
        }
    });
  }

}

const httpServices = new HTTPService();
export default httpServices;
