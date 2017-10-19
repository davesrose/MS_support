const express = require('express');
const router = express.Router();
//const fileController = require("../../controllers/fileController");
const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const fs = require('fs');
const MAGIC_NUMBERS = {
    jpg: 'ffd8ffe0',
    jpg1: 'ffd8ffe1',
    png: '89504e47',
    gif: '47494638'
}
const maxFileSize = 1 * 1024 * 1024;

if(process.env.NODE_ENV == 'production'){
	//AWS.config.loadFromPath('../app/MS_Support/config/s3.js');
  const s3Params = {
    Bucket: "msconnect",
    Key: "../../config/s3.js",
    ACL: 'public-read'
  };
} else {
	AWS.config.loadFromPath('../MS_Support/config/s3.js');
}

const s3 = new AWS.S3();

function checkMagicNumbers(magic) {
  if (magic == MAGIC_NUMBERS.jpg || magic == MAGIC_NUMBERS.jpg1 || magic == MAGIC_NUMBERS.png || magic == MAGIC_NUMBERS.gif) return true
}


const storage = multerS3({
	s3: s3,
	bucket: 'msconnect',
	metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
    	var fullPath = 'images/'+ file.originalname;
    	cb(null, fullPath);
    }
})

const uploading = multer({ 
	storage: storage,
	fileFilter: function(req, file, callback) {
		const ext = path.extname(file.originalname).toLowerCase();

		//Check for image extension
		if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
			  req.fileValidationError = 'Wrong file type, please upload images only';
			  return callback(null, false, new Error(req.fileValidationError));
		}
		
		callback(null, true);
	
	}
}).single("userPhoto");

// Matches with "/api/upload"
router.route("/upload")
  // .post(uploading, fileController.upload());
  .post(uploading, (req, res, next) => {
    
    // Check if the right extension is loaded
    if(req.fileValidationError) {
      // res.end(req.fileValidationError);
      return res.send({status: 400, success: false, message: req.fileValidationError});
		}

		//Check for file size
		if (req.file.size > maxFileSize){
			req.fileValidationError = 'File is too large, please upload file smaller than 1MB';
			return res.send({status: 400, success: false, message: req.fileValidationError});
		}			
    
		const myBucket = 'msconnect';
		const myKey = 'images/' + req.file.originalname;
		const signedUrlExpireSeconds = 36000;

		const url = s3.getSignedUrl('getObject', {
		    Bucket: myBucket,
		    Key: myKey,
		    Expires: signedUrlExpireSeconds
		})

		console.log(url);

  	//Check if the first bytes of the file are truly images
		// if (!checkMagicNumbers(bitmap)) {
		// 	//fs.unlinkSync(filePath);
		// 	return res.send({status: 400, success: false, message: 'We have checked and your file is not a valid image. Try Again'});
		// }

		//If all checks haved passed, upload the file
		return res.send({success: true, message: 'File Uploaded', imagePath: url });
    
  });

module.exports = router;