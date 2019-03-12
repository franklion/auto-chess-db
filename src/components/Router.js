import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/home/HomeContainer'
import Heros from '../pages/heros/HerosContainer'
import Races from '../pages/races/RacesContainer'


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/heros" component={Heros} />
            <Route path="/races" component={Races} />
        </Switch>
    </BrowserRouter>
)

export default Router