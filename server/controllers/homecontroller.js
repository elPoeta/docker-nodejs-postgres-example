const peopledb = require('../db/people');

exports.getHome = async ctx => {
    const p = await peopledb.viewAll();
    ctx.body = p;
}