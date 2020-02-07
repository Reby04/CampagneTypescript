import React from "react";
import { Row, Col, Button, Card, Select } from "antd";
import { Link, RouteComponentProps } from "@reach/router";

// const defaultValue = {
//   Tipo: "VideoWall",
//   Zona: "Camerino",
//   Scelta: "VideoBorse"
// };

type StepActions = {
  Tipo: string;
  Zona: string;
  Scelta: string;
};

interface Props extends RouteComponentProps {
  dataForm: StepActions;
  //onNextPage(event: React.ChangeEvent<HTMLInputElement>): void;
  setDataForm: Function;
}

export const StepActions: React.FC<Props> = ({ dataForm, setDataForm }) => {
  const { Option } = Select;

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  const onChange = () => {
    localStorage.setItem("Summary", JSON.stringify(dataForm));
    console.log(JSON.stringify(dataForm));
  };

  return (
    <div>
      <div style={{ paddingLeft: 100 }}>
        <Card title=" Actions" style={{ width: 1600 }}>
          <div>
            <Row>
              <Col span={6}>Tipologia d'azione</Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={4}>
                <Select
                  value={dataForm.Tipo}
                  defaultValue="Pilota"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepActions: {
                        ...StepActions,
                        Tipo: value
                      }
                    });
                  }}
                >
                  <Option value="Pilota">Pilota VideoWall</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
              <Col span={4}>
                <Button>+</Button>
                <Button>-</Button>
              </Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>Zona VideoWall</Col>
              <Col span={6}>Scelta video</Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>
                <Select
                  value={dataForm.Zona}
                  defaultValue="Camerino"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepActions: {
                        ...StepActions,
                        Zona: value
                      }
                    });
                  }}
                >
                  <Option value="Camerino">Camerino</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.Scelta}
                  defaultValue="Borse"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepActions: {
                        ...StepActions,
                        Scelta: value
                      }
                    });
                  }}
                >
                  <Option value="Borse">Video Borse</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>Prodotto Suggerito</Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>
                <Select
                  defaultValue="Suggest"
                  style={{ width: 160 }}
                  onChange={handleChange}
                  disabled
                >
                  <Option value="Suggest">Invia Suggest</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
      <br></br>
      <p></p>

      <div style={{ paddingLeft: 100 }}>
        <Row>
          <Col span={6}>
            <Link to="/StepUtente">
              <Button>Indietro</Button>
            </Link>
          </Col>
          <Col span={6}></Col>
          <Col span={6}></Col>

          <Col span={6}>
            <Link to="/">
              <Button onClick={onChange}>Salva</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};
