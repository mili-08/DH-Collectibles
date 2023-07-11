
let importar = marca => {
    if(marca==="Hot Toys"){
        const hotToys = require('./datos/figuras1.json')
        return hotToys;
    }else if (marca === "Bandai"){
        const bandai = require('./datos/figuras2.json');
        return bandai;
    }else if (marca === "Star Wars"){
        const starWars = require('./datos/figuras3.json');
        return starWars;
    }else
      return "Marca no encontrada" ;
}

module.exports = importar;