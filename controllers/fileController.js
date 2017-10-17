const multer = require('multer');
const uploading = multer({ dest: '../images/' });

// Defining methods for the usersController
module.exports = {
  upload: function(req, res) {

    console.log(req.body.file);
    console.log(req.body.fieldname);

    uploading.single(req.body.fieldname);

    upload(req, res, function(err) {
      console.log(req.file);
      if (err){
        return res.end("Error uploading file.");
      }
        return res.end('File is uploaded');
    });
  }
};