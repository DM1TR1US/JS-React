import React from 'react';
import { Form, Field } from 'react-final-form'

const Login = () => {

    let onSubmit = (formObj) => {
        console.log(formObj);
    }

    const required = value => (value ? undefined : 'Required');

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                subscription={{ submitting: true, pristine: true }}
                render={({ handleSubmit, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="email"
                                validate={required}>
                                {({ input }) => (
                                    <div>
                                        <label>Email:</label>
                                        <input placeholder="Mail" type="email" {...input}/>
                                    </div>
                                )}

                            </Field>
                            <Field
                                name="password"
                                validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Password:</label>
                                        <input placeholder="Password" type="password" {...input}/>
                                    </div>
                                )}

                            </Field>
                            <div>
                                <label>Rememeber me</label>
                                <Field
                                    name="isRemember"
                                    component="input"
                                    type="checkbox"
                                />
                            </div>
                            <button type="submit" disabled={submitting || pristine}>Log in</button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}

export default Login;