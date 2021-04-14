import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ListTripsPage from './Pages/ListTripsPage';
import ApplicationFormPage from './Pages/ApplicationFormPage';
import LoginPage from './Pages/LoginPage';
import AdminHomePage from './Pages/AdminHomePage';
import TripDetailsPage from './Pages/TripDetailsPage';
import CreateTripPage from './Pages/CreateTripPage';
import ErrorPage from './Pages/ErrorPage';

const App = () =>  {
    return (
      <BrowserRouter>
        <Switch>

            <Route exact path="/">
              <HomePage/>
            </Route>

            <Route exact path="/listadeviagens">
              <ListTripsPage/>
            </Route>
        
            <Route exact path="/formulariodeaplicacao">
              <ApplicationFormPage/>
            </Route>
            
            <Route exact path="/paginadelogin">
              <LoginPage/>
            </Route>

            <Route exact path="/paginadoadm">
              <AdminHomePage/>
            </Route>

            <Route exact path="/detalhesdaviagem">
              <TripDetailsPage/>
            </Route>

            <Route exact path="/criarviagem">
              <CreateTripPage/>
            </Route>

            <Route>
              <ErrorPage/>
            </Route>

        </Switch>
      </BrowserRouter>
    )
}

export default App