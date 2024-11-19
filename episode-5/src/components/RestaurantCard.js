
import { IMG_URL } from '../utils/constants.js';

const RestaurantCard = (props) => {
    const { resData } = props

    //Destructuring
    const { name, avgRating, cuisines } = resData?.info || {};


    return (

        <div className="res-card">


            <div className="image">
                {resData?.info?.cloudinaryImageId ? (
                    <img src={`${IMG_URL}${resData.info.cloudinaryImageId}`} alt={name} />
                ) : (
                    <p>Image not available</p>
                )}


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
                        <li className="rating-item rating-image">{avgRating ? (avgRating) : "No Rating"}</li>
                        <li className="rating-item rating-time">{resData?.info?.sla?.slaString}</li>
                    </ul>
                </div>

                <h4 className='cuisine'>{cuisines?.join(',  ')}</h4>
            </div>
        </div>
    )

}

export default RestaurantCard