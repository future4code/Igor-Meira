import React from 'react'
import { ScreenContainer, InputsContainer } from './styled'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'

const SignUpPage = () => {
  const [form, onChange, clear] = useForm({name: '', email: '', password: ''})
  const onSubmitForm = (event) => {
      event.preventDefault()
  }

  return (
    <ScreenContainer>
      <h1>Cadastre-se</h1>
      <InputsContainer>
          <form onSubmit={onSubmitForm}>

          <TextField 
                name={'name'} 
                value={form.name} 
                onChange={onChange}
                fullWidth
                label={'Nome'}
                variant={'outlined'}
                margin={'normal'}
                required
                type={'name'}
            />

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

    </ScreenContainer>
  );
}

export default SignUpPage
