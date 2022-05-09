class Settings {
    constructor(id, name) {
        if(Settings.instance) {
            return Settings.instance;
        }
        this.id = id;
        this.name = name;
        // Object.freeze(this);     // makes object immutable
        Settings.instance = this;
    }
}

module.exports = Settings;
