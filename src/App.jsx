
import { useState } from 'react'
import './App.css'

const recetas = [
  {
    id: 1,
    nombre: 'Pastel de chocolate',
    imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Un pastel suave y esponjoso para los amantes del chocolate.',
    ingredientes: [
      '2 tazas de harina',
      '1 taza de azúcar',
      '1/2 taza de cacao',
      '2 huevos',
      '1 taza de leche',
      '100 g de mantequilla'
    ],
    preparacion: [
      'Mezcla la harina, el azúcar y el cacao.',
      'Agrega los huevos, la leche y la mantequilla derretida.',
      'Vierte la mezcla en un molde engrasado.',
      'Hornea a 180 °C durante 30 a 35 minutos.'
    ]
  },
  {
    id: 2,
    nombre: 'Cheesecake de fresa',
    imagen: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Un postre cremoso con una deliciosa cubierta de fresas.',
    ingredientes: [
      '200 g de galletas',
      '80 g de mantequilla',
      '400 g de queso crema',
      '1/2 taza de azúcar',
      '200 ml de crema para batir',
      'Fresas al gusto'
    ],
    preparacion: [
      'Tritura las galletas y mézclalas con la mantequilla derretida.',
      'Presiona la mezcla en el fondo de un molde.',
      'Bate el queso crema, el azúcar y la crema.',
      'Vierte sobre la base y refrigera hasta que cuaje.',
      'Decora con fresas antes de servir.'
    ]
  },
  {
    id: 3,
    nombre: 'Brownies de chocolate',
    imagen: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Brownies húmedos por dentro y con intenso sabor a chocolate.',
    ingredientes: [
      '150 g de chocolate',
      '100 g de mantequilla',
      '1 taza de azúcar',
      '2 huevos',
      '3/4 de taza de harina',
      '2 cucharadas de cacao'
    ],
    preparacion: [
      'Derrite el chocolate junto con la mantequilla.',
      'Agrega el azúcar y los huevos.',
      'Incorpora la harina y el cacao.',
      'Vierte en un molde engrasado.',
      'Hornea a 180 °C durante 20 a 25 minutos.'
    ]
  },
  {
    id: 4,
    nombre: 'Flan de vainilla',
    imagen: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Un flan tradicional, suave y cubierto de caramelo.',
    ingredientes: [
      '1 lata de leche condensada',
      '1 lata de leche evaporada',
      '4 huevos',
      '1 cucharadita de vainilla',
      '1/2 taza de azúcar'
    ],
    preparacion: [
      'Derrite el azúcar en una sartén hasta formar caramelo.',
      'Vierte el caramelo en un molde.',
      'Licúa las leches, los huevos y la vainilla.',
      'Vierte la mezcla en el molde.',
      'Hornea a baño María a 180 °C hasta que cuaje. Deja enfriar y refrigera.'
    ]
  },
  {
    id: 5,
    nombre: 'Galletas con chispas de chocolate',
    imagen: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Galletas doraditas con chispas de chocolate en cada bocado.',
    ingredientes: [
      '2 tazas de harina',
      '100 g de mantequilla',
      '3/4 de taza de azúcar',
      '1 huevo',
      '1 cucharadita de vainilla',
      '1 taza de chispas de chocolate'
    ],
    preparacion: [
      'Bate la mantequilla con el azúcar.',
      'Agrega el huevo y la vainilla.',
      'Incorpora la harina y las chispas de chocolate.',
      'Forma bolitas y colócalas en una bandeja.',
      'Hornea a 180 °C durante 10 a 12 minutos.'
    ]
  },
  {
    id: 6,
    nombre: 'Pay de limón',
    imagen: 'https://images.unsplash.com/photo-1681329142517-6daaa56d3670?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Un postre fresco y cremoso con el toque ácido del limón.',
    ingredientes: [
      '200 g de galletas Marías',
      '90 g de mantequilla derretida',
      '1 lata de leche condensada',
      '1 lata de leche evaporada',
      '1/2 taza de jugo de limón'
    ],
    preparacion: [
      'Tritura las galletas y mézclalas con la mantequilla.',
      'Coloca la mezcla en un molde y presiónala para formar la base.',
      'Licúa la leche condensada, la leche evaporada y el jugo de limón.',
      'Vierte la mezcla sobre la base de galletas.',
      'Refrigera durante al menos 4 horas antes de servir.'
    ]
  }
]

function App() {
  const [pestana, setPestana] = useState('recetas')
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null)

  function verReceta(receta) {
    setRecetaSeleccionada(receta)
    setPestana('detalle')
  }

  return (
    <div className="app">
      <header className="encabezado">
        <h1>Dulce Recetario</h1>
        <p>Pequeños antojos, grandes momentos</p>

        <nav className="pestanas">
          <button
            className={pestana === 'recetas' ? 'activa' : ''}
            onClick={() => setPestana('recetas')}
          >
            Recetas
          </button>

          <button
            className={pestana === 'detalle' ? 'activa' : ''}
            onClick={() => setPestana('detalle')}
            disabled={!recetaSeleccionada}
          >
            Detalle de receta
          </button>
        </nav>
      </header>

      <main className="contenido">
        {pestana === 'recetas' ? (
          <section>
            <h2>Nuestros postres</h2>
            <p className="introduccion">
              Encuentra tu próximo postre favorito.
            </p>

            <div className="contenedor-recetas">
              {recetas.map((receta) => (
                <article className="tarjeta" key={receta.id}>
                  <img
                    src={receta.imagen}
                    alt={receta.nombre}
                    loading="lazy"
                  />

                  <div className="tarjeta-contenido">
                    <h3>{receta.nombre}</h3>
                    <p>{receta.descripcion}</p>
                    <button onClick={() => verReceta(receta)}>
                      Ver receta
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : recetaSeleccionada ? (
          <section className="detalle">
            <button
              className="boton-volver"
              onClick={() => setPestana('recetas')}
            >
              Volver a los postres
            </button>

            <h2>{recetaSeleccionada.nombre}</h2>
            <p className="introduccion">
              {recetaSeleccionada.descripcion}
            </p>

            <img
              className="imagen-detalle"
              src={recetaSeleccionada.imagen}
              alt={recetaSeleccionada.nombre}
            />

            <div className="informacion-receta">
              <div>
                <h3>Ingredientes</h3>
                <ul>
                  {recetaSeleccionada.ingredientes.map(
                    (ingrediente, index) => (
                      <li key={index}>{ingrediente}</li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h3>Preparación</h3>
                <ol>
                  {recetaSeleccionada.preparacion.map((paso, index) => (
                    <li key={index}>{paso}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <footer className="pie">
        <p>Dulce Recetario - Hecho con cariño</p>
      </footer>
    </div>
  )
}

export default App
