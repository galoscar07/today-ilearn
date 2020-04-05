// Object literals adding methods
colorTrace("Adding Methods", "green");

let user2 = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@haha.com',
    location: 'Berlin',
    blogs: ['Why mac and cheese rules', 'How to create a react website'],
    login: () => console.log('The user logged in'),
    logout: () => console.log('The user logged out'),
}

user2.login()
user2.logout()

