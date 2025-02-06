# EOxUI

Collection of styles and snippets for the EOX Design System. Includes JS, CSS and SCSS variables necessary for the used tools.

## General usage

```sh
npm i @eox/ui
```

```js
import "@eox/ui/style.css";
import "@eox/ui";
```

The JS bundle is only needed for components that require JS.

## CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@eox/ui/style.css" />
<script type="module" src="https://unpkg.com/@eox/ui"></script>
```

The JS bundle is only needed for components that require JS.

## Usage with Vuetify

```sh
npm i @eox/ui
```

```js
// src/plugins/vuetify.js

import "vuetify/styles";
import "@eox/ui/lib/vuetify/style.css";
import { eox } from "@eox/ui/lib/vuetify/blueprint";

import { createVuetify } from "vuetify";

export default createVuetify({
  blueprint: eox,
});
```

## Shadow DOM

Need to include `@eox/ui/style.css` also "outside" in the light DOM (for vars and fonts).
