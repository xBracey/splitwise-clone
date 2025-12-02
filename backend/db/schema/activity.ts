import { text, sqliteTable, integer, real } from "drizzle-orm/sqlite-core";

export const activity = sqliteTable("activity", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  value: real("value").notNull(),
});

export type Activity = typeof activity.$inferSelect;
export type InsertActivity = typeof activity.$inferInsert;
