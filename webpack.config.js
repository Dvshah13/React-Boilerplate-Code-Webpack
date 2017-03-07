const path = require('path');
module.exports = {
    entry: './js/components/scripts.js',
    output: {
        path: path.resolve('dist'),
        filename: 'scripts.min.js',
        },
    module: {
        loaders: [
                {
                    test:/\.jsx?$/,
                    loaders: 'babel-loader',
                    query: {
                        plugins: ['transform-decorators-legacy' ],
                        presets:['es2015', 'react']
                    }
                }
        ]
    }
}
