const os = require("os");
function InformationCPU() {
    return {
        modelo: os.cpus()[0].model,
        nucleos: os.cpus().length,
        speed: os.cpus()[0].speed
    }
}

module.exports = InformationCPU;