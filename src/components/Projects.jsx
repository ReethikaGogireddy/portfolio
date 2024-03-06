import React from "react";

function Projects() {
  return (
    <div
      name="projects"
      className="w-full h-screen  text-black  bg-[white] pt-20"
    >
      <div style={{ textAlign: "center" }}>
        <h1
          className="text-4xl font-bold inline-block bg-gradient-to-r from-[#ff1b6b] to-[#45caff] text-transparent bg-clip-text"
          style={{ paddingBottom: "10px" }}
        >
          Projects
        </h1>
      </div>
      <p className="text-center">
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </div>
  );
}
export default Projects;
