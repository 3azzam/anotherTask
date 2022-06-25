const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center" > Welcome Player </h1>
        <div className="bg-info row  p-5 rounded">
          <div className="col-12 col-lg-5 mx-auto p-3 d-flex flex-column justify-content-center align-items-center ">
            <textarea type="text" placeholder="enter your name" className="mb-3 form-control" />
            <div className="d-flex">
                <button className="btn btn-lg rounded btn-success" > <span className="px-2" >Easy</span> </button>
                <button className="mx-4 btn btn-lg rounded btn-success" > <span className="px-2" >Medium</span> </button>
                <button className="btn btn-lg rounded btn-success" > <span className="px-2" >Hard</span> </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center" >
        <button className="btn btn-lg btn-primary mt-4 "> <span className="px-2" >Play</span>  </button>

        </div>
      </div>
    </div>
  );
};

export default Home;
