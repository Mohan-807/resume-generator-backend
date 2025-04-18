import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Template {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
