import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from '../../utils/constants/routes'
import { CreateAccount } from '../../components/Layout/Button/ButtonAuth/CreateAccount'

export const AuthPage = () => {
	return (
		<Routes>
			<Route path={ROUTES.AUTH} />
		</Routes>


	)
}
