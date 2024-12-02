import { getLastRecord, getUserInfo } from "./storage";

export const getCurrentTotalConsumption = async () => {
  const record = await getLastRecord();
  if (record.activities.length > 0) {
    const totalConsumption = record.activities.reduce(
      (sum, activity) => sum + activity.amount,
      0
    );
    return totalConsumption;
  }
  return 0;
};

export const getRemainingConsumption = async () => {
  const currentTotalConsumption = await getCurrentTotalConsumption();
  const dailyWaterGoal = await getDailyWaterGoal();
  const remainingConsumption = dailyWaterGoal - currentTotalConsumption;
  return remainingConsumption;
};

export const getDailyWaterGoal = async () => {
  const user = await getUserInfo();
  return user.dailyWaterGoal;
};
