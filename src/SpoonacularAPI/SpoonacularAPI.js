import Requests from '../requests.js';

const API_ROOT = 'https://api.spoonacular.com';
const API_KEY = '';

export default class SpoonacularAPI {
  constructor() {
    this.root = API_ROOT;
    this.apiKey = API_KEY;
    this.req = new Requests(API_ROOT);
  }
  URLparams(values) {
    if (typeof values !== 'object') {
      throw new Error(
        'URL parameters must be passed in as an object of key: value pairs or an array eg: [ "param=value", "param=value" ]'
      );
    }
    let params = '';
    for (let key in values) {
      if (/^\d+$/.test(key)) {
        params += `&${values[key]}`;
      } else {
        params += `&${key}=${values[key]}`;
      }
    }
    console.log(params);
    return params;
  }

  validateParams(params) {
    if (
      (typeof params === 'string' && !params.includes('=')) ||
      (typeof params !== 'string' && typeof params !== 'object')
    ) {
      throw new Error(
        'Parameters can only be either a string eg: "param=value", key value pairs eg: { param: value } or an array of parameter strings eg: [ "param=value" ]'
      );
    }
    if (typeof params === 'object') {
      return this.URLparams(params);
    } else {
      return `&${params}`;
    }
  }
}
