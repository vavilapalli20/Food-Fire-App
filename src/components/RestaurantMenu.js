import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

// DISPLAY DATA
const RestaurantMenu = () => {

    // const [restInfo, setRestInfo] = useState(null);

    const { resId } = useParams();

    // Giving 0 as we want first category to be expanded
    const [showIndex, setShowIndex] = useState(null);


    // CUSTOM HOOK
    const restInfo = useRestaurantMenu(resId); 

    // COMMENTING OUT THIS CODE AS WE CREATED A CUSTOM HOOK FOR IT
    // useEffect( () => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => 
    // {
    //     // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6155712&lng=77.3848373&restaurantId=
    //     const data = await fetch(MENUAPI_URL + resId );
    //     const json = await data.json();

    //     console.log(json);

    //     setRestInfo(json.data);
    // };


    if(restInfo ===null)
    { 
        console.log("resInfo is NULL")
        return <Shimmer/>
    }

    // destructuring -
    const { cuisines, costForTwoMessage, name} = restInfo?.cards[0]?.card?.card.info;

    // const { itemCards } = restInfo?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card


    console.log(restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    
    const categories = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log("Categories--------" + categories);

    console.log(itemCards);

    return (
        <div className="text-center">
            <h2 className="font-bold my-5 text-2xl">{name}</h2>
            <h2 className="font-semibold my-4 text-emerald-500 text-xl">{cuisines.join(",")}</h2>
            <h3 className="font-semibold my-1 ">{costForTwoMessage}</h3>
            <h2>Menu</h2>
            {/* <ul> */}
                {/* {itemCards.map((item) => ( */}
                {/* <li key = {item.card.info.id}>  */}
                     {/* {item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>))} */}
                {/* <l1>{itemCards[0].card.info.name}</l1>
                <l1>{itemCards[1].card.info.name}</l1>
                <l1>{itemCards[2].card.info.name}</l1> */}
                {/* <li>Biryani</li>
                <li>Burgers</li> */}
            {/* </ul> */}

            {/* categories accordian */}
            {/* collected data from categories and now mapping it to a component */}
            {categories.map((category, index) =>   
            (
                // using data =, showItems, setShowIndex to send data to RestaurantCategory component
                <RestaurantCategory key={category?.card?.card.title} data = {category?.card?.card}
                showItems={index == showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                /> 
            ))}
        </div>
    )
}

// exporting restaurantmenu
export default RestaurantMenu;


// ---------------------------------------------------------------------------------


// import { useEffect, useState } from "react" // Named Import
// import Shimmer from "./Shimmer";
// import {MENUAPI_URL} from "../utils/constants"
// import { useParams } from "react-router-dom";

// const RestDetails =(props) =>{

//     console.log("Inside RestDetails")

//     // console.log(props.details)

//     return (<div className="menuItem">
//         <li>{props.details.name} <br></br> {props.details.price/100} Rupees</li>
//         </div>
//     )
// }
// const RestaurantMenu =() =>{

//     //State Varible, so that after fetching data we can update the dummy data.
//     const [resInfo,setresInfo] = useState(null)

//     // Fetching Details of the dynamic part of the path variable
//     const {resID} = useParams()


//     useEffect(()=>{ // First arguement callback function

//         fetchMenu();

//     },[]); //Call this function only after first render 

//     const fetchMenu = async()=>{

//         console.log("resId"+resID)

//          const data = await fetch(MENUAPI_URL+resID)

//          const json = await data.json();

//          //Checking if name fetched properly
//          console.log(json?.data?.cards[0]?.card?.card?.info.name)

//          setresInfo(json)

//          // filling the state variable with the API data
         


//     }

//     if(resInfo===null)
//     { console.log("resInfo is NULL")
//         return <Shimmer/>}

//     // Destructure
//     const{name,costForTwoMessage,cloudinaryImageId,cuisines} = resInfo?.data?.cards[0]?.card?.card?.info

//     const{itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
// const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//     // console.log(itemCards)

   

//     // if we do not have data in the state variable,
//     // show Shimmer, else show actual data
//     return (
//         <div className = "menu">
//             <h1>{name}</h1>
//             <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
//             <h3></h3>
//             <h2>Menu</h2>
//             <ul>

//                 {itemCards.map((currentItem)=>(
//                     <RestDetails key ={currentItem.card.info.id}  details = {currentItem.card.info}/>
//                 ))}
                

//             </ul>



//         </div>
//     )
// }
// export default RestaurantMenu