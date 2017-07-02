var fse = require('fs-extra');
var config = require('../config.json');

var dummyUnsored = [
    { 
        name: 'dummyName01',
        isDir: true,
        files: [
            {
                name: 'dummy.name'
            }
        ]
    },
    {
        name: 'dummyName02',
        isDir: false
    }
];
var maxDepth = 3;

function getUnsorted () {
    const unsortedPath = config.unsorted_path;

    return fse.readdir(unsortedPath)
        .then(fileNames => {
            return Promise.all(fileNames.map(fileName => {
                return fse.readdir(`${unsortedPath}/${fileName}`)
                    .then(fileContents => {
                        return {
                            name: fileName,
                            files: fileContents
                        };
                    })
            }));
        });
}

function getDirContents (path) {

}

module.exports = {
    getUnsorted
}
