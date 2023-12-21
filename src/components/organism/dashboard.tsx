import { Col, Row } from "antd";
import { ModLayout } from "../molecules/layout";
import { ModButton } from "../atoms/button";
import { ModTable } from "../molecules/table";

interface Props {

}
export function DashBoard(props: Props): JSX.Element {

  return (

    <>
      <ModLayout>
        <Row style={{border:'red 1px solid'}}>
          <Col span={10}></Col>
          <Col style={{border:'blue 1px solid'}} span={1.5}>
            <ModButton typebutton={"primary"} sizebutton={"middle"} colorbutton={"#52c41a"} widthbutton={"width-small"} iconbutton='3'></ModButton>
          </Col>
          <Col style={{border:'blue 1px solid'}} >
            <ModButton typebutton={"primary"} sizebutton={"middle"} colorbutton={"#fa8c16"} widthbutton={"width-small"} iconbutton='2'></ModButton>
          </Col>  
          <Col style={{border:'blue 1px solid'}} span={1.5}>
            <ModButton typebutton={"primary"} sizebutton={"middle"} colorbutton={"#2f54eb"} widthbutton={"width-small"} iconbutton='1'></ModButton>
          </Col>
          <Col style={{border:'blue 1px solid'}} span={1.5}>
            <ModButton typebutton={"primary"} sizebutton={"middle"} colorbutton={"#52c41a"} widthbutton={"width-small"} iconbutton='4'></ModButton>
          </Col>
          <Col style={{border:'blue 1px solid'}} span={1.5}>
            <ModButton typebutton={"primary"} sizebutton={"middle"} colorbutton={"#fa8c16"} widthbutton={"width-small"} iconbutton='1'></ModButton>
          </Col>

        </Row>
        <Row style={{border:'red 1px solid'}}>
          <Col style={{border:'blue 1px solid'}} span={24}>
            <ModTable></ModTable>
          </Col>
          
        </Row>
       
      </ModLayout>
    </>
  );
}