const router = require("express").Router();
// matches /api/trips/

  var aws = require('aws-sdk')
  var multer = require('multer')
  var multerS3 = require('multer-s3')
  var s3 = new aws.S3({
      accessKeyId: 'AKIAJZOZXZ2JHIJYAH2A',
      secretAccessKey: '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',
      region: 'us-east-2'
  })
   
  var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'travelogger-aws',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString() + '.jpg')
      }
    })
  })
   
  router.route('/upload')
    .post(upload.single('photo'), function(req, res, next) {
        res.send('Successfully uploaded an image!')
      })

module.exports = router;