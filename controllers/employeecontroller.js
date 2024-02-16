const Employee = require("../models/employeeModel");

const insertEmployee = async (req, res) => {
    console.log(req.body);
    try {
        
        const { name, email, mobile, password } = req.body; // Destructure the request body
        const employee = new Employee({
            name,
            email,
            mobile,
            password
        });
        const result = await employee.save();
        res.status(200).json({ message: "Registration successful", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    insertEmployee
};
