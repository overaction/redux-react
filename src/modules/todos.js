import {createAction,handleActions} from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

/*
export const changeInput = (input) => ({
    type: CHANGE_INPUT,
    input
});
*/
export const changeInput = createAction(CHANGE_INPUT,input => input);

let id = 3; //insert가 호출 될 떄마다 1씩 +
/*
export const insert = (text) => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});
*/
export const insert = createAction(INSERT,text => ({
    id: id++,
    text: text,
    done: false
}));
/*
export const toggle = (id) => ({
    type: TOGGLE,
    id
});
*/
export const toggle = createAction(TOGGLE, id=>id);
/*
export const remove = (id) => ({
    type: REMOVE,
    id
});
*/
export const remove = createAction(REMOVE, id=>id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스1',
            done: true
        },
        {
            id: 2,
            text: '리덕스2',
            done: false
        }
    ]
};

/*
function todos(state=initialState, action) {
    switch(action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => (
                    todo.id === action.id ? {...todo, done: !todo.done} : todo
                ))
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}
*/

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state,{payload : input}) => ({...state, input: input}), //객체 비구조화 할당
        [INSERT]: (state,{payload : todoo}) => ({
            ...state,
            todos: state.todos.concat(todoo),
        }),
        [TOGGLE]: (state,{payload : id_toggle}) => ({
            ...state,
            todos: state.todos.map(todo =>(
                todo.id === id_toggle ? {...todo, done: !todo.done} : todo
            ))
        }),
        [REMOVE]: (state,action) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        })
    },
    initialState
);
export default todos;