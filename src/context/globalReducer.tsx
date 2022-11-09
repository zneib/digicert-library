interface GlobalState {
  activeBook: number | undefined;
}

interface GlobalAction {
  type: string;
  payload?: number;
}

export const globalReducer = (state: GlobalState, action: GlobalAction) => {
  switch(action.type) {
    case 'get_book_details':
      return {
        ...state,
        activeBook: action.payload
      }
    default:
      return state;
  }
};
