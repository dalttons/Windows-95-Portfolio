// DesktopIcon.tsx
import React, { type ReactElement, type ReactNode, type ComponentType, useEffect, useState } from "react";
import { Modal, TitleBar, useModal } from "@react95/core";
import { useWindowsStore } from "../store/windows";

const styles = {
  desktopIcon: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    width: "100px",
    gap: "10px",
  },
  iconName: {
    color: "#ffffff",
    fontSize: "14px",
    margin: "0",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
    userSelect: "none",
  },
} as const;

interface WindowProps {
  icon: ReactElement<{ variant?: string }>;
  title: string;
  children: ReactNode;
  width?: number;
  height?: number;
  onClose: () => void;
}

const Window = ({ title, onClose, children, icon, width, height }: WindowProps) => {
  const { minimize } = useModal();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Delegar la altura al contenido en móviles (auto), manteniendo medidas en escritorio
  const windowWidth = isMobile ? "95vw" : (width ? `${width}px` : "auto");
  const windowHeight = isMobile ? "auto" : (height ? `${height}px` : "auto");

  return (
    <SafeModal
      id={title}
      icon={icon}
      title={title}
      titleBarOptions={[
        <TitleBar.Minimize style={{ marginBlock: "auto" }} key="minimize" onClick={() => minimize(title)} />,
        <TitleBar.Close style={{ marginBlock: "auto" }} key="close" onClick={onClose} />,
      ]}
    >
      <Modal.Content 
        width={windowWidth} 
        height={windowHeight} 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          padding: isMobile ? '5px' : '0',
          maxHeight: isMobile ? '80vh' : 'none'
        }}
      >
        
        <div style={{ flex: 1, width: '100%', height: '100%', overflow: 'auto' }}>
          {children}
        </div>
      </Modal.Content>
    </SafeModal>
  );
};

interface DesktopIconProps {
  icon: ReactElement<{ variant?: string }>;
  name: string;
  children?: ReactNode; 
  width?: number;
  height?: number;
  hideIcon?: boolean; 
  textColor?: string; 
}

const DesktopIcon = ({ icon, name, children, width, height, hideIcon = false, textColor = "#ffffff" }: DesktopIconProps) => {
  const { openWindow, closeWindow, isWindowOpen } = useWindowsStore();
  const isOpen = isWindowOpen(name);

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    openWindow(name);
  };

  return (
    <>
      {!hideIcon && (
        <div style={styles.desktopIcon} onDoubleClick={handleDoubleClick}>
          {React.cloneElement(icon, { variant: "32x32_4" })}
          <p style={{ ...styles.iconName, color: textColor, textShadow: textColor === '#000' ? 'none' : styles.iconName.textShadow }}>
            {name}
          </p>
        </div>
      )}
      {isOpen && children && (
        <Window width={width} height={height} icon={React.cloneElement(icon, { variant: "16x16_4" })} title={name} onClose={() => closeWindow(name)}>
          {children}
        </Window>
      )}
    </>
  );
};

export default DesktopIcon;
const SafeModal = Modal as unknown as ComponentType<any>;