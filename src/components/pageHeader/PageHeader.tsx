import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./pageHeader.module.css";

interface Props {
    pageTitle?: string;
    children?: React.ReactNode;
    buttonText1?: string;
    buttonSize1?: string;
    buttoVariant1?: string;
    onButton1?: () => void
    buttonText2?: string;
    buttonSize2?: string;
    buttoVariant2?: string;
    onButton2?: () => void
}
const PageHeader = ({ pageTitle, children, buttoVariant1, buttoVariant2, buttonSize1, buttonSize2, buttonText1, buttonText2, onButton1, onButton2 }: Props) => {
    const navigate = useNavigate()
    return (
        <>
            <div className={style.wrapper}>
                <Row className="mb-4 ">
                    <Col xl="6">
                        <div className={style.back}>
                            <Button className={style.back_button} onClick={() => navigate(-1)}>
                                <h3>{pageTitle}</h3>
                            </Button>
                        </div>
                    </Col>
                    <Col xl="6">
                        <div className={style.buttons}>
                            {
                                buttonText1 && <Button variant="dark" size="md" onClick={onButton1}>{buttonText1}</Button>
                            }

                            {
                                buttonText2 && <Button variant="dark" size="md" onClick={onButton2}>{buttonText2}</Button>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default PageHeader