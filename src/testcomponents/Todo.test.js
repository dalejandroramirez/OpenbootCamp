import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'
import Todo from './Todo';

// Borrar los renderizados anteriores
afterAll(() => cleanup());


describe('Todo component is working correctly', () => {
  const todo = {id: 5, text: 'Hacer las compras', completed: true}
  render(<Todo todo={todo} />);
  
  const todoelement = screen.getByTestId(`todo-test-${todo.id}`);
  const checkbox = todoelement.querySelector('#checkbox');

  it ('Should render Todo Component', () => {
    expect(todoelement).toBeInTheDocument();
  });

  it('Should have rigth text', () => {
    expect(todoelement).toHaveTextContent(todo.text);
  });
});

describe('Todo component should check/uncleck completed/not completed',() => {
  const todo2 = {id: 6, text: 'Hacer las compras', completed: true}
  render(<Todo todo={todo2} />);
  
  const todoelement = screen.getByTestId(`todo-test-${todo2.id}`);
  const checkbox2 = todoelement.querySelector('#checkbox');
 
  it('Should be checked', () => {
    expect(checkbox2).toBeChecked();
  })

  it('matches snapshot', () => {
    const snapTodo = {id: 1, text: 'Acabar esto nuevamente', completed: true}
    const tree = renderer.create(<Todo todo={snapTodo}/>)
    expect(tree).toMatchSnapshot();
  })
})

