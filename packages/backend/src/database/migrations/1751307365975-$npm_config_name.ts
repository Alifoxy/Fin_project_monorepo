import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1751307365975 implements MigrationInterface {
    name = ' $npmConfigName1751307365975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`clients\` (\`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` varchar(36) NOT NULL, \`name\` text NOT NULL, \`surname\` text NOT NULL, \`email\` text NOT NULL, \`phone\` text NOT NULL, INDEX \`IDX_f1ab7cf3a5714dbc6bb4e1c28a\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`statuses\` (\`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`id\` varchar(36) NOT NULL, \`status\` text NOT NULL, \`manufacturer_required\` tinyint NOT NULL DEFAULT 0, \`is_default\` tinyint NOT NULL DEFAULT 0, \`is_return_ready\` tinyint NOT NULL DEFAULT 0, \`is_final\` tinyint NOT NULL DEFAULT 0, INDEX \`IDX_2fd3770acdb67736f1a3e3d539\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`manufacturers\` (\`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`id\` varchar(36) NOT NULL, \`manufacturer\` text NOT NULL, INDEX \`IDX_138520de32c379a48e70344197\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`devices\` (\`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` varchar(36) NOT NULL, \`client_id\` varchar(255) NOT NULL, \`model\` text NOT NULL, \`equipment\` text NOT NULL, \`break_info\` text NOT NULL, \`is_returned\` tinyint NOT NULL DEFAULT 0, \`status_id\` varchar(255) NOT NULL, \`manufacturer\` varchar(255) NULL, \`result\` text NULL, \`price\` text NULL, \`record_id\` varchar(255) NULL, \`resultId\` varchar(36) NULL, INDEX \`IDX_b1514758245c12daf43486dd1f\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`records\` (\`created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` varchar(36) NOT NULL, \`record_num\` text NOT NULL, \`client_id\` varchar(255) NULL, \`is_closed\` tinyint NOT NULL DEFAULT 0, INDEX \`IDX_188149422ee2454660abf1d5ee\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`devices\` ADD CONSTRAINT \`FK_60d13d94fcf9362b2ae4dd1108a\` FOREIGN KEY (\`client_id\`) REFERENCES \`clients\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`devices\` ADD CONSTRAINT \`FK_17537a50e31afd635d8919f1f7d\` FOREIGN KEY (\`status_id\`) REFERENCES \`statuses\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`devices\` ADD CONSTRAINT \`FK_1a786149769c8ef14a9a2662746\` FOREIGN KEY (\`resultId\`) REFERENCES \`manufacturers\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`devices\` ADD CONSTRAINT \`FK_5937030bd6d456f7fe917ef04ec\` FOREIGN KEY (\`record_id\`) REFERENCES \`records\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`records\` ADD CONSTRAINT \`FK_a76714226341e0bc903ed9b2fd6\` FOREIGN KEY (\`client_id\`) REFERENCES \`clients\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`records\` DROP FOREIGN KEY \`FK_a76714226341e0bc903ed9b2fd6\``);
        await queryRunner.query(`ALTER TABLE \`devices\` DROP FOREIGN KEY \`FK_5937030bd6d456f7fe917ef04ec\``);
        await queryRunner.query(`ALTER TABLE \`devices\` DROP FOREIGN KEY \`FK_1a786149769c8ef14a9a2662746\``);
        await queryRunner.query(`ALTER TABLE \`devices\` DROP FOREIGN KEY \`FK_17537a50e31afd635d8919f1f7d\``);
        await queryRunner.query(`ALTER TABLE \`devices\` DROP FOREIGN KEY \`FK_60d13d94fcf9362b2ae4dd1108a\``);
        await queryRunner.query(`DROP INDEX \`IDX_188149422ee2454660abf1d5ee\` ON \`records\``);
        await queryRunner.query(`DROP TABLE \`records\``);
        await queryRunner.query(`DROP INDEX \`IDX_b1514758245c12daf43486dd1f\` ON \`devices\``);
        await queryRunner.query(`DROP TABLE \`devices\``);
        await queryRunner.query(`DROP INDEX \`IDX_138520de32c379a48e70344197\` ON \`manufacturers\``);
        await queryRunner.query(`DROP TABLE \`manufacturers\``);
        await queryRunner.query(`DROP INDEX \`IDX_2fd3770acdb67736f1a3e3d539\` ON \`statuses\``);
        await queryRunner.query(`DROP TABLE \`statuses\``);
        await queryRunner.query(`DROP INDEX \`IDX_f1ab7cf3a5714dbc6bb4e1c28a\` ON \`clients\``);
        await queryRunner.query(`DROP TABLE \`clients\``);
    }

}
