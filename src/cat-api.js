import axios from 'axios';

const url = 'https://api.thecatapi.com/v1';
const api_key =
  'live_i0tDaOGInqQ26rh7JUwZgUxN2ia9tgGfeQAmLlGg5e4sjZuijJKVoZO121TcrnQ9';

export function fetchBreeds() {
  return axios
    .get(`${url}/breeds`, {
      params: {
        api_key: api_key,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${url}/images/search`, {
      params: {
        api_key: api_key,
        breed_ids: breedId,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
      throw error;
    });
}
