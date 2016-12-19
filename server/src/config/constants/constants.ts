/**
 * Created by Mason Belyeu on 12.1.2016.
 */

class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://mbelyeu:summer16@ds149567.mlab.com:49567/cornerstone"
}
Object.seal(Constants);
export = Constants;