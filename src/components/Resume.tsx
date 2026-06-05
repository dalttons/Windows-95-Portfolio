import { Avatar, Checkbox, Fieldset, ProgressBar, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs defaultActiveTab="Mi perfil">
      <Tab title="Mi perfil">
        <h3>Hola. Soy Dalttons</h3>
        <Avatar src="/yo.webp" alt="A portrait of the artisan" size="140px" />

        <p>Programador y creador audiovisual.</p>
        <Fieldset legend="Mi Perfil Personal">
          <p>
            Estudiante de Ciencias de la Comunicación con conocimientos en informática, programación y edición.<br/><br/>
            Inicialmente, esto era una descripción sobre mis "habiliddades blandas", pero eliminé varias cosas.
          </p>
        </Fieldset>
      </Tab>

      <Tab title="Experiencia laboral">
        <Fieldset legend="Empresas 𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃 (2021-2026)">
          <Checkbox readOnly checked>
            Desarrollador web: Creación de páginas web para microempresas y negocios locales.
          </Checkbox>
        </Fieldset>
        <Fieldset legend="Diario 𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃 (2024)">
          <Checkbox readOnly checked>
            Redactor de Noticias: Aplicación de habilidades de redacción e investigación para la creación de contenido informativo.
          </Checkbox>
        </Fieldset>
        <Fieldset legend="Canal de TV de 𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃 (2023)">
          <Checkbox readOnly checked>
            Asistente de Producción: Apoyo en la grabación y edición de contenido audiovisual.
          </Checkbox>
          <Checkbox readOnly checked>
            Operador Técnico: Manejo de cámaras y equipo técnico de televisión.
          </Checkbox>
        </Fieldset>
      </Tab>

      <Tab title="Herramientas del Oficio">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          
          <Fieldset legend="Producción & Edición">
            <ul>
              <li className="resume-skills">Adobe Illustrator</li>
              <ProgressBar percent={90} width="200px" />
              <li className="resume-skills">Kdenlive</li>
              <ProgressBar percent={60} width="200px" />
              <li className="resume-skills">Adobe Photoshop</li>
              <ProgressBar percent={70} width="200px" />
            </ul>
          </Fieldset>
          
          <Fieldset legend="Tecnología">
            <ul>
              <li className="resume-skills">Python</li>
              <ProgressBar percent={30} width="200px" />
              <li className="resume-skills">HTML/Tailwind/JavaScript</li>
              <ProgressBar percent={60} width="200px" />
              <li className="resume-skills">Manejo de Software General</li>
              <ProgressBar percent={100} width="200px" />
            </ul>
          </Fieldset>

          <Fieldset legend="Conocimientos Clave">
            <ul>
              <li className="resume-skills">Storytelling & Redacción</li>
              <ProgressBar percent={95} width="200px" />
              <li className="resume-skills">Marketing</li>
              <ProgressBar percent={80} width="200px" />
              <li className="resume-skills">Inglés</li>
              <ProgressBar percent={40} width="200px" />
            </ul>
          </Fieldset>

        </div>
      </Tab>

      <Tab title="Especificaciones del Sistema">
        <Fieldset legend="Educación">
          <p>
            <strong>National University 𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃</strong><br/>
            <br/>Carrera: Ciencias de la Comunicación
          </p>
        </Fieldset>
        <br/>
        <Fieldset legend="🫩🫩🫩">
          <p>
            Dispersión creativa 
          </p>
        </Fieldset>
        <br/>
        <Fieldset legend="Contacto">
          <p>
            Email: @gmail.com<br/>
            Teléfono: +00 0000 000 00
          </p>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Resume;