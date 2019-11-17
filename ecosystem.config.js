module.exports = {
  apps: [{
    name: 'casoft-api',
    script: 'index.js',
    instances: 1,
    watch: true,
    env: {
      NODE_ENV: 'development',
      DOMAIN: 'http://localhost:3003/',
      DB: JSON.stringify({
        name: 'mongodb://127.0.0.1:27017/casoft',
      }),
      PORT: 3003,
      PK_PASSPHRASE: 'casoft'
    },
    env_production: {
      NODE_ENV: 'production',
      DOMAIN: 'http://localhost:3004/',
      DB: JSON.stringify({
        name: 'mongodb://127.0.0.1:27017/casoft',
      }),
      PORT: 3004,
      PK_PASSPHRASE: 'casoft'
    }
  }],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
