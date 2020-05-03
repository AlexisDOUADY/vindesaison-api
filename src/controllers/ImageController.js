const path = require('path');
const responseHelper = require('../helpers/responseHelper')
const Resizer = require('../helpers/resizeHelper')

module.exports = class ImageController {

    async upload(req, res)
    {
        const imagePath = path.join(__dirname, '../../public/images');
        const fileUpload = new Resizer(imagePath);
        if (!req.file) {
            responseHelper.error400(res, 'No file given');
        }
        const filename = await fileUpload.save(req.file.buffer);
        return responseHelper.successBody(res, { filename: filename });
    }

}
