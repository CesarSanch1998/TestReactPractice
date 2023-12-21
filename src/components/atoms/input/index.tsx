import { Input } from "antd";
import style from './index.module.css';

interface Props {
placeholder?:string,
widthinput:'form-medium'|'form-large'|'form-small'|'form-auto',
}
export function ModInput(props: Props): JSX.Element {
    return (
        <>
        <Input className={`${style[props.widthinput]}`}  placeholder={props.placeholder} />
        </>
    );
}