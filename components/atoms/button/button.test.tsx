import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from './'

const ButtonComponent = <Button>test</Button>

describe('Button', () => {
  it('renders a button', () => {
    render(ButtonComponent)

    const button = screen.getByRole('button', {
      name: /test/i,
    })

    expect(button).toBeInTheDocument()
  })

  it('renders button unchanged', () => {
    const { container } = render(ButtonComponent)
    expect(container).toMatchSnapshot()
  })
})
