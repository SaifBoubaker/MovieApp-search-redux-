import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchMovie } from "../Store/movieSlice";

function Search(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
    dispatch(searchMovie(title));
  };

  //   const searchHandler = (e) => {
  //     e.preventDefault();
  //     dispatch(searchMovie(title));
  //   };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Control
            className="enter"
            name="title"
            type="Text"
            placeholder="Enter Your Title"
            onChange={handleChange}
          />
        </Form.Group>
        {/* <button onClick={searchHandler}>Search</button> */}
      </Form>
    </div>
  );
}

export default Search;
