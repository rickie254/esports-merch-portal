export const loginFields = [
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'Enter email',
        validate: (value) => {
            if (!value) {
                return 'Email is required';
            }
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(value)) {
                return 'Invalid email address';
            }
            return undefined;
        },
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        required: true,
        placeholder: 'Enter password',
        validate: (value) => {
            if (!value) {
                return 'Password is required';
            }
            return undefined;
        },
    },
    
];

export const passwordResetFields = [
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'Enter email',
        validate: (value) => {
            if (!value) {
                return 'Email is required';
            }
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(value)) {
                return 'Invalid email address';
            }
            return undefined;
        },
    },
]

export const registerFields = [
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
        placeholder: 'Enter first name',
    },
    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
        placeholder: 'Enter last name',
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'Enter email',
        validate: (value) => {
            if (!value) {
                return 'Email is required';
            }
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(value)) {
                return 'Invalid email address';
            }
            return undefined;
        },
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        required: true,
        placeholder: 'Enter password',
        validate: (value) => {
            if (!value) {
                return 'Password is required';
            }
            if (value.length < 8) {
                return 'Password must be at least 8 characters';
            }
            const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(value)) {
                return 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character';
            }
            return undefined;
        },
    },
    {
        name: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        required: true,
        placeholder: 'Confirm password',
        validate: (value) => {
            if (!value) {
                return 'Password is required';
            }
            if (value !== password) {
                return 'Passwords do not match';
            }
            return undefined;
        },
    },
]
