import {Component} from 'react'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaCirclePlus} from 'react-icons/fa6'
import {LuMinusCircle} from 'react-icons/lu'
import {Link} from 'react-router-dom'

import mountain from '../Images/mountain.jpeg'

import Header from '../Header'
import Discover from '../Discover'
import Service from '../Service'
import Footer from '../Footer'

import './index.css'

class Home extends Component {
  state = {
    count: 1,
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

  render() {
    const {count} = this.state

    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <div className="home-card-one">
              <h1 className="home-heading">
                Work from <br /> Ladakh
              </h1>
              <p className="home-description">
                India’s first true digital tourism ecosystem
              </p>
              <div className="home-card-two">
                <FaFacebook className="facebook" />
                <AiFillInstagram className="instagram" />
              </div>
            </div>
            <div className="card-three">
              <img src={mountain} alt="Mountain" className="image-one" />
            </div>
          </div>

          <div className="card-four">
            <div className="card-four-a">
              <p className="card-four-heading">CHECK-IN</p>
              <input type="date" className="input-field" />
            </div>
            <div className="card-four-b">
              <p className="card-four-heading">CHECK-OUT</p>
              <input type="date" className="input-field" />
            </div>
            <div className="card-four-c">
              <p className="card-four-heading">ROOMS</p>
              <div className="card-four-d">
                <button className="mius-button" onClick={this.onclickDecrease}>
                  <LuMinusCircle />
                </button>

                <p className="card-four-description">{count}</p>
                <button className="plus-button" onClick={this.onclickIncrease}>
                  <FaCirclePlus />
                </button>
              </div>
            </div>
            <Link to="/bookingone">
              <button className="booking-button">Book</button>
            </Link>
          </div>

          <Discover />
          <Service />
        </div>
        <Footer />
      </>
    )
  }
}
export default Home
