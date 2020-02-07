import React from "react";
import { Row, Col, DatePicker, Button, Card, Select, Radio } from "antd";
import moment from "moment";
import { Link, RouteComponentProps } from "@reach/router";

type StepUtente = {
  sesso: string;
  data: number;
  fascia: string;
  stato: string;
  indirizzo: string;
  Nazione: string;
  Città: string;
  Livello: string;
  Attività: string;
  Punti: string;
  PuntiMancanti: string;
  Attenzione: string;
  DataPassaggio: number;
  DataAttivazione: number;
  Tipologia: string;
  Classe: string;
  Sottoclasse: string;
  Prodotto: string;
  LivelloInteresse: string;
  FrequenzaAcquisto: string;
  FrequenzaOnline: string;
  FrequenzaNegozio: string;
  UltimoAcquisto: string;
  AccessoNegozio: string;
  AccessoOnline: string;
  FasciaImporto: string;
  Negozio: string;
  NazioneNegozio: string;
  TipologiaPOS: string;
  POS: string;
  CondizioneTemp: string;
  Tipo: string;
};
interface Props extends RouteComponentProps {
  dataForm: StepUtente;
  //onNextPage(event: React.ChangeEvent<HTMLInputElement>): void;
  onNextPage: Function;
  setDataForm: Function;
}

