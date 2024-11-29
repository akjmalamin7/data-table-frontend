import React from "react";
import { Col, Form } from "react-bootstrap";
interface Props {
  xsCol?: string;
  mdCol?: string;
  lgCol?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  name?: string;
  selectedValue?: string;
  children?: React.ReactNode;
  onSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const ReuseableSelect = ({
  xsCol,
  mdCol,
  lgCol,
  size = "lg",
  name,
  selectedValue,
  className,
  children,
  onSelect,
}: Props) => {
  return (
    <Col xs={xsCol} md={mdCol} lg={lgCol} className={className}>
      <Form.Select
        name={name}
        onChange={onSelect}
        value={selectedValue}
        className={className}
        size={size}
      >
        {children}
      </Form.Select>
    </Col>
  );
};

export default ReuseableSelect;
