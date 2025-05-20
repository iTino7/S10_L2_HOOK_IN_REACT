

const ImageComponent = (props) => {
  return (
    // we need the src and the alt attributes
    <img src={props.imageSrc} alt={props.altText} />
  );
};

export default ImageComponent;
