// Object literals
colorTrace("Objects in array", "green");

const blogs = [
    { title: 'Why mac and cheese rules', likes: 30 },
    { title: 'How to create a react website', likes: 40 }
]

console.log(blogs)

let person = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@haha.com',
    location: 'Berlin',
    blogs: blogs,
    login: () => console.log('The user logged in'),
    logout: () => console.log('The user logged out'),
    logThis: function() {console.log(this)},
    logBlogs() { 
        console.log("This user wrote the following blogs: ")
        this.blogs.forEach(blog => {
            console.log("Title:", blog.title)
            console.log("No. of likes: ", blog.likes)
        })
    }
}

person.logBlogs()