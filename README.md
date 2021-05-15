# Kirby Sveltekit

SvelteKit frontend for Kirby + KQL backend

## Backend Setup

1. Modify `config.php`:
```php
return [
  'api' => [
    'basicAuth' => true,
    'allowInsecure' => true # dev only
  ]
];
```
2. Run in terminal:
```shell
composer i
composer require getkirby/kql
valet link # for Valet users
```
3. Install the Panel 
4. Create an API user

## Frontend Setup

1. Duplicate `.env.example` as `.env` and adapt its values
2. Run in terminal:
```shell
npm i
npm run dev/build
```
