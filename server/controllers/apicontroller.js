const peopledb = require('../db/people');

exports.getData = async ctx => {
    const p = await peopledb.viewAll();
    ctx.body = p;
}