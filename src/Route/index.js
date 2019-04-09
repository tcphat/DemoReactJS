import React from 'react';
import Login from '../Components/Login';
import { BrowserRouter as  Route } from 'react-router-dom';
import MainApp from '../Components/Main';
import PageNotFound from '../Components/PageNotFound';

export default ()=>{
    return (
    <Route>
        <Route exact path='/' component={Login}/>
        <Route path='/main' component={MainApp}/>
        <Route path={'*'} component={PageNotFound} />
    </Route>
    )
}
