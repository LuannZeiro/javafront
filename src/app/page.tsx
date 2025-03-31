import Navbar from "../app/components/navbar/Navbar";
import Formulario from "../app/components/formulario/Formulario";
import Lista from "../app/components/lista/Lista";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Formulario />
        <Lista />
      </div>
    </div>
  );
}