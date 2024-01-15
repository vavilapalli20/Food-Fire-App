import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockRestListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";

// here the dummy fetch function is exactly like the fetch which the browser gives us
// global is a global object // defining our own dummy function for fetch which will return a promise 
// fetch function will resolve with a json
// json is a function that returns a Promise.resolve which has data

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

// INTEGRATION TESTING -

// act returns a promise so are awating for that
// act takes a callback function
it("Should Search Restaurant List for burger on Body component", async () => {

    await act(async () => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>))


    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect(cardsBeforeSearch).toBe(20);


    const searchBtn = screen.getByRole("button", {name: "Search"})

    const searchInput = screen.getByTestId("searchInput");

    console.log(searchBtn);

    fireEvent.change(searchInput, { target: { value: "burger" }})

    fireEvent.click(searchBtn);

    // screen should load 4 cards when we search with input "burger"
    const resCards = screen.getAllByTestId("resCard");

    expect(resCards.length).toBe(4);

    expect(searchBtn).toBeInTheDocument();
})

// Testing Top Rated Restaurant
it("Should filter Top Rated Restaurants", async () => {

    await act( async() =>
    render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"}) 

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(13);

})