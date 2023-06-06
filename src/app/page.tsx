import prisma from '@/utils/prisma';
import UpdateTodo from '@/components/UpdateTodo';
import CreateTodo from '@/components/CreateTodo';
import { groupBy } from '@/utils/utils';
import DeleteTodo from '@/components/DeleteTodo';

export default async function Home() {
	const todos = await prisma.todo.findMany({ orderBy: { id: 'asc' } });
	const groups = groupBy(todos, (todo) => (todo.completed ? 'Complete' : 'Incomplete'));
	const sortedGroups = Object.entries(groups).sort(([a], [b]) => b.localeCompare(a));

	return (
		<main className='mx-auto my-6 max-w-md'>
			<h1 className='mb-2 text-xl'>Todos</h1>

			<h2 className='mb-2'>New Todo</h2>
			<div className='mb-6'>
				<CreateTodo />
			</div>

			{sortedGroups.map(([title, todos], idx) => (
				<div key={title}>
					{idx > 0 && <hr className='my-6' />}
					<h2 className='mb-2'>{title}</h2>
					<ul className='space-y-2'>
						{todos.map((todo) => (
							<li key={todo.id} className='flex gap-2'>
								<UpdateTodo todo={todo} />
								<DeleteTodo id={todo.id} />
							</li>
						))}
					</ul>
				</div>
			))}
		</main>
	);
}
