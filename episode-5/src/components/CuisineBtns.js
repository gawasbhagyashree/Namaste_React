import { resObj } from "../utils/constants"
import { useRef } from 'react'
import { useState } from "react"


const CuisineBtns = (props) => {

    const { setSelectedCuisine } = props

    /* cuisines is an array inside of the restaurants array. 
     * To Get An Array of Cuisines, duplicates inclusive:
     */
    const allCusines = resObj.restaurants.reduce((acc, restaurant) => {
        return (
            acc.concat(restaurant.info.cuisines)
        )
    }, [])
    //? console.log(allCusines)

    /**To Get an Array of the Unique Cuisines  */
    const uniqueCuisines = allCusines.reduce((acc, cuisine) => {
        if (!acc.includes(cuisine)) {
            acc.push(cuisine)
        }
        return acc

    }, ['ALL']).sort()

    console.log("uniqueCuisines: " + uniqueCuisines)


    const reference = useRef(null)
    const [arrowDisable, setArrowDisable] = useState(true)

    const scroll = (distance) => {
        if (reference.current) {
            reference.current.scrollBy({
                left: distance,
                behavior: "smooth"
            });
            checkArrowDisable();
        } else {
            console.warn("reference.current is null");
        }
    };


    const checkArrowDisable = () => {
        setTimeout(() => {
            if (reference.current.scrollBy === 0) {
                setArrowDisable(true)
            }
            else {
                setArrowDisable(false)
            }
        }, 300)
    }

    return (
        <>
            <div
            >

                <div
                    className="cuisine-images-container"

                    ref={reference}>

                    {uniqueCuisines.map((cuisine) => {

                        return (
                            <div

                                key={cuisine}
                                onClick={() => setSelectedCuisine(cuisine)}
                                style={{ cursor: "pointer" }}>
                                {

                                    <>
                                        <div className="cuisine-image">

                                        </div>

                                        <div className="cuisine-name">
                                            {cuisine}
                                        </div>
                                    </>

                                    // <>
                                    //     <img
                                    //         src={`${cuisineBtns_Img_Url}${cuisineImage.imageId}`}
                                    //         alt={cuisineImage.accessibility.altText || cuisineImage.text}
                                    //     />
                                    //     <h3>{cuisineImage.action.text}</h3>
                                    // </>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="scrollable-btns-container">
                <button
                    className="left-btn"
                    onClick={() => scroll(-100)}
                    disabled={arrowDisable}>
                    Left
                </button>
                <button
                    className="right-btn"
                    onClick={() => scroll(100)}>
                    Right
                </button>
            </div>
        </>
    );
}

export default CuisineBtns
