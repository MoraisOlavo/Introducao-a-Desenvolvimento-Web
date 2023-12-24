//Recebe um vetor e uma string para ser usada como critério
function SortCities(v,criterio){
  //Cria um novo vetor que será retornado e o define igual a v
  let v_novo=[];
  for(let i=0;i<v.length;i++){
    v_novo[i]=v[i];
  }

  //InsertionSort
  for (let i=1;i<v_novo.length;i++){
    let item_atual=v_novo[i];
    let j=i-1;

    while(j>=0 && v_novo[j][criterio]>item_atual[criterio]){//Usando operador [] para acessar atributo de um objeto
      v_novo[j+1]=v_novo[j];
      j--;
    }

    v_novo[j+1]=item_atual;
  }

  return v_novo;//Retorna o vetor ordenado
}

//Recebe um vetor e uma função para filtrar, se a função retornar true então o objeto passou no filtro
function FilterCities(v,f){
  let v_novo=[];
  for(let i=0;i<v.length;i++){//Percorre vetor v e passa todos os elementos no filtro
    if(f(v[i])==true){
      v_novo.push(v[i]);
    }
  }
  return v_novo;
}

//Recebe um vetor v, função f e critério
function ProcessCities(v,f,criterio){
  let v_novo=FilterCities(v,f);//Filtra o vetor v usando a funçãoo f como filtro
  v_novo=SortCities(v_novo,criterio);//Ordena o vetor v usando o critério 
  return v_novo;//Retorna o resultado obtido
}

//₢ria o vetor com objetos cidade
var cidades = [
    {
      name: "São Paulo",
      population: 12345678,
      temperature: 25,
      weatherDescription: "Ensolarado"
    },
    {
      name: "Rio de Janeiro",
      population: 8765432,
      temperature: 30,
      weatherDescription: "Parcialmente nublado"
    },
    {
      name: "Belo Horizonte",
      population: 567890,
      temperature: 22,
      weatherDescription: "Chuvoso"
    },
    {
      name: "Brasília",
      population: 3000000,
      temperature: 28,
      weatherDescription: "Ensolarado"
    },
    {
      name: "Salvador",
      population: 2800000,
      temperature: 32,
      weatherDescription: "Ensolarado"
    },
    {
      name: "Fortaleza",
      population: 2600000,
      temperature: 34,
      weatherDescription: "Ensolarado"
    },
    {
      name: "Recife",
      population: 1600000,
      temperature: 29,
      weatherDescription: "Chuvoso"
    },
    {
      name: "Curitiba",
      population: 1900000,
      temperature: 20,
      weatherDescription: "Nublado"
    },
    {
      name: "Manaus",
      population: 1800000,
      temperature: 32,
      weatherDescription: "Chuvoso"
    },
    {
      name: "Porto Alegre",
      population: 1500000,
      temperature: 18,
      weatherDescription: "Nublado"
    }
  ];

  //Testa a função de Ordenação
  console.log("Ordenado por temperatura:");
  cidades=SortCities(cidades,"temperature");
  console.log(cidades);

  console.log("Ordenado por população:");
  cidades=SortCities(cidades,"population");
  console.log(cidades);

  console.log("Ordenado por nome");
  cidades=SortCities(cidades,"name");
  console.log(cidades);

  //Testa a função de Filtro
  console.log("Filtrado: temperatura<20");
  console.log(FilterCities(cidades, (cidade)=>{
    if(cidade.temperature<20){
      return true;
    }else{
      return false;
    }
  }));

  console.log("Filtrado: weather=Ensolarado");
  console.log(FilterCities(cidades, (cidade)=>{
    if(cidade.weatherDescription=="Ensolarado"){
      return true;
    }else{
      return false;
    }
  }));

  console.log("Filtrado: população>5000000");
  console.log(FilterCities(cidades, (cidade)=>{
    if(cidade.population>5000000){
      return true;
    }else{
      return false;
    }
  }));

  //Testa a função que combina Ordenação e Filtro
  console.log("Ordenando por temperatura e filtrando com temperatura>=30 ");
  console.log(ProcessCities(cidades,(cidade)=>{
    if(cidade.temperature>=30){
      return true;
    }else{
      return false;
    }
  },"temperature"));

  console.log("Ordenando por nome e filtrando com weather=Nublado ");
  console.log(ProcessCities(cidades,(cidade)=>{
    if(cidade.weatherDescription=="Nublado"){
      return true;
    }else{
      return false;
    }
  },"name"));

  console.log("Ordenando por Clima e filtrando com população<=3000000");
  console.log(ProcessCities(cidades,(cidade)=>{
    if(cidade.population<=3000000){
      return true;
    }else{
      return false;
    }
  },"weatherDescription"));

