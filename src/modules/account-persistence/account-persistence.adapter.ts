import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from './account.entity';

@Injectable()
export class AccountPersistenceAdapter {
  constructor(@InjectRepository(AccountEntity) private _accountRepository: Repository<AccountEntity>) {}

  async updateActivities(): Promise<void> {
    console.log('test');
  }

  async loadAccount(): Promise<any> {
    console.log('test');
  }
}
