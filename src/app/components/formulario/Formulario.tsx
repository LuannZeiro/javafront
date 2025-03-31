export default function Formulario() {
    return (
      <div className="bg-gray-200 p-4 rounded">
        <h2 className="font-bold text-lg">Cadastro de Despesas:</h2>
        <input className="w-full p-2 my-2 border rounded" placeholder="Título" />
        <textarea className="w-full p-2 my-2 border rounded" placeholder="Descrição da despesa" />
        <input className="w-full p-2 my-2 border rounded" type="date" />
        <input className="w-full p-2 my-2 border rounded" placeholder="Gasto" />
        <button className="w-full bg-green-600 text-white p-2 rounded">Enviar</button>
      </div>
    );
  }