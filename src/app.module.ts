import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AuthenticationController } from './authentication/authentication.controller';
import { InvoicesController } from './invoices/invoices.controller';
import { UsersService } from './users/users.service';
import { AuthenticationService } from './authentication/authentication.service';
import { InvoicesService } from './invoices/invoices.service';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { InvcoicesModule } from './invcoices/invcoices.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [UsersModule, AuthenticationModule, InvcoicesModule, InvoicesModule],
  controllers: [AppController, UsersController, AuthenticationController, InvoicesController],
  providers: [AppService, UsersService, AuthenticationService, InvoicesService],
})
export class AppModule {}
