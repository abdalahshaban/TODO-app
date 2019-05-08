const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(401).json({ message: 'Unauthorized request' });
	} else {
		try {
			// console.log(req.headers);
			const token = req.headers.authorization.split(' ')[1];
			if (token === 'null') {
				return res.status(401).json({ message: 'Unauthorized request' });
			}

			const decode_token = jwt.verify(token, config.JWT_SECRET);
			if (!decode_token) {
				return res.status(401).json({ message: 'Unauthorized request' });
			}
			// res.json(decode_token);
			req.id = decode_token.id;
			// console.log(req.id);
			next();
		} catch (error) {
			return res.status(400).json({ message: 'error' });
		}
	}
};
