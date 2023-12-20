import { Input } from "antd";

interface Props {
placeholder?:string,
widthinput:'form-medium'|'form-large'|'form-small'|'form-auto',
}
export function ModInput(props: Props): JSX.Element {
    return (
        <>
        <Input className={props.widthinput}  placeholder={props.placeholder} />
        </>
    );
}