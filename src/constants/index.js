import CreateTodoContent from 'components/Modal/CreateTodoContent';
import IssueModalContent from 'components/Modal/IssueModalContent';

const MODALS = [
  {
    type: 'IssueModal',
    component: <IssueModalContent />,
  },
  {
    type: 'CreateModal',
    component: <CreateTodoContent />,
  },
];

const STATUS_TYPES = ['TODOS', 'IN PROGRESS', 'DONE'];

export { MODALS, STATUS_TYPES };
