const gkModel = require("./gk.model")

class gkController {
  async getAllgk(request, respond) {
    gkModel
      .find()
      .exec()
      .then((gks) => {
        respond.status(200).json({
          success: true,
          message: "Done!",
          gks: gks,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  newgk = async function (req, res) {
    const slug = require("crypto").randomBytes(10).toString("hex")
    const { title, tags, category, level, certificate, summary, thumbnail} = req.body;
    const gk = new gkModel({
        date: {
            start_date: new Date().toISOString(),
        },
        type: ["Post"],
        slug: slug, 
        tags,
        category,
        summary,
        level,
        title,
        status: ["Public"],
        createdTime: new Date().toISOString(),
        fullWidth: false,
        certificate,
        thumbnail
    })

    await gk.save()
    res.status(200).json({ message: "New GK created!", slug: gk.slug })


  }
}

module.exports = new gkController()
