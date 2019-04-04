import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import User from '../components/user/User'

export default props =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users' component={User}/>
        <Route path='/404' component={Home} />
        <Redirect from='*' to='/404' />
    </Switch>
        