import mongoose from 'mongoose';

const mongoDB = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);

main().catch((err) => console.log(err));

async function main(): Promise<void> {
  console.log('mongodb on http://localhost:27017/yad2');
  await mongoose.connect(mongoDB ?? '');
}
