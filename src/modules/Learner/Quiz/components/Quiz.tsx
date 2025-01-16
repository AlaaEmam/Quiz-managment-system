import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosInstance, LearnerQuiz } from "../../../../Constants/URLS/URL";
import { useParams } from "react-router-dom";
import { Question } from "../../../Shared/Url/components/URL";

interface quitionWithoutAnswer {
  data: {
    title: string;
    description: string;
    instructor: string;
    group: string;
    questions_number: number;
    questions: [
      {
        _id: string;
        title: string;
        options: {
          A: string;
          B: string;
          C: string;
          D: string;
          _id: string;
        };
      },
    ];
  };
}
interface questions_IF {
  _id: string;
  title: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    _id: string;
  };
}

export default function Quiz() {
  const [exam, setExam] = useState<quitionWithoutAnswer | null>(null);

  const { id } = useParams();

  // setQuizId(`${params.id}`)
  const qutions = async () => {
    console.log(id);
    const res = await axiosInstance.get<quitionWithoutAnswer>(
      LearnerQuiz.qutionWithoutAnswer(`${id}`)
    );
    console.log(res.data.data.questions);
    setExam(res.data);
  };
  useEffect(() => {
    qutions();
  }, []);

  return (
    <>
      <div className="flex flex-col  justify-center items-center  ">
        {exam?.data.questions.map((qution) => (
          <div key={qution._id} className="w-6/12  border mb-5 p-5 rounded">
            <h3 className="mb-3">{qution.title}</h3>
            <div className="mb-3" >
              <input
                                className="peer/published mr-3 "
                type="radio"
                name={qution._id}
              />
              {qution.options.A}
            </div>
            <div className="mb-3" >
              <input
                                className="peer/published mr-3 "
                type="radio"
                name={qution._id}
              />
              {qution.options.B}
            </div>
            <div className="mb-3" >
              <input
                                className="peer/published mr-3 "
                type="radio"
                name={qution._id}
              />
              {qution.options.C}
            </div>
            <div className="mb-3" >
              <input
                                className="peer/published mr-3 "
                type="radio"
                name={qution._id}
              />
              {qution.options.D}
            </div>
          </div>
        ))}
      </div>{" "}
    </>
  );
}
