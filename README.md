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
<link rel="stylesheet" href="https://unpkg.com/@eox/ui/dist/style.css" />
<script src="https://unpkg.com/@eox/ui"></script>
```

The JS bundle is only needed for components that require JS.

## Usage with Vuetify

```sh
npm i @eox/ui
```

```js
// src/plugins/vuetify.js

import "vuetify/styles";
import "@eox/ui/vuetify/style.css";
import { eox } from "@eox/ui/vuetify/blueprint.js";

import { createVuetify } from "vuetify";

export default createVuetify({
  blueprint: eox,
});
```

## Caveats

### Flash of unstyled content (FOUC)

If you're experiencing FOUC, then you're probably having some static/non-bundling setup. This is somewhat expected, since the HTML will always load faster than JS/CSS bundles (and especially fonts), probably most noticeable on first page load (browser cache should help a bit).

To mitigate e.g. the wrong font flashing, use something like:

```html
<style>
  body {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
</style>
<script>
  document.fonts.onloadingdone = () => {
    document.body.style.opacity = 1;
  };

  (async () => {
    await document.fonts.load("16px Inter");
  })();
</script>
```

### Shadow DOM

Need to include `@eox/ui/style.css` also "outside" in the light DOM (for vars and fonts).
