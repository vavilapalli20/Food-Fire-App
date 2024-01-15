import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils"
import useOnlineStatus from '../useOnlineStatus';

it("Should load the login button in Header component", () => {

    render(
    // store will come from appStore
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", { name:"Login" });  // in case of multiple buttons
    

    expect(loginButton).toBeInTheDocument();
})


it("Should load the cart items in Header component", () => {

    render(
    // store will come from appStore
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");
    // const cartItems = screen.getByText("Cart (0)");  // in case of multiple buttons
    const cartItems = screen.getByText(/Cart/);  // using regex
    
    expect(cartItems).toBeInTheDocument();
})


it("Should change login button to logout in Header component", () => {

    render(
    // store will come from appStore
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name:"Login" }); 

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name:"Logout" }); 

    expect(logoutButton).toBeInTheDocument();
})


// it("Should check online status", async () => {

//     await act( async => render(
//         <BrowserRouter>
//         <Provider store={appStore}>
//         <Header /> 
//         </Provider>
//         </BrowserRouter>
//     ))

//     const status = screen.getByText(/Online Status/)

//     fireEvent.online(status);

//     expect(status).toBeInTheDocument()
// })


