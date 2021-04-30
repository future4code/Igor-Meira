import React from 'react'
import { ScreenContainer, InputsContainer, SignUpButton } from './styled'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/coordinator'
import { login } from '../../services/user'

const LoginPage = () => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({email: '', password: ''})

  const onSubmitForm = (event) => {
      event.preventDefault()
      login(form, clear, history)
  }

  return (
    <ScreenContainer>
      <h1>Login</h1>
      <InputsContainer>
          <form onSubmit={onSubmitForm}>
            <TextField 
                name={'email'} 
                value={form.email} 
                onChange={onChange}
                fullWidth
                label={'Email'}
                variant={'outlined'}
                margin={'normal'}
                required
                type={'email'}
            />

            <TextField 
                name={'password'} 
                value={form.password} 
                onChange={onChange}
                fullWidth
                label={'Senha'}
                variant={'outlined'}
                margin={'normal'}
                required
                type={'password'}
            />

            <Button
                type={'submit'}
                fullWidth
                variant={'contained'}
                color={'primary'}
                margin={'normal'}
            >Fazer Login
            </Button>
          </form>
          </InputsContainer>

          <SignUpButton>
          <Button
                onClick={() => goToSignUp(history)}
                type={'submit'}
                fullWidth
                variant={'contained'}
                color={'primary'}
                margin={'normal'}
            >Cadastre-se
            </Button>
          </SignUpButton>

    </ScreenContainer>
  );
}

export default LoginPage
