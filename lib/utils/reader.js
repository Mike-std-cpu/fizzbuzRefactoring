/* Reader: en esta clase necesitaremos un método static para leer 
el archivo y obtener la información dado el nombre archivo.*/

const fs = require("fs");// Es un requiere fileSystem

class Reader {
    static readJsonFile(path){// ¿Path?
    const rawdata = fs.readFileSync(path);
    return JSON.parse(rawdata);
    }
}

module.exports = Reader;