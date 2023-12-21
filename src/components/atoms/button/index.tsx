import { Button, ConfigProvider} from "antd";
import { InfoCircleOutlined, CheckCircleTwoTone, SettingOutlined, EyeOutlined } from '@ant-design/icons';
import style from './index.module.css';


interface Props {
  textbutton?: string,
  spacingbutton?: "spacing-button-small" | "spacing-button-middle" | "spacing-button-large",
  typebutton: "primary" | "dashed" | "link" | "text" | "default",
  sizebutton: "large" | "middle" | "small",
  colorbutton:"#52c41a"/*Green*/|"#fadb14"/*Yellow*/|"#fa8c16"/*Orange*/|"#2f54eb"/*Blue*/|"#f5222d"/*Red*/,
  children?: string,
  widthbutton: "width-large" | "width-middle" | "width-small" | "width-auto",
  iconbutton?: string

}

export function ModButton(props: Props): JSX.Element {
 
  const getIcon = () => {
    switch (props.iconbutton) {
      case "1":
        return <InfoCircleOutlined />;
      case "2":
        return <CheckCircleTwoTone />;
      case "3":
        return <SettingOutlined />;
      case "4":
        return <EyeOutlined />;
      default:
        return null;
    }
  };
  return (
    <>
       <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: `${props.colorbutton}`,
      },
    }}
  >
      <Button className={`${style[props.spacingbutton ?? "spacing-button-small"]} ${style[props.widthbutton]}`} icon={getIcon()} type={props.typebutton} size={props.sizebutton} >{props.children}</Button>
      </ConfigProvider>
    </>
  );
}