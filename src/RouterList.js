import React from 'react'
import {Route, Switch } from 'react-router-dom'
import {View, WishList} from './screens'

// The RouterList component renders one of the two provided
const RouterList = () => (
    <Switch>
      <Route exact path='/' component={View}/>
      <Route path='/wishlist' component={WishList}/>
    </Switch> 
)

export default RouterList;