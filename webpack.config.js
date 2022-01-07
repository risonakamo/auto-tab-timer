const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin=require("fork-ts-checker-webpack-plugin");
const SveltePreprocess=require("svelte-preprocess");
// const CopyPlugin=require("copy-webpack-plugin");
const WebpackBar=require("webpackbar");

module.exports={
    mode:"development",
    entry:{
        popup:"./web/pages/popup/popup-index.ts"
    },
    output:{
        path:`${__dirname}/build`,
        filename:"[name]-build.js"
    },

    module:{
        rules:[
            {
                test:/\.(ts|js)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-typescript"]
                    }
                }
            },
            {
				test:/\.svelte$/,
				use:{
				    loader:"svelte-loader",
                    options:{
                        preprocess:SveltePreprocess()
                    }
				}
            },
            {
                test:/\.(less|css)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {loader:"css-loader",options:{url:false}},
                    {loader:"less-loader"}
                ]
            }
        ]
    },

    plugins:[
        new MiniCssExtractPlugin({
            filename:"[name]-build.css"
        }),

        new ForkTsCheckerWebpackPlugin(),
        new WebpackBar()

        // new CopyPlugin([
        //     {from:"src/index.html",to:"../"}
        // ]),
    ],

    // optimization:{
    //     splitChunks:{
    //         chunks:"all",
    //         automaticNameDelimiter:"-"
    //     }
    // },

    resolve:{
        extensions:[".ts",".js",".svelte"],
        alias:{
            components:`${__dirname}/web/components`
        }
    },

    stats:{
        entrypoints:false,
        modules:false,
        chunks:false,
        // assets:false
    },

    devtool:"cheap-module-source-map"
};