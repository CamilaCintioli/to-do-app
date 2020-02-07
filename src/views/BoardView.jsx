import React from 'react';
import NavBar from '../components/NavBar';
import Board from '../components/Board';
import Footer from '../components/Footer';
import TaskList from '../components/TaskList';
import { Task, TaskTitle } from '../components/Task';
import useBoard from '../hooks/useBoard';

export default function BoardView({ id }) {

    const [board, setBoard] = useBoard(id);

    return (
        <>
            <NavBar />
            {board &&
                <Board title={board.title}>
                    {board.taskLists.map((taskList) => (
                        <TaskList key={taskList.id} title={taskList.title}>
                            {taskList.tasks.map((task) => (
                                <Task key={task.id}><TaskTitle>{task.title}</TaskTitle></Task>
                            ))}
                        </TaskList>))}
                </Board>
            }
            <Footer />
        </>
    )
}