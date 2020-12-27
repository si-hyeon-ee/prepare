import React, { useCallback, useState } from 'react'
import AppLayout from '../components/app.layout'
import Head from 'next/head'
import { Button, Checkbox, Form, Input } from 'antd'
import useInput from '../hooks/use-input'
import styled from 'styled-components'

const ErrorMessage = styled.div`
	color: red;
`

const Column = ({ name, label, value, onChange }) => {
	return (
		<div>
			<label htmlFor="{name}">{label}</label>
			<br />
			<Input name="{name}" value={value} required onChange={onChange} />
		</div>
	)
}

const Signup = () => {
	const [id, onChangeId] = useInput('')
	const [nickname, onChangeNickname] = useInput('')
	const [password, onChangePassword] = useInput('')
	const [passwordCheck, setPasswordCheck] = useState('')

	const [passwordError, setPasswordError] = useState(false)

	const [term, setTerm] = useState('')
	const [termError, setTermError] = useState(false)

	const onChangeTerm = useCallback((e) => {
		setTerm(e.target.checked)
		setTermError(false)
	}, [])

	const onChangePasswordCheck = useCallback(
		(e) => {
			setPasswordCheck(e.target.value)
			setPasswordError(e.target.value !== password)
		},
		[password],
	)

	const onSubmit = useCallback(() => {
		if (password !== passwordCheck) {
			return setPasswordError(true)
		}

		if (!term) {
			return setTermError(true)
		}
		console.log(id, nickname, password)
	}, [password, passwordCheck, term])
	return (
		<AppLayout>
			<Head>
				<title> 회원가입 | Nodebird</title>
			</Head>
			<Form onFinish={onSubmit}>
				<Column name="user-id" value={id} label="아이디" onChange={onChangeId} />
				<Column name="user-nick" value={nickname} label="닉네임" onChange={onChangeNickname} />
				<div>
					<label htmlFor="user-password">비밀번호</label>
					<br />
					<Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
				</div>
				<div>
					<label htmlFor="user-password-check">비밀번호 체크</label>
					<br />
					<Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
					{passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>}
				</div>
				<div>
					<Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
						term
					</Checkbox>
					{termError && <ErrorMessage>약관에 동의하셔야 합니다</ErrorMessage>}
				</div>
				<div style={{ marginTop: 10 }}>
					<Button type="primary" htmlType="submit">
						가입하기
					</Button>
				</div>
			</Form>
		</AppLayout>
	)
}

export default Signup
