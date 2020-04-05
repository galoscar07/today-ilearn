// Object literals this keyword
colorTrace("this keyword", "green");

let user3 = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@haha.com',
    location: 'Berlin',
    blogs: ['Why mac and cheese rules', 'How to create a react website'],
    login: () => console.log('The user logged in'),
    logout: () => console.log('The user logged out'),
    logThis: function() {console.log(this)}, // When refering to this don't use arrow functions
    logBlogs() { // this is a regular function but a shorthand version
        console.log("This user wrote the following blogs: ")
        this.blogs.forEach(blog => {
            console.log(blog)
        })
    }
}
user3.logThis() // this here means the this inside the object
console.log(this) // this here means the window object

user3.logBlogs()