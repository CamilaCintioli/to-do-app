import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const TaskListTitle = styled.h3``;
const TaskListWrapper = styled.li``;
const Ul = styled.ul``;

export default function TaskList({ title, children, onAdd }) {
    return (
        <TaskListWrapper>
            <TaskListTitle>{title}</TaskListTitle>
            <Ul>
                {children}
            </Ul>
            <Button onClick={onAdd}>Añada otra tarjeta</Button>
        </TaskListWrapper>
    )
}