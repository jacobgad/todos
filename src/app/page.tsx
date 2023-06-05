import prisma from '@/utils/prisma';
import UpdateTodo from '@/components/UpdateTodo';
import CreateTodo from '@/components/CreateTodo';

export default async function Home() {
	const todos = await prisma.todo.findMany();

	return (
		<main className=''>
			<h1>Todos</h1>
			<CreateTodo />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<UpdateTodo todo={todo} />
					</li>
				))}
			</ul>
		</main>
	);
}
