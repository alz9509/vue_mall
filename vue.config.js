const path=require('path');
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.join(__dirname,'src'))
            .set('components', path.join(__dirname,'src/components'))
            .set('assets', path.join(__dirname,'src/assets'))
            .set('common', path.join(__dirname,'src/common'))
            .set('network', path.join(__dirname,'src/network'))
            .set('views', path.join(__dirname,'src/views'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
    }
};