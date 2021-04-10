import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/login" exact component={ SignIn } />
                <Route path="/signup" exact component={ SignUp } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;