var fs = require('fs');
var config = require('../config.json');

var dummyUnsored = [
    { name: 'dummyName01' },
    { name: 'dummyName02' }
];

function getUnsorted () {
    console.log('unsorted path', config.unsorted_path);
    fs.readdir(config.unsorted_path, (err, files) => {
        console.log('err', err);
        console.log('files', files);
    })
    return dummyUnsored;
}

module.exports = {
    getUnsorted
}
