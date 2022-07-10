let mix = require('laravel-mix');
require('laravel-mix-ejs')
require('laravel-mix-modernizr');
mix.ts('src/app.ts', 'dist')
    .sass('assets/scss/style.scss', 'dist/public/css')
    .ejs('components/index.ejs','dist/public').modernizr();
