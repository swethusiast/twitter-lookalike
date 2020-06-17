import thunk from 'redux-thunk';
import logger from './looger';
import { applyMiddleware } from 'redux';
export default applyMiddleware(thunk, logger);
