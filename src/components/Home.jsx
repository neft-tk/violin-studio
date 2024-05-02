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
          Cecilia has been a member of the first violin section of the Seattle
          Symphony and Seattle Opera since 1985. After 38 seasons with the
          symphony she will be retiring in July 2023. She has a Bachelor’s
          degree from Northern Illinois University and an Artist Diploma from
          Cleveland Institute of Music.
        </p>
        <p>
          Cecilia has been teaching violin and viola for over 30 years. She is a
          member of ASTA (American String Teachers Association) and The American
          Suzuki Association. She has Suzuki Teacher training and Paul Rolland
          Method training. She also has attended seminars on violin studies at
          The Juilliard School and with Simon Fischer.
        </p>
        <p>
          {" "}
          Her students have participated and placed in the PAFE and Seattle
          Young (SYAMF)competitions. Many of her students participate in The
          Seattle Youth Orchestras, Bellevue Youth Orchestras , Washington All
          State Orchestras and Washington Solo Ensemble In addition to private
          teaching Cecilia has coached high school and middle school orchestras
          in Seattle and on the Eastside. When she is not teaching, practicing
          or playing violin, Cecilia enjoys bike riding, walking, Pilates Classes and
          travelling with her husband, Gerry.
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
