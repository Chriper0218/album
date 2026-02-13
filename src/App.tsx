export interface Player {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
}

export const players: Player[] = [
  { id: 1, name: "Lionel Messi", country: "Argentina", image: "https://i.pinimg.com/736x/5d/8b/90/5d8b90c2069566b02e854b8119666fd4.jpg", description: "El mejor de la historia." },
  { id: 2, name: "Cristiano Ronaldo", country: "Portugal", image: "https://i.pinimg.com/564x/90/71/3e/90713e0b4bd200f56a251da5f48e7767.jpg", description: "El segundo mejor de la historia." },
  { id: 3, name: "Neymar Junior", country: "Brazil", image: "https://i.pinimg.com/736x/2c/92/d2/2c92d20e42581bf32b8c9663db6ee50c.jpg", description: "El principe que no quiso ser rey." },
  { id: 4, name: "James Rodriguez", country: "Colombia", image: "https://www.euro-soccer-cards.com/72966/james-rodriguez-colombia-199-wc-brazil-2014.jpg", description: "Goleador de Colombia mundial 2014." },
  { id: 5, name: "El perfume Gutierrez", country: "Colombia", image: "https://www.euro-soccer-cards.com/72967/teofilo-gutierrez-colombia-200-wc-brazil-2014.jpg", description: "De la chinita para el mundo." },
  { id: 6, name: "Luis Suarez", country: "Uruguay", image: "https://i.pinimg.com/564x/35/39/cc/3539cc963d6906214f2ff21b58cc0acf.jpg", description: "El pistolero charrua." },
];

import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div className="album-container"> 
    <h1 className="album-title">Jugadores album panini 2014</h1>
    
    <div className="album-grid">
      {players.map((player) => (
        <Link key={player.id} to={`/player/${player.id}`}>
          <div className="card">
            <img src={player.image} alt={player.name} />
            <h3>{player.id}</h3>
            <p>{player.name}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const PlayerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const player = players.find(p => p.id === Number(id));

  if (!player) return <h2>Lamina no encontrada</h2>;

  return (
    <div className="detail-view">
      <div className="sticker-detail">
        <img src={player.image} alt={player.name} style={{ width: '200px' }} />
        <h1>{player.name}</h1>
        <h3>{player.country}</h3>
        <p>{player.description}</p>
        <Link to="/" style={{ color: '#d4af37', fontWeight: 'bold' }}>← Volver al álbum</Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router basename='/album'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<PlayerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;