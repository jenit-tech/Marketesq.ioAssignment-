import {Switch} from 'react-router-dom'

import Home from './components/Home'
import BookingOne from './components/BookingOne'
import Payment from './components/Payment'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/bookingone" component={BookingOne} />
    <ProtectedRoute exact path="/payment" component={Payment} />
  </Switch>
)

export default App
