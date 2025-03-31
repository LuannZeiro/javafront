export default function Item({ title, description, date, amount, status }) {
    return (
      <div className="bg-white p-4 rounded shadow mb-2">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
        <p>Data: {date}</p>
        <p>Gasto: R$ {amount}</p>
        <p>Status: {status}</p>
        <div className="flex space-x-2 mt-2">
          <button className="bg-yellow-500 text-white p-2 rounded">Editar</button>
          <button className="bg-red-500 text-white p-2 rounded">Excluir</button>
        </div>
      </div>
    );
  }