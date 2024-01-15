import { useEffect, useState } from "react";

const useOnlineStatus = () =>
{
    const [onlineStatus, setOnlineStatus] = useState(true); // onlineStatus var keeps track if my internet is working

    // check if online
    // using event listener

    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnlineStatus(false);

        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);

        });
    },[]);


    // boolean value
    return onlineStatus;
}

export default useOnlineStatus;