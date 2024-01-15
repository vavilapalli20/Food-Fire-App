import { render, screen } from "@testing-library/react"
import RestaurantCards from "../RestaurantCards"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with Data (props)", () => {

    // as restaurantCard component has a prop
    render(<RestaurantCards resData={MOCK_DATA} />)

    const restName = screen.getByText("Tunday Kababi (Aminabad)")

    expect(restName).toBeInTheDocument();
})


// it("Should render RestaurantCard component with Promoted Label", () => {

//     // as restaurantCard component has a prop
//     render(<RestaurantCards resData={MOCK_DATA} />)

//     const restName = screen.getByText("Tunday Kababi (Aminabad)")

//     expect(restName).toBeInTheDocument();
// })