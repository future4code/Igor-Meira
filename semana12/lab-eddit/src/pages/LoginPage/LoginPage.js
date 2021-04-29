import React from 'react'
import { ScreenContainer, InputsContainer } from './styled'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'

const LoginPage = () => {
  const [form, onChange, clear] = useForm({email: '', password: ''})
  const onSubmitForm = () => {

  }

  return (
    <ScreenContainer>
      <h1>Login</h1>
        
          <form onSubmit={onSubmitForm}>
            <TextField 
                name={'email'} 
                value={form.email} 
                onChange={onChange}
                fullWidth
                label={'Email'}
            />

            <TextField 
                name={'password'} 
                value={form.password} 
                onChange={onChange}
                fullWidth
                label={'Senha'}
            />

            <Button
                type={'submit'}
                fullWidth
                variant={'contained'}
                color={'primary'}
            >Fazer Login
            </Button>
          </form>
    </ScreenContainer>
  );
}

export default LoginPage
