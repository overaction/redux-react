// createStore 함수에서 리듀서 함수는 하나만 사용할 수 있기 때문에
// combineReducers를 사용해서 하나로 합쳐줌
import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;