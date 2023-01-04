const { Router } = require('express')
// ALL ROUTES
const router = Router()

// LOAD EACH ROUTES IN A ROUTE
router.get('/serverOk', (req, res) => {
  res.status(200).json([])
})


module.exports = router
