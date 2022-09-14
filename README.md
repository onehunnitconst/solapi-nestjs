# SOLAPI Module for NestJS

[SOLAPI](https://solapi.com/) module for [Nest](https://github.com/nestjs/nest).

# Installation

```bash
yarn add solapi-nestjs
```

# Usage
See [docs](https://console.solapi.com/documents/intro) about usage of SOLAPI.

After the installation process is complete, you can import the `SolapiModule` using static `register()` method.

```typescript
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { SolapiModule } from 'solapi-nestjs';

@Module({
  imports: [
    SolapiModule.register({
      key: "Your API Key",
      secret: "Your API Secret"
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
```

You can use `SolapiService` provider using Dependency injection.

```typescript
import { Injectable } from '@nestjs/common';
import { SolapiService } from 'solapi-nestjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly solapiService: SolapiService,
  ) {}
  
  (...)
}
```