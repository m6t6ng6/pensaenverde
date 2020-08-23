db.createUser(
    {
        user: "user",
        pwd: "peperina",
        roles: [
            {
                role: "readWrite",
                db: "pensaenverde"
            }
        ]
    }
)