const { MongoClient } = require('mongodb')
require('dotenv').config({path:'./.env.local'});

const mockIcon = 'https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg';

const mockData = [
    {
        iconUrl: mockIcon,
        title: 'BTC/USD',
        lastTrade: 63000,
        twentyFourChangePercent: 4.1,
    },
    {
        iconUrl: mockIcon,
        title: 'ETH/USD',
        lastTrade: 3408,
        twentyFourChangePercent: 0.33,

    },
    {
        iconUrl: mockIcon,
        title: 'DOGE/USD',
        lastTrade: 0.15,
        twentyFourChangePercent: 15.75,

    },
    {
        iconUrl: mockIcon,
        title: 'ALGO/USD',
        lastTrade: 0.15,
        twentyFourChangePercent: 2.1,
    },
    {
        iconUrl: mockIcon,
        title: 'DOT/USD',
        lastTrade: 9.79,
        twentyFourChangePercent: 5.1,
    },
];


const uri = process.env.MONGODB_URI ?? '';

let mongodbClient = null;

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}


(async () => {
    const _client = new MongoClient(uri)
    mongodbClient = _client.connect()
    const client = await mongodbClient;
    if (client) {
        const db = client.db("test");
        await db.collection("assets").insertMany(mockData);
        console.log('done seed')
        process.exit();
    } else {
        console.log('could not connect to client  in seed')
    }
})();