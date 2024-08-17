
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
              "id": "65797",
              "name": "Leon's - Burgers & Wings (Leon Grill)",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg",
              "locality": "Koramangala",
              "areaName": "Koramangala",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "American",
                "Snacks",
                "Turkish",
                "Portuguese",
                "Continental"
              ],
              "avgRating": 4.5,
              "parentId": "371281",
              "avgRatingString": "4.5",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 04:00:00",
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
                "header": "ITEMS",
                "subHeader": "AT ₹99"
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
                  "rating": "4.4",
                  "ratingCount": "1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
          },
          {
            "info": {
              "id": "77949",
              "name": "Burger King",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG",
              "locality": "Gandhi Bazar",
              "areaName": "Basavanagudi",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.3,
              "parentId": "166",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 05:00:00",
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
                "header": "ITEMS",
                "subHeader": "AT ₹99"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
          },
          {
            "info": {
              "id": "770772",
              "name": "Olio - The Wood Fired Pizzeria",
              "cloudinaryImageId": "4b44c7921b1b6073a4ffa58b38f8def1",
              "locality": "Ali Askar Road",
              "areaName": "Cunningham Road",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Fast Food",
                "Snacks",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "11633",
              "avgRatingString": "4.3",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 05:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ],
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Gourmet",
                          "imageId": "newg.png"
                        }
                      }
                    ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
          },
          {
            "info": {
              "id": "23681",
              "name": "McDonald's",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/d2116933-061e-455a-8b98-de8da69e3ba2_23681.jpg",
              "locality": "Cmh Road",
              "areaName": "Indiranagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.4,
              "parentId": "630",
              "avgRatingString": "4.4",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 6.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "6.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 05:45:00",
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
                "header": "FREE ITEM"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "10892",
              "name": "Pizza Hut",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/b7a44079-4da0-44f4-95c8-5e5f58b7a082_10892.jpg",
              "locality": "Vani Vilas Road",
              "areaName": "Basavanagudi",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Pizzas"
              ],
              "avgRating": 4.1,
              "parentId": "721",
              "avgRatingString": "4.1",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 04:00:00",
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
                "header": "ITEMS",
                "subHeader": "AT ₹189"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "578378",
              "name": "Burgerama",
              "cloudinaryImageId": "1d52387b37dbec1712d0142aec3421a6",
              "locality": "2nd Stage",
              "areaName": "Indiranagar",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Fast Food",
                "American",
                "Beverages"
              ],
              "avgRating": 4.2,
              "parentId": "8993",
              "avgRatingString": "4.2",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 5.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 04:00:00",
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
                "header": "ITEMS",
                "subHeader": "AT ₹199"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "568703",
              "name": "Baking Bad - Pizza Delivery",
              "cloudinaryImageId": "75052e31499c23c43505cf1a601a2640",
              "locality": "Indiranagar",
              "areaName": "Indiranagar",
              "costForTwo": "₹650 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Fast Food",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "521053",
              "avgRatingString": "4.3",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 5.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 04:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Gourmet",
                          "imageId": "newg.png"
                        }
                      }
                    ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
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
                  "rating": "4.3",
                  "ratingCount": "5K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "93741",
              "name": "Subway",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/877b99a7-fdcc-40c6-a19a-684a746243aa_93741.jpg",
              "locality": "The Nexus Mall",
              "areaName": "Koramangala",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4,
              "parentId": "2",
              "avgRatingString": "4.0",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 5.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 05:45:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                        }
                      }
                    ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "826451",
              "name": "Pastas By Pizza Hut",
              "cloudinaryImageId": "67d17abfeb3a5da6103b9424f6dbe973",
              "locality": "Binmangala",
              "areaName": "Indiranagar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Pastas"
              ],
              "avgRating": 3.7,
              "parentId": "306806",
              "avgRatingString": "3.7",
              "totalRatingsString": "20+",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 6.1,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "6.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 04:00:00",
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
                "header": "ITEMS",
                "subHeader": "AT ₹149"
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
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {},
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "147682",
              "name": "McCafe by McDonald's",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/174c9b8a-4d87-4818-9fc1-b22dfcd5e8b8_147682.ss.jpg",
              "locality": "Indiranagar",
              "areaName": "Indiranagar",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Beverages",
                "Desserts"
              ],
              "avgRating": 3.6,
              "parentId": "8263",
              "avgRatingString": "3.6",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 05:45:00",
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
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "395215",
              "name": "McDonald's Gourmet Burger Collection",
              "cloudinaryImageId": "cvmfqvur1saikrlmj8ow",
              "locality": "CMH Road",
              "areaName": "Indiranagar",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.2,
              "parentId": "10761",
              "avgRatingString": "4.2",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 6.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 05:45:00",
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
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "718438",
              "name": "ENSO - Sourdough Pizza by Nomad",
              "cloudinaryImageId": "9e12e438906200daa8f401195ee43115",
              "locality": "SHREE COMPLEX",
              "areaName": "Commercial Street",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Pizzas",
                "Fast Food",
                "Desserts",
                "Salads",
                "Beverages"
              ],
              "avgRating": 4.1,
              "parentId": "77344",
              "avgRatingString": "4.1",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 04:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Gourmet",
                          "imageId": "newg.png"
                        }
                      }
                    ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "402710",
              "name": "WarmOven Cake & Desserts",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/d44b4cae-5218-49a6-8e55-76e44f3b0235_402710.JPG",
              "locality": "Millars Road",
              "areaName": "Vasanth Nagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Bakery",
                "Desserts",
                "Ice Cream",
                "Beverages"
              ],
              "avgRating": 4.1,
              "parentId": "9696",
              "avgRatingString": "4.1",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-24 00:00:00",
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
                "header": "ITEMS",
                "subHeader": "AT ₹99"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "688356",
              "name": "Go Zero Ice Creams & Desserts",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/23/abb8a1dc-ff69-4d04-b0a4-bf01b06b3156_688356.JPG",
              "locality": "BTM Layout",
              "areaName": "Koramangala",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Ice Cream",
                "Desserts",
                "Healthy Food"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "343689",
              "avgRatingString": "4.6",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 6.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 05:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ],
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "brand"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "408386",
              "name": "NOTO - Ice Creams & Desserts",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/ce20a80d-4d08-45ae-9ae8-bfb83e853343_408386.JPG",
              "locality": "Ejipura",
              "areaName": "Koramangla",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Ice Cream"
              ],
              "avgRating": 4.5,
              "veg": true,
              "parentId": "468478",
              "avgRatingString": "4.5",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 7.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "7.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-18 07:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "brand"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "767216",
              "name": "Boba Bhai",
              "cloudinaryImageId": "b0471f6ae8ec204260755f55d35c626e",
              "locality": "Rajajinagar",
              "areaName": "RAJAJINAGAR",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Bubble Tea",
                "Beverages",
                "Burgers",
                "Fast Food",
                "Street Food"
              ],
              "avgRating": 4.2,
              "parentId": "361235",
              "avgRatingString": "4.2",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 6.1,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "6.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-24 00:00:00",
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
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
                  "rating": "4.5",
                  "ratingCount": "6"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "409923",
              "name": "Kaati Zone Rolls & Wraps",
              "cloudinaryImageId": "cv0ebvdyhlxscaz5czpe",
              "locality": "Millars Road",
              "areaName": "Vasanth Nagar",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Fast Food",
                "Bengali",
                "Beverages",
                "Desserts"
              ],
              "avgRating": 3.7,
              "parentId": "248306",
              "avgRatingString": "3.7",
              "totalRatingsString": "500+",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-24 00:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
                }
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "403197",
              "name": "The Dessert Zone",
              "cloudinaryImageId": "c447c9ce7d0bbe78e46141e866236762",
              "locality": "Millars Road",
              "areaName": "Vasanth Nagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Bakery",
                "Desserts",
                "Ice Cream",
                "Beverages"
              ],
              "avgRating": 3.9,
              "parentId": "10414",
              "avgRatingString": "3.9",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-24 00:00:00",
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
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "485078",
              "name": "Momo Zone - The Momo Company",
              "cloudinaryImageId": "id5fx1e0ptdvgnyo8rwi",
              "locality": "Padmavathi Complex",
              "areaName": "Vasanth Nagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Chinese",
                "Tibetan",
                "Fast Food"
              ],
              "avgRating": 3.9,
              "parentId": "382343",
              "avgRatingString": "3.9",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-24 00:00:00",
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
                "header": "60% OFF",
                "subHeader": "UPTO ₹115",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
                }
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          },
          {
            "info": {
              "id": "402714",
              "name": "Indiana Burgers",
              "cloudinaryImageId": "lflq8ulpskdypnl2gbak",
              "locality": "Millars Road",
              "areaName": "Vasanth Nagar",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Burgers",
                "American",
                "Fast Food",
                "Beverages",
                "Desserts"
              ],
              "avgRating": 3.8,
              "parentId": "5714",
              "avgRatingString": "3.8",
              "totalRatingsString": "100+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-24 00:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                    "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
                }
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
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
      
          }
        ],
      
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
      
            {resObj.restaurants.map((x) => {
              return (
                <RestaurantCard
      
                  key={x.info.id}
                  resData={x}
                />
              )
            })}
      
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
      