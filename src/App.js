import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './components/Container';
import { Todo } from './components/Todo';
import { Input } from './components/Input';
import { Add, Remove } from './components/Button';
import { getPersistedTodos, persistTodos } from './storage/todos';
import { theme } from './style/theme';
import { GlobalStyle } from './style/GlobalStyle';

const variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1
	}
};

const Todos = () => {
	const [todos, setTodos] = useState(() => getPersistedTodos());
	const [newTodo, setNewTodo] = useState('');

	useEffect(() => persistTodos(todos), [persistTodos, todos]);

	const handleTap = e => {
		const targetIndex = todos.findIndex(todo => todo.id === e.target.id);
		setTodos(currentTodos =>
			currentTodos.map(
				todo =>
					todo.id === e.target.id
						? { ...todo, isCompleted: !currentTodos[targetIndex].isCompleted }
						: todo
			)
		);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setTodos(currentTodos => [
			...currentTodos,
			{ id: uuidv4(), text: newTodo, isCompleted: false }
		]);
		setNewTodo('');
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container>
				<motion.div initial="hidden" animate="visible" variants={variants}>
					<h1>Todo list</h1>

					<form style={{ display: 'flex' }} onSubmit={handleSubmit}>
						<Input
							style={{ flexGrow: 1 }}
							type="text"
							value={newTodo}
							onChange={e => {
								setNewTodo(e.target.value);
							}}
						/>
						<Add>Add</Add>
					</form>

					<Remove
						onClick={() =>
							setTodos(currentTodos =>
								currentTodos.filter(todo => !todo.isCompleted)
							)
						}
						disabled={!todos.some(todo => todo.isCompleted)}
					>
						Delete completed todos
					</Remove>

					<motion.ul
					  layout
					  variants={variants}
						initial="hidden"
						animate="visible"
					>
						{!!todos.length ? (
							todos.map(todo => (
								<motion.li
								  layout
								  variants={variants}
									key={todo.id}
									onTap={handleTap}
								>
									<Todo id={todo.id} isCompleted={todo.isCompleted}>
										{todo.text}
									</Todo>
								</motion.li>
							))
						) : (
							<li>Your todo list is empty</li>
						)}
					</motion.ul>
				</motion.div>
			</Container>
		</ThemeProvider>
	);
};

ReactDOM.render(<Todos />, document.getElementById('root'));
