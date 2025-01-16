import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosInstance, LearnerQuiz } from "../../../../Constants/URLS/URL";
import { data, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

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
  const { register, handleSubmit, watch, control } = useForm();
  const onSubmit = (data: any) => {
    // Map over the form data to create an array of answers

    console.log(data); // Log the answers array to the console
  };
  const selectedValue = watch("answer");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col  justify-center items-center  ">
          <h3 className="mb-3 text-2xl">{exam?.data.title}</h3>
          <p className="mb-3">{exam?.data.description}</p>
          {exam?.data.questions.map((qution) => (
            <div key={qution._id} className="w-8/12  border mb-5 p-5 rounded">
              <input
                type="hidden"
                value={qution.title}
                {...register("question")}
              />
              <h3 className="mb-3">{qution.title}</h3>

              <Controller
                name={qution._id}
                control={control}
                render={({ field }) => (
                  <>
                    <label>
                      <input type="radio" {...field} value={qution.options.A} />
                     { qution.options.A  }                  </label>
                    <label>
                    <input type="radio" {...field} value={qution.options.B} />
                    { qution.options.B}                    </label>
                    <label>
                     <input type="radio" {...field} value={qution.options.C} />
                    { qution.options.C}                    </label>
                  </>
                )}
              />
              {/* <div className="flex flex-col">
              {Object.keys(qution.options).map((optionKey) => (
                <div key={optionKey} className="mb-3 w-full">
                  <input
                    className="mr-3"
                    type="radio"
                    value={optionKey} // The value is 'A', 'B', 'C', or 'D'
                    {...register(`${qution._id}`, { required: true })}
                    name={`${qution._id}`} // Unique name per qution
                  />
                  {qution.options[optionKey as keyof typeof qution.options]} {/* Render option label */}
              {/* </div>
              ))}
            </div>  */}

              {/* <div className="mb-3 w-6/12 bg">
                <input
                  className="peer/published mr-3 "
                  type="radio"
                  {...register("answer")}
                  name={qution._id}
value={qution.options.A}
                />
                {qution.options.A}
              </div>  <div className="mb-3 w-6/12 bg">
                <input
                  className="peer/published mr-3 "
                  type="radio"
                  {...register("answer")}
                  name={qution._id}

                />
                {qution.options.B}
              </div>  <div className="mb-3 w-6/12 bg">
                <input
                  className="peer/published mr-3 "
                  type="radio"
                  {...register("answer")}
                  name={qution._id}

                />
                {qution.options.C}
              </div>  <div className="mb-3 w-6/12 bg">
                <input
                  className="peer/published mr-3 "
                  type="radio"
                  {...register("answer")}
                  name={qution._id}

                />
                {qution.options.D}
              </div> */}
            </div>
          ))}
        </div>

        <button className="px-20 py-3 mb-4 rounded bg-gray-200 ">next</button>
      </form>
    </>
  );
}
