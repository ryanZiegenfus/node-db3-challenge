const knexConfig = require('../knexfile');
const knex = require('knex');
const db = knex(knexConfig.development);

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
    .where({ id }).first();
}

function findSteps(scheme_id) {
    return db('steps')
        .join('schemes', "steps.scheme_id", "=", "schemes.id")
        .select('schemes.id as scheme_id', 'schemes.scheme_name as scheme_name', 'steps.step_number as step_number', 'steps.instructions as instructions' )
        .where({ scheme_id });
}

function add(scheme) {
    return db('schemes')
    .insert(scheme);
}

function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('schemes')
    .where({ id })
    .del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}