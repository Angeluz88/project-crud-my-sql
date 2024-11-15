import { Tire } from "src/tires/entities/tire.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Usage {

    @Column({primary: true, generated: true })
    id: number;

    @Column()
    name:string;
    
    @OneToMany(() => Tire, (tire) => tire.usage)
    tires: Tire[];

}
