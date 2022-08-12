import axios from 'axios'

const Address = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

export default Address



