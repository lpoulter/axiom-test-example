module.exports = {
    "presets": [
      [
        "@babel/preset-env",
        {
          "modules": false
        }
      ],
      "@babel/preset-react"
    ],
    "plugins": ["@babel/plugin-transform-runtime"],
    env: {       
        test: {
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        regenerator: true,
                    },
                ],
            ],
            presets: ['@babel/preset-react', '@babel/preset-env'],
        },
    } 
  }

  