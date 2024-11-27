import PageHeader from "@/components/pageHeader";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import DataTableLoader from "../../components/dataTableloader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { Pagination } from "../../components/pagination";
import { Search } from "../../components/search";
import TableRow from "../../components/tableRow";
import { useProductListQuery } from "../../redux/features/products/productAPIS";
import { setAllProducts, setTotal } from "../../redux/features/products/productSlice";
import { AppDispatch } from "../../redux/store/store";


const ProductsPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const getPerPageFromUrl = queryParams.get("perPage") || "3";
    const getSearchKeyFromUrl = queryParams.get("searchKey") || "0";

    const [perPage, setPerPage] = useState(getPerPageFromUrl);
    const [pageNoe, setPageNo] = useState(1);
    const [searchKey, setSearchKey] = useState(getSearchKeyFromUrl);

    const { data, error, isLoading } = useProductListQuery({
        pageNo: pageNoe,
        perPage: perPage,
        searchKey: searchKey,
    });

    useEffect(() => {
        if (data) {
            dispatch(setTotal(data?.total));
            dispatch(setAllProducts(data?.data));
        }
    }, [data, dispatch]);
    const handlePageClick = (selectedItem: { selected: number }) => {
        const newPage = selectedItem.selected + 1;
        setPageNo(newPage);
        navigate(`?pageNo=${newPage}&perPage=${perPage}&searchKey=${searchKey}`);
    };

    const handlePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPerPage = e.target.value;
        setPerPage(newPerPage);
        navigate(`?pageNo=${pageNoe}&perPage=${newPerPage}&searchKey=${searchKey}`);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim() || "0";
        setSearchKey(value);
        navigate(`?pageNo=${pageNoe}&perPage=${perPage}&searchKey=${value}`);
    };

    let content = null;
    if (isLoading) content = <tr><td colSpan={14}> <DataTableLoader /></td></tr>
    if (!isLoading && error) content = <tr>
        <td colSpan={14} >
            <ErrorMessage message={(error as any)?.message || "Unknown error"} />
        </td>
    </tr>
    if (!isLoading && !error && data?.data.length === 0) content = <tr><td colSpan={14}></td></tr>
    if (!isLoading && !error && data?.data?.length > 0) content = <><TableRow data={data?.data} /></>

    return (
        <Container style={{ maxWidth: "1320px", margin: "0 auto", marginTop: '50px' }} as={"div"}>
            <Row>
                <PageHeader pageTitle="Product List" buttonText1="Add Product" onButton1={() => navigate("/products/add")} />
                <Col xl="12">
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col xs="5" md="7" lg="9">
                                    <h4 className="mt-2">Products</h4>
                                </Col>
                                <Col xs="7" md="5" lg="3">
                                    <Search onSearch={handleSearch} />
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Special Price</th>
                                        <th>Category</th>
                                        <th>Sub Category</th>
                                        <th>Remark</th>
                                        <th>Brand</th>
                                        <th>Shop</th>
                                        <th>Shop Name</th>
                                        <th>Star</th>
                                        <th>Product Code</th>
                                        <th>Stock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {content}
                                </tbody>
                            </Table>
                        </Card.Body>
                        <Card.Footer>
                            <Pagination
                                perPage={Number(perPage)}
                                totalItems={data?.total || 0}
                                onPageChange={handlePageClick}
                                onPerPageChange={handlePerPage}
                            />
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductsPage;
