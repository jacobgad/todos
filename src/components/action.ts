'use server';

import { z } from 'zod';
import { zact } from 'zact/server';
import prisma from '@/utils/prisma';

export const createTodo = zact(
	z.object({
		name: z.string().min(1),
		completed: z.boolean().default(false),
	})
)(async (input) => {
	const todo = await prisma.todo.create({ data: input });
	return todo;
});

export const updateTodo = zact(
	z.object({
		id: z.number().int(),
		name: z.string().min(1),
		completed: z.boolean().default(false),
	})
)(async (input) => {
	const todo = await prisma.todo.update({ where: { id: input.id }, data: input });
	return todo;
});
