export const env = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_FILE: process.env.DB_FILE || "database.sqlite"
};

// cek apakah DB_FILE tidak ada
if (!process.env.DB_FILE) {
  console.warn("⚠ DB_FILE not set, using default database.sqlite");
}

console.log("Running in:", env.NODE_ENV);