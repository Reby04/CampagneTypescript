import React from "react";
import {
  Row,
  Col,
  TimePicker,
  Button,
  Radio,
  Card,
  Checkbox,
  Select
} from "antd";
import moment from "moment";
import { Link, RouteComponentProps } from "@reach/router";

type StepTempo = {
  Condizione: string;
  Checkbox: string;
  Festivo: string;
  TuttiGG: string;
  Time1: number;
  Time2: number;
  Time3: number;
  Time4: number;
  Stagioni: string;
  Temp: string;
  TempAttuale: string;
  TempMax: string;
  Meteo: string;
};

interface Props extends RouteComponentProps {
  dataForm: StepTempo;
  //onNextPage(event: React.ChangeEvent<HTMLInputElement>): void;
  onNextPage: Function;
  setDataForm: Function;
}

export const StepTempo: React.FC<Props> = ({
  dataForm,
  setDataForm,
  onNextPage
}) => {
  const { Option } = Select;
  const option = [
    { label: "Condizione temporale", value: "Condizione temporale" },
    { label: "Sempre", value: "Sempre" }
  ];

  const week = [
    { label: "Lun", value: "Lun" },
    { label: "Mar", value: "Mar" },
    { label: "Mer", value: "Mer" },
    { label: "Gio", value: "Gio" },
    { label: "Ven", value: "Ven" },
    { label: "Sab", value: "Sab" },
    { label: "Dom", value: "dom" }
  ];

  const format = "HH:mm";

  const onChange = () => {
    localStorage.setItem("Step Tempo", JSON.stringify(dataForm));
    onNextPage();
    console.log(JSON.stringify(dataForm));
  };

  return (
    <div>
      <div>
        <Row>
          <Col span={12}>
            <Radio.Group
              name="Condizione"
              options={option}
              value={dataForm.Condizione}
              onChange={event => {
                console.log(event);
                setDataForm({
                  ...dataForm,
                  StepTempo: {
                    ...dataForm,
                    Condizione: event.target.value
                  }
                });
              }}
            ></Radio.Group>
          </Col>
        </Row>
      </div>
      <br></br>
      <div style={{ paddingLeft: 100 }}>
        {dataForm.Condizione === "Condizione temporale" && (
          <Card title="Condizione Temporale" style={{ width: 800 }}>
            <Checkbox.Group
              value={[dataForm.Checkbox]}
              name="Checkbox"
              options={week}
              defaultValue={["Lun"]}
              onChange={value => {
                setDataForm({
                  ...dataForm,
                  StepTempo: {
                    ...dataForm,
                    Checkbox: value
                  }
                });
              }}
            />
            <Checkbox
              value={dataForm.Festivo}
              name="Festivo"
              defaultChecked={false}
              onChange={value => {
                setDataForm({
                  ...dataForm,
                  StepTempo: {
                    ...dataForm,
                    Checkbox: value
                  }
                });
              }}
            >
              Festivo
            </Checkbox>
            <div>
              <Checkbox
                value={dataForm.TuttiGG}
                name="TuttiGG"
                style={{ paddingLeft: 444 }}
                defaultChecked={false}
                onChange={value => {
                  setDataForm({
                    ...dataForm,
                    StepTempo: {
                      ...dataForm,
                      Checkbox: value
                    }
                  });
                }}
              >
                Tutti i GG
              </Checkbox>
            </div>
            <div style={{ paddingLeft: 100 }}>
              <Row gutter={16}>
                <Col span={6}>
                  <p>Ora Inizio</p>
                  <TimePicker
                    value={moment(dataForm.Time1)}
                    format={format}
                    onChange={(time: moment.Moment) =>
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm,
                          Time1: time.valueOf()
                        }
                      })
                    }
                  />
                </Col>
                <Col span={6}>
                  <p>Ora Fine</p>
                  <TimePicker
                    value={moment(dataForm.Time2)}
                    format={format}
                    onChange={(time: moment.Moment) =>
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm,
                          Time2: time.valueOf()
                        }
                      })
                    }
                  />
                </Col>
                <p></p>
                <br></br>
                <Col span={6}>
                  <Button>Rimuovi</Button>
                </Col>
              </Row>
              <p></p>
              <Row gutter={16}>
                <Col span={6}>
                  <TimePicker
                    value={moment(dataForm.Time3)}
                    format={format}
                    onChange={(time: moment.Moment) =>
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm,
                          Time3: time.valueOf()
                        }
                      })
                    }
                  />
                </Col>
                <Col span={6}>
                  <TimePicker
                    value={moment(dataForm.Time4)}
                    format={format}
                    onChange={(time: moment.Moment) =>
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm,
                          Time4: time.valueOf()
                        }
                      })
                    }
                  />
                </Col>
                <Col span={6}>
                  <Button>Rimuovi</Button>
                </Col>
                <Col>
                  <Button>Aggiungi</Button>
                </Col>
              </Row>
            </div>
          </Card>
        )}
        <br></br>
        <p></p>
        <br></br>
        <Card title="Condizioni meteo" style={{ width: 800 }}>
          <div>
            <Row>
              <Col span={6}>
                <p>Stagione</p>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.Stagioni}
                  defaultValue="autunno"
                  style={{ width: 120 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepTempo: {
                        ...dataForm,
                        Stagioni: value
                      }
                    });
                  }}
                >
                  <Option value="autunno">Autunno</Option>
                  <Option value="inverno">Inverno</Option>
                  <Option value="estate">Estate</Option>
                  <Option value="Primavera">Primavera</Option>
                </Select>
              </Col>
              <Col span={6}>
                <p>Temperatura Max oderina</p>{" "}
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.Temp}
                  defaultValue="10"
                  style={{ width: 120 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepTempo: {
                        ...dataForm,
                        Temp: value
                      }
                    });
                  }}
                >
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                  <Option value="13">13</Option>
                </Select>
              </Col>
            </Row>
            <div>
              <Row>
                <Col span={6}>
                  <p>Temperatura attuale </p>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.TempAttuale}
                    defaultValue="10"
                    style={{ width: 120 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm,
                          TempAttuale: value
                        }
                      });
                    }}
                  >
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                    <Option value="13">13</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <p>Temperatura Max periodo</p>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.TempMax}
                    defaultValue="10"
                    style={{ width: 120 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm,
                          TempMax: value
                        }
                      });
                    }}
                  >
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                    <Option value="13">13</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col span={6}>
                  <p>Meteo </p>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.Meteo}
                    defaultValue="Nuvoloso"
                    style={{ width: 120 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepTempo: {
                          ...dataForm,
                          Meteo: value
                        }
                      });
                    }}
                  >
                    <Option value="Nuvoloso">Nuvoloso</Option>
                    <Option value="Soleggiato">Soleggiato</Option>
                    <Option value="Neve">Neve</Option>
                    <Option value="Pioggia">Pioggia</Option>
                  </Select>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </div>
      <br></br>
      <p></p>
      <div style={{ paddingLeft: 100 }}>
        <Row>
          <Col span={6}>
            <Link to="/NuovaCampagna">
              <Button>Indietro</Button>
            </Link>
          </Col>
          <Col span={6}></Col>
          <Col span={6}></Col>

          <Col span={6}>
            <Link to="/StepLocation">
              <Button onClick={onChange}>Avanti</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};
