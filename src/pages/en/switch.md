# Switch

> Switch button.

---------------

## Import

```javascript
import { Switch } from 'fx-mui';

Vue.component(Switch.name, Switch);
```

## Usage

```html
<mt-switch :value.sync="value"></mt-switch>
```

With extra text

```html
<mt-switch :value.sync="value">Switch</mt-switch>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| value | value of the switch | Boolean | | |

## Slot

| name | description |
|------|--------|
| - | text content |