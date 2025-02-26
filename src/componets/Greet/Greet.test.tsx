import { render, screen } from '@testing-library/react'
import Greet from './Greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument()
  })
})

describe('Nested', () => {
  test('renders a name', () => {
    render(<Greet name="Hinesh" />)
    const textELement = screen.getByText('Hello Hinesh')
    expect(textELement).toBeInTheDocument()
  })
})
