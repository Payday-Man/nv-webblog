import Vue from 'vue'
import Router from 'vue-router'

//User
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
//Authen
import Login from '@/components/Login'

//Comments
import CommentIndex from '@/components/Comments/Index'

//Blogs
import BlogIndex from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogShow from '@/components/Blogs/ShowBlog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      //authen
        path: '/login',
        name: 'login',
        component: Login
      },
      //user
      {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    

    //Blog
    {
      path: '/blogs',
      name: 'blog-edit',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blogs-edit',
      component: BlogCreate
    },
    { 
      path: '/blog/edit/:blogId',
      name: 'blogs-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
    },
    

    //Comments
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    }
  ]
})
