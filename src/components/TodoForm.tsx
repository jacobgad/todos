'use client';

import type { Todo } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
	onSubmit: (data: Schema) => void;
	isLoading: boolean;
	defaultValues?: Partial<Todo>;
	buttonText?: string;
};

type Schema = z.infer<typeof schema>;

const schema = z.object({
	name: z.string().min(1),
	completed: z.boolean(),
});

export default function TodoForm(props: Props) {
	const { register, handleSubmit, formState } = useForm<Schema>({
		resolver: zodResolver(schema),
		defaultValues: props.defaultValues,
	});

	return (
		<form onSubmit={handleSubmit(props.onSubmit)} className='flex w-full gap-2'>
			<input
				type='text'
				{...register('name')}
				className='flex-grow rounded border border-blue-600 px-2 py-1'
			/>
			<input type='checkbox' {...register('completed')} className='h-8 w-8 rounded' />
			<button
				type='submit'
				disabled={props.isLoading || !formState.isDirty}
				className='rounded bg-green-700 px-2 py-1 text-green-50 disabled:bg-gray-300'
			>
				{props.buttonText ?? 'Save'}
			</button>
		</form>
	);
}
