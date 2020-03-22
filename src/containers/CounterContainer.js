// 리덕스 스토어와 연동된 컨테이너인 컨테이너 컴포넌트 생성
import React, { useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

//useDispatch는 useCallback과 함께 사용하는 습관을 들이자
const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()),[dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()),[dispatch]);
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    )
};

/*
// 컨테이너 컴포넌트를 리덕스와 연동하기 위해서는 connect 함수를 사용해야한다
export default connect(
    (sta) => ({
        number: sta.counter.number,
    }),
    {
        increase,
        decrease
    }
)(CounterContainer)
*/

export default CounterContainer;