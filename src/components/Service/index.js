import './index.css'
import {MdSignalWifiStatusbarConnectedNoInternet} from 'react-icons/md'
import {MdOutlineNoMeals} from 'react-icons/md'
import {TiHome} from 'react-icons/ti'
import {MdEmojiTransportation} from 'react-icons/md'
import {IoMdBicycle} from 'react-icons/io'
import {GiFoldedPaper} from 'react-icons/gi'
import {LiaFlag} from 'react-icons/lia'
import {FaCartShopping} from 'react-icons/fa6'

const Service = () => {
  return (
    <div id="service" className="service-container">
      <p className="discover-heading"> Services</p>
      <div className="service-card-one">
        <div className="service-card-two">
          <div className="service-card-three">
            <MdSignalWifiStatusbarConnectedNoInternet className="internet" />
            <h2 className="service-h2">High Speed Internet</h2>
            <p className="service-p ">
              Optical fiber connections provided in not only in your cabins but
              rather to all of the BriSphere scenic working spaces and dinning
              areas.
            </p>
          </div>

          <div className="service-card-three">
            <MdOutlineNoMeals className="meals" />
            <h2 className="service-h2">Healthy Meals</h2>
            <p className="service-p ">
              A healthy breakfast and pleasant dinner will be serviced at your
              space every single day for your entire duration of stay with
              option of paid order within BriSphere.
            </p>
          </div>

          <div className="service-card-three">
            <TiHome className="home" />
            <h2 className="service-h2">Homely Stay</h2>
            <p className="service-p ">
              Designed for working professionals with spacious interiors,
              comfortable beds and sleekly attached kitchen are some of the
              comforts providedin your space.
            </p>
          </div>
        </div>

        <div className="service-card-two">
          <div className="service-card-three">
            <MdEmojiTransportation className="transportation" />
            <h2 className="service-h2">Transportation</h2>
            <p className="service-p ">
              Optical fiber connections provided in not only in your cabins but
              rather to all of the BriSphere scenic working spaces and dinning
              areas.
            </p>
          </div>

          <div className="service-card-three">
            <IoMdBicycle className="delivery" />
            <h2 className="service-h2">Food Delivery</h2>
            <p className="service-p ">
              Optical fiber connections provided in not only in your cabins but
              rather to all of the BriSphere scenic working spaces and dinning
              areas.
            </p>
          </div>

          <div className="service-card-three">
            <GiFoldedPaper className="tourism" />
            <h2 className="service-h2">Tourism</h2>
            <p className="service-p ">
              Optical fiber connections provided in not only in your cabins but
              rather to all of the BriSphere scenic working spaces and dinning
              areas.
            </p>
          </div>
        </div>

        <div className="service-card-two">
          <div className="service-card-three">
            <LiaFlag className="job" />
            <h2 className="service-h2">Job</h2>
            <p className="service-p ">
              Optical fiber connections provided in not only in your cabins but
              rather to all of the BriSphere scenic working spaces and dinning
              areas.
            </p>
          </div>

          <div className="service-card-three">
            <MdEmojiTransportation className="transportation" />
            <h2 className="service-h2">Rental Service</h2>
            <p className="service-p ">
              Optical fiber connections provided in not only in your cabins but
              rather to all of the BriSphere scenic working spaces and dinning
              areas
            </p>
          </div>

          <div className="service-card-three">
            <FaCartShopping className="online" />
            <h2 className="service-h2">Online Shop</h2>
            <p className="service-p ">
              Optical fiber connections provided in not only in your cabins but
              rather to all of the BriSphere scenic working spaces and dinning
              areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
