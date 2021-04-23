import thunk from 'react-redux-thunk';
import { applyMiddleware } from 'react-redux';
import { logger } from "./logger";

applyMiddleware (
        thunk,
        logger
)
