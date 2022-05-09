const SingletonTester = require('./singleton/Tester');

class CreationalTester {
    test() {
        const singletonTester = new SingletonTester();
        singletonTester.test();
    }
}

module.exports = CreationalTester;