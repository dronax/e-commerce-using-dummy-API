export const addcart=(item)=>{
    return{
        type:'add',
        payload:item
    }
}

export const setitem=(items)=>{
    return{
        type:'setitem',
        payload:items
    }
}
export const remitem=(item)=>{
    return{
        type:'remove',
        payload:item
    }
}