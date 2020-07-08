import express, { Request, Response } from 'express';
const app = express();

app.get('/', function (req: Request, res: Response) {
  res.send(`Hi ${req.query.name} 👋`);
});

app.listen(3000);