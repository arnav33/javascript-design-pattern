const Settings = require('./Settings');

class SingletonTester {
    test() {
        const settings1 = new Settings(1234, 'Settings1');
        const settings2 = new Settings(1235, 'Settings2');
        // settings1.id = 1212;         cannot perform assignment

        console.log(settings1);
        console.log(settings2);
    }
}

module.exports = SingletonTester;