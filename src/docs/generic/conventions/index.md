# Conventions

## Function Params
- When a function accepts more than 4 parameters, it is better to pass them through an `object` in order to make the code more readable and less risk of errors.

```javascript
const getNames = (firstName, secondName, surName, nickName, fullName, dadName) => { ... }
getNames("One","Two","sur","sno","One Two JR", 'Dad")
```

```javascript
const getNames = ({ first, second, sur, nick, full, dad }) => { ... }
getNames({ nick:'sno', sur: "sur", second: "Two", first: "one", full:"One Two JR", dad: "Dad" })
```

## Event Handlers
- Use a standard for handlers, onClick, onFocus etc ..

```javascript
const Demo = () => {
  const handleOnAddClick = () => { ... }
  const handleOnFocus = () => { ... }
  return (
    <div onFocus={handleOnFocus}>
      <button onClick={handleOnAddClick}>Add</button>
    </div>
  )
}
```
