import { eq } from "drizzle-orm";
import { db } from "..";
import { activity, userActivity, users } from "../schema";
import { UserActivityAdd } from "../handlers/activity";

export const getUserActivities = async (username: string) => {
  const resp = await db
    .select()
    .from(userActivity)
    .leftJoin(activity, eq(userActivity.activityId, activity.id))
    .where(eq(userActivity.username, username))
    .execute();
  return resp;
};

export const addUserActivity = async (userActivityValue: UserActivityAdd) => {
  const resp = await db
    .insert(activity)
    .values({ name: userActivityValue.title, value: userActivityValue.amount })
    .returning();

  const activityId = resp[0].id;
  const userActivities = userActivityValue.split.map((singleSplit) => {
    return {
      username: singleSplit.username,
      value: singleSplit.value,
      activityId: activityId,
    };
  });

  await db.insert(userActivity).values(userActivities);
  return true;
};
