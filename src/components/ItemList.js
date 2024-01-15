// import { CDN_URL } from "../utils/constants";

// const ItemList = ({ items }) =>
// {
//     console.log(items);

//     return(
//         <div>
//             {items.map((item) => (
//                 <div key={item.card.info.id} className="p-2 m-2 border-slate-300 border-b-2 text-left flex justify-between">
                    
//                     <div className="p-4">
//                     <img src={CDN_URL + item.card.info.imageId}  className="h-auto max-w-lg"/>
//                     </div>
                    
//                     <div>
//                     <div className="py-2">
//                         <span className="p-2 font-semibold">{item.card.info.name}</span>
//                         <span className="p-2 ">₹{ item.card.info.price ? ((item.card.info.price)/100) : ((item.card.info.defaultPrice)/100)}</span>
                        
//                     </div>
//                     <p className="font-light text-xs m-2">{item.card.info.description}</p>
//                     </div>

                    

                    
//                 </div>
                
//             ))}
//         </div>
//     )
// }

// export default ItemList;

// ---------------------------------------------------

import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) =>
{
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    }

    return(
        <div>
            {items.map((item) => (
                <div 
                data-testid="foodItems"
                key={item.card.info.id} className="p-2 m-2 border-slate-300 border-b-2 text-left flex justify-between">
                    
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="p-2 font-semibold">{item.card.info.name}</span>
                            <span className="p-2 ">₹{ item.card.info.price ? ((item.card.info.price)/100) : ((item.card.info.defaultPrice)/100)}</span>
                        
                        </div>

                        <p className="font-light text-xs m-2">{item.card.info.description}</p>
                    </div>

                    
                    
                    <div className=" w-3/12 p-4">
                        <div className="absolute">
                            <button className="bg-white rounded-md shadow-lg text-green-500 font-semibold p-1 outline hover:outline-2 my-36 "
                            onClick={() => handleAddItem(item)}>
                                Add +

                            </button>
                        </div>

                        <img src={CDN_URL + item.card.info.imageId}  className="w-full"/>
                    </div>  
                </div>
                
            ))}
        </div>
    )
};

export default ItemList;