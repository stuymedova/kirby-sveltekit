# Kirby Sveltekit

SvelteKit frontend for Kirby + KQL backend

## Backend Setup

See [github.com/stuymedova/kirby-headless](https://github.com/stuymedova/kirby-headless)

## Frontend Setup

### Overview

```
.
├── src
│   └── routes
│       ├── api
│       │   └── […query].js
│       └── index.svelte
└── .env      
```

### Prerequisites

[Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

### Setup

1. Duplicate `.env.example` as `.env` and adapt its values
2. Run in terminal:
```shell
npm install
npm run dev # or npm run build/preview
```

### Result

<img width="1552" alt="kirby-sveltekit" src="https://user-images.githubusercontent.com/53351370/122302858-5d30c800-cf0b-11eb-8f97-58edc96c6767.png">
