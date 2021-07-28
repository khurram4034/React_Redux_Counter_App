const initialState = 0;

const changeNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENR":
            return (
                state + 1
            );

        case "DECREMENT":
            return (
                state - 1
            );

        case "RESET":
            return (
                state = initialState
            )   

        
    
        default:
            return state;
    }
}


export default changeNumber;