module.exports = {
  "GET /api/login": (req,res) => {
    res.json({
      isLogin: true,
      username: 'Feery',
      token: 'TOKEN-TEST'
    })
  }
}