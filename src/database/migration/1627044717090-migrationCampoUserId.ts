import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationCampoUserId1627044717090 implements MigrationInterface {
    name = 'migrationCampoUserId1627044717090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_suggestions" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "user_id" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_suggestions"("id", "title", "description", "created_at", "updated_at") SELECT "id", "title", "description", "created_at", "updated_at" FROM "suggestions"`);
        await queryRunner.query(`DROP TABLE "suggestions"`);
        await queryRunner.query(`ALTER TABLE "temporary_suggestions" RENAME TO "suggestions"`);
        await queryRunner.query(`CREATE TABLE "temporary_suggestions" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "user_id" integer NOT NULL, CONSTRAINT "FK_d5f8b29a35d481f2c4200dae9e8" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_suggestions"("id", "title", "description", "created_at", "updated_at", "user_id") SELECT "id", "title", "description", "created_at", "updated_at", "user_id" FROM "suggestions"`);
        await queryRunner.query(`DROP TABLE "suggestions"`);
        await queryRunner.query(`ALTER TABLE "temporary_suggestions" RENAME TO "suggestions"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suggestions" RENAME TO "temporary_suggestions"`);
        await queryRunner.query(`CREATE TABLE "suggestions" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "user_id" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "suggestions"("id", "title", "description", "created_at", "updated_at", "user_id") SELECT "id", "title", "description", "created_at", "updated_at", "user_id" FROM "temporary_suggestions"`);
        await queryRunner.query(`DROP TABLE "temporary_suggestions"`);
        await queryRunner.query(`ALTER TABLE "suggestions" RENAME TO "temporary_suggestions"`);
        await queryRunner.query(`CREATE TABLE "suggestions" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "suggestions"("id", "title", "description", "created_at", "updated_at") SELECT "id", "title", "description", "created_at", "updated_at" FROM "temporary_suggestions"`);
        await queryRunner.query(`DROP TABLE "temporary_suggestions"`);
    }

}
