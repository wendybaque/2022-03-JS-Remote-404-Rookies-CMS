const models = require("../models");

class ContactUsController {
  static browse = (req, res) => {
    models.contact_us
      .findAllContactUs()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.contact_us
      .findContactUs(req.params.languages_id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ContactUsController;
