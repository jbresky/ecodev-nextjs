import User from "../../../database/models/User";

export default async (req, res) => {
    try {
        const users = await User.findAll({
        });
        res.status(200).json({ users })
    } catch (error) {
        res.status(400).json({
            error_code: 'get_users',
            message: error.message,
          });
    }
} 