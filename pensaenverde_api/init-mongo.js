db.createUser(
    {
        user: "root",
        pwd: "peperina",
        roles: [
            {
                role: "readWrite",
                db: ""
            }
        ]
    }
)