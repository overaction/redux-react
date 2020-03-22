import {createAction, handleActions} from 'redux-actions';
//1. 액션 타입 정의 '모듈 이름/액션 이름'
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//2. 액션 생성 함수 만들기
//export const increase = () => ({type: INCREASE});
//export const decrease = () => ({type: DECREASE});
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//3. 초기 상태
const initialState = {
    number: 0
};

//4. 리듀서 함수
/*
function counter(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}
*/
const counter = handleActions(
    {
        [INCREASE]: (state,action) => ({number: state.number + 1}),
        [DECREASE]: (state,action) => ({number: state.number -1})
    },
    initialState
);

export default counter;