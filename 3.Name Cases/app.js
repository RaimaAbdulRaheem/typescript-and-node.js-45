// lower case
var personName = "babar";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
//Title case
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
