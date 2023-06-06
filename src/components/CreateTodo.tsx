'use client';

import { createTodo } from '@/components/action';
import { useZact } from 'zact/client';
import TodoForm from './TodoForm';

export default function CreateTodo() {
	const { mutate, isLoading, data } = useZact(createTodo);

	return <TodoForm key={data?.id} onSubmit={mutate} isLoading={isLoading} />;
}
