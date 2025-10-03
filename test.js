import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();  // MUST be at the very top

console.log("GMAIL_USER:", process.env.GMAIL_USER); // check if loaded
console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD); // check if loaded
