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
 * Passing and Receiving props
 * 
 * Config UI => fetching live data from Swiggy API
 *   - copying just one restaurant data into const resObj ={ }
 * 
 * 
 * 
 * Using template literals, && and ternary operator ?:: in h3 image-txt
 * 
 * writing img src where half string is constant and half is dynamic coming from API
 * => <img src= {`constant${dynamic}`} />
 * 
 * Destructuring
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

const resObj = {
  "restaurants": [
    {
      "info": {
        "id": "879217",
        "name": "Mr Phillys American Cheeseburgers",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/4/7d58ed0d-3830-4ac8-97fd-157fcae9e34d_879217.ss.jpg",

        /**
         * Actual image address https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/4/7d58ed0d-3830-4ac8-97fd-157fcae9e34d_879217.ss.jpg
         *  */

        "locality": "Kadubeesanahalli",
        "areaName": "Marathalli",
        "costForTwo": "₹540 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Biryani",
          "Fast Food",
          "Rolls & Wraps",
          "Turkish"
        ],
        "avgRating": 4.4,
        "parentId": "516779",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 9.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "9.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-14 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },

      },

    },
    {
      "info": {
        "id": "531381",
        "name": "Olio - The Wood Fired Pizzeria",
        "cloudinaryImageId": "tergaeovicova1ntvbyn",
        "locality": "Whitefield",
        "areaName": "Indiranagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Italian"
        ],
        "avgRating": 4.2,
        "parentId": "11633",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-14 05:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "100+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-f4ffbeda-4e5a-4603-9b7f-9cdbb9a208c3"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-whitefield-indiranagar-bangalore-531381",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
  ]
}


const RestaurantCard = (props) => {
  const { resData } = props

//Destructuring
const { name, avgRating, cuisines } = resData?.info || {};



  return (
    <div className="res-card">

      <div className="image">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`} alt="" />



        {/* <h3 className='image-txt'>{resData?.restaurants[0]?.info?.aggregatedDiscountInfoV3?.header + resData?.restaurants[0]?.info?.aggregatedDiscountInfoV3?.subHeader} </h3> */}

        <h3 className='image-txt'>
          {resData?.info?.aggregatedDiscountInfoV3?.header &&
            resData?.info?.aggregatedDiscountInfoV3?.subHeader
            ? `${resData.info.aggregatedDiscountInfoV3.header} ${resData.info.aggregatedDiscountInfoV3.subHeader}`
            : ''}


        </h3>
      </div>

      <div className="res-info">

        <h3 className="res-name">{name}</h3>

        <div className="rating">
          <ul>
            <li className="rating-item rating-image">{avgRating}</li>
            <li className="rating-item rating-time">{resData?.info?.sla?.slaString}</li>
          </ul>
        </div>

        <h4 className='cuisine'>{cuisines?.join(',  ')}</h4>
      </div>



    </div>
  )

}

const RestaurantContainer = () => {
  return (
    <div className="res-container">
      <RestaurantCard
        resData={resObj.restaurants[0]}
      />
      <RestaurantCard
       resData={resObj.restaurants[1]}

      />
      <RestaurantCard
        resName='Sharief Bhai'
        rating={4.2}
        time="15-20 mins"
        cuisine="Biryani, Kebabs"
        offer="30% off"
      />
      <RestaurantCard

        resName='Royal Biryani Kitchen'
        rating={3.3}
        time="30-35 mins"
        cuisine="Biryani, Chinese, Tandoor"
        offer="Rs. 70 off"
      />
      <RestaurantCard

        resName='Royal Biryani Kitchen'
        rating={3.3}
        time="30-35 mins"
        cuisine="Biryani, Chinese, Tandoor"
        offer="Rs. 70 off"
      />
      <RestaurantCard

        resName='Royal Biryani Kitchen'
        rating={3.3}
        time="30-35 mins"
        cuisine="Biryani, Chinese, Tandoor"
        offer="Rs. 70 off"
      />

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
