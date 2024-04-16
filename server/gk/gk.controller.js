const gkModel = require("./gk.model")
const gkitemModel = require("../gkitem/gkitem.model")
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
        summary: certificate === "HỌC SINH GIỎI" || certificate === "CHÁU NGOAN BÁC HỒ"
        ? "Chúc mừng Phạm Hoàng Đức Huy đạt danh hiệu " + certificate + " " + tags
        : "Chúc mừng Phạm Hoàng Đức Huy " + tags + " tham gia " + title + " đạt " + certificate.toLowerCase() + " " + level.toLowerCase(),
        level,
        title,
        status: ["Public"],
        createdTime: new Date().toISOString(),
        fullWidth: false,
        certificate,
        thumbnail
    })

    const gkitem = new gkitemModel({
      idGk: gk.slug,
      detail: gk.certificate === "HỌC SINH GIỎI" || gk.certificate === "CHÁU NGOAN BÁC HỒ"
      
      ? "Phạm Hoàng Đức Huy đạt danh hiệu " + certificate + " " + tags + `. 
      
      Đó là một thành quả đáng tự hào và đáng khen ngợi. Bằng sự nỗ lực và tâm huyết, em đã vượt qua mọi khó khăn và chinh phục thành công. Chúc em tiếp tục bước đi trên con đường học tập với đam mê và sự kiên nhẫn. Mong rằng em sẽ luôn giữ vững đam mê và không ngừng phấn đấu để đạt được nhiều thành công hơn nữa trong tương lai. Chúc em luôn mạnh khỏe, hạnh phúc và thành công trong mọi sự nghiệp !`
    
      : "Phạm Hoàng Đức Huy " +  gk.tags + " tham gia " + gk.title + " đạt " + gk.certificate.toLowerCase() + " " + gk.level.toLowerCase() + `. 
      
      Đó là một thành quả đáng tự hào và đáng khen ngợi. Bằng sự nỗ lực và tâm huyết, em đã vượt qua mọi khó khăn và chinh phục thành công. Chúc em tiếp tục bước đi trên con đường học tập với đam mê và sự kiên nhẫn. Mong rằng em sẽ luôn giữ vững đam mê và không ngừng phấn đấu để đạt được nhiều thành công hơn nữa trong tương lai. Chúc em luôn mạnh khỏe, hạnh phúc và thành công trong mọi sự nghiệp !`
    });

    await gk.save()
    await gkitem.save()
    res.status(200).json({ message: "New GK created!", slug: gk.slug })


  }
}

module.exports = new gkController()
