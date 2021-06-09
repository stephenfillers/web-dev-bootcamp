// The nums variable in this case isn't equating to the contents of the array, but rather to a reference to it in memory. Using const
// works because const doesn't restrict the modification of an array's contents, rather it ensures that we don't reassign the variable's type.
const nums = [1, 2, 3]

// Allowed with const because I'm updating the contents of the array, not reassigning the variable name.
nums.push(4);

// Not allowed, because I'm trying to reassign the type of a const variable.
nums = 4;