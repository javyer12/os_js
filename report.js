const os = require("os");
const fs = require("fs");

function getReport() {
  const cpu = os.cpus();

  return `

=========== MONITOR ===========

Equipo : ${os.hostname()}

Sistema : ${os.type()}

Version : ${os.release()}

Arquitectura : ${os.arch()}

Usuario : ${os.userInfo().username}

CPU : ${cpu[0].model}

Nucleos : ${cpu.length}

Velocidad : ${cpu[0].speed} MHz

RAM Total : ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB

RAM Libre : ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB

RAM Usada :
${((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2)} GB

Uso RAM :
${(((os.totalmem() - os.freemem()) / os.totalmem()) * 100).toFixed(2)} %

Tiempo activo :
${os.uptime()} segundos

=================================

`;
}

setInterval(() => {
  const report = getReport();

  console.clear();

  console.log(report);

  fs.writeFileSync("report.txt", report);
}, 1000);
