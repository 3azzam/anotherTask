import MSQ from "../../components/question/msq";
import Timer from "../../components/timer";

const ShowQuesion = () => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
    fugit voluptatum eaque, dolorem natus commodi ratione corrupti
    consequatur esse ad quasi rerum vel libero non molestiae! Molestiae,
    voluptates! Quos, eveniet?`;

  const answers = ["Microsoft", "Apple", "Atari", "Commodore"];

  return (
    <div>
      <div className="m-1 rounded" style={{width:"100px"}} >
        <Timer time={50} />
      </div>
      <div className="container">
        <MSQ body={text} answers={answers} />
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary py-2 mx-2">
            {" "}
            <span className="px-4"> Skip </span>{" "}
          </button>
          <button className="btn btn-success py-2 mx-2">
            {" "}
            <span className="px-4"> Next </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowQuesion;
