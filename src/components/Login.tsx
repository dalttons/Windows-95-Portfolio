import { Button, Input, Modal, TitleBar } from "@react95/core";
import { Keys } from "@react95/icons";
import { type ComponentType, useState, useEffect } from "react";
import { useAuth } from "../store/auth";

function Login() {
    const login = useAuth((state) => state.login);

    // Detecta si la pantalla es de celular
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <SafeModal
      dragOptions={{
        disabled: true,
      }}
      title="Bienvenido a Windows"
      style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -90%)" }}
      titleBarOptions={[
        <TitleBar.Help
          style={{ marginBlock: "auto" }}
          key="help"
          onClick={() => alert("Help!")}
        />
      ]}
    >
      {/* Si es celular, el ancho se adapta a la pantalla (90vw) y la altura es automática */}
      <Modal.Content width={isMobile ? "90vw" : "450px"} height={isMobile ? "auto" : "160px"} boxShadow="$in">
        
        {/* Contenedor principal que cambia de Fila (PC) a Columna (Celular) */}
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: "16px", padding: isMobile ? "10px" : "0" }}>
          
          {/* Bloque Izquierdo: Icono + Textos y Contraseñas */}
          <div style={{ display: "flex", gap: "12px", width: "100%" }}>
            <div style={{ flexShrink: 0 }}>
              <Keys width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <p style={{ margin: 0, fontSize: isMobile ? "13px" : "14px" }}>
                Bienvenido. Presione "Ok" para continuar
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ margin: 0, minWidth: "80px", fontSize: isMobile ? "13px" : "14px" }}>Usuario:</p>
                  <Input defaultValue={"admin"} disabled style={{ flex: 1, width: "100%" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ margin: 0, minWidth: "80px", fontSize: isMobile ? "13px" : "14px" }}>Contraseña:</p>
                  <Input defaultValue={"admin"} type="password" disabled style={{ flex: 1, width: "100%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Bloque Derecho (PC) / Abajo (Celular): Los botones Ok y Cancelar */}
          <div style={{ 
            display: "flex", 
            flexDirection: isMobile ? "row" : "column", 
            gap: "8px", 
            width: isMobile ? "100%" : "100px",
            justifyContent: isMobile ? "center" : "flex-start",
            marginTop: isMobile ? "10px" : "0"
          }}>
            <Button style={{ width: isMobile ? "50%" : "100%" }} onClick={() => login()}>Ok</Button>
            <Button style={{ width: isMobile ? "50%" : "100%" }}>Cancelar</Button>
          </div>

        </div>
      </Modal.Content>
    </SafeModal>
  );
}

export default Login;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SafeModal = Modal as unknown as ComponentType<any>;