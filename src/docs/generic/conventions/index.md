# Conventions

## Function Params
- When a function accepts more than 4 parameters, it is better to pass them through an `object` in order to make the code more readable and less risk of errors.

```javascript
const getNames = (firstName, secondName, surName, nickName, fullName, dadName) => {
  ...
}
getNames("One","Two","sur","sno","One Two JR", 'Dad")
```

```javascript
const getNames = ({ first, second, sur, nick, full, dad }) => { 
  ...
}
getNames({ nick:'sno', sur: "sur", second: "Two", first: "one", full:"One Two JR", dad: "Dad" })
```

---

## Event Handlers
- Use a standard name convention for handlers, `onClick`, `onFocus` etc ..

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

*Suggested*:
- `on{Event}`
- `handle{Event}`

---

## Release version specification

Use a convention for application versions. This will make it easier to identify if a new version includes bugs, features, or breaking changes:

- [Semantic version specification](https://semver.org/)

*Example*

**Current Version: 1.0.0**

```markdown
- *Patch* 1.0.1 ( bug fixes)
- *Minor* 1.1.0 ( backward compatible features )
- *Major* 2.0.0 ( non backward compatible features )
```

Remember that a *Minor* can also include *bug fixes**, and a *Major* can also include non-backward compatible features, but not vice versa.


## Commit message specification

Use a convention for commit message. This will make it easier to identify if a commit includes docs, feature, bugfix or breaking changes:

- [Semantic commit message](https://seesparkbox.com/foundry/semantic_commit_messages)

```markdown
chore: add Oyster build script
docs: explain hat wobble
feat: add beta sequence
fix: remove broken confirmation message
refactor: share logic between 4d3d3d3 and flarhgunnstow
style: convert tabs to spaces
test: ensure Tayne retains clothing
```
