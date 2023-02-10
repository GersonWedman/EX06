const buscarDados = async () => {
  const url = 'https://api.agify.io/?country_id=BR&name=gerson';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.name);
  console.log(data.age);
};
buscarDados();
