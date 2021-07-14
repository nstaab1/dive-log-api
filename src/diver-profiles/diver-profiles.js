const express = require('express');

const jsonpatch = require('jsonpatch');

const router = express.Router();

const diverProfiles = require('../data/diver-profiles-data');

// define the home page route
router.get('/', (req, res) => {
  res.json(diverProfiles);
});

// define the about route
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const diverProfile = diverProfiles.find((profile) => id === profile.id);

  if (diverProfile) {
    res.json(diverProfile);
  } else {
    res.json({
      message: 'Diver profile not found',
      internal_code: 404,
    });
  }
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const patch = req.body;

  const index = diverProfiles.findIndex((profile) => id === profile.id);

  if (patch && diverProfiles[index]) {
    try {
      try {
        const updatedDiverProfile = jsonpatch.apply_patch(
          diverProfiles[index],
          patch,
        );
        diverProfiles[index] = updatedDiverProfile;
        res.json(updatedDiverProfile);
      } catch (e) {
        res.json({
          message: `Patch error: ${e}`,
          internal_code: 400,
        });
      }
    } catch (e) {
      res.json({
        message: e.message,
        internal_code: 400,
      });
    }
  } else {
    res.json({
      message: 'Diver profile not found to update',
      internal_code: 404,
    });
  }
});

router.post('/', (req, res) => {
  const diverProfile = req.body;

  const index = diverProfiles.findIndex(
    (profile) => diverProfile.id === profile.id,
  );

  if (index >= 0) {
    res.json({
      message: 'Diver profile already exists',
      internal_code: 400,
    });
  } else {
    diverProfiles.push(diverProfile);
    res.json(diverProfile);
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const index = diverProfiles.findIndex((profile) => id === profile.id);

  if (index === -1) {
    res.json({
      message: 'Diver profile does not exist',
      internal_code: 400,
    });
  } else {
    diverProfiles.splice(index, 1);
    // diverProfiles.push(diverProfile);
    res.json({
      message: `Diver profile ${id} deleted`,
      internal_code: 200,
    });
  }
});

module.exports = router;
