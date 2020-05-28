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


## Release version and commit message specification
[Semantic version specification](https://semver.org/)


[Semantic commit message](https://seesparkbox.com/foundry/semantic_commit_messages) can help to indentify a commit with a simply prefix

```
chore: add Oyster build script
docs: explain hat wobble
feat: add beta sequence
fix: remove broken confirmation message
refactor: share logic between 4d3d3d3 and flarhgunnstow
style: convert tabs to spaces
test: ensure Tayne retains clothing
```
