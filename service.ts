import { Inject, Injectable } from '@nestjs/common';
import { SolapiMessageService } from 'solapi';

@Injectable()
export class SolapiService extends SolapiMessageService {

  constructor(@Inject('SOLAPI_OPTIONS') options: { key: string, secret: string }) {
    super(options.key, options.secret);
  }

}