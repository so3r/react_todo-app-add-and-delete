import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  onDeleteTodos: (todoId: number) => Promise<void>;
  loadingTodosIds: number[];
};

export const TodoList: React.FC<Props> = props => {
  const { todos, loadingTodosIds, onDeleteTodos } = props;

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodos={onDeleteTodos}
          isLoading={loadingTodosIds.includes(todo.id)}
        />
      ))}
    </section>
  );
};
