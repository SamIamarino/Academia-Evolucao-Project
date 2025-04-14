import { WhatsAppOutlined } from "@ant-design/icons";
import './WhatsAppButton.css'
export default function WhatsAppButton ({children, darkTheme}){
  return(
    <a href="" className={darkTheme ? "whats-button-dark-themed" : "whats-button"}>{children}<WhatsAppOutlined style={{marginLeft: '10px'}}/></a>
  );
}
