# Vitepress sites

These will be in `/docs` directory with a `/vitepress` directory with a `config.ts` file.

```sh
docs
└── .vitepress
    └── config.ts
```

The directory the `/docs` folder is in should have the following scripts and depemdencies in the `package.json`.

```sh
"scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
},
    "dependencies": {
    "vitepress": "^1.0.0-beta.1"
}
```

## Developing a Vitepress site

```sh
npm run docs:dev
```

This starts a local hot module reload server for the docs.

```sh
> docs:dev
> vitepress dev docs


  vitepress v1.0.0-beta.1

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

The port number may not always be `5173`, depending upon what else is running.


## Test build before creating a PR

```sh
 npm run docs:build
 ```