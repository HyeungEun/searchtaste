import React from 'react';
import styled, { keyframes } from 'styled-components';

class Loading extends React.Component{
    render(){
    return(
      <Container>
        <LoadingWrapper>
          <LoadingText>Loading ...</LoadingText>
          <LoadingBox>
          <LoadingBar></LoadingBar>
          </LoadingBox>
        </LoadingWrapper>
      </Container>
    );
    }
};

export default Loading;

const Load = keyframes`
    25% {width: 14%}
    50% { width: 44%;}
    65% { width: 60%;}
    75% {width : 85%;}  
    100% {width : 100%;}
`;

const LoadingWrapper = styled.div`
  display: absolute;
  top: 50%;
  width: 50%;
  height: 10%;
  transform: translateY(50%);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-conten: center;
  flex-direction: column;
`;

const LoadingText = styled.div`
  font-size: 1.4rem;
  text-align: start;
  color: #F8F8F8;
  margin-bottom: 0.5rem;
`;

const LoadingBox = styled.div`
  width: 100%;
  height: 30px;
  border: 2px solid #F8F8F8;
  display: flex;
  flex-direction: row;
  flex-direction: start;
`;

const LoadingBar = styled.div`
  height: 100%;
  width: 0%;
  background-color: #F8F8F8;
  animation: ${Load} 3s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;