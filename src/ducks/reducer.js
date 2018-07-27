
const initialState = {
  username: "",
  id: "",
  image: ""
};


const  UPDATE_USER_NAME = 'UPDATE_USER_NAME';


export function updateUserName(username) {
  return {
    type: UPDATE_USER_NAME,
    payload: username
  }
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return Object.assign({}, state, { username: action.payload });
    default:
      return state;
  }
};
