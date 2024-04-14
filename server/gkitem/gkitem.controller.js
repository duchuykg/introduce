const gkitemModel = require("./gkitem.model");
const gkModel = require("../gk/gk.model");

class gkitemController {
  getAllgkitem(request, respond) {
    gkitemModel.find().exec()
      .then((gkitems) => {
        respond.status(200).json({
          success: true,
          message: "Done!",
          gkitems: gkitems,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  newgkitem = async function (req, res) {
    const { idGk, detail } = req.body;

    try {
      const gkExist = await gkModel.findById(idGk).exec();
      if (!gkExist) {
        return res.status(404).send("Invalid gk id");
      }

      const gkitem = new gkitemModel({
        idGk,
        detail,
      });
      await gkitem.save();
      res.status(200).send("New gkitem created!");
    } catch (error) {
      res.status(500).send(error);
    }
  };

  getgkitemById = async (req, res) => {
    const idGk = req.params.id;
    try {
      const gkitem = await gkitemModel.findOne({ idGk });
      if (!gkitem) {
        return res.status(404).json({ message: "gkitem not found" });
      }
      res.json(gkitem);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
}

module.exports = new gkitemController();
