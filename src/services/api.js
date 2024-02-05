import axios from 'axios'
export const BASE_URL='https://naez-react-rides-b9658734aee9.herokuapp.com/'
const Client = axios.create({baseURL: BASE_URL})
export default Client