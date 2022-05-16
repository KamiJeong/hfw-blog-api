import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  user_seq: number;

  @Column()
  title: string;

  @Column()
  contents: string;

  @Column()
  register_date: number;

  @Column()
  modified_date: number;
}
