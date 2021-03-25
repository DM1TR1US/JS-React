import React from 'react';
import { Form, Field } from 'react-final-form'
import { reqField } from '../../utils/validators/validators';

const Login = () => {

    let onSubmit = (formObj) => { 
        console.log(formObj);
    }
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
                                validate={reqField}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Email:</label>
                                        <input placeholder="Mail" type="email" {...input}/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}

                            </Field>
                            <Field
                                name="password"
                                validate={reqField}>
                                {({ input, meta }) => (
                                    <div>
                                        <label>Password:</label>
                                        <input placeholder="Password" type="password" {...input}/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
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