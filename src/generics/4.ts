type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}


function createOrUpdateUser(initialValues: Partial<User>) {
    console.log('User created or updated:', initialValues);
}

createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
});
