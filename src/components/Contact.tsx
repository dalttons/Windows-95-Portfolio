import { Frame, List } from "@react95/core";
import { Mail } from "@react95/icons";
import { FaInstagram, FaLinkedin, } from "react-icons/fa";

const contactLinks = [

  {
    icon: <FaLinkedin size={24} />, label: "LinkedIn", url: "https://www.linkedin.com/in/dalttons/" },
  {
    icon: <FaInstagram size={24} />, label: "Instagram", url: "https://www.instagram.com/marshadoow/" },
  {
    icon: <Mail variant="32x32_4" />, label: "Gmail", url: "mailto:@gmail.com" },
];

const Contact = () => (
  <Frame bg="white" boxShadow="in" style={{ padding: 24, minWidth: 320 }}>
    <h2 style={{ marginTop: 0, marginBottom: 16, fontFamily: 'MS Sans Serif', fontSize: 22, color: '#222' }}>Contáctame</h2>
    <List>
      {contactLinks.map(({ icon, label, url }) => (
        <List.Item key={label} icon={icon}>
          <a 
  href={url} 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}
>
  {label}
</a>
        </List.Item>
      ))}
    </List>
  </Frame>
);

export default Contact;