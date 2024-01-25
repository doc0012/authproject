const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      return next(); // User is an admin, grant access
    }
    return res.status(403).json({ message: 'Access forbidden. Admins only.' });
  };
  module.exports=isAdmin