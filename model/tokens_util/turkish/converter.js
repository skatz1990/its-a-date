var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
*/
exports.dayOfWeekToNum = function (day) {

    // Sunday conventions
    if (day == 'Pazar') {
        return 0;
    }

    // Monday conventions
    if (day == 'Pazartesi') {
        return 1;
    }

    // Tuesday conventions
    if (day == 'Salı') {
        return 2;
    }

    // Wednesday conventions
    if (day == 'Çarşamba') {
        return 3;
    }

    // Thursday conventions
    if (day == 'Perşembe') {
        return 4;
    }

    // Friday conventions
    if (day == 'Cuma') {
        return 5;
    }

    // Saturday conventions
    if (day == 'Cumartesi') {
        return 6;
    }

    // Non of the above?
    return -1;
}