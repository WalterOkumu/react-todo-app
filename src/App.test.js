import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ToDoContainer from './functionBased/components/ToDoContainer';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <ToDoContainer />
    </BrowserRouter>,
  );
});
