const initialState = {
    results: []
}
  
const produkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_PRODUCTS_FULFILLED':
            return {...state, results: action.payload.data}
        default:
            return state
    }
}

export default produkReducer