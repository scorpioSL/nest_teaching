import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Base extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    created_at: Date;

    @Column({ nullable: true })
    updated_at: Date;

    @Column({ default: false })
    archieved: boolean;

    @BeforeInsert()
    @BeforeUpdate()
    setTimestamp() { 
        if(this.id) this.updated_at = new Date();
        else this.created_at = new Date();
    }

}