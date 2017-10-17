const express = require('express');
const router = express.Router();
const fileController = require("../../controllers/fileController");
const path = require('path');
const fs = require('fs');

const MAGIC_NUMBERS = {
    jpg: 'ffd8ffe0',
    jpg1: 'ffd8ffe1',
    png: '89504e47',
    gif: '47494638'
}
const maxFileSize = 1 * 1024 * 1024;

function checkMagicNumbers(magic) {
    if (magic == MAGIC_NUMBERS.jpg || magic == MAGIC_NUMBERS.jpg1 || magic == MAGIC_NUMBERS.png || magic == MAGIC_NUMBERS.gif) return true
}

const multer = require('multer')
const storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, __dirname + '/../../images/')
	},
	filename: function(req, file, callback) {
		callback(null, file.originalname);
	}
})

const uploading = multer({ 
	storage: storage,
	fileFilter: function(req, file, callback) {
		const ext = path.extname(file.originalname);

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
  	
  	const filePath = __dirname + '/../../images/' + req.file.filename;
  	const relativeFilePath = '/images/' + req.file.filename;
    
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

    //Check if the first bytes of the file are truly images
    var bitmap = new Buffer(fs.readFileSync(filePath)).toString('hex', 0, 4);
		if (!checkMagicNumbers(bitmap)) {
			fs.unlinkSync(filePath);
			 return res.send({status: 400, success: false, message: 'We have checked and your file is not a valid image. Try Again'});
		}

		//If all checks haved passed, upload the file
		return res.send({success: true, message: 'File Uploaded', imgPath: relativeFilePath });
    
  });

module.exports = router;