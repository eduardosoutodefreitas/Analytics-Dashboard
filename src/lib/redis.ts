import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://usw1-humorous-pelican-34023.upstash.io",
  token: process.env.REDIS_KEY!,
});
