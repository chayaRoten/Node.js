import express, { Express, Request, Response } from 'express'
import multer from "multer";
import axios from 'axios';

const upload = multer({ dest: "uploads/" });
const app: Express = express();
const fs = require('fs');
const API_KEY = '854736dae4d44a099ff47192dc2d44e3';

async function validateEmail(email: string): Promise<boolean> {
  try {
    // https://emailvalidation.abstractapi.com/v1?email=c0548560049%40gmail.com&auto_correct=true&api_key=854736dae4d44a099ff47192dc2d44e3
    // https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${email}
    const response = await axios.get(`https://emailvalidation.abstractapi.com/v1?email=${email}&auto_correct=true&api_key=854736dae4d44a099ff47192dc2d44e3`);
    return response.data.is_valid;
  } catch (error: any) {
    console.error(`Error validating email ${email}: ${error.message}`);
    return false;
  }
}

async function validateEmailsInFile(filePath: string): Promise<void> {
  try {
    const fileContent: string = fs.readFileSync(filePath, 'utf-8');
    const emails: string[] = fileContent.split(',').map(email => email.trim());

    for (const email of emails) {
      const isValid = await validateEmail(email);
      console.log(`${email}: ${isValid ? 'Valid' : 'Invalid'}`);
    }
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
  }
}



app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req: any, res: express.Response) {
  const filePath: string = req.files[0].path;
  validateEmailsInFile(filePath);
  res.json({ message: "Successfully uploaded files" });
}








export default app;