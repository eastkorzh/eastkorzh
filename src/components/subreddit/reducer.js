const initialState = {

}

export default (state = { ...initialState }, actions) => {
  switch(actions.type) {
    case "lol":
      return {}
    default:
      return state;
  }
}