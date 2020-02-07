import { useState } from "react";

const mockBoard = { id: 1, title: "My board", taskLists: [
    { id: 2, title: "To do", tasks: [{ id: 3, title: "Walk the dog" },
    {id: 4, title: "Clean the floor"},
    {id: 5, title: "Wash the dishes"}]},
    { id: 6, title: "To buy", tasks: [{ id: 7, title: "Chocolate"}, {id: 8, title: "Ice cream"}, {id: 9, title: "Brownie"}]},

] };

export default function useBoard(id) {
    const [board, setBoard] = useState(mockBoard)

    return [board, setBoard];
}
