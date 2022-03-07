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


### Fundamental of Vue Router
#### Single Page Application (SPA) 
SPA is defined as a web app that loads from a single page and dynamically updates that page as the user interacts with the app. However, if we’re using a single page application we need a way to navigate between content (client-side routing).

**Q: Are About and Home “components” or “views”?**  
We are importing these files from the /views directory and in our src/ directory, we have both a /components and a /views folder. So, what are they?

A: They are components.  
We place components in both the /components and /views folders. The difference is that when using Vue Router, it’s a best practice to put the components (AKA pages) that get loaded by Vue Router in the /views directory. You then keep the modular (reusable) components in your /components directory.
```vue
    <template>
      <div>
      // here is where we lay out the structure of our component
      </div>
    </template>
    
    <script>
      export default {
        // here is where we give our component the ability to behave and perform logic
      }
    </script>
    
    <style scoped>
    // here is where we design the appearance of our component
    </style>
```