import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import Header from '../components/header/Header'


const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path='/login'>
                    <LoginPage/>
                </Route>

                <Route exact path='cadastro'>
                    <SignUpPage/>
                </Route>

                <Route exact path='/'>
                    <FeedPage/>
                </Route>

                <Route exact path='/post/:id'>
                    <PostPage/>
                </Route>

                <Route>
                    <div>Erro!</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router