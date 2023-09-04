interface TodoProps {
    className?:string;
    filter?:string;
    textCountTodos?:string;
    todo?:TodoItem;
    todos?:TodoItem[];
    addTodo?:(todo:TodoItem)=>void;
    removeTodo?:(id:number)=>void;
    updateTodo?:(id:number)=>void;
    removeTodos?:()=>void;
    setTipOfFilter?:(tipFilter:string)=>void;
    children?: React.ReactNode;
}