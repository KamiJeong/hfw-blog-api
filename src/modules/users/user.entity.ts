import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  email: string;

  @Column()
  title: string;

  @Column()
  first: string;

  @Column()
  last: string;

  @Column()
  dob: string;

  @Column()
  registered: string;

  @Column()
  phone: string;

  @Column()
  cell: string;

  @Column()
  large: string;

  @Column()
  medium: string;

  @Column()
  thumbnail: string;

  @Column()
  nat: string;

  @Column()
  password: string;
}
