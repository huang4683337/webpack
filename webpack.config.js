module.exports = {
    mode:"development",
    entry: __dirname + "/src/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",  //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    }
}

// __dirname 是 nodeJs 的一个全局变量，指向当前脚本所在目录