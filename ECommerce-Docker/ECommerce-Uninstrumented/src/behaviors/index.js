var exports = module.exports;
require("fs").readdirSync(__dirname).forEach(function(file) {
    if (file !== 'index.js') {
        exports[file.replace('.js', '')] = require('./' + file);
    }
});