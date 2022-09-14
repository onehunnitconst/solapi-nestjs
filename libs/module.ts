import { DynamicModule, Module } from '@nestjs/common';
import { SolapiService } from './service';

@Module({})
export class SolapiModule {
  static register(options: { key: string, secret: string }): DynamicModule {
    return {
      module: SolapiModule,
      providers: [
        {
          provide: 'SOLAPI_OPTIONS',
          useValue: options,
        },
        SolapiService
      ],
      exports: [SolapiService]
    };
  }
}