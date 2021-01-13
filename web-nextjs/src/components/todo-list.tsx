import React, { useState } from 'react';
import { getApiClient, useApiResult } from '../hooks/use-api';
import { useConcurrencyControl } from '@jokester/ts-commonutil/lib/react/hook/use-concurrency-control';
import { Todo } from '../generated/ts-fetch/models';
import {
  Button,
  Heading,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export const TodoList: React.FC = () => {
  const [todoList, reloadList] = useApiResult((api) =>
    api.getTodos().then((todos) => todos.sort((a, b) => b.id - a.id)),
  );

  const [lock, lockDepth] = useConcurrencyControl();

  const onCreate = () =>
    lock(async () => {
      const created = await getApiClient().then((api) =>
        api.postTodos({
          todoCreateRequest: {
            title: `title-${Date.now()}`,
            desc: 'desc',
          },
        }),
      );

      await reloadList();
    });

  const onDelete = (item: Todo) =>
    lock(async () => {
      const x = await getApiClient().then((api) => api.deleteTodosP1({ p1: item.id }));
      reloadList();
    });

  const onUpdate = (modified: Todo) =>
    lock(async () => {
      const x = await getApiClient().then((api) => api.patchTodosTodoP1({ p1: modified.id, todo: modified }));
      reloadList();
    });

  return (
    <div>
      <div>
        <Button onClick={onCreate} isLoading={lockDepth > 0}>
          create
        </Button>
      </div>
      <List styleType="disc " padding={8}>
        {todoList.fulfilled &&
          todoList.value.map((item) => (
            <ListItem key={item.id}>
              <p>
                id={item.id} / title={item.title} / {item.finished ? 'finished' : 'todo'}
              </p>
              <br />
              <Button onClick={() => onDelete(item)} isLoading={lockDepth > 0}>
                Delete
              </Button>
              <Button onClick={() => onUpdate({ ...item, finished: !item.finished })} isLoading={lockDepth > 0}>
                {item.finished ? 'change to todo' : 'change to finish'}
              </Button>
            </ListItem>
          ))}
      </List>
    </div>
  );
};
