// 리덕스 스토어와 연동된 컨테이너인 컨테이너 컴포넌트 생성
import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
};

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