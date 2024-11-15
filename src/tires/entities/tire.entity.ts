import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";
import { Usage } from "src/usages/entities/usage.entity";

@Entity()
export class Tire {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name: string;
    
    @Column()
    dot: number;

    @Column()
    measure: string;

    
    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(()=> Usage,(usage)=> usage.id, {
        eager: true
    })
    usage:Usage;
}
