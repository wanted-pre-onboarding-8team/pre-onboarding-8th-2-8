import { useGetTodosQuery } from 'apis/apiSlice';
import Board from 'components/Board/Board';

const Trello = () => {
  const { data: todos, isSuccess } = useGetTodosQuery();

  if (isSuccess) {
    return <Board todos={todos} />;
  }
};

export default Trello;
