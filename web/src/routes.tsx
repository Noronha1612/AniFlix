import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import SignIn from './Pages/SignIn';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/login" exact component={ SignIn } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;