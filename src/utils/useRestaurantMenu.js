import { useEffect, useState } from "react";
import { MENUAPI_URL } from "../utils/constants";

// takes resId and gives restInfo  // FETCH DATA
const useRestaurantMenu  = (resId) => 
{
    const [restInfo, setRestInfo] = useState(null); // using state variable to change value after api call

    // fetch data
    useEffect(() => {
        fetchData();
    }, []); // keeping [] empty as we want to fetch data only once

     
    const fetchData = async () => 
    {
        const data = await fetch(MENUAPI_URL + resId);
        const json = await data.json();

        setRestInfo(json.data); // updating with data fetched from API
    }

    return restInfo;

}

export default useRestaurantMenu;