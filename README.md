# starwars-names

Manage list star-wars names

[![Build Status](https://travis-ci.org/rzaniboni/starwars-names.svg?branch=master)](https://travis-ci.org/rzaniboni/starwars-names)

## Install

```sh
npm install rzaniboni/starwars-names --save
```

<a name="api"></a>

## API

- <a href="#random"><code>assets.<b>put()</b></code></a>
- <a href="#get"><code>assets.<b>get()</b></code></a>
- <a href="#createSchema"><code>assets.<b>createSchema()</b></code></a>
- <a href="#dropSchema"><code>assets.<b>dropSchema()</b></code></a>

---

<a name="assets"></a>

### buildAssets(connectionString)

The factory for the assets module, you can just pass through a
[pg](http:/npm.im/pg) connection string.

Example:

```js
var connString = "postgres://localhost/assets_tests";
var assets = require("@matteo.collina/assets-pg")(connString);
```
