'use client';

import { createTodo } from '@/components/action';
import { useZact } from 'zact/client';
import TodoForm from './TodoForm';

export default function CreateTodo() {
	const { mutate, isLoading } = useZact(createTodo);

	return <TodoForm onSubmit={mutate} isLoading={isLoading} />;
}
