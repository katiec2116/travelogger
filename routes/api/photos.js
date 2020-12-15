if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const router = require("express").Router();
const path = require('path');
const access_id = process.env.AWS_ACCESS_ID;
const access_key = process.env.AWS_ACCESS_KEY;
let user;

  var aws = require('aws-sdk')
  var multer = require('multer')
  var multerS3 = require('multer-s3')
  var s3 = new aws.S3({
      accessKeyId: access_id,
      secretAccessKey: access_key,
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
    .post(upload.array('photos', 5), function(req, res, next) {
      let paths = [];
        for (i = 0; i < req.files.length; i++) {
          console.log(req.files[i].location);
          paths.push(req.files[i].location)
        }
        return res.send({filename:paths});
      })

module.exports = router;