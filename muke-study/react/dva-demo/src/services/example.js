import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function login() {
  return request('/api/login')
}

export function list() {
  return request('/api/list')
}

export function details(params) {
  console.log(params);
  return request('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
}