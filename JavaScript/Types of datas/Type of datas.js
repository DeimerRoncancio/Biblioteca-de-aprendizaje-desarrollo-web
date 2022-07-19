// In Javascript there are only three data types: number, string and bool.

number = 150;
string = "Deimer Roncancio";
bool = true;

document.write("This is a number: " + number + " / ");
document.write("This is a string: " + string + " / ");
document.write("This is a bool: " + bool);

// The variables it can declare of three forms: const, let and var.

var variable_var; // In this form, variable is global, and can be modify.
const variable_const = 15; /* If is "const", the variable is constant, and 
                              not change. Also, it have be to initialize 
                              before to continue. */
let variable_let; /* The type "let", it has the characteristic of being 
                     used only in certain regions, or blocks.*/

// There are special cases of data types. The cases Undefined, Null and NaN.

// Undefined:

let Undefined;

// It haven't value.

alert(Undefined);

// Null:

let Null = null;  // The valu of this is empty.

// NaN:

let number1 = 15;
let number2 = "Deimer";

alert(number1 + number2); // Here we are concatenating.

alert(number1 * number2); /* This is NaN: Not a Number, because is an 
                             imposible operation. */
