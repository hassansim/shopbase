import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

export const redis = process.env.UPSTASH_REDIS_URL
	? new Redis(process.env.UPSTASH_REDIS_URL)
	: {
			get: async () => null,
			set: async () => 'OK',
			del: async () => 1,
			on: () => {},
	  };

if (process.env.UPSTASH_REDIS_URL && typeof redis.on === 'function') {
	redis.on('error', (err) => {
		console.warn('Redis notice:', err.message);
	});
}
