// 리덕스 스토어와 연동된 컨테이너인 컨테이너 컴포넌트 생성
import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';

const CounterContainer = ({number, increase, decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
};

const mapStateToProps = state => ({
    number: state.counter.number
});

const mapDispatchToProps = dispatch => ({
    increase: () => {
        console.log('increase');
    },
    decrease: () => {
        console.log('decrease');
    }
})

// 컨테이너 컴포넌트를 리덕스와 연동하기 위해서는 connect 함수를 사용해야한다
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);