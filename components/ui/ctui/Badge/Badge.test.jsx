import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import CT_Badge from './Badge'

test('renders children prop', () => {
  const text = 'Badge Text'
  render(<CT_Badge>{text}</CT_Badge>)
  const badgeElement = screen.getByText(text)
  expect(badgeElement).toBeInTheDocument()
})

test('renders with default gray color', () => {
  render(<CT_Badge />)
  const badgeElement = screen.getByRole('badge')
  expect(badgeElement).toHaveStyle({ backgroundColor: '#6c757d' })
})
