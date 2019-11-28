import request from '../utils/request';


export async function queryArticleList() {
    return request('http://192.168.3.28:8080/server/v1/articles');
 }

 export async function queryArticleById(payload) {
    const { id } = payload;
    return request(`http://192.168.3.28:8080/server/v1/articles/${id}`);
  }

export async function queryProvince() {
   return request('http://192.168.3.28:8080/server/v1/geographic/province');
}

export async function queryCity(province) {
  return request(`/api/geographic/city/${province}`);
}
