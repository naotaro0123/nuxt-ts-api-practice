import axios from 'axios';

class DogApi {
  private apiBase: string;

  constructor() {
    this.apiBase = 'https://dog.ceo/api';
  }

  breeds() {
    return axios
      .get(`${this.apiBase}/breeds/list/all`)
      .then(json => {
        return json.data.message;
      })
      .catch(e => ({ error: e }));
  }

  dogs(breed: string) {
    return axios
      .get(`${this.apiBase}/breed/${breed}/images`)
      .then(json => {
        return json.data.message.map((d: any) => {
          return {
            url: d,
            like: 0
          };
        });
      })
      .catch(e => ({ error: e }));
  }
}

const dogApi = new DogApi();
export default dogApi;
