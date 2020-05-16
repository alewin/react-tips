# Performance

## Non fare calcoli all'interno della funzione di return o render

## Non sono preoccupanti quanti sono i render ma quando dura un singolo render
react sa qunndo deve aggiornarsi
render -> reconcile -> commit

# Non abusare di over-ottimizzazione
useMemo, useCallback, aggiungo strati di controllo in più che anzichè migliorare le performance
possono rallentare l'applicativo, usa solo quando è necessario

# Prop drilling No!


# Crea props specifiche ed evita oggetti con 2 valori
```javascript
{
  name: 'name',
  surname: 'surname',
}
```javascript
name: 'name',
surname: 'surname',
  ```

# Crea `utils` e `helpers` generici 
DRY, utile anche per test


# Lazy loading


# Webpm

