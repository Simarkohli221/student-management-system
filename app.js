function login(user) { 
    if (user.type === "student") { 
        return "Student Panel"; 
    }
    return "No Access";
}

module.exports = login;

