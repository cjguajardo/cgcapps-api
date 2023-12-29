DROP TABLE IF NOT EXISTS "geo_ip";

CREATE TABLE "geo_ip" (
  "id" int(10) unsigned NOT NULL AUTO_INCREMENT,
  "ip" varchar(15) unsigned NOT NULL,
  "continent" varchar(64) NOT NULL,
  "country" varchar(64) NOT NULL,
  "region" varchar(128) NOT NULL,
  "city" varchar(128) NOT NULL,
  "latitude" float NOT NULL,
  "longitude" float NOT NULL,
  "created_at" timestamp NOKT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("id"),
)


drop table if exists "allowed_origins";

create table
  "allowed_origins" (
    "id" bigint primary key generated always as identity,
    "origin" text not null,
    "enabled" boolean not null default true,
    "endpoint" text not null,
    "created_at" timestamp with time zone not null default current_timestamp
  );