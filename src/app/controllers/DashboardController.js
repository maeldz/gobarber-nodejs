const moment = require("moment");
const { Op } = require("sequelize");
const { User } = require("../models");
const { Appointment } = require("../models");

class DashboardController {
    async index(req, res) {
        const date = moment();

        const providers = await User.findAll({
            where: {
                provider: true
            }
        });

        const nonProviders = await User.findAll({
            where: {
                provider: false
            }
        });

        const appointments = await Appointment.findAll({
            where: {
                provider_id: req.session.user.id,
                date: {
                    [Op.between]: [
                        date.startOf("day").format(),
                        date.endOf("day").format()
                    ]
                }
            }
        });

        return res.render("dashboard", {
            providers,
            nonProviders,
            appointments
        });
    }
}

module.exports = new DashboardController();
