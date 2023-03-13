// method-override is existing function so we need to import it first
// if the function is pure write by ourself you do not need to import anything
const methodOverride = require('method-override')

const method_over_ride = methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
  })

  module.exports = method_over_ride