const accountId = 144553
// const --> Value can't be changed.
let accountEmail = "raushan@google.com" 
var accountPassword ="12345678"

// variable can be declear by two types 
// 1. let  
// 2. var
/*
prefer not to use "var"
because of issue in block scope and functional scope
*/
accountCity = "Jehanabad"
let accountState;

// accountId = 2  // Not allowed
accountEmail = "rg@rg.com"
accountPassword = "21212121"
accountCity = "kolkata"
console.log(accountId);  // 144553
console.log(accountEmail); // rg@rg.com
console.log(accountPassword); // 21212121
console.log(accountCity);  // kolkata

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
    
/* │(index)  │ Values      │
   ├─────────┼─────────────┤
   │ 0       │ 144553      │
   │ 1       │ 'rg@rg.com' │
   │ 2       │ '21212121'  │
   │ 3       │ 'kolkata'   │
   │ 4       │ undefined   │
*/ 
// log --> console.log();

/* ----------  NOTES  ----------
 Keyword	  Scope Type	  Reassignable	   Hoisting    	Block Scope
 var	    Function Scope	   ✅ Yes	     ✅ Yes	     ❌ No
 let	    Block Scope	       ✅ Yes	     ❌ No	     ✅ Yes
 const	    Block Scope	       ❌ No	         ❌ No	     ✅ Yes
*/
/*
let a = 5;
a = 10; // ✅ allowed
const b = 8;
b = 15; // ❌ Error: Assignment to constant variable.
*/
/* Variable Naming Rules
 1. Must begin with a letter, _, or $.
 2. Cannot start with a number.
 3. Case-sensitive (name ≠ Name).
 4. Avoid using reserved keywords (e.g., let, return, if).
*/
/* Best Practices
 1.Prefer let and const over var.
 2.Use const when you don’t need to reassign.
 3.Use meaningful variable names.
*/
/* Block Scope
 --A variable has block scope if it is accessible only within the block (i.e., within { }) where it is defined.
 --Variables declared with let and const are block scoped.
*/

/*
Function Scope
--A variable has function scope if it is accessible only within the function where it was declared.
--Variables declared with var are function scoped.
*/
/*
| Feature       | `var`                | `let` / `const`             |
| ------------- | -----------------    | --------------------------- |
| Scope Type    | Function Scope       | Block Scope                 |
| Redeclaration | ✅ Allowed           | ❌ Not Allowed               |
| Reassignment  | ✅ Yes               | ✅ (`let`) ❌ (`const`)      |
| Hoisted       | ✅ Yes (undefined)   | ✅ Yes (but not initialized) |
*/

