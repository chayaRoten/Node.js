import mailController from './src/controllers/uploadController'
import express, {Express , Request , Response} from 'express'
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(mailController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
