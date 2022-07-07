function ProjectsCard(project) {
  return (
    <div className="flex flex-col lg:flex-row w-full -h-full mt-20">
      <div
        className={`flex flex-col mx-2 lg:w-1/2 h-1/2 ${
          project.project.status === 1 ? "order-1 lg:mr-24" : "lg:ml-24"
        }`}
      >
        <h1 className=" text-green-400 text-2xl mb-8">
          {project.project.title}
        </h1>
        <h2 className=" font-extrabold text-5xl mb-4">
          {project.project.sub_title}
        </h2>
        <h3 className="text-2xl text-gray-600 mb-6">
          {project.project.description}
        </h3>
        <div className="flex flex-col lg:flex-row w-full h-full items-center justify-between place-items-center">
          <div className="flex items-center mb-10 border-2 border-blue-400">
            <div className="flex flex-row items-center h-2/5 p-2 rounded-2xl pr-10">
              {project.project.projectMember.map((item) => (
                <img
                  src={item.image_link}
                  alt={item.image_alt}
                  className="flex justify-center rounded-full -mr-12 ml-6"
                />
              ))}
              <img
                src={project.project.imagesFixed[0].image_link}
                alt={project.project.imagesFixed[0].image_alt}
                className="rounded-full w-2/12 h-2/12 -mr-12 ml-6 items-center -z-10"
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-2 rounded-2xl p-3">
              <h3 className="text-gray-600 text-xl font-bold">
                {project.project.amount} étudiants
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-around mb-8">
            <div className="flex border-2 rounded-2xl p-2">
              <img
                src={project.project.imagesFixed[2].image_link}
                alt={project.project.imagesFixed[2].image_alt}
                className="mr-4 imgProject"
              />
              <p className="text-gray-600 text-md font-bold  ">
                {project.project.time_week}
              </p>
            </div>
            <div className="flex border-2 rounded-2xl p-2 mt-4">
              <img
                src={project.project.imagesFixed[3].image_link}
                alt={project.project.imagesFixed[3].image_alt}
                className="mr-4 imgProject"
              />
              <p className="text-gray-600 text-md font-bold ">
                {project.project.time_hour}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-2xl px-6 pt-2 pb-6">
          <span />
          <img
            src={project.project.imagesFixed[1].image_link}
            alt={project.project.imagesFixed[1].image_alt}
            className="quote"
          />
          <p className="text-xl pb-4">{project.project.text}</p>
          <p className="text-xl font-bold">{project.project.signature}</p>
        </div>
      </div>
      <div className="flex flex-col w-1/2 h-1/2 items-center mb-12 mt-10">
        <img src={project.project.image_link} alt={project.project.image_alt} />
      </div>
    </div>
  );
}

export default ProjectsCard;
