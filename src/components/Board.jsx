import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';


const BoardTitle = styled.h1``;
const Ul = styled.ul``;
const BoardWrapper = styled.section``;

const Board = styled(({ className, title, children }) => {
    return (
        <BoardWrapper className={className}>
            <BoardTitle>{title}</BoardTitle>
            <Ul>
               {children}
            </Ul>
            <Button>Create list</Button>
        </BoardWrapper>)
})``;

export default Board;