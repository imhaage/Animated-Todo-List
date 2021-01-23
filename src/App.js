import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { getTodos } from './storage/todos';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';

const todos = getTodos();

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

const Todos = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
      >
			  Todo list
			</motion.h1>
			<h2>Error</h2>
			<h3>Success</h3>
			{todos ? (
				<ul>{todos.map(todo => <li>{todo.text}</li>)}</ul>
			) : (
				<div>Your todo list is empty</div>
			)}
		</ThemeProvider>
	);
};

ReactDOM.render(<Todos />, document.getElementById('root'));
