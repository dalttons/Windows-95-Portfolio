import { List, TaskBar } from "@react95/core";
import {
  Computer3,
  Settings,
  Amovie2,
  Joy102,
  Inetcpl1313,
  Wordpad,
  Mail
} from "@react95/icons";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Shutdown from "./Shutdown";
import { useWindowsStore } from "../store/windows";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "0 10px", alignSelf: "center" }}>
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}

function WindowBar() {
  const [showShutdown, setShowShutdown] = useState(false);
  const { openWindow } = useWindowsStore();
  return (
    <>
      <TaskBar
        list={
          <List width={"200px"}>
            <List.Item icon={<Mail variant="32x32_4" />}>
              <List width={"200px"}>
                <List.Item icon={<FaLinkedin size={16} />}>
                  <a href="https://www.linkedin.com/in/dalttons/" target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>LinkedIn</a>
                </List.Item>
                <List.Item icon={<FaInstagram size={16} />}>
                  <a href="https://www.instagram.com/marshadoow/" target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>Instagram</a>
                </List.Item>
                <List.Item icon={<Mail variant="16x16_4" />}>
                  <a href="mailto:@gmail.com" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>Gmail</a>
                </List.Item>
              </List>
              Contacto
            </List.Item>
            <List.Item
              onClick={() => openWindow("Juego")}
              icon={<Joy102 variant="32x32_4" />}
            >
              Juego
            </List.Item>
            <List.Item icon={<Settings variant="32x32_4" />}>
              Configuración
            </List.Item>
            <List.Item
              onClick={() => openWindow("Browser")}
              icon={<Inetcpl1313 variant="32x32_4" />}
            >
              Navegador
            </List.Item>
            <List.Item
              onClick={() => openWindow("Música")}
              icon={<Amovie2 variant="32x32_4" />}
            >
              Música
            </List.Item>
            <List.Item
              onClick={() => openWindow("Currículum vitae")}
              icon={<Wordpad variant="32x32_4" />}
            >
              Currículum
            </List.Item>
            <List.Divider />
            <List.Item
              onClick={() => setShowShutdown(true)}
              icon={<Computer3 variant="32x32_4" />}
            >
              Apagar...
            </List.Item>
            
          </List>
        }
      >
        <Clock />
      </TaskBar>
      {showShutdown && <Shutdown close={() => setShowShutdown(false)} />}
    </>
  );
}

export default WindowBar;
