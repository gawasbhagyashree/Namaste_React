import RestaurantCard from "./RestaurantCard"


const RestaurantContainer = (props) => {

  const {restaurants} =props

    return (
      <>
  
        <div className="res-container">
  
          {restaurants.map((x) => {
            return (
              <RestaurantCard
  
                key={x.info.id}
                resData={x}
              />
            )
          })}
  
        </div>
  
      </>
  
    )
  }

  export default RestaurantContainer