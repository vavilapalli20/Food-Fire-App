// named import
import { CDN_URL } from "../utils/constants";

// JS Object
// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }

const RestaurantCards = (props) => {
    const {resData} = props;

    console.log(resData);
    
    // optional chaining ?.
    // const {cloudinaryImageId, name, avgRating, deliveryTime, cuisines  } = resData?.data;
    const {cloudinaryImageId, name, avgRating, deliveryTime, cuisines  } = resData;

    return (
        <div data-testid="resCard" className="m-4 p-4 w-[240px] rounded-lg bg-orange-500 hover:bg-yellow-300 "> 
            <img className ="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            {/* <h3>{props.name}</h3>
            <h4>{props.cuisine}</h4> */}
            {/* <h3>{resData.data.name}</h3>
            <h4>{resData.data.avgRating}</h4>
            <h4>{resData.data.deliveryTime + " minutes"}</h4>
            <h4>{resData.data.cuisines.join(", ")}</h4> */}

            {/* AFTER DOING OPTIONAL CHAINING */}
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime + " minutes"}</h4>
            <h4>{cuisines.join(", ")}</h4>
        </div>
    )
};


// Higher Order Component -

export const cardWithPromotedLabel = (RestaurantCards) => {

    // returns a functional component
    return (props) => 
    {
        // component returns a JSX
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCards  {...props}/>
            </div>
        )
    }

}

export default RestaurantCards;