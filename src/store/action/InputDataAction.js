

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
