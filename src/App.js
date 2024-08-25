import { Route } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Home} exact />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/sign-up' component={SignUp} />
    </div>
  );
}

export default App;
