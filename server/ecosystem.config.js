module.exports = {
  apps: [
    {
      name: 'toodoo-server',
      script: 'node',
      args: 'dist/',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
