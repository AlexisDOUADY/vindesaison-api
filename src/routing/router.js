const router = require('express').Router();
const controllers = require('../controllers').routes;
const responseHelper = require('../helpers/responseHelper');
const uploader = require('../middlewares/uploader');
const ImageController = require('../controllers/ImageController');

router.use('*', (req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
   res.header('Access-Control-Allow-Methods', 'PATCH, POST, GET, DELETE, OPTIONS');

   if (req.method === 'OPTIONS') {
      res.send(200);
   } else {
      next();
   }
})

for(let i = 0; i < controllers.length; i++)
{
   let route = controllers[i];
   if(route.controller && route.route)
   {
      router.get    (`/${route.route}`,       (req, res) => { route.controller.list(req, res)    });
      router.post   (`/${route.route}`,       (req, res) => { route.controller.store(req, res)   });
      router.get    (`/${route.route}/:uuid`, (req, res) => { route.controller.show(req, res)    });
      router.patch  (`/${route.route}/:uuid`, (req, res) => { route.controller.update(req, res)  });
      router.delete (`/${route.route}/:uuid`, (req, res) => { route.controller.destroy(req, res) });
   }
}

router.use('/upload', uploader.single('image'), (req, res) => { new ImageController().upload(req, res) });
router.use('*', (req, res) => responseHelper.error404(req, res))

module.exports = router;
