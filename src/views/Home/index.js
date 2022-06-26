import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { useDispatch } from "react-redux";
import { startGame } from "../../redux/reducers/authReducer";
import { setupGame } from "../../redux/reducers/gameReducer";
import _ from 'lodash'

import { difficulties, responseTypes } from "../../constants/appConstants";
import { getToken } from "../../networking/sessionsApis";
import { apiErrorResponse } from '../../utils/apiError'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [playerName, setPlayerName] = useState("");
  const [difficulty, setDifficulty] = useState(difficulties.MEDIUM);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (_.keys(errors).length > 0) {
      const messages = _.keys(errors).map(key => errors[key])
      messages.forEach(message => toast.error(message))
    }
  }, [errors]);

  const isValid = () => {
    let valid = true
    const errors = {}

    if (!playerName || playerName.trim() === '') {
      valid = false
      errors.playerName = "player name required"
    }

    setErrors(errors)
    return valid
  }

  const handleSubmit = () => {
    if (isValid()) {
      setIsSubmitted(true);
      getToken()
        .then((res) => {
          if (res.data.response_code === responseTypes.SUCCESS) {
            dispatch(startGame({
              playerName,
              token: res.data.token
            }))
            dispatch(setupGame({
              difficulty
            }))
            navigate('/categories')
          }
          else {
            toast.error(apiErrorResponse(res.data.response_code))
          }
          setIsSubmitted(false);
        })
        .catch((err) => {
          toast.error("error happend ... please try again later");
          setIsSubmitted(false);
        });
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center"> Welcome Player </h1>
        <div className="bg-info row  p-5 rounded">
          <div className="col-12 col-lg-5 mx-auto p-3 d-flex flex-column justify-content-center align-items-center ">
            <textarea
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="enter your name"
              className="mb-3 form-control"
            />
            <div className="d-flex">
              <button
                className={`btn btn-lg rounded btn-success ${difficulty === difficulties.EASY ? " border-selected " : ""
                  }`}
                onClick={() => setDifficulty(difficulties.EASY)}
              >
                {" "}
                <span className="px-2">Easy</span>{" "}
              </button>
              <button
                className={`mx-4 btn btn-lg rounded btn-success ${difficulty === difficulties.MEDIUM ? " border-selected " : ""
                  }`}
                onClick={() => setDifficulty(difficulties.MEDIUM)}
              >
                {" "}
                <span className="px-2">Medium</span>{" "}
              </button>
              <button
                className={`btn btn-lg rounded btn-success ${difficulty === difficulties.HARD ? " border-selected " : ""
                  }`}
                onClick={() => setDifficulty(difficulties.HARD)}
              >
                {" "}
                <span className="px-2">Hard</span>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            disabled={isSubmitted}
            onClick={handleSubmit}
            className="btn btn-lg btn-primary mt-4 "
          >
            {" "}
            <span className="px-2">Play</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
