# State Management


- Normalizza i valori di un array in un oggetto chiave valore O(1) e non O(n)

- Evita di aggiungere informazioni non necessarie nello stato, se può essere calcolato non metterlo in redux

- Mantieni uno stato semplice e pulito senza troppi nested-object perchè rischiresti di causare re-render in componenti che leggono solo una minima porzione del tuo stato

```javascript
{
  a:{
    b:{
      c: [1,23,4] // update 
    }
  },
  d: 1 // here!!!
}
```

- Se due porzioni di stato si aggiorno contemporaneamente mantienili in uno stesso reducer per evitare errori inaspettati


- Utilizza un `Context` per comunicare tra due componenti invece di salvare tutto su redux
