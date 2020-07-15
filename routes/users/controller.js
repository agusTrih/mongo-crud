const { User } = require("../../models");

const routes = {
    userRegistration: async (req, res) => {
        const { name, email, password } = req.body;

        try {
            const user = await User.create({
                name,
                email,
                password,
            });

            res.send({
                message: `Registration complete`,
                result: user,
            });
        } catch (error) {
            res.send(error);
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.send({
                message: "get all Users",
                results: users,
            });
        } catch (error) {
            console.log(error);

            res.send(error);
        }
    },
};

module.exports = routes;
