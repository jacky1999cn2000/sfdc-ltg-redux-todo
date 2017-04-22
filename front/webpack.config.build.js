module.exports = {
    entry  : './front/src/index.js',
    output : {
        filename : 'bundle.resource',
        library : 'bundle',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module : {
        loaders: [{
            test   : /.js$/,
            exclude: /node_modules/,
            loader : 'babel-loader'
        }]
    }
};
