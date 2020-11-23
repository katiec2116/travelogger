const router = require("express").Router();
const path = require('path');
// matches /api/trips/
let user;

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

        cb(null, Date.now().toString() + path.extname(file.originalname));
      }
    })
  })
   
  router.route('/upload')
    .post(upload.single('photo'), function(req, res, next) {
        console.log(req.body.user);
        return res.send({filename:req.file.location});
      })

module.exports = router;