import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosInstance, LearnerQuiz } from "../../../../Constants/URLS/URL";
import { data, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
  const [answers, setAnswers] = useState<any[]>([]); // State to store answers
  const { id } = useParams();

  // setQuizId(`${params.id}`)
  const qutions = async () => {
    try {
      const res = await axiosInstance.get<quitionWithoutAnswer>(
        LearnerQuiz.qutionWithoutAnswer(`${id}`)
      );
      toast.info("THIS IS YOUR  Quiz  ");
      setExam(res.data);
    } catch (error) {
      console.log(error);
      toast.error(error)
    }
  };

  useEffect(() => {
    qutions();
  }, []);

  const { register, handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const results = exam?.data.questions.map((question) => ({
        question: question._id,
        answer: data[question._id] || null, // Capture the selected answer or null if unanswered
      }));
      const response = await axiosInstance.post(
        LearnerQuiz.submitQuiz(`${id}`),
        {
          answers: results,
        }
      );
      console.log(response);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col  justify-center items-center  ">
          <h3 className="mb-4 text-2xl">{exam?.data.title}</h3>
          <p className="mb-4">{exam?.data.description}</p>
          {exam?.data.questions.map((qution) => (
            <div
              key={qution._id}
              className="w-11/12  border mb-6 py-5 px-8 rounded-lg "
            >
              <input
                type="hidden"
                value={qution.title}
                {...register("question")}
              />
              <h3 className="mb-3 text-xl">{qution.title}</h3>

              {Object.entries(qution.options)
                .slice(0, -1)
                .map(([key, value]) => (
                  <div
                    key={key}
                    className="mb-2  text-gray-900 w-6/12 inline-block "
                  >
                    <input
                      className="peer/published mr-3 "
                      type="radio"
                      {...register(qution._id, { required: true })}
                      value={value} // Assign the option value
                    />
                    {value}
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-20 py-3 mb-4 rounded bg-gray-200  ">
            next
          </button>
        </div>
      </form>
    </>
  );
}
