# 02_real_world_vue2

## directory structure
```shell
.
├── README.md
├── babel.config.js
├── .node_modules            // dependencies needed to build project
├── package.json
├── pnpm-lock.yaml
├── package.json
├── pnpm-lock.yaml
├── public                   // put files you dont want run through webpack
│   ├── favicon.ico
│   └── index.html
├── src                      // where all our app-code goes
│   ├── App.vuev             // root components - all other components are nested within
│   ├── assets               // store assets such as images, fonts
│   ├── components           // store building blocks of vue app
│   ├── main.ts              // renders app and mountes to DOM
│   ├── router               // Vue router
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   ├── store                // Vuex
│   └── view　　　　　　　　　　// store files for different pages
├── tsconfig.json
└── vue.config.js



```
## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
