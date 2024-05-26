// lower case

let personName:string = "babar"

console.log("lowercase:", personName.toLowerCase());

// upper case

console.log("uppercase:", personName.toUpperCase());

//Title case

console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));