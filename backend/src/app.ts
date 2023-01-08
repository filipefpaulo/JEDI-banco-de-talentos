import express, { Request, Response } from 'express';
import 'express-async-errors';

export class App {
  private _app = express();

  constructor() {
    this.config();
  }

  private config() {
    const { _app } = this;

    _app.use(express.json());

    _app.get('/', (_req: Request, res: Response) => res.status(200).send('Hi!'));
  }

  get app() {
    return this._app;
  }

  listen(PORT: number | string) {
    this._app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
}
