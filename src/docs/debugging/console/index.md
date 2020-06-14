# Console

Useful features for debugging via the `console`

- **Log**

`console.log` can also accept more than one params

```javascript
const a = 1, b = "hello", c = "world";
console.log("DEBUG:", b, c, a)
```

- **Assert**

The `console.assert` method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

```javascript
const a = 1, b = 2;
const sum = (val1, val2) => {
  return val1 + val2;
}
console.assert(sum(a,b) === 3, {errorMsg: 'Sum error' });
```


- **Table**

The `console.table` displays tabular data (array, objects) as a table, and each element in the array (or enumerable property if data is an object) will be a row in the table.

![console table](console-table-array.png)

- **Time**

The `console.time` starts a timer you can use to track how long an operation takes.

```javascript
console.time("answer time");
alert("Click to continue");

console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
```

