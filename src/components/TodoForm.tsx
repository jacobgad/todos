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
	const { register, handleSubmit } = useForm<Schema>({
		resolver: zodResolver(schema),
		defaultValues: props.defaultValues,
	});

	return (
		<form onSubmit={handleSubmit(props.onSubmit)}>
			<input type='text' {...register('name')} />
			<input type='checkbox' {...register('completed')} />
			<button type='submit' disabled={props.isLoading}>
				{props.buttonText ?? 'Save'}
			</button>
		</form>
	);
}
