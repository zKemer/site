const express = require('express')

const app = new express()

app.get("/", function (req, res) {

   res.render("./index.ejs", {
  prefix: "p!"

  })
})

app.listen(3000)
console.log("Evvet; Hazırım!")