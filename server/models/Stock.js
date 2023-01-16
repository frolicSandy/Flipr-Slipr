const mongoose = require('mongoose');



const StockSchema = new mongoose.Schema({
    // StockMarket: {
    //     type: String,
    //     required: true
    // },
    Date: {
        type: String,
        required: true
    },
    Open: {
        type: Number,
        required: true
    },
    Close: {
        type: Number,
        required: true
    },
    High: {
        type: Number,
        required: true
    },
    Low: {
        type: Number,
        required: true
    },
    Adj_Close: {
        type: Number,
        required: true
    },
    Volume: {
        type: Number,
        required: true
    }
});


/** sample data - 
 * {
  "_id": {
    "$oid": "63c2773899e04f11fe9130ff"
  },
  "Date": "2018-01-15",
  "Open": 2875,
  "High": 2875,
  "Low": 2790,
  "Close": 2798.149902,
  "Adj Close": 2503.027832,
  "Volume": 575940
}
 */

const bse = mongoose.model('Stock', StockSchema, 'BSE' );
const nse = mongoose.model('Stock', StockSchema, 'NSE' );
const Reliance = mongoose.model('Stock', StockSchema, 'RELIANCE' );
const Cipla = mongoose.model('Stock', StockSchema, 'CIPLA' );
const Eichermot = mongoose.model('Stock', StockSchema, 'EICHERMOT' );
const Tatasteel = mongoose.model('Stock', StockSchema, 'TATASTEEL' );
const Ashokley = mongoose.model('Stock', StockSchema, 'ASHOKLEY' );
module.exports = {bse,nse,Reliance,Ashokley,Cipla,Eichermot,Tatasteel};
// module.exports = nse;
// module.exports = Reliance;
// // module.exports = Cipla;
// // module.exports = Eichermot;
// // module.exports = Tatasteel;
// // module.exports = Ashokley;