CREATE TABLE "leituras" (
	"id"	INTEGER NOT NULL,
	"valor_mq135"	INTEGER,
	"razao_qualidade"	REAL,
	"temperatura"	REAL,
	"umidade"	REAL,
	"pressao"	REAL,
	"timestamp"	DATETIME DEFAULT CURRENT_TIMESTAMP,
	"status_cooler" INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);