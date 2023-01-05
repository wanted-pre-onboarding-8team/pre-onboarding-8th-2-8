import { useUpdateTodoMutation } from 'apis/apiSlice';
import { useState } from 'react';

const useDragAndDrop = initialState => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState(initialState);
  const [replaceId, setReplaceId] = useState(null);

  const [updateTodo] = useUpdateTodoMutation();

  const copiedList = Object.assign([], listItems);

  const handleUpdateList = (id, status) => {
    let todo = listItems.find(item => item.id === Number(id));
    const newTodo = Object.assign({}, todo);

    if (todo && todo.status !== status) {
      newTodo.status = status;

      if (Array.isArray(listItems)) {
        const index = listItems.findIndex(item => item.id === replaceId);
        const item = listItems.find(item => item.id === replaceId);

        copiedList.splice(index, 1, item);

        updateTodo(newTodo);
        setListItems(copiedList);
      }
    }
  };

  const handleDragging = dragging => setIsDragging(dragging);

  return {
    isDragging,
    handleUpdateList,
    handleDragging,
    setReplaceId,
    replaceId,
    listItems,
  };
};

export default useDragAndDrop;
