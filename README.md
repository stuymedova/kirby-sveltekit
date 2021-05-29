# Kirby Sveltekit

SvelteKit frontend for Kirby + KQL backend

## Backend Setup

See [github.com/stuymedova/kirby-headless](https://github.com/stuymedova/kirby-headless).

## Frontend Setup

### Overview

```
.
├── src
│   └── routes
│       ├── about.svelte
│       │   └── query.js
│       └── index.svelte
└── .env      
```

### Setup

1. Duplicate `.env.example` as `.env` and adapt its values
2. Run in terminal:
```shell
npm i
npm run dev/build/preview
```
