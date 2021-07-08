  
const getDiverProfiles = require('./diver-profiles-operations');
const getDiverProfile = require('./get-diver-profile');
const getDiverCertifications = require('../diver-certification/get-diver-certifications');
const getDiverCertificationsByUser = require('../diver-certification/get-diver-certs-by-user');
const getDiverCertificationsById = require('../diver-certification/get-diver-cert-by-id');
// const postDiverProfile

module.exports = {
    paths:{
        '/diverprofiles':{
            ...getDiverProfiles,
            // ...postDiverProfile,
        },
        '/diverprofiles/{id}':{
            ...getDiverProfile
        },
        '/divercertifications':{
            ...getDiverCertifications
        },
        '/divercertifications/user/id':{
            ...getDiverCertificationsByUser
        },
        '/divercertifications/id':{
            ...getDiverCertificationsById
        }
    }
}