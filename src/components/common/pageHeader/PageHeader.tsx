import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./pageHeader.module.css";
interface Props {
  pageTitle?: string;
  buttonText1?: string;
  buttonText2?: string;
  onButton1?: () => void;
  onButton2?: () => void;
}
const PageHeader = ({
  pageTitle,
  buttonText1,
  buttonText2,
  onButton1,
  onButton2,
}: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.wrapper}>
        <Row className="mb-4 ">
          <Col xl="6">
            <div className={style.back}>
              <Button
                className={style.back_button}
                onClick={() => navigate(-1)}
              >
                <h3>{pageTitle}</h3>
              </Button>
            </div>
          </Col>
          <Col xl="6">
            <div className={style.buttons}>
              {buttonText1 && (
                <Button variant="dark" size="sm" onClick={onButton1}>
                  {buttonText1}
                </Button>
              )}

              {buttonText2 && (
                <Button variant="dark" size="sm" onClick={onButton2}>
                  {buttonText2}
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PageHeader;
