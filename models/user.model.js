const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'storage', 'users.json');

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    static unique(email) {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    const users = data ? JSON.parse(data) : [];
                    const found = users.filter(user => user.email === email);
                    if (found.length > 0) {
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                }
            });
        });
    }

    save() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    const users = data ? JSON.parse(data) : [];
                    users.push({
                        email: this.email,
                        password: this.password,
                    });
                    fs.writeFile(filePath, JSON.stringify(users), err => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({
                                email: this.email,
                                password: this.password,
                            });
                        }
                    });
                }
            });
        });
    }
};

module.exports = User;