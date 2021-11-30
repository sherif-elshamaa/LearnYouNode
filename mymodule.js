const fs = require('fs');


module.exports = function (array, fileType, callback) {
    fileType = "." + fileType;
    fs.readdir(array, function (err, list) {
        if (err) { return callback(err); }
        var newList = list.filter((file) => file.includes(fileType));
        callback(null, newList)

    })

}


