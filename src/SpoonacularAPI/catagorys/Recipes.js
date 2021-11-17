import SpoonacularAPI from '../SpoonacularAPI.js';

export default class Recipes extends SpoonacularAPI {
  constructor() {
    super();
    this.category = 'recipes';
  }

  complexSearch(params, callback) {
    params = this.validateParams(params);
    this.req.getData(`/${this.category}/complexSearch?apiKey=${this.apiKey}${params}`).then((res) => {
      callback(res);
    });
  }

  findByNutrients(params, callback) {
    params = this.validateParams(params);
    this.req.getData(`/${this.category}/findByNutrients?apiKey=${this.apiKey}${params}`).then((res) => {
      callback(res);
    });
  }
}
