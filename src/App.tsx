import { lazy, Suspense } from "react";
import { AGENTS, ClippyProvider } from "@react95/clippy";
import Login from "./components/Login";
import WindowBar from "./components/WindowBar";
import { useAuth } from "./store/auth";
import DesktopIcon from "./components/DesktopIcon";

import { Amovie2, Joy102, Wordpad, Mail, Folder, FileText, Computer } from "@react95/icons";

// 1. IMPORTACIONES DINÁMICAS (Declaradas FUERA del componente para preservar el estado)
const Game = lazy(() => import("./components/Game"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

// 2. COMPONENTE DE CARGA (Fallback visual)
const WindowLoader = () => (
  <div style={{ padding: '20px', textAlign: 'center', color: '#000', backgroundColor: '#c0c0c0', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <p>Cargando módulo...</p>
  </div>
);

const GRAPHIC_DESIGN_PROJECTS = [
  { id: 'pdf-1', title: 'Revista Musical', file: '/revista.pdf' },
];

const VIDEO_PROJECTS = [
  { id: 'vid-1', title: 'Video 1', vimeoId: '1174247522' },
  { id: 'vid-2', title: 'Video 2', vimeoId: '1195207721' },
  { id: 'vid-3', title: 'Video 3', vimeoId: '1195698615' },
];

const PHOTO_SESSIONS = [
  { id: 'foto-1', src: '/foto1.webp', title: 'Sesión 1' },
  { id: 'foto-2', src: '/foto2.webp', title: 'Sesión 2' },
  { id: 'foto-3', src: '/foto3.webp', title: 'Sesión 3' },
  { id: 'foto-4', src: '/foto4.webp', title: 'Sesión 4' },
  { id: 'foto-5', src: '/foto5.webp', title: 'Sesión 5' },
  { id: 'foto-6', src: '/foto6.webp', title: 'Sesión 6' },
  { id: 'foto-7', src: '/foto7.webp', title: 'Sesión 7' },
  { id: 'foto-8', src: '/foto8.webp', title: 'Sesión 8' },
  { id: 'foto-9', src: '/foto9.webp', title: 'Sesión 9' },
];

const MEDIA_CONTAINER_STYLE = { 
  width: '100%', 
  height: '100%', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  backgroundColor: '#0f0f0f' 
};

function App() {
  const authinicated = useAuth((state) => state.authinicated);
  
  return (
    <div style={{ width: "100%", background: "#098684", minHeight: "100vh", position:"relative" }}>
      
      {/* Bypass para Viewport en dispositivos móviles */}
      <style>{`
        @media (max-width: 768px) {
          div[role="dialog"] { max-width: 95vw !important; margin: 0 auto !important; }
          .fixed { overflow-x: auto !important; width: 100vw !important; }
        }
      `}</style>

      <img src="/logo.png" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-70%)", width: "400px", maxWidth: "80vw" }}/>
      
      {!authinicated && <Login />}

      {authinicated && (
        <ClippyProvider agentName={AGENTS.MERLIN}>
          <div className="fixed" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '90vh', alignContent: 'flex-start', gap: '10px', padding: '10px', overflowX: 'auto' }}>
            
            {/* ======================================================================= */}
            {/* SECCIÓN 1: CARPETAS DEL ESCRITORIO */}
            {/* ======================================================================= */}
            
            <DesktopIcon width={600} height={400} icon={<Folder variant="32x32_4"/>} name="Diseño Gráfico">
              <div className="folder-grid">
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Contexto Diseño.txt" textColor="#000" />
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Revista Musical" textColor="#000" />
              </div>
            </DesktopIcon>

            <DesktopIcon width={600} height={400} icon={<Folder variant="32x32_4"/>} name="Programación">
              <div className="folder-grid">
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Contexto Programacion.txt" textColor="#000" />
                <DesktopIcon icon={<Computer variant="32x32_4"/>} name="Asistente virtual" textColor="#000" />
              </div>
            </DesktopIcon>

            <DesktopIcon width={600} height={400} icon={<Folder variant="32x32_4"/>} name="Videos">
              <div className="folder-grid">
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Contexto Videos.txt" textColor="#000" />
                <DesktopIcon icon={<Amovie2 variant="32x32_4"/>} name="Video 1" textColor="#000" />
                <DesktopIcon icon={<Amovie2 variant="32x32_4"/>} name="Video 2" textColor="#000" />
                <DesktopIcon icon={<Amovie2 variant="32x32_4"/>} name="Video 3" textColor="#000" />
              </div>
            </DesktopIcon>

            <DesktopIcon width={600} height={400} icon={<Folder variant="32x32_4"/>} name="Fotografías">
              <div className="folder-grid">
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Contexto Fotografias.txt" textColor="#000" />
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Sesión 1" textColor="#000" />
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Sesión 2" textColor="#000" />
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Sesión 3" textColor="#000" />
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Sesión 4" textColor="#000" />
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Sesión 5" textColor="#000" />
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Sesión 6" textColor="#000" />
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Sesión 7" textColor="#000" />
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Sesión 8" textColor="#000" />
                <DesktopIcon icon={<FileText variant="32x32_4"/>} name="Sesión 9" textColor="#000" />
              </div>
            </DesktopIcon>

            {/* ======================================================================= */}
            {/* SECCIÓN 2: APLICACIONES EXTRAS (Implementación de Lazy Loading)         */}
            {/* ======================================================================= */}
            
            <DesktopIcon width={650} icon={<Wordpad variant="32x32_4"/>} name="Currículum vitae">
              <Suspense fallback={<WindowLoader />}>
                <Resume />
              </Suspense>
            </DesktopIcon>
            
            <DesktopIcon width={400} icon={<Mail variant="32x32_4"/>} name="Contacto">
              <Suspense fallback={<WindowLoader />}>
                <Contact />
              </Suspense>
            </DesktopIcon>
            
            <DesktopIcon width={400} height={400} icon={<Joy102 variant="32x32_4"/>} name="Juego">
              <Suspense fallback={<WindowLoader />}>
                <Game />
              </Suspense>
            </DesktopIcon>
            
            {/* --- VIDEO YOUTUBE --- */}
            <DesktopIcon icon={<Amovie2 variant="32x32_4"/>} name="Música">
                <iframe width="500" height="315" src="https://www.youtube.com/embed/ZXu6q-6JKjA" style={{ border: 'none' }} title="Música" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </DesktopIcon>

            {/* ======================================================================= */}
            {/* SECCIÓN 3: VENTANAS OCULTAS DEL SISTEMA                                 */}
            {/* ======================================================================= */}
            
            {/* --- 3.1 DISEÑO GRÁFICO --- */}
            <DesktopIcon hideIcon={true} width={500} height={400} icon={<FileText variant="16x16_4"/>} name="Contexto Diseño.txt">
              <div style={{ padding: '10px', backgroundColor: '#fff', width: '100%', height: '100%', boxSizing: 'border-box', border: '1px solid #7f7f7f', overflowY: 'auto' }}>
                <p style={{ fontFamily: '"MS Sans Serif", monospace', fontSize: '12px', margin: 0, whiteSpace: 'pre-wrap', color: '#000' }}>
                  {`Estos proyectos fueron desarrollados como trabajos académicos, con el objetivo de llevar la teoría del diseño a un producto comercial funcional. La meta fue crear identidades visuales coherentes.`}
                </p>
              </div>
            </DesktopIcon>
            
            {GRAPHIC_DESIGN_PROJECTS.map((project) => (
              <DesktopIcon key={project.id} hideIcon={true} width={800} height={600} icon={<FileText variant="32x32_4"/>} name={project.title}>
                <iframe 
                  src={project.file} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none' }} 
                  title={project.title}
                  loading="lazy" 
                />
              </DesktopIcon>
            ))}

            {/* --- 3.2 PROGRAMACIÓN --- */}
            <DesktopIcon hideIcon={true} width={500} height={350} icon={<FileText variant="16x16_4"/>} name="Contexto Programacion.txt">
              <div style={{ padding: '10px', backgroundColor: '#fff', width: '100%', height: '100%', boxSizing: 'border-box', border: '1px solid #7f7f7f', overflowY: 'auto' }}>
                <p style={{ fontFamily: '"MS Sans Serif", monospace', fontSize: '12px', margin: 0, whiteSpace: 'pre-wrap', color: '#000' }}>
                  {`NOMBRE DEL PROYECTO: APRENDO CON IA\n\nDiseñé este proyecto para un trabajo universitario del curso "Procesos de educación y comunicación".\n\nEl objetivo fue promover el aprendizaje digital en los estudiantes de 3er grado de primaria mediante el uso lúdico de un asistente virtual con inteligencia artificial. Esto fortalece sus competencias tecnológicas y su comprensión sobre la IA como herramienta educativa interactiva.`}
                </p>
              </div>
            </DesktopIcon>
            <DesktopIcon hideIcon={true} width={1000} height={700} icon={<Computer variant="32x32_4"/>} name="Asistente virtual">
              <iframe src="https://" width="100%" height="100%" style={{ border: 'none', backgroundColor: '#fff' }} title="Prototipo Web" loading="lazy" />
            </DesktopIcon>

            {/* --- 3.3 VIDEOS --- */}
            <DesktopIcon hideIcon={true} width={500} height={400} icon={<FileText variant="16x16_4"/>} name="Contexto Videos.txt">
              <div style={{ padding: '10px', backgroundColor: '#fff', width: '100%', height: '100%', boxSizing: 'border-box', border: '1px solid #7f7f7f', overflowY: 'auto' }}>
                <p style={{ fontFamily: '"MS Sans Serif", monospace', fontSize: '12px', margin: 0, whiteSpace: 'pre-wrap', color: '#000' }}>
                  {`En esta carpeta presento una selección de piezas audiovisuales.\n\nCada video tiene un estilo y estrategia diferente.`}
                </p>
              </div>
            </DesktopIcon>
            
            {VIDEO_PROJECTS.map((video) => (
              <DesktopIcon key={video.id} hideIcon={true} width={500} height={450} icon={<Amovie2 variant="32x32_4"/>} name={video.title}>
                <iframe 
                  src={`https://player.vimeo.com/video/${video.vimeoId}?title=0&byline=0&portrait=0`} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none' }} 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  title={video.title}
                  loading="lazy"
                />
              </DesktopIcon>
            ))}

            {/* --- 3.4 FOTOGRAFÍAS --- */}
            <DesktopIcon hideIcon={true} width={500} height={400} icon={<FileText variant="16x16_4"/>} name="Contexto Fotografias.txt">
              <div style={{ padding: '10px', backgroundColor: '#fff', width: '100%', height: '100%', boxSizing: 'border-box', border: '1px solid #7f7f7f', overflowY: 'auto' }}>
                <p style={{ fontFamily: '"MS Sans Serif", monospace', fontSize: '12px', margin: 0, whiteSpace: 'pre-wrap', color: '#000' }}>
                  {`Más allá del diseño y la edición, la fotografía es uno de mis hobbies.\n\nEn esta carpeta comparto una colección de imágenes capturadas durante mis salidas. Intento documentar la belleza de la naturaleza que me encuentro en el camino.`}
                </p>
              </div>
            </DesktopIcon>
            
            {PHOTO_SESSIONS.map((photo) => (
              <DesktopIcon key={photo.id} hideIcon={true} width={600} height={500} icon={<FileText variant="32x32_4"/>} name={photo.title}>
                <div style={MEDIA_CONTAINER_STYLE}>
                  <img 
                    src={photo.src} 
                    alt={photo.title} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                    loading="lazy"
                  />
                </div>
              </DesktopIcon>
            ))}

          </div>

          <WindowBar />
        </ClippyProvider>
      )}
    </div>
  );
}

export default App;