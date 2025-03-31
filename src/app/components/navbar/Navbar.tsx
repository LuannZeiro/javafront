export default function Navbar() {
    return (
      <nav className="bg-green-600 text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">FinanceControler</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Total de Gastos</a>
          <a href="#" className="hover:underline">Perfil</a>
        </div>
      </nav>
    );
  }