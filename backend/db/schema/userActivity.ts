import {
  text,
  sqliteTable,
  integer,
  real,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { activity } from "./activity";
import { users } from "./users";

export const userActivity = sqliteTable(
  "userActivity",
  {
    username: text("username")
      .notNull()
      .references(() => users.username),
    activityId: integer("activityId")
      .notNull()
      .references(() => activity.id),
    value: real("value").notNull(),
  },
  (table) => ({
    primaryKey: primaryKey({ columns: [table.activityId, table.username] }),
  })
);

export type UserActivity = typeof userActivity.$inferSelect;
export type InsertUserActivity = typeof userActivity.$inferInsert;
