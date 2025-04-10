import Data from "./Model.js"
// import bcrypt from "bcryptjs"

export const Read = async (req, res) => {
    try {
        const read = await Data.find()
        res.status(202).json(read)
    } catch (error) {
        res.status(404).json(error)
    }
}
export const Insert = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body
        const finddata = await Data.findOne({ Name })
        if (finddata) {
            res.status(202).json("User already existed")
        }
        else {
            const insertData = await Data({
                Name: Name,
                Email: Email,
                Password: Password
            }).save()
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

// export const Update = async (req, res) => {
//     try {
//         const { Email } = req.params
//         const { Name, Password } = req.body
//         const update = await Data.findOne({ Email })
//         if (update) {
//             const datas = await Data.updateOne({ $set: { Name, Password } })
//             if (!datas) {
//                 return res.status(404).json("User not found")
//             } else {
//                 res.status(202).json("Updated Successfully...!!", { data: { Email: Email, Password: "Password updated" } })
//             }
//         }
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

export const Update = async (req, res) => {
    try {
        const { Email } = req.params
        const { Name, Password } = req.body
        const user = await Data.findOne({ Email })
        if (!user) {
            return res.status(404).json("User not found");
        }
        // const hashedPassword = await bcrypt.hash(Password,10)
        const update = await Data.updateOne({ Email: Email }, { $set: { Name, Password } })
        if (update) {
            return res.status(202).json({
                message: "Updated Successfully...!!",
                data: { Email, Password: "Password updated" }
            })
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}