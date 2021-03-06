import { Button, Form, Input } from 'antd'
import Link from 'next/link'
import React, { useCallback, useState, useMemo } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import useInput from '../hooks/use-input'

const ButtonWrapper = styled.div`
	margin-top: 10px;
`

const FormWrapper = styled(Form)`
	padding: 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {
	const [id, onChangeId] = useInput('')
	const [password, onChangePassword] = useInput('')

	const style = useMemo(() => ({ marginTop: 10 }), [])

	const onSubmitForm = useCallback(() => {
		console.log(id, password)
		setIsLoggedIn(true)
	}, [id, password])

	return (
		<FormWrapper onFinish={onSubmitForm}>
			<div>
				<label htmlFor="user-id">아이디</label>
				<br />
				<Input name="user-id" value={id} onChange={onChangeId} required />
			</div>
			<div>
				<label htmlFor="user-password">비밀번호</label>
				<br />
				<Input name="user-password" vaule={password} onChange={onChangePassword} required />
			</div>
			<div style={style}>
				<ButtonWrapper>
					<Button type="primary" htmlType="submit" loading={false}>
						로그인
					</Button>
					<Link href="/sign-up">
						<a></a>
					</Link>
				</ButtonWrapper>
			</div>
		</FormWrapper>
	)
}

LoginForm.propTypes = {
	setIsLoggedIn: propTypes.func.isRequired,
}

export default LoginForm
