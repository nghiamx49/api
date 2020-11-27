const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite' || process.env.DB);


db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS profile`)
    db.run(`CREATE TABLE profile(
       id INTEGER NOT NULL PRIMARY KEY,
       name TEXT NOT NULL,
       role TEXT NOT NULL 
    )`, (err) => {
        console.log(err);
    })
    db.run(`INSERT INTO profile('name', 'role') VALUES ('abc', 'student')`)
    db.run(`INSERT INTO profile('name', 'role') VALUES ('abc', 'student')`)
    db.run(`INSERT INTO profile('name', 'role') VALUES ('abc', 'student')`)
})