import { Button } from "antd";
import { InfoCircleOutlined ,CheckCircleTwoTone, SettingOutlined,EyeOutlined} from '@ant-design/icons';


interface Props {
    textbutton?: string,
    typebutton: "primary" | "dashed" | "link" | "text" | "default",
    sizebutton: "large" | "middle" | "small",
    children?:string,
    iconbutton?:string

}

export function ModButton(props: Props): JSX.Element {

    const getIcon = ()=> {
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
        <Button icon={getIcon()} type={props.typebutton} size={props.sizebutton} >{props.children}</Button>
        </>
    );
}