import { createStore } from 'redux';
import { githubReducer } from './reducer';

export const store = createStore(githubReducer);
