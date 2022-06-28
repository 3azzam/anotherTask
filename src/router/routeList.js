import Home from '../views/Home'
import ListCategories from '../views/Categories/list'
import QuestionsList from '../views/Questions'
import Score from '../views/Score'

export const routeList = [

    {
        path: '/',
        component: () => <Home />,
        exact: true,
        auth: false
    },
    {
        path: '/categories',
        component: () => <ListCategories />,
        exact: false,
        auth: true
    },
    {
        path: '/questions',
        component: () => <QuestionsList />,
        exact: false,
        auth: true
    },
    {
        path: '/score',
        component: () => <Score />,
        exact: false,
        auth: true
    },

]