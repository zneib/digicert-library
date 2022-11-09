import { useReducer } from 'react';
import { globalReducer } from './globalReducer';
import GlobalContext from './globalContext';

type Props = {
  children?: JSX.Element | JSX.Element[];
}

const GlobalState = ({ children }: Props) => {
  const intialState = {
    activeBook: 0,
  }

  const [state, dispatch] = useReducer(globalReducer, intialState);

  const getActiveBook = (id: number) => {
    dispatch({
      type: 'get_book_details',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        activeBook: state.activeBook,
        getActiveBook
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalState;