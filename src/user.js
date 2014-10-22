var mongoose = require('mongoose');


exports.subscribe = function subscribe(req) {
    console.log('user.subscribe', req);
};

exports.modify = function modify(req) {
    console.log('user.modify', req);
};