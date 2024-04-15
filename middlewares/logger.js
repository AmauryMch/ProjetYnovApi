const logger = require('../logger');

module.exports = (req, res, next) => {
    try {
        logger.warning({ message: req.method + ' ' + req.baseUrl + req.path })
        next();
    } catch {
        res.status(501).json({ message: 'Erreur au niveau du logger' })
    }
}