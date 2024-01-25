const isAnnoncer = (req, res, next) => {
    if (req.user && req.user.role === 'annoncer') {
      return next(); // User is an annoncer, grant access
    }
    return res.status(403).json({ message: 'Access forbidden. admin and annoncer only.' });
  };
  module.exports=isAnnoncer