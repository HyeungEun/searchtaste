import React from 'react';
import styled from 'styled-components';

class Main extends React.Component{
    render(){
        return(
            <MainWrapper>
                <MainText>취향을 알아보시겠습니까?</MainText>
                <StartButton>시작하기</StartButton>
            </MainWrapper>
        );
    }
}

export default Main;

const MainWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hiddn;
    transform: translateY(-50%);
`;

const MainText = styled.span`
    color: white;
    display: flex;
    align-items:center;
    font-size: 2.0rem;
`;

const StartButton =styled.div`
    width: 130px;
    height: 40px;
    color: white;
    font-size: 25px;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    animation: startblinker 1s infinite;

    @keyframes startblinker {
        0% {
            color: white;
            border: 2px solid white;
        }
        50% {
            opacity: 40%;
        }
        100%{
            color: white;
            border: 2px solid white;
        }
    }
`;


