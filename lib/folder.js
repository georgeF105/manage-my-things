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
                return getUnsortedInfo(fileName);
            }));
        });
}

function getUnsortedInfo (unsortedName) {
    const unsortedPath = config.unsorted_path;
    return fse.lstat(`${unsortedPath}/${unsortedName}`)
        .then(stats => {
            const isDir = stats.isDirectory();
            if (isDir) {
                return fse.readdir(`${unsortedPath}/${unsortedName}`)
                .then(fileContents => {
                    return {
                        name: unsortedName,
                        files: fileContents,
                        isDir
                    }
                });
            }
            return {
                name:unsortedName,
                isDir
            };
        })

}

module.exports = {
    getUnsorted
}
