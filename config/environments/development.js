module.exports = {
    PORT: (process.env.PORT || 3000),
    DATABASE_URL: (process.env.DATABASE_URL || 'postgres://postgres:password@127.0.0.1:5432/passfolio'),
    SECRET: (process.env.SECRET || 'h3sqq%pb#dHh^XcU8&Uj8brVS_*$LGHW'),
    JWT_EXPIRATION: (process.env.JWT_EXPIRATION || 86400)
};