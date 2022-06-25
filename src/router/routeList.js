import Home from '../views/Home'
import ListCategories from '../views/Categories/list'
import ShowQuesion from '../views/Questions/show'

export const routeList = [

    {
        path: '/',
        component: () => <Home /> ,
        exact: true,
        auth: false
    },
    {
        path: '/categories',
        component: () => <ListCategories /> ,
        exact: false,
        auth: true
    },
    {
        path: '/question/:id',
        component: () => <ShowQuesion />,
        exact: false,
        auth: true
    },

]