module.exports = (req,res,next) => {
  if (!req.session.user) {
    userObj = { username: '', cart: [], total: 0 }
    req.session.user =  { username: '', cart: [], total: 0 }
  }
  next()
}
