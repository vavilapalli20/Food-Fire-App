import { useState } from "react";

// Functional Component
const User = (props) => {
// const User = ({name}) => {

    const [count] = useState(0);
    const [count2] = useState(1);

    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {props.name}</h2>
            {/* Destructuring */}
            {/* <h2>Name: {name}</h2> */}
            <h3>Location: Lucknow</h3>
            <h4>Contact: divyaad248@gmail.com</h4>

        </div>
    )
}

export default User;