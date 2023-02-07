const initialState={
    item:[],
    cart:[]
}

const cartReducer=(state=initialState,action)=>{
    switch (action.type){
        // case 'setitem':
        //     console.log("Item List Loaded",action.payload)
        //     return{
        //         ...state,
        //         item:action.payload
        //     }
        case 'add':
            // let sel=state.item.find((i)=>i.id===action.payload)
            console.log('Add to Cart',action.payload)
            // console.log("Selected",sel)
            return{
                ...state,
                cart:[...state.cart,action.payload]
                
            }
        case 'remove':
            let rem=state.cart.filter((i)=>i.id===action.payload.id)
            console.log("TO be removed",action.payload)
            console.log("removed",rem)
            return{
                ...state,
                

            }
        default:
            return{
                ...state
            }
    }
}
export default cartReducer