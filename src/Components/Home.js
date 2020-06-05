import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import Main from './Pages/Main';

class Home extends React.Component{
    constructor (props){
        super(props);
        this.state = { time: 0 }
    }
    
    componentDidMount(){
        setTimeout( () => {
            this.setState({ time: 5 })
        }, 5000);
    }

    render(){
        const { Timer } =this.state;

        return(
            <HomeWrapper>
                { Timer ? <Loading/> : <Main/>}
            </HomeWrapper>
        );
    }
}

export default Home;

const HomeWrapper = styled.div`
  display: absolute;
  top: 50%;
  width: 50%;
  height: 10%;
  transform: translateY(50%);
`;