import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons';

export const getAll = () => {
  return axios.get(baseUrl);
}
export const create = (personObject) => {
  return axios.post(baseUrl, personObject);
}
export const deleteItem = (person) => {
  return axios.delete(baseUrl+`/${person.id}`);
}
export const update = (personObject) => {
  return axios.put(`${baseUrl}/${personObject.id}`, personObject);
}