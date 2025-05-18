type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

const baseUser:User ={
    name : 'John',
    surname : 'Doe',
    email: 'john@example.com',
    password: '123456'
}

function createOrUpdateUser(initialValues: User, updates : Partial<User>): User {
    return { ...initialValues, ...updates }
}

createOrUpdateUser(baseUser, { 
    email: 'user@mail.com', 
    password: 'password123' 
});
