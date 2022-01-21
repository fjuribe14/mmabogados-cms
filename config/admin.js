module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc596d3ce09a57c27f8c927e7112979f'),
  },
});
