import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  makeSample(): Promise<{ message: string; someProp: number }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: 'Hello World',
          someProp: 123,
        });
      }, 2000);
    });
  }
}
