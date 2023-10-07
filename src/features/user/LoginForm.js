import React from "react";
import { FormGroup, Label, Button } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./userSlice";

const UserLoginForm = () => {
    const dispatch = useDispatch();

    // This function handles the login process. It takes a 'values' object containing
    // the username and password entered by the user. It creates a 'currentUser' object
    // with a unique 'id', and sets the 'username' and 'password' from the 'values' object.
    // Then, it dispatches an action to update the current user in the Redux store.
    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            username: values.username,
            password: values.password,
        };
        dispatch(setCurrentUser(currentUser));
    };

    return (
        /* 
  It defines the initial values for the form fields (username and password), specifies the 
  'handleLogin' function to be called upon form submission. The form contains input fields
  for username and password, along with corresponding error messages. Finally, there is a submit 
  button labeled 'Login' that triggers the form submission.
*/
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            onSubmit={handleLogin}
            //TODO: Validate UserForm
        >
            <Form>
                <FormGroup>
                    <Label htmlFor='username'>Username</Label>
                    <Field
                        id='username'
                        name='username'
                        placeholder='Username'
                        className='form-control'
                    />
                    <ErrorMessage name='username'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Field
                        id='password'
                        name='password'
                        placeholder='Password'
                        className='form-control'
                    />
                    <ErrorMessage name='password'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </FormGroup>
                <Button type='submit' color='primary'>
                    Login
                </Button>
            </Form>
        </Formik>
    );
};

export default UserLoginForm;
