import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

interface SearchProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <InputGroup className="mb-0">
      <FormControl placeholder="Search..." onChange={onSearch} />
    </InputGroup>
  );
};

export default Search;
