const {Router} = require('express');
const router = Router();
const photoCtrl = require('../controller/photo.controller'); 

router.get('/', photoCtrl.getStart);
router.get('/photos', photoCtrl.getPhoto)
router.post('/photos', photoCtrl.postPhoto);
router.put('/photos', photoCtrl.putPhoto);
router.delete('/photos', photoCtrl.deletePhoto);
router.delete('/photos2', photoCtrl.deleteAllPhotos);


module.exports = router