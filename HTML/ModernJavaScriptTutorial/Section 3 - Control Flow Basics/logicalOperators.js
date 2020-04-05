// logical operators - OR || and AND &&


if (password.length >= 12 && password.includes('@')) {
    console.log('that password is might strong')
} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
    console.log('that password is strong enough!')
} else {
    console.log('this password is not long enough!')
}