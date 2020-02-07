import * as React from "react";
import { Row, Col, Input, DatePicker, Button } from "antd";
import { RouteComponentProps } from "@reach/router";
import { Select } from "antd";
import { Link } from "@reach/router";
import moment from "moment";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

type nuovaCampagna = {
  nomeCampagna: string;
  dataInizio: number;
  dataFine: number;
  profiloCampagna: string;
  note: string;
  Campagna: string;
};

interface Props extends RouteComponentProps {
  dataForm: nuovaCampagna;
  //onNextPage(event: React.ChangeEvent<HTMLInputElement>): void;
  onNextPage: Function;
  setDataForm: Function;
}

export const NuovaCampagna: React.FC<Props> = ({
  dataForm,
  setDataForm,
  onNextPage
}) => {
  const { Option } = Select;
  const { TextArea } = Input;

  const onChangeInput = (event: any) => {
    console.log(event.target.name);
    setDataForm({
      ...dataForm,
      nuovaCampagna: {
        ...dataForm,
        [event.target.name]: event.target.value
      }
    });
  };

  const onChange = () => {
    localStorage.setItem("Nuova Campagna", JSON.stringify(dataForm));
    onNextPage();
    console.log(JSON.stringify(dataForm));
  };

  return (
    <div style={{ paddingLeft: 80, paddingTop: 50, paddingRight: 80 }}>
      <br></br>
      <Row>
        <Col span={6}>Nome Campagna</Col>
        <Col span={6}>
          <Input
            name="nomeCampagna"
            placeholder=""
            value={dataForm.nomeCampagna}
            onChange={onChangeInput}
          />
        </Col>
      </Row>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Data Inizio Campagna</Col>
          <Col span={6}>
            <DatePicker
              value={moment(dataForm.dataInizio)}
              name="dataInizio"
              format={dateFormatList}
              onChange={(date: moment.Moment | null, dateString) => {
                setDataForm({
                  ...dataForm,
                  nuovaCampagna: {
                    ...dataForm,
                    dataInizio: date?.valueOf()
                  }
                });
              }}
            />
          </Col>
        </Row>
      </div>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Data Fine Campagna</Col>
          <Col span={6}>
            <DatePicker
              value={moment(dataForm.dataFine)}
              name="dataFine"
              format={dateFormatList}
              onChange={(date: moment.Moment | null, dateString) => {
                setDataForm({
                  ...dataForm,
                  nuovaCampagna: {
                    ...dataForm,
                    dataFine: date?.valueOf()
                  }
                });
              }}
            />
          </Col>
        </Row>
      </div>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Profilo Campagna</Col>
          <Col span={6}>
            <Select
              value={dataForm.profiloCampagna}
              defaultValue="Global"
              style={{ width: 160 }}
              onChange={(value: any) => {
                setDataForm({
                  ...dataForm,
                  nuovaCampagna: {
                    ...dataForm,
                    profiloCampagna: value
                  }
                });
              }}
            >
              <Option value="Global">Global Campain</Option>
              <Option value="Local">Local Campain</Option>
            </Select>
          </Col>
        </Row>
      </div>
      <br></br>
      <div>
        <Row>
          <Col span={6}>Note</Col>
          <Col span={6}>
            <TextArea
              value={dataForm.note}
              name="note"
              onChange={onChangeInput}
              rows={2}
              style={{ paddingRight: 100 }}
            />
          </Col>
        </Row>
      </div>
      <div>
        <br></br>
        <p></p>

        <div>
          <Row>
            <Col span={6}></Col>
            <Col span={6}></Col>
            <Col span={6}></Col>

            <Col span={6}>
              <Link to="/StepTempo">
                <Button onClick={onChange}>Avanti</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
