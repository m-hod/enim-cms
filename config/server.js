module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://admin.m-hodges.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6eeed478e355577455dd1ef6e2e6888e'),
    },
  },
});
