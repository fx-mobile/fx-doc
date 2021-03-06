# Radio

> Radio list, depends on <router-link to="cell">cell</router-link>.

-------------

## Import

```javascript
import { Radio } from 'fx-mui';

Vue.component(Radio.name, Radio);
```

## Usage

Basic usage

```html
<mt-radio
  title="radio list"
  v-model="value"
  :options="['optionA', 'optionB', 'optionC']">
</mt-radio>
```

Can be disabled

```javascript
this.options = [
  {
    label: 'disabled option',
    value: 'valueF',
    disabled: true
  },
  {
    label: 'optionA',
    value: 'valueA'
  },
  {
    label: 'optionB',
    value: 'valueB'
  }
];
```

```html
<mt-radio
  title="radio list"
  v-model="value"
  :options="options">
</mt-radio>
```

Alignment of the radio

```html
<mt-radio
  align="right"
  v-model="value"
  :options="options">
</mt-radio>
```

## API
| option | description | type | acceptable values | default |
|------|-------|---------|-------|--------|
| options | array of options(string or object) | Array | |
|value | value of the selected option | String | | |
|title | title of the list | string | | |
|align| alignment of the radio | String | left, right | left |
