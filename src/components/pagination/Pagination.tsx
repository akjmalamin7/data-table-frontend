import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "./pagination.css";
interface PaginationProps {
    perPage: number;
    totalItems: number;
    pageNo: number;
    onPageChange: (selectedItem: { selected: number }) => void;
    onPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    perPage,
    totalItems,
    pageNo,
    onPageChange,
    onPerPageChange,
}) => {
    return (
        <Row>
            <Col xs="2">
                <Form.Select
                    aria-label="Items per page"
                    value={perPage}
                    onChange={onPerPageChange}
                >
                    <option value="3">3 Per page</option>
                    <option value="5">5 Per page</option>
                    <option value="10">10 Per page</option>
                    <option value="15">15 Per page</option>
                    <option value="20">20 Per page</option>
                </Form.Select>
            </Col>
            <Col sx="10">
                <ReactPaginate
                    activeClassName="active"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousLinkClassName="page-link"
                    previousClassName="page-item"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName="pagination"
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={onPageChange}
                    pageCount={Math.ceil(totalItems / perPage)}
                    previousLabel="Prev"
                />
            </Col>
        </Row>
    );
};

export default Pagination;
