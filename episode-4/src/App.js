/**
 *  COMPONENTS:
 * Header
 * -Logo
 * -Nav Items
 * 
 * Body
 * -Search
 * -RestaurantContainer
 * -RestaurantCard
 * 
 * Footer
 * -Copyright
 * -Links
 * 
 */


/**
 * Writing style components 
 * props => arguments to a function
 */

import './App.css';
import logo from './logo.png'


const styleCard = {
  backgroundColor: 'yellow'
}

export const Logo = () => {
  return (
    <>
      <img src={logo} className='logo-image' alt=''></img>
      <div className='app-name' style={styleCard}> Namaste Food Order</div>

      <div style={{ backgroundColor: 'red' }}> This is inLine Style</div>
    </>

  )
}

const NavItems = () => {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </>
  )
}


const RestaurantCard = () => {
  return (
    <div className="res-card">

      <div className="image">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85cc0bea8e6459c35854eab427905c93" alt="" />
        <h3 className='image-txt'>Offer </h3>
      </div>

      <div className="res-info">

        <h3 className="res-name">Kebab Magic Roll</h3>

        <div className="rating">
          <ul>
          <li className="rating-item rating-image">3.9</li>
          <li className="rating-item rating-time">15-20 mins</li>
          </ul>
        </div>

        <h4 className='cuisine'>Birayni, North-Indian</h4>
      </div>



    </div>
  )

}

const RestaurantContainer = () => {
  return (
    <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />

    </div>

  )
}

export const Header = () => {
  return (
    <>
      <Logo />
      <NavItems />
      <RestaurantContainer />
    </>
  )

}



export default (<Header />)
