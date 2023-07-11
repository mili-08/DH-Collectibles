const colecion = require('./collectibles');

const hotToys= colecion("Hot Toys");
const bandai = colecion("Bandai");
const starWars = colecion("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

console.log(unifiedCollectibles); 

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures : function () {
       this.figuras.forEach(figura => {
        console.log(figura);
      })
    },
    figuresByBrand : function (marca){
     let figura = this.figuras.filter(elemento => elemento.marca === marca)
        return figura;
    },
}

collectibles.listFigures();
console.log(collectibles.figuresByBrand("Hot Toys"));