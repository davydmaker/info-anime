import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Pesquisar from './pages/pesquisar'
import Info from './pages/info'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/pesquisar/:str' exact component={Pesquisar} />
                <Route path='/info/:id' exact component={Info} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes