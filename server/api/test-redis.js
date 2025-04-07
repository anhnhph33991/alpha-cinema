import redis from "~/server/utils/redis";

export default defineEventHandler(async (event) => {
  await redis.set("foo", "bar");
  const value = await redis.get("foo");
  return { value };
});
