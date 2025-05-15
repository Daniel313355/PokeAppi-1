import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import './App.css'
import { supabase } from "./supabase";
import Aleatorios from './componentes/Aleatorios'
import Detalle from './componentes/Detalle'
import Favoritos from './componentes/Favoritos'
import Original from './componentes/Original'
import Usuario from './componentes/Usuario'
import Listar from './componentes/Listar'
import Menu from './componentes/Menu'
import Login from './componentes/login';

function App() {
  const [usuario, setUsuario] = useState(null);
const [cargando, setCargando] = useState(true);

useEffect(() => {
async function verificarSesion() {
const { data: { session } } = await supabase.auth.getSession();
setUsuario(session?.user || null);
setCargando(false);
}
verificarSesion();

// Escucha cambios en la sesión
supabase.auth.onAuthStateChange((_event, session) => {

setUsuario(session?.user || null);
});
}, []);

if (cargando) return <p>Cargando...</p>;

  return (
    <AppProvider>
    <Router>
      {usuario && <Menu />}
      <Menu/>

      <Routes>
      <Route path="/" element={usuario ? <Lista /> : <Navigate to="/login"/>} />
      <Route path="/Listar" element={usuario ? <Listar /> :<Navigate to="/login" />} />
      <Route path="/Aleatorios" element={usuario ? <Aleatorios /> :<Navigate to="/login" />} />
      <Route path="/Detalle" element={usuario ? <Detalle /> :<Navigate to="/login" />} />
      <Route path="/Favoritos" element={usuario ? <Favoritos /> :<Navigate to="/login" />} />
      <Route path="/Original" element={usuario ? <Original /> :<Navigate to="/login" />} />
      <Route path="/Usuario" element={usuario ? <Usuario /> : <Navigate to="/login" />} />
      <Route path="/Menu" element={usuario ? <Menu /> : <Navigate to="/login" />} />
      <Route path="/detalle/:name" element={usuario ? <Detalle /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
    </AppProvider>
  )
}

export default App