import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App'

describe('initApp', () => {

  let article;
  beforeEach(() => {
    render(<App/>);
    article = screen.getByRole('article', {name : 'main-title'})
  })

  test('first route render', () => {
    expect(window.location.pathname).toBe('/')
  });

  test('if title is correct', () => {
    expect(screen.getByText(`Range Slider`)).toBeInTheDocument()
    expect(article).toBeInTheDocument()
    expect(article).toHaveStyle({
      padding: '15px'
    })
  });
  
});