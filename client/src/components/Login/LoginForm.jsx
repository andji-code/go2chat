import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import pureField from '../shared/forms/pureField';
import { required, alphaNumeric, maxLength, rePass } from '../shared/forms/validation';
import PlainForm from '../shared/forms/PlainForm';
import FormFooter from '../shared/styles/FormFooter';
import Button from '../shared/styles/Button';
import FormHeader from '../shared/styles/FormHeader';

const maxLength25 = maxLength(25);

const _LogInForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <PlainForm onSubmit={handleSubmit} >

            <FormHeader>Log In</FormHeader>

            <Field
                name="username"
                type="text"
                component={pureField}
                placeholder="Username"
                validate={[required, maxLength25]}
                warn={alphaNumeric}
            />

            <Field
                name="password"
                type="password"
                component={pureField}
                placeholder="password"
                validate={required}
            />

            <FormFooter>

                <Button ok type="submit" disabled={submitting}>
                    Submit
                </Button>

                <Button danger type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear
                </Button>

            </FormFooter>

        </PlainForm>
    )
}
const LogInForm = reduxForm({
    form: 'LogInForm' // a unique identifier for this form
})(_LogInForm)
export default LogInForm;