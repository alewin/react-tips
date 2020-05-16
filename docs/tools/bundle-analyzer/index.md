# Source Map Explorer

Source Map Explorer permette di avere una visualizzazione grafica (treemap) del boundle finale dell'applicazione.
In questo modo è possibile osservare quali sono i pacchetti e/o librerie che occupano gran parte del nostro boundle

![Source Map Explorer](sourcemapexplorer.png)


## Se una libreria è fondamentale come posso diminuire il mio boundle?
Se la libreria lo permette è consigliabile importare esclusivamente le funzioni che vengono utilizzate in modo tale, da non importare tutto il pacchetto ma solo il minimo essenziale:

```javascript
import dateFns from 'my-date-fns' // 200KB
dateFns.subDays(...)
```

```javascript
import subDays from 'date-fns/subDays' // 2KB
subDays(...)
```


## Links
- Demo: [demo-bug.html](https://cdn.rawgit.com/danvk/source-map-explorer/08b0e130cb9345f9061760bf8a8d9136ea60b457/demo-bug.html)
- GitHub Repository: [danvk/source-map-explorer](https://github.com/danvk/source-map-explorer)
