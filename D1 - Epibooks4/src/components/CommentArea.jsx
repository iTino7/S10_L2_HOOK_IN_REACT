import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      if (!props.asin) return;

      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzlmYzFjMjUwNDAwMTUxYWI2NTIiLCJpYXQiOjE3NDc3NDYwNTMsImV4cCI6MTc0ODk1NTY1M30.tELFXDh6Zd876PUMSd55uvzj3g_Ha7WDJPhqP6sOTuY",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [props.asin]);

  // const componentDidUpdate = async (prevProps) => {
  //   if (prevProps.asin !== props.asin) {
  //     setIsLoading(isLoading(true));
  //     try {
  //       let response = await fetch(
  //         "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
  //         {
  //           headers: {
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzlmYzFjMjUwNDAwMTUxYWI2NTIiLCJpYXQiOjE3NDc3NDYwNTMsImV4cCI6MTc0ODk1NTY1M30.tELFXDh6Zd876PUMSd55uvzj3g_Ha7WDJPhqP6sOTuY",
  //           },
  //         }
  //       );
  //       console.log(response);
  //       if (response.ok) {
  //         let comments = await response.json();
  //         setComments(comments);
  //       } else {
  //         setIsError(true);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       setIsError(true);
  //     }
  //   }
  // };

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
