const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');


module.exports = function override(config, env) {

    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);

    config = rewireAliases.aliasesOptions({
        '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
        '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
    })(config, env);

    return config;
};
