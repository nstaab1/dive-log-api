const generalInfo = require('./generalInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const diverProfile = require('./diver-profile');

module.exports = {
    ...generalInfo,
    ...servers,
    ...components,
    ...tags,
    ...diverProfile
};