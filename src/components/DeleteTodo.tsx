'use client';

import type { Todo } from '@prisma/client';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useZact } from 'zact/client';
import { deleteTodo } from './action';

type Props = {
	id: Todo['id'];
};

export default function DeleteTodo({ id }: Props) {
	const { mutate, isLoading } = useZact(deleteTodo);

	return (
		<button
			onClick={() => mutate({ id })}
			disabled={isLoading}
			className='flex w-9 items-center justify-center rounded bg-red-600 text-red-50 disabled:bg-gray-300'
		>
			<TrashIcon className='h-4 w-4' />
		</button>
	);
}
