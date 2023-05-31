import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getUsers(): string {

    const sql = `SELECT * FROM users`
    return 'Hello World!';
  }
}