export const StepUtente: React.FC<Props> = ({
  onNextPage,
  dataForm,
  setDataForm
}) => {
  const dateFormat = "DD/MM/YYYY";
  const { Option } = Select;
  const option = [
    { label: "Negozio Favorito", value: "negozioFavorito" },
    { label: "Negozio Frequentato", value: "negozioFrequentato" }
  ];

  const onChange = () => {
    localStorage.setItem("Step Utente", JSON.stringify(dataForm));
    onNextPage();
    console.log(JSON.stringify(dataForm));
  };

  return (
    <div>
      <div style={{ paddingLeft: 100 }}>
        <Card title="Dettaglio Utente" style={{ width: 1600 }}>
          <Row>
            <Col span={6}>Sessio</Col>
            <Col span={6}>Compleanno</Col>
            <Col span={6}>Fascia d'età</Col>
            <Col span={6}>Stato civile</Col>
          </Row>
          <div>
            <br></br>
            <Row>
              <Col span={6}>
                <Select
                  value={dataForm.sesso}
                  defaultValue="M"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        sesso: value
                      }
                    });
                  }}
                >
                  <Option value="M">M</Option>
                  <Option value="F">F</Option>
                </Select>
              </Col>
              <Col span={6}>
                <DatePicker
                  value={moment(dataForm.data)}
                  name="data"
                  format={dateFormat}
                  onChange={(date: moment.Moment | null, dateString) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        data: date?.valueOf()
                      }
                    });
                  }}
                />
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.fascia}
                  defaultValue="25-35"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        fascia: value
                      }
                    });
                  }}
                >
                  <Option value="25-35">25-35</Option>
                  <Option value="36-46">36-46</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.stato}
                  defaultValue="Nubile"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        stato: value
                      }
                    });
                  }}
                >
                  <Option value="Nubile">Nubile</Option>
                  <Option value="Celice">Celibe</Option>
                  <Option value="Sposato">Sposato</Option>
                  <Option value="Vedovo">Vedovo</Option>
                </Select>
              </Col>
            </Row>
          </div>
          <br></br>
          <p></p>
          <div>
            <Row>
              <Col span={6}>Tipologia Indirizzo</Col>
              <Col span={6}>Nazione</Col>
              <Col span={6}>Città</Col>
            </Row>
          </div>
          <br></br>
          <div>
            <Row>
              <Col span={6}>
                <Select
                  value={dataForm.indirizzo}
                  defaultValue="Domicilio"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        indirizzo: value
                      }
                    });
                  }}
                >
                  <Option value="Domicilio">Domicilio</Option>
                  <Option value="Residenza">Residenza</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.indirizzo}
                  defaultValue="Italia"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        Domicilio: value
                      }
                    });
                  }}
                >
                  <Option value="Italia">Italia</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select
                  value={dataForm.Città}
                  defaultValue="Firenze"
                  style={{ width: 160 }}
                  onChange={(value: any) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        Residenza: value
                      }
                    });
                  }}
                >
                  <Option value="Firenze">Firenze</Option>
                  <Option value="Altro">Altro</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </Card>
        <br></br> <p></p>
        <div>
          <Card title="Fidelity" style={{ width: 1600 }}>
            <Row>
              <Col span={6}>Livello di Fidelity</Col>
              <Col span={6}>Attività Fidelity recente</Col>
            </Row>
            <div>
              <br></br>
              <Row>
                <Col span={6}>
                  <Select
                    value={dataForm.Livello}
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Livello: value
                        }
                      });
                    }}
                  >
                    <Option value="Alta">Alta</Option>
                    <Option value="Bassa">Bassa</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.Attività}
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Attività: value
                        }
                      });
                    }}
                  >
                    <Option value="Alta">Alta</Option>
                    <Option value="Bassa">Bassa</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <br></br>
            <p></p>
            <div>
              <Row>
                <Col span={6}>Fidelity Card Points</Col>
                <Col span={6}>Punti mancanti al livello successivo</Col>
                <Col span={6}>Attenzione</Col>
              </Row>
            </div>
            <br></br>
            <div>
              <Row>
                <Col span={6}>
                  <Select
                    value={dataForm.Punti}
                    defaultValue="Meno di 10"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Punti: value
                        }
                      });
                    }}
                  >
                    <Option value="Meno di">Meno di 10</Option>
                    <Option value="Più di">Più di 10</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.PuntiMancanti}
                    defaultValue="Meno di 10"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          PuntiMancanti: value
                        }
                      });
                    }}
                  >
                    <Option value="Meno di">Meno di 10</Option>
                    <Option value="Più di">Più di 10</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.Attenzione}
                    defaultValue="Alta"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Attenzione: value
                        }
                      });
                    }}
                  >
                    <Option value="Alta">Alta</Option>
                    <Option value="Bassa">Bassa</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <br></br>
            <p></p>
            <div>
              <Row>
                <Col span={6}>Data attivazione Fidelity</Col>
                <Col span={6}>Data ultimo passaggio di livello</Col>
              </Row>
            </div>
            <br></br>
            <Row>
              <Col span={6}>
                <DatePicker
                  value={moment(dataForm.DataAttivazione)}
                  name="DataAttivazione"
                  format={dateFormat}
                  onChange={(date: moment.Moment | null, dateString) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        DataAttivazione: date?.valueOf()
                      }
                    });
                  }}
                />
              </Col>
              <Col span={6}>
                <DatePicker
                  value={moment(dataForm.DataPassaggio)}
                  name="DataPassaggio"
                  format={dateFormat}
                  onChange={(date: moment.Moment | null, dateString) => {
                    setDataForm({
                      ...dataForm,
                      StepUtente: {
                        ...StepUtente,
                        DataPassaggio: date?.valueOf()
                      }
                    });
                  }}
                />
              </Col>
            </Row>
          </Card>
        </div>
        <br></br>
        <p></p>
        <div>
          <Card title="Touch Point Prodotti" style={{ width: 1600 }}>
            <Row>
              <Col span={4}>Tipologia Merceologica</Col>
              <Col span={4}>Classe Merceologica</Col>
              <Col span={4}>Sottoclasse Merceologica</Col>
              <Col span={4}>Prodotto</Col>
              <Col span={4}>Livello di Interesse</Col>
            </Row>
            <br></br>
            <div>
              <Row>
                <Col span={4}>
                  <Select
                    value={dataForm.Tipologia}
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Tipologia: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={dataForm.Classe}
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Classe: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={dataForm.Sottoclasse}
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Sottoclasse: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={dataForm.Prodotto}
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          Prodotto: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Select
                    value={dataForm.LivelloInteresse}
                    defaultValue="l1"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          LivelloInteresse: value
                        }
                      });
                    }}
                  >
                    <Option value="l1">l1</Option>
                    <Option value="l2">l2</Option>
                  </Select>
                </Col>
                <Col>
                  <Button>Rimuovi</Button> <Button>Aggiungi</Button>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
        <br></br>
        <p></p>
        <div>
          <Card title="Analisi e Frequenza" style={{ width: 1600 }}>
            <Row>
              <Col span={6}>Frequenza media acquisto cliente</Col>
              <Col span={6}>Frequenza media accesso online</Col>
              <Col span={6}>Frequenza media accesso in negozio</Col>
            </Row>
            <br></br>

            <div>
              <Row>
                <Col span={6}>
                  <Select
                    value={dataForm.FrequenzaAcquisto}
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          FrequenzaAcquisto: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.FrequenzaOnline}
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          FrequenzaOnline: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Select
                    value={dataForm.FrequenzaNegozio}
                    defaultValue="ComboBox"
                    style={{ width: 160 }}
                    onChange={(value: any) => {
                      setDataForm({
                        ...dataForm,
                        StepUtente: {
                          ...StepUtente,
                          FrequenzaNegozio: value
                        }
                      });
                    }}
                  >
                    <Option value="ComboBox">ComboBox</Option>
                    <Option value="Altro">Altro</Option>
                  </Select>
                </Col>
              </Row>
            </div>
            <br></br>
            <p></p>
            <div>
              <Row>
                <Col span={6}>Giorni da ultimo acquisto</Col>
                <Col span={6}>Giorno da ultimo accesso in negozio</Col>
                <Col span={6}>Giorni da ultimo accesso online</Col>
              </Row>
              <br></br>

              <div>
                <Row>
                  <Col span={6}>
                    <Select
                      value={dataForm.UltimoAcquisto}
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={(value: any) => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            UltimoAcquisto: value
                          }
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      value={dataForm.AccessoNegozio}
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={(value: any) => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            AccessoNegozio: value
                          }
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      value={dataForm.AccessoOnline}
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={(value: any) => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            AccessoOnline: value
                          }
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </div>
            <div>
              <br></br>
              <p></p>
              <Row>
                <Col span={6}>Fascia importo acquisto medio</Col>
              </Row>
              <br></br>

              <div>
                <Row>
                  <Col span={6}>
                    <Select
                      value={dataForm.FasciaImporto}
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={(value: any) => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            FasciaImporto: value
                          }
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
          <div>
            <Card title="Negozio Favorito" style={{ width: 1600 }}>
              <div>
                <Row>
                  <Col span={6}>
                    <Radio.Group
                      value={dataForm.Negozio}
                      name="Negozio"
                      defaultValue="Italia"
                      options={option}
                      onChange={(value: any) => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            Negozio: value.target.value
                          }
                        });
                      }}
                    ></Radio.Group>
                  </Col>
                </Row>
                <br></br>
                <p></p>
                <div>
                  <Row>
                    <Col span={6}>Nazione</Col>
                    <Col span={6}>Tipologia POS</Col>
                    <Col span={6}>POS</Col>
                  </Row>
                </div>
                <br></br>
                <div>
                  <Row>
                    <Col span={6}>
                      <Select
                        value={dataForm.NazioneNegozio}
                        defaultValue="Italia"
                        style={{ width: 160 }}
                        onChange={(value: any) => {
                          setDataForm({
                            ...dataForm,
                            StepUtente: {
                              ...StepUtente,
                              Nazione: value
                            }
                          });
                        }}
                      >
                        <Option value="Italia">Italia</Option>
                        <Option value="Altro">Altro</Option>
                      </Select>
                    </Col>
                    <Col span={6}>
                      <Select
                        value={dataForm.TipologiaPOS}
                        defaultValue="Boutique"
                        style={{ width: 160 }}
                        onChange={(value: any) => {
                          setDataForm({
                            ...dataForm,
                            StepUtente: {
                              ...StepUtente,
                              TipologiaPOS: value
                            }
                          });
                        }}
                      >
                        <Option value="Boutique">Boutique</Option>
                        <Option value="Altro">Altro</Option>
                      </Select>
                    </Col>
                    <Col span={6}>
                      <Select
                        value={dataForm.POS}
                        defaultValue="sanGiovanni"
                        style={{ width: 160 }}
                        onChange={(value: any) => {
                          setDataForm({
                            ...dataForm,
                            StepUtente: {
                              ...StepUtente,
                              POS: value
                            }
                          });
                        }}
                      >
                        <Option value="sanGiovanni">
                          Piazza San Giovanni, 17
                        </Option>
                        <Option value="Altro"> Altro</Option>
                      </Select>
                    </Col>
                  </Row>
                </div>
                <br></br>
                <p></p>
                <Row>
                  <Col span={6}>Condizione Temporale</Col>
                  <Col span={6}>Tipologia POS</Col>
                </Row>
              </div>
              <br></br>
              <div>
                <Row>
                  <Col span={6}>
                    <Select
                      value={dataForm.CondizioneTemp}
                      defaultValue="ComboBox"
                      style={{ width: 160 }}
                      onChange={(value: any) => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            CondizioneTemp: value
                          }
                        });
                      }}
                    >
                      <Option value="ComboBox">ComboBox</Option>
                      <Option value="Altro">Altro</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      value={dataForm.Tipo}
                      defaultValue="Camerino"
                      style={{ width: 160 }}
                      onChange={(value: any) => {
                        setDataForm({
                          ...dataForm,
                          StepUtente: {
                            ...StepUtente,
                            Tipo: value
                          }
                        });
                      }}
                    >
                      <Option value="Camerino">Camerino</Option>
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
                <Link to="/StepLocation">
                  <Button>Indietro</Button>
                </Link>
              </Col>
              <Col span={6}></Col>
              <Col span={6}></Col>

              <Col span={6}>
                <Link to="/StepActions">
                  <Button onClick={onChange}>Avanti</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
