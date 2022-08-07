require("dotenv").config();


/**
 * used to get environment variables
 */
class Settings {
    static getPort() {
        return process.env.PORT;
    }
    static getHost() {
        return process.env.HOST;
    }
    static getDB_URI() {
        return process.env.MONGO_DB_URI;
    }
    static getWEB_URI() {
        return process.env.WEB_URI;
    }
    static getRefreshToken() {
        return process.env.OAUTH_REFRESH_TOKEN;
    }
    static getClientID() {
        return process.env.OAUTH_CLIENTID;
    }
    static getClientSecret() {
        return process.env.OAUTH_CLIENT_SECRET;
    }
    static getPassword() {
        return process.env.MAIL_PASSWORD;
    }
    static getUser() {
        return process.env.MAIL_USERNAME;
    }
    static getPort() {
        return process.env.PORT;
    }
}
module.exports = Settings;