import './index.css'
import Header from '../Header'
import {useLocation} from 'react-router-dom'

import Footer from '../Footer'
import './index.css'

const Payment = () => {
  const location = useLocation()
  const {name, email, number, children, adult, checkOut, checkIn, count} =
    location.state || {}
  return (
    <>
      <Header />
      <div className="booking-one-container">
        <div className="booking-one-content">
          <div className="booking-one-center">
            <div className="payment-card-one">
              <h2>{name}</h2>
              <p>{email}</p>
              <p>{number}</p>
              <p>
                {' '}
                {adult} Adults And {children} Children{' '}
              </p>
            </div>
            <div className="payment-card-two">
              <img
                className="image-payment"
                src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                alt=""
              />
              <div>
                <h2>Order Complete</h2>
                <p>have questions?</p>
                <p>contact us</p>
              </div>
            </div>
          </div>

          <div className="card-four">
            <div className="card-four-a">
              <p className="card-four-heading">CHECK-IN</p>
              <p className="checkin">{checkIn}</p>
            </div>
            <div className="card-four-b">
              <p className="card-four-heading">CHECK-OUT</p>
              <p className="checkout">{checkOut}</p>
            </div>
            <div className="card-four-c">
              <p className="card-four-heading">ROOMS</p>
              <div className="card-four-d">
                <p className="card-four-description">{count}</p>
              </div>
            </div>

            <div>
              <button className="booking-button">12430</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Payment
