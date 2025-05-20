import { useState } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // }

  // const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        // onClick={() => setSelected({ selected: !selected })}
        onClick={() => props.changeSelectedBook(props.book.asin)}
        style={{
          border:
            props.selectedBook === props.book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {selected && <CommentArea asin={props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
