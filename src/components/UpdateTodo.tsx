'use client';

import { updateTodo } from '@/components/action';
import { useZact } from 'zact/client';
import TodoForm from './TodoForm';
import { Todo } from '@prisma/client';

type Props = {
	todo: Todo;
};

export default function UpdateTodo({ todo }: Props) {
	const { mutate, isLoading } = useZact(updateTodo);

	return (
		<TodoForm
			key={todo.id}
			defaultValues={todo}
			onSubmit={(data) => mutate({ ...data, id: todo.id })}
			isLoading={isLoading}
		/>
	);
}
