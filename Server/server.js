/* eslint-disable import/extensions */

// Interactor - Bussiness Login Blueprint
// entities - Holds bussiness data and manpulate to the bussiness requirement
// Persistance - Works with the Database
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import createUserController from './controller/createUserController.js';
import connectDB from './config/db.js';
import validateUserController from './controller/validateUserController.js';
import createChangePasswordTokenController from './controller/createChangePasswordTokenController.js';
import validateChangePasswordTokenController from './controller/validateChangePasswordTokenController.js';
import validateServicesController from './controller/validateServicesController.js';
import smartNotesController from './controller/smartNotesController.js';

const AUTH_PATH = '/api/auth/';
const VALIDATE_PATH = '/api/validate/';
const NOTES_PATH = '/api/notes/';
// Config for the path of .env file
dotenv.config({ path: '../server/hidden/.env' });

// Adding functionality to the node js
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT ?? 5000;

app.post(`${NOTES_PATH}smartnotes`, smartNotesController);
app.post(`${AUTH_PATH}register`, createUserController);
app.post(`${AUTH_PATH}login`, validateUserController);
app.post(`${AUTH_PATH}send-email-to-change-password`, createChangePasswordTokenController);
app.get(`${VALIDATE_PATH}validate-protected-pages`, validateServicesController);

app.put(`${AUTH_PATH}reset-password`, validateChangePasswordTokenController);
// Starting the server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The server is running on ${PORT}`);
});
