import { createContext } from 'react';

interface GlobalContextInterface {
  activeBook: number | undefined;
  getActiveBook?: (id: number) => void;
}

const defaultState = {
  activeBook: 0,
  getActiveBook: (id: number) => {}
}

const globalContext = createContext<GlobalContextInterface>(defaultState);

export default globalContext;