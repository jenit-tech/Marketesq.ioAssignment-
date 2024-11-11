import {IoStar} from 'react-icons/io5'
import Arjun from '../Images/Arjun.jpeg'
import './index.css'

const Discover = () => {
  return (
    <div id="discover" className="discover-container">
      <p className="discover-heading">Discover</p>

      <div className="discover-card-one">
        <div className="discover-card-two">
          <div className="discover-card-three">
            <img src={Arjun} className="discover-card-image" alt="" />
            <div className="discover-card-four">
              <p className="discover-card-name">Arjun Raghav</p>
              <div>
                <IoStar className="golden-star" />
                <IoStar className="golden-star" />
                <IoStar className="golden-star" />
                <IoStar className="golden-star" />
                <IoStar className="golden-star" />
              </div>
            </div>
          </div>
          <p className="discover-card-paragraph">
            I am writing this after reflecting on my one month stay with
            Bricabin in Ladakh. Right from picking us up at the airport to
            dropping us back there after a month, Urgan was very responsible and
            took good care of my friends and me. Read more.
          </p>
        </div>

        <div className="discover-card-five">
          <div className="overlay-card">
            <div className="discover-card-five-one">
              <div className="discover-card-three">
                <img src={Arjun} className="discover-card-image" alt="" />
                <div className="discover-card-four">
                  <p className="discover-card-name">Arjun Raghav</p>
                  <div>
                    <IoStar className="golden-star" />
                    <IoStar className="golden-star" />
                    <IoStar className="golden-star" />
                    <IoStar className="golden-star" />
                    <IoStar className="golden-star" />
                  </div>
                </div>
              </div>
              <p className="discover-card-paragraph">
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me. Read more.
              </p>
            </div>
          </div>
        </div>

        <div className="discover-card-six">
          <div className="discover-card-six-a">
            <div className="discover-card-three">
              <img src={Arjun} className="discover-card-image" alt="" />
              <div className="discover-card-four">
                <p className="discover-card-name">Arjun Raghav</p>
                <div>
                  <IoStar className="golden-star" />
                  <IoStar className="golden-star" />
                  <IoStar className="golden-star" />
                  <IoStar className="golden-star" />
                  <IoStar className="golden-star" />
                </div>
              </div>
            </div>
            <p className="discover-card-paragraph">
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. Read more.
            </p>
          </div>

          <div className="discover-card-two">
            <div className="discover-card-three">
              <img src={Arjun} className="discover-card-image" alt="" />
              <div className="discover-card-four">
                <p className="discover-card-name">Arjun Raghav</p>
                <div>
                  <IoStar className="golden-star" />
                  <IoStar className="golden-star" />
                  <IoStar className="golden-star" />
                  <IoStar className="golden-star" />
                  <IoStar className="golden-star" />
                </div>
              </div>
            </div>
            <p className="discover-card-paragraph">
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. Read more.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
