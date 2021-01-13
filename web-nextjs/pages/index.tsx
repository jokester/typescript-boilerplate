import React, { useState } from 'react';
import { TodoList } from '../src/components/todo-list';
import { Heading } from '@chakra-ui/react';

const TodoListPage: React.FC = () => (
  <div>
    <Heading as="h1">TODO</Heading>
    <TodoList />
  </div>
);

export default TodoListPage;
