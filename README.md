## Installation

```bash
$ bun install
```

## Running the app - Make sure to have Nest-CLI installed

```bash
# build using nest
nest build

# running with bun
bun run dist/main.js

# running with node - make sure to remove any code related to bun
node dist/main.js
```

### After running the app, use oha to send request and read the files

```bash
# bun endpoint
oha -c 1 -z 30s "http://127.0.0.1:3000/bun"

# node endpoint
oha -c 1 -z 30s "http://127.0.0.1:3000/node"

# trigger gc
oha -c 1 -z 30s "http://127.0.0.1:3000/gc"
```
