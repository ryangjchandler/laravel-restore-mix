const mix = require('laravel-mix')

mix
    .postCss('resources/css/app.css', 'public/css')
    .js('resources/js/app.js', 'public/js')
    .version()