import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-gray-100">
        <div className="mt-8 md:p-16 flex flex-col justify-center md:justify-start text-white recital-bg">
          <h1 className="flex justify-center font-bold">Cecilia Poellein Buss</h1>
          <h1 className="flex text-center justify-center">
            Violinist/Violin and Viola Instructor
          </h1>
        </div>
        <p>
          Cecilia was a member of the first violin section of the Seattle Symphony and Seattle Opera. After 38 seasons with the symphony she  retired in July 2023. She has a Bachelor of Music Performance degree from Northern Illinois University where she studied with Shmuel Ashkenasi and members of the Vermeer String Quartet. She also holds an Artist Diploma in violin performance from Cleveland Institute of Music.
        </p>
        <p>
          Cecilia has been teaching violin and viola for over 30 years. She is a member of ASTA (American String Teachers Association) and The American Suzuki Association. She has certifications in The Suzuki Method and certifications in the Paul Rolland Method. Cecilia has attended seminars on violin studies at The Juilliard School and done violin teacher training with Simon Fischer.
        </p>
        <p>
          Her students have participated and placed in the PAFE and Seattle Young (SYAMF)competitions. Many of her students are members of The Seattle Youth Orchestras and Bellevue Youth Orchestras. Many of Cecilia’s students have participated in Washington All State Orchestra (including Honors) All Northwest Orchestra and the Washington State Solo Ensemble festival. In addition to private teaching Cecilia has coached high school and middle school orchestras in Seattle and on the Eastside. When she is not teaching, practicing or playing violin, Cecilia enjoys cycling, walking, Pilates, and travelling with her husband, Gerry.
        </p>
        <div className="mx-4 flex flex-col items-center justify-center">
          <h2 >
            Interested in taking you or your child's violin skills to the next
            level?
          </h2>
          <p>
            Please contact me to set up a free trial lesson. You may also submit a video recording of your violin or viola playing. Please include a scale and one minute of an etude or solo piece.
          </p>
          <h2 className="mb-5">Email: Cmpbuss@comcast.net</h2>
        </div>
      </div>
    </>
  );
}
