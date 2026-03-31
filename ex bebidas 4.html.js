let opcao = Number(prompt(
  "Escolha sua bebida:\n" +
  "1 - Cerveja 🍺\n" +
  "2 - Vodka 🥶\n" +
  "3 - Whisky 🥃\n" +
  "4 - Cachaça 💀\n"
));

switch (opcao) {
  case 1:
    alert("Você escolheu Cerveja 🍺");
    break;
  case 2:
    alert("Você escolheu Vodka 🥶");
    break;
  case 3:
    alert("Você escolheu Whisky 🥃");
    break;
  case 4:
    alert("Você escolheu Cachaça 💀");
    break;
  default:
    alert("Opção inválida");
}