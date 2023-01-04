import axios from 'axios';

export function getAllPeople(page = 1, search = '') {
  const result = axios
    .get('https://swapi.dev/api/people/', { params: { page, search } })
    .then((res) => res.data)
    .catch((err) => err);
  return result;
}