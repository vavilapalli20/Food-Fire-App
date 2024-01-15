import RestaurantMenu from "../RestaurantMenu"
import { act } from "react-dom/test-utils"
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})
it("Should load Reastaurant Menu Component", async () => {

    await act( async => 
        render(
            <BrowserRouter>
        <Provider store={appStore}> 
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
        </BrowserRouter>
        ))

        const accordianHeader = screen.getByText("Kebabs (3)");

        // clicking on accordianHeader
        fireEvent.click(accordianHeader);

        const foodItem = screen.getAllByTestId("foodItems");

        expect(foodItem.length).toBe(3);

        // For Add button testing

        const addBtns = screen.getAllByRole("button", { name: "Add +"});

        fireEvent.click(addBtns[0]);  // clicking on first Add + button, header should change

        const headerCart = screen.getByText("Cart (1)");

        expect(headerCart).toBeInTheDocument();


        fireEvent.click(addBtns[1]);

        const headerCart2 = screen.getByText("Cart (2)");

        expect(headerCart2).toBeInTheDocument();

        // we get 2 foodItems from Cart and 3 from Restaurant menu, so expect total 5 on Restaurant menu screen
        expect(screen.getAllByTestId("foodItems").length).toBe(5);


        // Clear Cart test case on Cart screen
        const clearBtn = screen.getByRole("button", { name: "Clear Cart"});

        expect(clearBtn).toBeInTheDocument();

        fireEvent.click(clearBtn);

        // on clearing cart, food items should decrease by 2 from cart in header 
        // so on restaurant menu screen the food items would be 3 in total now
        expect(screen.getAllByTestId("foodItems").length).toBe(3);

        const clearScreen = screen.getByText("Cart is empty! Add something to your cart");

        expect(clearScreen).toBeInTheDocument();

})