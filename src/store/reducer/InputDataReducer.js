import { v4 as uuidv4 } from 'uuid';

const initialState = {taskDetail:[]};


export default function InputDataReducer(state = initialState, action) {
    switch (action.type) {
        case "INPUTDATA": {
            let jfdslak

             let newInputTask = [...state.taskDetail]
            return [...state,inputTask];
        }
        default:
            return state;
    }
}
