module.exports = {
    mode:"development",
    devtool: 'eval-source-map',
    entry: __dirname + "/src/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",  //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devServer:{
        contentBase: './',   // 本地服务加载页面所在的目录
        historyApiFallback: true,   // 路由跳转
        inline: true,   // 实时刷新
    }
}

// __dirname 是 nodeJs 的一个全局变量，指向当前脚本所在目录