function login(user) { 
    if (user.type === "student") { 
        return "Welcome Student"; 
    }
    if (user.role === "admin") {
        return "Admin Dashboard";
    }
    return "Unauthorized";
}

module.exports = login;

