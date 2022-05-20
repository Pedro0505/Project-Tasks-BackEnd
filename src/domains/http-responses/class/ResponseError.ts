import { IResponseError } from '../interfaces';

export abstract class ResponseError {
  protected _code: number;
  protected _message: { error: string };

  constructor(code: number, message: string) {
    this._code = code;
    this._message = {
      error: message,
    };
  }
  abstract get reponse(): IResponseError;
}
