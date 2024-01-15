import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // action : redecuer function
        addItem: (state, action) => {
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        // originalstate = { items: ["pizza"] }
        clearCart: (state) => {  // [pizza]  // state is a local variable
            console.log(state);  // [pizza]  // we can't read the state directly like this
            console.log(current(state));  // this will print properly
            // state = [];   // this just makes the local var empty
            // console.log(state);  // console will give state = [] but in reality the cart won't get empty as we've just updated the local var
            // state.items.length = 0; // we can also do return { items: [] };
            return { items: [] };

            // RTK - either mutate the existing state or return a new state
        }

    }
}
);

export const{ addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;