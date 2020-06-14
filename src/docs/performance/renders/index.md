# Renders

- Do not do calculations inside the render function

- The number of re-renders is not a problem, The problem is whether a single component performs expensive operations to render itself.

`render -> reconcile -> commit`

- Dont use useState when no rerender is needed

```javascript live=true title=SumComponent.js
function SumComponent(props) {
  const [a, setA] = useState(0); // BAD
  const [b, setB] = useState(0); // BAD
  const [result, setResult] = useState(0);

  React.useEffect(()=>{
      setA(2)
      setA(8)
  }, [])

  const onSumClick = () => {
    setResult(a+b)
  };

  return (
    <div>
      <button onClick={onSumClick}>Sum number</button>
      {result}
    </div>
  );
}
```

use global vars, or `ref`: `const [a, setA] = useRef(0);`
