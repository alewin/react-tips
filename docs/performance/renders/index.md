# Renders

- Do not do calculations inside the render function

- The number of re-renders is not a problem, The problem is whether a single component performs expensive operations to render itself.

`render -> reconcile -> commit`
