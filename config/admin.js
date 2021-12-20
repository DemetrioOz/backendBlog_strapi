module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c646947525e458bb82c809f45d70ff86'),
  },
});
