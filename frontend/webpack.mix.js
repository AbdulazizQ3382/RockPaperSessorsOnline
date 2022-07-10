let mix = require('laravel-mix');
require('laravel-mix-ejs')
mix.js('src/app.js', 'dist')
    .sass('assets/style.scss', 'dist')
    .ejs('components/index.html','dist/public');
