import { useUpdateTodoMutation } from 'apis/apiSlice';
import { useState } from 'react';

export const useDragAndDrop = initialState => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems] = useState(initialState);

  const [updateTodo] = useUpdateTodoMutation();

  const handleUpdateList = (id, status) => {
    let todo = listItems.find(item => item.id === Number(id));
    const newTodo = Object.assign({}, todo);

    if (todo && todo.status !== status) {
      newTodo.status = status;

      if (Array.isArray(listItems)) {
        updateTodo(newTodo);
      }
    }
  };

  const handleDragging = dragging => setIsDragging(dragging);

  return {
    isDragging,
    listItems,
    handleUpdateList,
    handleDragging,
  };
};
