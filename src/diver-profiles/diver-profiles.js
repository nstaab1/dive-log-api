var express = require('express')
var router = express.Router()

const diverProfiles = require('../data/diver-profiles-data');
const jsonpatch = require('jsonpatch')
;
// define the home page route
router.get('/', function (req, res) {
  res.json(diverProfiles)
})

// define the about route
router.get('/:id', function (req, res) {
  let id = req.params.id;
  const diverProfile = diverProfiles.find(profile => id === profile.id);

  if (diverProfile) {
    res.json(diverProfile)
  } else {
    res.json({
      message: 'Diver profile not found',
      internal_code: 404
    })
  }
})

router.patch('/:id', (req, res) => {
  let id = req.params.id;
  let patch = req.body

  
  const index = diverProfiles.findIndex(profile => id === profile.id);

  if (patch && diverProfiles[index]) {
    try {
      const updatedDiverProfile = jsonpatch.apply_patch(diverProfiles[index], patch);
      diverProfiles[index] = updatedDiverProfile;
      res.json(updatedDiverProfile);
    } catch( e) {
      res.json({
        message: e.message,
        internal_code: 400
      })
    }
  } else {
    res.json({
      message: 'Diver profile not found to update',
      internal_code: 404
    })
  }
})

router.post('/', (req, res) => {
  let diverProfile = req.body
  
  const index = diverProfiles.findIndex(profile => diverProfile.id === profile.id);

  if (index >= 0) {
    res.json({
      message: 'Diver profile already exists',
      internal_code: 400
    })
  } else {
    diverProfiles.push(diverProfile);
    res.json(diverProfile);
  }

  
})

module.exports = router