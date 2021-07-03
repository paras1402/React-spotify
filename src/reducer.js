export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    "BQCbBMgVxJQGS6QKctn69JfDm4ouTZPDfxMmnG9f61JIhJ2HCCKCemK5tjUhopGNZoFdD9jDUo65YULE5sJtm4TRsOjSiTH7MH6woXEzljJSsbD1iahoNtoyTWsijakY-FETHWAyvMxPQSuNglVJHxwZh_CItzeeMFJQz4C0845dxLqA",
};

const reducer = (state, action) => {
  console.log("action", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
