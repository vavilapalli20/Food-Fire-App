import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// Functional
// const About = () => {
//     return(
//         <div>
//             <h1> Welcome to About Us page</h1>
//             <User name={"Divya from Functional Component"}/>

//             <UserClass name={"Divya from Class Component"} location={"Lucknow Class"} />
//         </div>
//     )
// }

// export default About;


class About extends Component
{
    constructor(props)
    {
        super(props)

        console.log("Parent Constructor");
    }

    componentDidMount()
    {
        console.log("Parent Component Mounted")
    }

    render() 
    {
        console.log(" Parent Render()")
            return(
                <div>
                    <h1> Welcome to About Us page</h1>
                    {/* <User name={"Divya from Functional Component"}/> */}

                    <div>
                        loggedInUser 
                        <UserContext.Consumer>
                            {({loggedInUser}) => <h1 className="text-green-300 font-semibold"> {loggedInUser}</h1>}
                        </UserContext.Consumer>
                    </div>
        
                    <UserClass name={"Divya from Class Component"} location={"Lucknow Class"} />
                    {/* <UserClass name={"Tanya from Class Component"} location={"Delhi Class"} /> */}
                </div>
            )
        }

}
 
export default About;
