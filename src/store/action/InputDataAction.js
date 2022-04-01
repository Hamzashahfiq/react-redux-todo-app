

export function InputDataAction(inputTask) {
  return {
    type: "INPUTDATA",
    payload: inputTask
  }
}

export function CompTask(CompletedTask) {
  return {
    type: "COMPLETEDTASK",
    payload: CompletedTask
  }
}
export function UnCompTask(unCompletedTask) {
  return {
    type: "UNCOMPLETEDTASK",
    payload: unCompletedTask
  }
}
export function TaskDeleteHandler(deletedId) {
  return {
    type: "DELETEHANDLER",
    payload: deletedId
  }
}
export function CompDeleteHandler(deletedId) {
  return {
    type: "COMPDELETEHANDLER",
    payload: deletedId
  }
}
export function UpdateHandler(updateData) {
  return {
    type: "UPDATEHANDLER",
    payload: updateData
  }
}
export function SetUpdateHandler(UpdatedData) {
  return {
    type: "SETUPDATEHANDLER",
    payload: UpdatedData
  }
}
export function showRightBarTask(taskData) {
  return {
    type:"RIGHTBARTASK",
    payload: taskData
  }
}
