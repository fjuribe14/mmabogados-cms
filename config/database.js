module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "ec2-44-193-111-218.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "d8mft5h18hnp5"),
      user: env("DATABASE_USERNAME", "iqrdtbuerupwdh"),
      password: env(
        "DATABASE_PASSWORD",
        "40f1385d592d98f84de349c5c822561ee82738ca5694f8173ce85c9c7bc43882"
      ),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
      debug: false,
    },
  },
});
