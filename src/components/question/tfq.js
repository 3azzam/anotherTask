const TFQ = ({ body }) => {
    return (
      <div className="p-3" >
        <p className="text-center mb-4" >{body}</p>
        <div className="d-flex justify-content-center" >
          <button className="btn btn-lg mx-2 btn-primary">
            {" "}
            <span className="px-4 py-2"> True </span>{" "}
          </button>
          <button className="btn btn-lg mx-2 btn-danger">
            {" "}
            <span className="px-4 py-2"> False </span>{" "}
          </button>
        </div>
      </div>
    );
  };
  
  export default TFQ;
  