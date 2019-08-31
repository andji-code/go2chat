import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import pureField from '../shared/forms/pureField';
import { required, alphaNumeric, maxLength, rePass } from '../shared/forms/validation';
import PlainForm from './PlainForm';
import FormFooter from './FormFooter';
import Button from './Button';
import FormHeader from './FormHeader';

const maxLength25 = maxLength(25);

const _SingInForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <PlainForm onSubmit={handleSubmit} >

            <FormHeader>Sing In</FormHeader>

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

            <Field
                name="rePassword"
                type="password"
                component={pureField}
                placeholder="repeat password"
                validate={[required,rePass]}
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
const SingInForm = reduxForm({
    form: 'SingInForm' // a unique identifier for this form
})(_SingInForm)
export default SingInForm;