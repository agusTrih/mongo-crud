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
    // get all
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
    // get user one
    getUser: async (req, res) => {
        const _id = req.params.id;
        try {
            const user = await User.findOne({ _id });
            res.send({
                message: "find one user",
                user: user,
            });
        } catch (error) {
            console.log(error);

            res.send(error);
        }
    },
    // delete user
    deleteUser: async (req, res) => {
        const _id = req.params.id;

        try {
            const userDelete = await User.findByIdAndRemove({ _id });

            res.send({
                message: "1 user has been deleted",
                deleted: userDelete,
            });
        } catch (error) {
            console.log(error);

            res.send(error);
        }
    },
    // edit
    editUser: async (req, res) => {
        const _id = req.params.id;
        const { name, email, password } = req.body;

        try {
            await User.findOneAndUpdate({ _id }, { name, email, password });
            const users = await User.find();
            res.send({
                message: "1 user has been updated",
                updatedUsers: users,
            });
        } catch (error) {
            console.log(error);

            res.send(error);
        }
    },
    // filter
    filterUser: async (req, res) => {
        const { id } = req.params.id;
        try {
            const result = await user.find({ _id: id });
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
};

module.exports = routes;
