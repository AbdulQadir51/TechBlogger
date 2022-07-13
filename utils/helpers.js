//const moment=require('moment');
const moment = require('moment-timezone');

module.exports = {
    format_date: date => {
        return moment(date).tz('UTC').format('Do MMMM YY');
    }
}