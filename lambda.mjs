import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import serverless from 'serverless-http'

const app = express();
const base = '/';
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);

export const handler = serverless(app);