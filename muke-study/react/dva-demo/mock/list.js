var Mock = require('mockjs')

module.exports = {
  "GET /api/list": (req, res) => {
    res.json(
      Mock.mock({
        'list|1-10': [{
          'id|+1': 1
        }]
      })
    )
  }
}