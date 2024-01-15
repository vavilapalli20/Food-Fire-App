import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case", () => {

    beforeAll(() => {
        console.log("Before All")
    })

    beforeEach(() => {
        console.log("Before Each")
    })

    afterAll(() => {
        console.log("After All")
    })

    afterEach(() => {
        console.log("After Each")
    })

    test("Should load Contact Us Component", () => {

        render(<Contact />)
    
        // check whether the heading is rendered correctly or not
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    
    })
    // test can also be called "it"
    it("Should load button in Contact Us Component", () => {
    
        render(<Contact />)
    
        const button = screen.getByRole("button");
        //  const button = screen.getByText("Submit");
    
        // check whether the button is rendered or not
        // Assertion 
        expect(button).toBeInTheDocument();
    
    })
    
    test("Should load input name in Contact Us Component", () => {
    
        render(<Contact />)
    
        const input = screen.getByPlaceholderText("Name");
    
        // check whether the input text in placeholder is present
        // Assertion 
        expect(input).toBeInTheDocument();
    
    })
    
    test("Should load inputBoxes on contact us page", () => {
    
        render( <Contact />)
    
        // Querying - returns a piece of JSX
        const inputBoxes = screen.getAllByRole("textbox");
    
        console.log(inputBoxes.length);
        
        expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);
    })

});

