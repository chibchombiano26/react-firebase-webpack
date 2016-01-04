module.exports = {
    entry :{
        main: [
            /*'./script1.js',
            './script2.js'*/
            './src/main.js'
        ]
    },
    output:{
        filename: './public/[name].js'
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:
                {
                    presets:['es2015', 'react']
                }
            }
        ]
    }
}