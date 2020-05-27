# Portions of state

- Avoid adding unnecessary information in the state, if it can be calculated don't put it in

- Maintain a simple and clean state without too many nested-objects because you would risk re-rendering in components that read only a small portion of your state

- If two portions of status update simultaneously, keep them in the same reducer to avoid unexpected errors
