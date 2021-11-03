import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPersistenceAdapter } from './account-persistence.adapter';
import { AccountEntity } from './account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  providers: [AccountPersistenceAdapter],
  exports: [],
})
export class AccountPersistenceModule {}
