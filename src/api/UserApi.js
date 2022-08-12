import axios from 'axios'

const User = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

export default User



