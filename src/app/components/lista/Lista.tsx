import Item from "../item/Item";

export default function ExpenseList() {
  const expenses = [
    { title: "Mercado - Compra do mês", description: "Compra dos produtos básicos", date: "25/02/2025", amount: "100,00", status: "Não evitavel" },
    { title: "Roupa - Para casamento", description: "Roupa social para casamento", date: "25/02/2025", amount: "1000,00", status: "Não evitavel" },
    { title: "Energetico - Depois do trabalho", description: "Compra de energético", date: "25/02/2025", amount: "10,00", status: "Evitavel" }
  ];

  return (
    <div>
      <h2 className="font-bold text-lg">Lista de Despesas</h2>
      {expenses.map((expense, index) => (
        <Item key={index} {...expense} />
      ))}
    </div>
  );
}