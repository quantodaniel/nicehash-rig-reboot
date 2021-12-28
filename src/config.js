console.log(process.env);
export default {
  apiHost:
    process.env.NICEHASH_ENV === "production"
      ? "https://api2.nicehash.com"
      : "https://api-test.nicehash.com",
  apiKey: process.env.NICEHASH_KEY,
  apiSecret: process.env.NICEHASH_SECRET,
  orgId: process.env.NICEHASH_ORG_ID,
  rigId: process.env.NICEHASH_RIG_ID,
};
