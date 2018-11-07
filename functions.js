var fs = require('fs');

/* Utility */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/* Read random line form file */
function getRandomLine(filename, callback) {
    fs.readFile(filename, function (err, data) {
        if (err) throw err;
        var lines = data.toString().split('\n');
        callback(lines[getRandomInt(lines.length)]);
    })
}


module.exports = {
    readCreepy: function (callback) {
        getRandomLine("./fortunes/fortunes.creepy", function (fortune) {
            callback(fortune)
        });
    },
    readFun: function (callback) {
        getRandomLine("./fortunes/fortunes.fun", function (fortune) {
            callback(fortune)
        });
    },
    readNsfw: function (callback) {
        getRandomLine("./fortunes/fortunes.nsfw", function (fortune) {
            callback(fortune)
        });
    },
    readTip: function (callback) {
        getRandomLine("./fortunes/fortunes.tips", function (fortune) {
            callback(fortune)
        });
    },
    random: function (callback) {
        var file;
        switch (getRandomInt(4)) {
            case 0:
                file = "./fortunes/fortunes.creepy";
            case 1:
                file = "./fortunes/fortunes.nsfw";
            case 2:
                file = "./fortunes/fortunes.fun";
            case 3:
                file = "./fortunes/fortunes.tips";
            default:
                file = "./fortunes/fortunes.fun";
        }
        getRandomLine(file, function (fortune) {
            callback(fortune)
        });
    },
};