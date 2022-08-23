# Importing and Exporting with ES6 Modules
## Author: https://www.linkedin.com/in/garethslinn/

## Exporting

Single export
```
export const letters = ['a','b','c','d'];
```

Selected exports

```
export { letters, numbers };

```

Using an alias

```
export { letters, numbers as abc, nums }
```

## Importing

Import  keyword, members

```
import { letters, numbers } from 'app.js';

```

Importing with alias

```
import letters as abc from 'app.js';

```

Importing all exported members

```
import * as Helprjs from 'helprjs';

```

Using dot notation to extract methods from above.
```
Helprjs.countKeys();

```

Importing a module with a default member

```
import letters from 'app.js';

```
Importing non default as well as default members.

```
import Helper, { Letters, numbers } from 'app.js';
```