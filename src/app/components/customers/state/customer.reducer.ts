const initialState = {
    customers: [
        {
            name: "Anderson Cooper",
            phone: "559-553-34234",
            address: "New York",
            membership: "Platinum",
            id: 1

        }
    ],
    loading: false,
    loaded: true
};

export function customerReducer(state = initialState, action: any) {
    switch(action.type) {
        case 'LOAD CUSTOMERS': {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }
        default: {
            return state;
        }
    }
}