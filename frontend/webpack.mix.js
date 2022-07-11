let mix = require('laravel-mix');
require('laravel-mix-ejs')
require('laravel-mix-modernizr');
mix.ts('src/app.ts', 'dist')
    .sass('public/scss/style.scss', 'dist/public/css')
    .ejs('public/index.ejs','dist/public').modernizr();

mix.copy('public/icons', 'dist/public/icons')
    .copy('public/fonts','dist/public/fonts');
