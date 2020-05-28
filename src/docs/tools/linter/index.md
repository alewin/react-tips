# Linter

Maintain a clean codebase brings many benefits:
- decreases the risk of conflicts between Pull requests
- Increases the readability of the code

*Without eslint*
```javascript
if(variable===2){
const {name,age}=payload; age++
  console.log('n is 2');
   }else{
 cconsole.log('n is not 2');
}
```

*With eslint*
```javascript
if (variable === 2) {
  const { name, age } = payload; age++
  console.log('n is 2')
} else {
  cconsole.log('n is not 2')
}

```

- Avoid writing potentially risky code

Example: 
```javascript
const number = "3"
const correctAnswer = 3

if(number == correctAnswer) { ... } // true (eslint warning)
if(number === correctAnswer) { ... } // false
```

[Eslint](https://eslint.org/)
