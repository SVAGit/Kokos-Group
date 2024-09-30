import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class YourEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column({ type: 'varchar', length: 255 })
    title: string;
  
    @CreateDateColumn({ type: 'timestamp', precision: 6 })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', precision: 6, nullable: true })
    updatedAt: Date;
  
    @DeleteDateColumn({ type: 'timestamp', precision: 6, nullable: true })
    deletedAt: Date;
  }