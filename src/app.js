import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCards from "./components/RestaurantCards";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Link } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";


// we can also do the above code by destructuring it -
// const RestaurantCards = ({resName, cuisine}) => {
    // ...
    // <h3>{resName}</h3>
    // <h4>{cuisine}</h4>


    // const restaurantObj = {
    //             "type": "restaurant",
    //             "data": {
    //               "type": "F",
    //               "id": "322324",
    //               "name": "Biryani Blues",
    //               "uuid": "39978f7d-442b-4e07-ab4c-71fcc52021e3",
    //               "city": "10459",
    //               "area": "Sector 72",
    //               "totalRatingsString": "5000+ ratings",
    //               "cloudinaryImageId": "aid8xbkoxozzaxje8hap",
    //               "cuisines": [
    //                 "Biryani",
    //                 "Hyderabadi",
    //                 "Lucknowi",
    //                 "Kebabs",
    //                 "Desserts",
    //                 "Beverages"
    //               ],
    //               "tags": [
                    
    //               ],
    //               "costForTwo": 40000,
    //               "costForTwoString": "₹400 FOR TWO",
    //               "deliveryTime": 35,
    //               "minDeliveryTime": 35,
    //               "maxDeliveryTime": 35,
    //               "slaString": "35 MINS",
    //               "lastMileTravel": 5,
    //               "slugs": {
    //                 "restaurant": "biryani-blues-sector-50-sector-50",
    //                 "city": "noida-1"
    //               },
    //               "cityState": "10459",
    //               "address": "Shop no. 4, Ground Floor, Sunder Farm House  & Shopping Complex, Sarafabad Village, Noida Sector -73",
    //               "locality": "Sarfabad",
    //               "parentId": 13813,
    //               "unserviceable": false,
    //               "veg": false,
    //               "select": false,
    //               "favorite": false,
    //               "tradeCampaignHeaders": [
                    
    //               ],
    //               "ribbon": [
    //                 {
    //                   "type": "PROMOTED"
    //                 }
    //               ],
    //               "chain": [
                    
    //               ],
    //               "feeDetails": {
    //                 "fees": [
    //                   {
    //                     "name": "distance",
    //                     "fee": 5400,
    //                     "message": ""
    //                   },
    //                   {
    //                     "name": "time",
    //                     "fee": 0,
    //                     "message": ""
    //                   },
    //                   {
    //                     "name": "special",
    //                     "fee": 0,
    //                     "message": ""
    //                   }
    //                 ],
    //                 "totalFees": 5400,
    //                 "message": "",
    //                 "title": "Delivery Charge",
    //                 "amount": "5400",
    //                 "icon": ""
    //               },
    //               "availability": {
    //                 "opened": true,
    //                 "nextOpenMessage": "",
    //                 "nextCloseMessage": ""
    //               },
    //               "longDistanceEnabled": 0,
    //               "rainMode": "NONE",
    //               "thirdPartyAddress": false,
    //               "thirdPartyVendor": "",
    //               "adTrackingID": "cid=7025858~p=1~eid=00000188-a130-3092-0cff-4b3b0067010f",
    //               "badges": {
    //                 "imageBased": [
                      
    //                 ],
    //                 "textBased": [
                      
    //                 ],
    //                 "textExtendedBadges": [
                      
    //                 ]
    //               },
    //               "lastMileTravelString": "5 kms",
    //               "hasSurge": false,
    //               "aggregatedDiscountInfoV3": {
    //                 "header": "₹125 OFF",
    //                 "subHeader": "ABOVE ₹249",
    //                 "discountTag": "FLAT DEAL",
    //                 "headerTypeV2": 0
    //               },
    //               "sla": {
    //                 "restaurantId": "322324",
    //                 "deliveryTime": 35,
    //                 "minDeliveryTime": 35,
    //                 "maxDeliveryTime": 35,
    //                 "lastMileTravel": 5,
    //                 "lastMileDistance": 0,
    //                 "serviceability": "SERVICEABLE",
    //                 "rainMode": "NONE",
    //                 "longDistance": "NOT_LONG_DISTANCE",
    //                 "preferentialService": false,
    //                 "iconType": "EMPTY"
    //               },
    //               "promoted": true,
    //               "avgRating": "3.9",
    //               "totalRatings": 5000,
    //               "new": false
    //             },
    //             "subtype": "basic"
    // };


    // LAZY LOADING
    const Grocery = lazy(() => import("./components/Grocery"))


const AppLayout = () =>{

  // Authentication
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    // make an API call and send username and password
    const data = {
      name: "Divya"
    };

    setUserInfo(data.name);

  }, []);

    return (
      <Provider store={appStore}>
      {/* // winding the local state variable with the user context
      // whenever the state var changes, it changes the user context  */}
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo}}> 
        <div className="app">
            <Header/>
            <Outlet />
        </div>
      </UserContext.Provider>
      </Provider>
    )
}





// for routing configurations
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path:"/grocery",
          element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />
        },
        {
          path: "/cart",
          element: <Cart />
        }

    ],
    errorElement: <Error />

  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />)