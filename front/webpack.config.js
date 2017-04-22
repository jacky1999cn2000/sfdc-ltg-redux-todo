const path = require('path');

// set PATHS variable for easy reference later
const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

console.log('PATHS.app ', PATHS.app);
console.log('PATHS.build ', PATHS.build);
//
// set HOST and PORT (use environment variable if exist)
const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "8080";
//
// // set BABEL_ENV, which will be read by .babelrc (so 'react-hmre' preset will only be used for npm start)
// process.env.BABEL_ENV = process.env.npm_lifecycle_event;

const config = {
    // basic setup for entry, resolve, output
    entry: {
        app: PATHS.app
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    // webpack-dev-server setup
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        stats: 'errors-only',

        port: PORT,
        host: HOST
    },
    // modules for processing files
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory'],
                include: PATHS.app
            }
        ]
    }
}

module.exports = config;
