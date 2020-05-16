# Architecture

- utilizza un tema e un layout generico `BaseLayout` da riciclare in tutte le pagine

- Centralizza messaggi di errore o notifiche nel `BaseLayout`

- Se il layout di desktop e mobile differiscono molto, utilizza 2 componenti diversi
``javascript
<Menu mobile>

<StyledMenu>
<BaseMenu>
{ mobile ? (<MobileMenu />) : (<DesktopMenu>)}
</BaseMenu>
</StyledMenu>

```

