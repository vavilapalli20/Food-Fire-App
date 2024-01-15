import React from "react";


// Class Component 
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);

    console.log(props);

    // state variable
    // this.state = {
    //     count: 0,
    //     count2: 1,
    // }

    // CREATING A LOCAL STATE VARIABLE TO FILL INFO FROM API

    this.state = {
        userInfo: {
            name: "Dummy data",
            location: "Default",
            // avatar_url: "https://dummy.com",
        }
    }

    console.log(this.props.name + " Child constructtor");
    }

    async componentDidMount()
    {
        console.log(this.props.name + " Child Component Mounted")

        // API Calls

        const data = await fetch("https://api.github.com/users/Divyaa268");
        const json = await data.json(); // using await here as it returns a promise


        // UPDATING THE STATE VARIABLE WITH DATA FROM API CALLS
        this.setState({
            userInfo: json,
        })


        console.log(json);


    }

    componentDidUpdate()
    {
        console.log("Component Updated")
    }


    componentWillUnmount()
    {
        console.log("Component will Unmount")
    }


    render() 
    {
        console.log(this.props.name + " Child Render()")
        // destructuring -
            // const { name, location } = this.props;

        // destructuring state variable -
        // const { count, count2} = this.state;

        const { login, url, avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
            {/* <h2>Name: {name}</h2>  */}


            {/* Updating the Count var */}
            {/* <h1> Count: {this.state.count}</h1>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 +1,
                }) */}

            {/* }}>Count Increases</button> */}

            {/* <h1> Count2: {this.state.count2}</h1> */}
            {/* <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3> */}

            <img src={avatar_url} />
            <h2>Name : {login}</h2>
            <h3>URL : {url}</h3>
            <h4>Contact: divyaad248@gmail.com</h4>

        </div>
        )
    }
}

export default UserClass;