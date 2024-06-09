const Redis = require('ioredis');
// Configuration for Redis connection
require('dotenv').config();

const redisUrl = 'redis://red-cpgsj66ct0pc739vbksg:6379';
const redisConfig = {
    host: process.env.host, // Replace with your Redis server host
    port: process.env.port,              // Replace with your Redis server port (default is 6379)
    // // password: 'your_password' // If your Redis server requires a password, include this line
    // url: 'redis://red-cpgsj66ct0pc739vbksg:6379'
};
  
//   // Create a Redis client
const redisClient = Redis.createClient(redisConfig);
// const redisClient = new Redis();


// Handle connection events
redisClient.on('connect', () => {
  console.log('Connected to Redis servers', redisConfig);
});

redisClient.on('error', (err) => {
  console.error('Redis connection errors:', err.message, redisConfig);
});

module.exports = redisClient;