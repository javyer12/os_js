console.log("Welcome to the Hardware Monitoring Dashboard!");

const os = require("os");
console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Release:", os.release());
console.log("Arquitectura:", os.arch());


//cpus
console.log("===============CPU INFO==================");
console.log("CPU Architecture:", os.cpus()[0].times);
console.log("Longitud de la CPU:", os.cpus().length);

const cpus = os.cpus();

cpus.forEach((cpu, index) => {
    console.log(index + 1);
    console.log(cpu.model)
})

console.log("===============Cores Description ==================");
cpus.forEach((cpu, index) => {
    console.log("--------------------");
    console.log("CPU", index + 1);
    console.log(cpu.model);
    console.log(cpu.speed + " MHz");
    console.log("User Time: " + cpu.times.user);
})

// ram
console.log("===============RAM INFO==================");
console.log("Total RAM:", os.totalmem() / 1024 / 1024 / 1024, "GB");
console.log("Free RAM:", os.freemem() / 1024 / 1024 / 1024, "GB");
console.log("Used RAM:", (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024, "GB");

// network
console.log("===============NETWORK INFO==================");
const networkInterfaces = os.networkInterfaces();
Object.keys(networkInterfaces).forEach((interfaceName) => {
    const interfaceInfo = networkInterfaces[interfaceName];
    interfaceInfo.forEach((info) => {
        if (info.family === "IPv6") {
            console.log(`Interface: ${interfaceName}`);
            console.log(`IP Address: ${info.address}`);
            console.log(`MAC Address: ${info.mac}`);
            console.log("--------------------");
        }
    });
});

//cinvertir bytes a gb
const memory = os.totalmem();
const gb = memory / 1024 / 1024 / 1024;
console.log("Total Memory in GB:", gb.toFixed(2));

//porcentaje de uso de la memoria
function showMem() {
    const memoryUsed = os.totalmem() - os.freemem();
    const porcentageUsed = (memoryUsed / os.totalmem()) * 100;
    console.log(porcentageUsed.toFixed(2)+"% of memory used");
}
showMem();

//usuario
console.log("===============USER INFO==================");
const userInfo = os.userInfo();
console.log("Username:", userInfo.username);
console.log("Hostname:", os.hostname());
console.log("Home Directory:", userInfo.homedir);
console.log("Shell:", userInfo.shell);
console.log(os.uptime() + " seconds of uptime");

//handle files
const fs = require('fs');
// const text = 'Hardware Monitoring Report\n';
// const description = `Operating System: ${os.type()} ${os.platform()} ${os.release()} ${os.arch()}\n`;
const report = `
Hardware Monitoring Report 
System: ${os.type()} 
CPU: ${os.cpus()[0].model}
RAM: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB 
`
fs.writeFileSync('report.txt', report);

//reading files
const datum = fs.readFileSync(
    "report.txt",
    "utf8"
);
console.log(datum);

// modules
console.log("==================Getting data from modules===================");
const cpu = require("./cpu");
console.log(cpu());


//comandos del sistema
const { exec } = require("child_process");
const { stdout, stdin, stderr } = require("process");
exec('node -v', (error, stdout)=> {
    console.log(stdout);
    // console.log(stdin)
    // console.log(stderr)
})

//performance 
//benchmark = prueba que mide cuanto tiempo tarda una porcion de codigo en ejecutarse / detecta cuello de botellas

// const { performance } = require("perf_hooks");
// const init = performance.now();
// for (let i = 0; i <= 1000000; i++){
//     console.log("performance: " + i)
// }
// const end = performance.now();
// console.log(end - init + " ms");

//pendiente paso 24=Ejecutar comandos del sistema

