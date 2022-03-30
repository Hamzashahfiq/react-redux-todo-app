
const initialState = "aa";


export default function InputDataReducer(state = initialState, action) {
    switch (action.type) {
        case INPUTDATA: {
            return state
        }
        default:
            return state;
    }
}
