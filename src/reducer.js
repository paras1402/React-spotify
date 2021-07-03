export const initialState = {
  user: null,
  playlists: [],
  // discover_weekly
  playing: false,
  item: null,
  // token:
  //   "BQCbBMgVxJQGS6QKctn69JfDm4ouTZPDfxMmnG9f61JIhJ2HCCKCemK5tjUhopGNZoFdD9jDUo65YULE5sJtm4TRsOjSiTH7MH6woXEzljJSsbD1iahoNtoyTWsijakY-FETHWAyvMxPQSuNglVJHxwZh_CItzeeMFJQz4C0845dxLqA",
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

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
