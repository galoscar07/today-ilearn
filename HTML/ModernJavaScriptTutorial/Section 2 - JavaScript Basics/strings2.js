import { emit } from "cluster"

// common string methods

let email = 'oscar@rodeapps.com'

let result = email.lastIndexOf('p')

// slice(where_we_go_from, where_we_go_to)
let result = email.slice(0, 10)

// substr(from, how_many_chars)
let result = email.substr(4, 10)

let result = email.replace('m', 'w') // - > replace the first aparition of m with w


console.log(result)
