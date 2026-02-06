// babel-preset-taro 更多选项和默认值：
// https://docs.taro.zone/docs/next/babel-config
export default {
  presets: [
    [
      'babel-preset-taro',
      {
        framework: 'react',
        ts: true,
        compiler: 'vite',
        useBuiltIns: false,
      }
    ],
    ['@babel/preset-react']
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime'
    ]
  ]
}
