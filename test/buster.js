var config = module.exports;

config["fruitmachine"] = {
    rootPath: '../',
    environment: "browser",
    sources: [
        'build/model.js'
    ],
    tests: [
        'test/model.*'
    ]
};
