import React from "react";
import { Row, Col, Select, Radio, Card, Button } from "antd";
import { Link, RouteComponentProps } from "@reach/router";

type StepLocation = {
  Country: string;
  TipologiaPOS: string;
  POS: string;
  DistanzaEntrata: string;
  DistanzaUscita: string;
  Distanza: string;
  Merce: string;
  Zona: string;
  Classe: string;
  Sottoclasse: string;
};

interface Props extends RouteComponentProps {
  dataForm: StepLocation;
  //onNextPage(event: React.ChangeEvent<HTMLInputElement>): void;
  onNextPage: Function;
  setDataForm: Function;
}

export const StepLocation: React.FC<Props> = ({
  onNextPage,
  dataForm,
  setDataForm
}) => {
  const { Option } = Select;

  const option = [
    { label: "Interno del negizio", value: "internoNegozio" },
    { label: "In Prossimit", value: "inProssimit" },
    { label: "200 m", value: "200m" },
    { label: "500 m", value: "500m" },
    { label: "1 Km", value: "1km" },
    { label: "5 Km", value: "5km" },
    { label: "30 Km", value: "30km" }
  ];

  const onChange = () => {
    localStorage.setItem("Step Location", JSON.stringify(dataForm));
    onNextPage();
    console.log(JSON.stringify(dataForm));
  };

  return (
    <div>
      <div style={{ paddingLeft: 100 }}>
        <Row>
          <Col span={4} style={{ fontWeight: "bold" }}>
            Country
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Select
              value={dataForm.Country}
              defaultValue="it-IT"
              style={{ width: 160 }}
              onChange={(value: any) => {
                setDataForm({
                  ...dataForm,
                  StepLocation: {
                    ...dataForm,
                    Country: value
                  }
                });
              }}
            >
              <Option value="it-IT">it-IT</Option>
              <Option value="us-US"> us-US</Option>
            </Select>
          </Col>
        </Row>
        <br></br>
        <p></p>
        <Row>
          <Col span={4}>Tipologia POS</Col>
          <Col span={4}>POS</Col>
        </Row>
        <Row>
          <Col span={4}>
            <Select
              value={dataForm.TipologiaPOS}
              defaultValue="Boutique"
              style={{ width: 160 }}
              onChange={(value: any) => {
                setDataForm({
                  ...dataForm,
                  StepLocation: {
                    ...dataForm,
                    TipologiaPOS: value
                  }
                });
              }}
            >
              <Option value="Boutique">Boutique</Option>
              <Option value="Altro">Altro</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select
              value={dataForm.POS}
              defaultValue="sanGiovanni"
              style={{ width: 160 }}
              onChange={(value: any) => {
                setDataForm({
                  ...dataForm,
                  StepLocation: {
                    ...dataForm,
                    POS: value
                  }
                });
              }}
            >
              <Option value="sanGiovanni">Piazza San Giovanni, 17</Option>
              <Option value="Altro">Altro</Option>
            </Select>
          </Col>
        </Row>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <div>
        <Row>
          <Col span={12}>
            <h3>Distanza dal negozio</h3>
            <br></br>
            <Radio.Group
              value={dataForm.Distanza}
              name="Distanza"
              options={option}
              onChange={event => {
                setDataForm({
                  ...dataForm,
                  StepLocation: {
                    ...dataForm,
                    Distanza: event.target.value
                  }
                });
              }}
            ></Radio.Group>
          </Col>
        </Row>
      </div>
      <br></br>
      <br></br>

      <div style={{ paddingLeft: 100 }}>
        <br></br>
        <Card title="Prodotti disponibili nell'area" style={{ width: 800 }}>
          <Row>
            <Col span={6}>Tipo Zona</Col>
            <Col span={6}>Distanza logica da entrata</Col>
            <Col span={6}>Distanza logica da uscita</Col>
          </Row>
          <div>
            <br></br>
            <Row>
              <Col span={6}>
                <Select
                  value={dataForm.Zona}
                  defaultValue="Camerino"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepLocation: {
                        ...dataForm,
                        Zona: value
                      }
                    });
                  }}
                >
                  <Option value="Camerino">Camerino</Option>
                  <Option value="Urbino">Urbino</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.DistanzaEntrata}
                  defaultValue="a30m"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepLocation: {
                        ...dataForm,
                        DistanzaEntrata: value
                      }
                    });
                  }}
                >
                  <Option value="a30m">a 30 metri da ..</Option>
                  <Option value="a50m">a 50 metri da ..</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.DistanzaUscita}
                  defaultValue="a30m"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepLocation: {
                        ...dataForm,
                        DistanzaUscita: value
                      }
                    });
                  }}
                >
                  <Option value="a30m">a 30 metri da ..</Option>
                  <Option value="a50m">a 50 metri da ..</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </Card>
        <p></p>
        <div>
          <Card title="Zona" style={{ width: 800 }}>
            <Row>
              <Col span={6}>Tipologia merceologica</Col>
              <Col span={6}>Classe merceologica</Col>
              <Col span={6}>Sottoclasse merceologica</Col>
            </Row>
            <div>
              <br></br>
              <Row>
                <Col span={6}>
                  <Select
                    value={dataForm.Merce}
                    defaultValue="Abbigliamento"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepLocation: {
                          ...dataForm,
                          Merce: value
                        }
                      });
                    }}
                  >
                    <Option value="Abbigliamento">Abbigliamento</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.Classe}
                    defaultValue="Abito"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepLocation: {
                          ...dataForm,
                          Classe: value
                        }
                      });
                    }}
                  >
                    <Option value="Abito">Abito</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.Sottoclasse}
                    defaultValue="Mini"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepLocation: {
                          ...dataForm,
                          Sottoclasse: value
                        }
                      });
                    }}
                  >
                    <Option value="Mini">Mini</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
        <br></br>
        <p></p>

        <div>
          <Row>
            <Col span={6}>
              <Link to="/StepTempo">
                <Button>Indietro</Button>
              </Link>
            </Col>
            <Col span={6}></Col>
            <Col span={6}></Col>

            <Col span={6}>
              <Link to="/StepUtente">
                <Button onClick={onChange}>Avanti</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
