import { createRouter, createWebHistory } from "vue-router";
import UserIndex from './components/UserIndex'
import UserCreate from './components/userform/UserCreate'
import UserInfo from './components/userform/UserInfo'

const routes = [
	{
		path: '/',
		name: 'user.index',
        component: UserIndex,
    },
    {
        path:'/create',
        name:'user.create',
        component: UserCreate
    },
    {
        path:'/info/:id',
        name:'user.info',
        component:UserInfo,
        props:true

    },
  
]
export default createRouter({
	history: createWebHistory(),
	routes
})