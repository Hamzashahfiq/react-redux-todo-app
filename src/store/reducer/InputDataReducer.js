const initialState = {
    taskDetail:[],
    completedTask:[],
    showTask:false,
};


export default function InputDataReducer(state = initialState, action) {
    switch (action.type) {
        case "INPUTDATA": {
             let newInputTask = [...state.taskDetail,action.payload]
            return {
                ...state,
                taskDetail:newInputTask,
                showTask:true,
            }
        }
        case "COMPLETEDTASK":{
           let  newTaskDetail =  state.taskDetail.filter((item)=> item.id !== action.payload.id)
           let  newCompletedTask = [...state.completedTask,action.payload]
           return {
            ...state,
            taskDetail:newTaskDetail,
            completedTask:newCompletedTask
          }
        
        }
        case "UNCOMPLETEDTASK":{
           let   newCompletedTask=  state.completedTask.filter((item)=> item.id !== action.payload.id)
           let  newTaskDetail = [...state.taskDetail,action.payload]
           return {
            ...state,
            taskDetail:newTaskDetail,
            completedTask:newCompletedTask
          }
        
        }
        default:
            return state;
    }
}
