import mongoose from 'mongoose';
import dns from 'node:dns';

try {
	dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {}

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log('MongoDB connected: ' + conn.connection.host);
	} catch (error) {
		console.log('Error connecting to MONGODB:', error.message);
	}
};
