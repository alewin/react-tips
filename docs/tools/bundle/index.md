# Boundle

## Boundle Analyzer

### Source Map Explorer

Source Map Explorer allows you to have a graphic view (treemap) of the final boundle of the application.
In this way it is possible to observe which packages and / or libraries occupy most of our boundle

![Source Map Explorer](sourcemapexplorer.png)

#### If a library is essential, how can I decrease my boundle size?
If the library allows it, it is advisable to import only the functions that are used

```javascript
import dateFns from 'my-date-fns' // 200KB
dateFns.subDays(...)
```

```javascript
import subDays from 'date-fns/subDays' // 2KB
subDays(...)
```

#### Links
- Demo: [demo-bug.html](https://cdn.rawgit.com/danvk/source-map-explorer/08b0e130cb9345f9061760bf8a8d9136ea60b457/demo-bug.html)
- GitHub Repository: [danvk/source-map-explorer](https://github.com/danvk/source-map-explorer)