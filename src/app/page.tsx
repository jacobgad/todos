import prisma from '@/utils/prisma';
import UpdateTodo from '@/components/UpdateTodo';
import CreateTodo from '@/components/CreateTodo';

export default async function Home() {
	const todos = await prisma.todo.findMany({ orderBy: { id: 'asc' } });
	const incompleteTodos = todos.filter((todos) => !todos.completed);
	const completeTodos = todos.filter((todo) => todo.completed);

	return (
		<main className='mx-auto my-6 max-w-lg'>
			<h1 className='mb-2 text-xl'>Todos</h1>

			<h2 className='mb-2'>New Todo</h2>
			<div className='mb-6'>
				<CreateTodo />
			</div>

			<h2 className='mb-2'>Incomplete</h2>
			<ul className='space-y-2'>
				{incompleteTodos.map((todo) => (
					<li key={todo.id}>
						<UpdateTodo todo={todo} />
					</li>
				))}
			</ul>
			<hr className='my-6' />

			<h2 className='mb-2'>Complete</h2>
			<ul className='space-y-2'>
				{completeTodos.map((todo) => (
					<li key={todo.id}>
						<UpdateTodo todo={todo} />
					</li>
				))}
			</ul>
		</main>
	);
}
