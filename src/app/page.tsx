"use client";
import { useState } from "react";

export default function RiscoOptimizer() {
  const [pesoMaximo, setPesoMaximo] = useState(10);
  const [caloriasMinimas, setCaloriasMinimas] = useState(15);
  const [resultado, setResultado] = useState<{ nombre: string; peso: number; calorias: number }[]>([]);
  const [nuevoElemento, setNuevoElemento] = useState({ nombre: "", peso: 0, calorias: 0 });

  const [elementos, setElementos] = useState([
    { nombre: "E1", peso: 5, calorias: 3 },
    { nombre: "E2", peso: 3, calorias: 5 },
    { nombre: "E3", peso: 5, calorias: 2 },
    { nombre: "E4", peso: 1, calorias: 8 },
    { nombre: "E5", peso: 2, calorias: 3 },
  ]);

  const optimizarElementos = () => {
    let mejoresElementos: { nombre: string; peso: number; calorias: number }[] = [];
    let mejorPeso = Infinity;

    const backtrack = (
      index: number,
      pesoActual: number,
      caloriasActuales: number,
      seleccionados: { nombre: string; peso: number; calorias: number }[]
    ) => {
      if (caloriasActuales >= caloriasMinimas && pesoActual <= pesoMaximo) {
        if (pesoActual < mejorPeso) {
          mejorPeso = pesoActual;
          mejoresElementos = [...seleccionados];
        }
      }
      if (index >= elementos.length || pesoActual > pesoMaximo) return;

      // Incluir el elemento actual
      backtrack(
        index + 1,
        pesoActual + elementos[index].peso,
        caloriasActuales + elementos[index].calorias,
        [...seleccionados, elementos[index]]
      );

      // No incluir el elemento actual
      backtrack(index + 1, pesoActual, caloriasActuales, seleccionados);
    };

    backtrack(0, 0, 0, []);
    setResultado(mejoresElementos);
  };

  const agregarElemento = () => {
    if (nuevoElemento.nombre && nuevoElemento.peso && nuevoElemento.calorias) {
      setElementos([...elementos, nuevoElemento]);
      setNuevoElemento({ nombre: "", peso: 0, calorias: 0 });
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Optimización de Equipamiento</h1>
      <div className="mt-4">
        <label>Peso Máximo:</label>
        <input
          type="number"
          value={pesoMaximo}
          onChange={(e) => setPesoMaximo(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>
      <div className="mt-2">
        <label>Calorías Mínimas:</label>
        <input
          type="number"
          value={caloriasMinimas}
          onChange={(e) => setCaloriasMinimas(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>
      <button onClick={optimizarElementos} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Calcular Mejor Opción
      </button>

      <div className="mt-4">
        <h2 className="font-semibold">Agregar Nuevo Elemento</h2>
        <label>Nombre:</label>
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoElemento.nombre}
          onChange={(e) => setNuevoElemento({ ...nuevoElemento, nombre: e.target.value })}
          className="border p-2 w-full mb-2"
        />
        <label>Peso:</label>
        <input
          type="number"
          placeholder="Peso"
          value={nuevoElemento.peso}
          onChange={(e) => setNuevoElemento({ ...nuevoElemento, peso: Number(e.target.value) })}
          className="border p-2 w-full mb-2"
        />
        <label>Calorias:</label>
        <input
          type="number"
          placeholder="Calorías"
          value={nuevoElemento.calorias}
          onChange={(e) => setNuevoElemento({ ...nuevoElemento, calorias: Number(e.target.value) })}
          className="border p-2 w-full mb-2"
        />
        <button onClick={agregarElemento} className="bg-blue-500 text-white px-4 py-2 rounded">Agregar Elemento</button>
      </div>

     

      <div className="mt-4">
        <h2 className="font-semibold">Elementos Seleccionados:</h2>
        <ul>
          {resultado.map((item, index) => (
            <li key={index}>{item.nombre} - Peso: {item.peso}, Calorías: {item.calorias}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
