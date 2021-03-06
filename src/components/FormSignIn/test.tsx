import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
	it('should to render the form', () => {
		renderWithTheme(<FormSignIn />)

		expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
		expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
		expect(
			screen.getByRole('button', { name: /sign in now/i })
		).toBeInTheDocument()
	})

	it('should to forgot password link', () => {
		renderWithTheme(<FormSignIn />)

		expect(
			screen.getByRole('link', { name: /forgot your password\?/i })
		).toBeInTheDocument()
	})

	it('should to render text to sign up if already have an account', () => {
		renderWithTheme(<FormSignIn />)

		expect(screen.getByText(/don't have an account\?/i)).toBeInTheDocument()
		expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
	})
})
