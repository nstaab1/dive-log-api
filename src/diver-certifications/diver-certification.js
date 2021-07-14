const express = require('express');

const router = express.Router();

const divercertifications = require('../data/diver-certifications');

const diverProfiles = require('../data/diver-profiles-data');

router.get('/', (req, res) => {
  res.json(divercertifications);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const diverCert = divercertifications.find((cert) => id === cert.id);

  if (diverCert) {
    res.json(diverCert);
  } else {
    res.json({
      message: 'Diver certification not found',
      internal_code: 404,
    });
  }
});

router.get('/user/:id', (req, res) => {
  const { id } = req.params;
  const diverCert = diverProfiles.find((profile) => id === profile.id);

  if (diverCert) {
    res.json(diverCert.certifications);
  } else {
    res.json({
      message: 'Diver certification for user not found',
      internal_code: 404,
    });
  }
});

module.exports = router;
