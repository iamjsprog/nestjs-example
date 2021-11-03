import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'uuid',
  })
  userId: string;
}
