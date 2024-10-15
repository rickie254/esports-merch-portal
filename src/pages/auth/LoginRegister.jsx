import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as Components from "../../library/FormComponents";
import "../themes/Register.css";
import { loginFields, registerFields } from '../../library/utils/formFields';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginRegister() {
    const [signIn, toggle] = React.useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        const field = loginFields.find(f => f.name === name);
        if (field?.validate) {
            const error = field.validate(value);
            setErrors(prev => ({ ...prev, [name]: error ?? '' }));
        }
    };
    return (
        <section className='loginRegister'>
            <Components.Container>
                <Components.SignUpContainer signingIn={ signIn }>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        { registerFields.map((field) => (
                            <div key={ field.name } className="relative">
                                <Components.Input
                                    name={ field.name }
                                    type={ field.type === 'password' && showPassword[field.name] ? 'text' : field.type }
                                    placeholder={ field.placeholder }
                                    onChange={ handleChange }
                                    required
                                />
                                { (field.name === 'password' || field.name === 'confirmPassword') && (
                                    <button
                                        type="button"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                        onClick={ () => togglePasswordVisibility(field.name) }
                                    >
                                        { showPassword[field.name] ? <FaEye /> : <FaEyeSlash /> }
                                    </button>
                                ) }
                                { errors[field.name] && (
                                    <p className=" text-red-500 mt-1 mb-8">{ errors[field.name] }</p>
                                ) }
                            </div>
                        )) }
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>
                <Components.SignInContainer signingIn={ signIn }>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        { loginFields.map((field) => (
                            <div key={ field.name } className="relative">
                                <Components.Input
                                    name={ field.name }
                                    type={ field.type === 'password' && showPassword[field.name] ? 'text' : field.type }
                                    placeholder={ field.placeholder }
                                    onChange={ handleChange }
                                    required
                                />
                                { field.name === 'password' && (
                                    <button
                                        type="button"
                                        className="absolute right-2 top-1/3 transform -translate-y-1/2"
                                        onClick={ () => togglePasswordVisibility(field.name) }
                                    >
                                        { showPassword[field.name] ? <FaEye /> : <FaEyeSlash /> }
                                    </button>
                                ) }
                                { errors[field.name] && (
                                    <p className=" text-red-500 mt-1 mb-8">{ errors[field.name] }</p>
                                ) }
                            </div>
                        )) }
                        <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                        <Components.Button>Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
                <Components.OverlayContainer signingIn={ signIn }>
                    <Components.Overlay signingIn={ signIn }>
                        <Components.LeftOverlayPanel signingIn={ signIn }>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={ () => toggle(true) }>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>
                        <Components.RightOverlayPanel signingIn={ signIn }>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Title>Welcome to KUER!</Components.Title>
                            <Components.Paragraph>
                                Enter your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={ () => toggle(false) }>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </section>
    );
}

export default LoginRegister;

