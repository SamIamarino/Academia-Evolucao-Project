import { WhatsAppOutlined } from "@ant-design/icons";
import './WhatsAppButton.css'
export default function WhatsAppButton ({children}){
  return(
    <a href="" className="whats-button">{children} <WhatsAppOutlined/></a>
  );
}
