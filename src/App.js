import UserRegistration from './components/UserRegistration/UserRegistration';
import UserLogin from './components/UserLogin/UserLogin';
import HomePage from './components/homepage/HomePage';
import CometCallUI from './components/CometCallUI/CometCallUI';
import {Switch,Route} from 'react-router-dom';

function App() {


  return (
    <div>
    <h1>Welcome to cometcall</h1>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/signup' component={UserRegistration} />
    <Route exact path='/login' component={UserLogin} />
    <Route exact path='/cometcallui' component={CometCallUI} />
    </Switch>
    </div>
  );
}

export default App;