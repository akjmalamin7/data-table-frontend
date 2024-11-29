import { ChangeEvent } from "react";
import { Col, Form } from "react-bootstrap";
interface Props {
  xsCol?: string;
  mdCol?: string;
  lgCol?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "text" | "number" | "email" | "password" | "file" | "date";
  name?: string;
  value?: string;
  placeHolder?: string;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
}
const ReuseableInput = ({
  xsCol,
  mdCol,
  lgCol,
  size = "lg",
  type = "text",
  name,
  value,
  placeHolder,
  className = "mb-3",
  onInput,
}: Props) => {
  return (
    <Col xs={xsCol} md={mdCol} lg={lgCol} className={className}>
      <Form.Control
        size={size}
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onInput}
      />
    </Col>
  );
};

export default ReuseableInput;
