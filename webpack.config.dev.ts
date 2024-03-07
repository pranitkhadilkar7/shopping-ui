import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server"
import config from './webpack.config'

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
  }

const devConfig: Configuration = {
    mode: 'development',
    devServer: {
        static: './dist',
        port: 3000
    },
    ...config,
}

export default devConfig