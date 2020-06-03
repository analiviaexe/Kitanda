const PRODUTOS = [
    {pro_id: 1, pro_descricao: 'Sabão Líquido Omo Lavagem Perfeita 3L', pro_img_href: './src/images/sabao.png', pro_valor: "R$ 33,89*", pro_v1: "R$ 33,89", pro_v2:"R$ 37,99*", pro_v3:"R$ 45,99", pro_v4: "R$ 35,99"},
    {pro_id: 2, pro_descricao: 'Cerveja Heineken Premium Pilsen Lager 600ml', pro_img_href: './src/images/cerveja.png', pro_valor: "R$ 8,49*", pro_v1: "R$ 9,50", pro_v2:"R$ 8,49", pro_v3:"R$ 10,99", pro_v4: "R$ 8,99"},
    {pro_id: 3, pro_descricao: 'Barra de Chocolate ao Leite Lacta 90gL', pro_img_href: './src/images/chocolate.png', pro_valor: "R$ 3,99*", pro_v1: "R$ 4,50", pro_v2:"R$ 4,10", pro_v3:"R$ 4,99", pro_v4: "R$ 3,99"},
    {pro_id: 4, pro_descricao: 'Arroz Branco Longo-fino Tipo 1 Tio João 5 Kg', pro_img_href: './src/images/arroz.png', pro_valor: "R$ 19,70*", pro_v1: "R$ 19,80", pro_v2:"R$ 20,30", pro_v3:"R$ 19,70*", pro_v4: "R$ 19,90"},

];

(function() {

    const idSelecionado = localStorage.getItem('prod_id')
    console.log(idSelecionado)
	
	function selectProduct() {
        let produto;
		PRODUTOS.forEach(prod => {
			if (prod.pro_id == idSelecionado){
                produto = prod;
            }
        })
        return produto;
    }

    function montarDiv(prod) {
        var title = document.getElementById("title")
        title.innerHTML = (prod.pro_descricao)

        var price = document.getElementById("product-price")
        price.innerHTML = (prod.pro_valor)

        var img = document.getElementById("product-img")
        img.src = (prod.pro_img_href)
        
    }
    
    montarDiv(selectProduct())
})()
