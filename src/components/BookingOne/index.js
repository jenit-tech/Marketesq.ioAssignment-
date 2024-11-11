import {Component} from 'react'
import Header from '../Header'
import {FaCirclePlus} from 'react-icons/fa6'
import {LuMinusCircle} from 'react-icons/lu'
import {Link} from 'react-router-dom'

import Payment from '../Payment'
import './index.css'

class BookingOne extends Component {
  state = {
    count: 1,
    name: '',
    email: '',
    number: '',
    adult: '',
    children: '',
    checkIn: '',
    checkOut: '',
  }

  onclickDecrease = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  onclickIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onchangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }
  onchangeNumber = event => {
    this.setState({
      number: event.target.value,
    })
  }

  onchangeEmail = event => {
    this.setState({
      email: event.target.value,
    })
  }

  onchangeAdult = event => {
    this.setState({
      adult: event.target.value,
    })
  }

  onchangeNameChildren = event => {
    this.setState({
      children: event.target.value,
    })
  }

  onChangeCheckOut = event => {
    this.setState({
      checkOut: event.target.value,
    })
  }

  onChangeCheckIn = event => {
    this.setState({
      checkIn: event.target.value,
    })
  }

  render() {
    const {count, name, email, number, adult, children, checkOut, checkIn} =
      this.state
    return (
      <>
        <Header />
        <div className="bookingone-container">
          <div className="bookingone-content">
            <div className="bookingone-center">
              <div className="booking-card">
                <div className="booking-input-card-one">
                  <input
                    className="input"
                    type="text"
                    onChange={this.onchangeName}
                  />
                </div>
                <div className="booking-input-card">
                  <input
                    className="input"
                    type="tel"
                    onChange={this.onchangeNumber}
                  />
                </div>
              </div>

              <div className="booking-card">
                <div className="booking-input-card">
                  <input
                    className="input-two"
                    type="email"
                    onChange={this.onchangeEmail}
                  />
                </div>
                <div className="booking-two-input-card">
                  <input
                    className="input-people"
                    type="text"
                    onChange={this.onchangeAdult}
                  />
                  <input
                    className="input-people"
                    type="text"
                    onChange={this.onchangeNameChildren}
                  />
                </div>
              </div>
            </div>

            <div className="card-four">
              <div className="card-four-a">
                <p className="card-four-heading">CHECK-IN</p>
                <input
                  type="date"
                  placeholder="01 feb 2022"
                  className="input-field"
                  onChange={this.onChangeCheckIn}
                />
              </div>
              <div className="card-four-b">
                <p className="card-four-heading">CHECK-OUT</p>
                <input
                  type="date"
                  className=""
                  onChange={this.onChangeCheckOut}
                />
              </div>
              <div className="card-four-c">
                <p className="card-four-heading">ROOMS</p>
                <div className="card-four-d">
                  <button
                    className="mius-button"
                    onClick={this.onclickDecrease}
                  >
                    <LuMinusCircle />
                  </button>
                  <p className="card-four-description">{count}</p>
                  <button
                    className="plus-button"
                    onClick={this.onclickIncrease}
                  >
                    <FaCirclePlus />
                  </button>
                </div>
              </div>

              <div>
                <Link
                  to={{
                    pathname: '/payment',
                    state: {
                      name,
                      email,
                      number,
                      adult,
                      children,
                      checkOut,
                      checkIn,
                      count,
                    },
                  }}
                >
                  <button className="booking-button">12430</button>
                </Link>

                <p className="pay-paragraph"> Click to pay token amount</p>
              </div>
            </div>
          </div>
        </div>

        <Payment
          name={name}
          email={email}
          number={number}
          adult={adult}
          children={children}
        />
      </>
    )
  }
}

export default BookingOne
