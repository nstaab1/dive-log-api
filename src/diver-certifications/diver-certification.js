var express = require('express');
var router = express.Router();

const divercertifications = require('../data/diver-certifications');
const diverProfiles = require('../data/diver-profiles-data');


// define the home page route
router.get('/', function (req, res) {
  res.json(divercertifications)
})
// define the about route
router.get('/:id', function (req, res) {
  let id = parseInt(req.params.id);
  const diverCert = divercertifications.find(cert => id === cert.id);

  if (diverCert) {
    res.json(diverCert)
  } else {
    res.json({
      message: 'Diver certification not found',
      internal_code: 404
    })
  }
})
router.get('/user/:id', function (req, res) {
  let id = req.params.id;
  const diverCert = diverProfiles.find(profile => id === profile.id);

  if (diverCert) {
    res.json(diverCert.certifications)
  } else {
    res.json({
      message: 'Diver certification for user not found',
      internal_code: 404
    })
  }
})

module.exports = router