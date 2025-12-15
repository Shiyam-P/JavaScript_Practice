function getUserNameForEmail(email){
    return (email.slice(0,email.indexOf("@")));
}
console.log(getUserNameForEmail("shiyam9904@gmail.com"));
console.log(getUserNameForEmail("shiyam9904@gmail.com".toUpperCase()));

function firstLetterCaps(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(firstLetterCaps("shiyamteddy"));