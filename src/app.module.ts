import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPersistenceModule } from './modules/account-persistence/account-persistence.module';
import { AccountEntity } from './modules/account-persistence/account.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      name: 'postgres',
      username: 'postgres',
      port: 5432,
      logging: true,
      entities: [AccountEntity],
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    AccountPersistenceModule,
  ],
})
export class AppModule {}
