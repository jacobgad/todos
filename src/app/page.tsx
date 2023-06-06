import prisma from '@/utils/prisma';
import UpdateTodo from '@/components/UpdateTodo';
import CreateTodo from '@/components/CreateTodo';
import { groupBy } from '@/utils/utils';

export default async function Home() {
	const todos = await prisma.todo.findMany({ orderBy: { id: 'asc' } });
	const groups = groupBy(todos, (todo) => (todo.completed ? 'complete' : 'incomplete'));

	return (
		<main className='mx-auto my-6 max-w-md'>
			<h1 className='mb-2 text-xl'>Todos</h1>

			<h2 className='mb-2'>New Todo</h2>
			<div className='mb-6'>
				<CreateTodo />
			</div>

			<h2 className='mb-2'>Incomplete</h2>
			<ul className='space-y-2'>
				{groups.incomplete.map((todo) => (
					<li key={todo.id}>
						<UpdateTodo todo={todo} />
					</li>
				))}
			</ul>
			<hr className='my-6' />

			<h2 className='mb-2'>Complete</h2>
			<ul className='space-y-2'>
				{groups.complete.map((todo) => (
					<li key={todo.id}>
						<UpdateTodo todo={todo} />
					</li>
				))}
			</ul>
		</main>
	);
}
