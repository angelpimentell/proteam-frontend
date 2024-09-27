"use client";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import InputGroup from "@/components/FormElements/InputGroup";
import { useState } from "react";



const projects = [
  {
    id: 1,
    name: 'Proyecto A',
    tasks: [
      { id: 1, name: 'Tarea 1', status: 'Pendiente' },
      { id: 2, name: 'Tarea 2', status: 'En Progreso' },
      { id: 3, name: 'Tarea 3', status: 'Hecho' },
    ],
  },
  {
    id: 2,
    name: 'Proyecto B',
    tasks: [
      { id: 4, name: 'Tarea 4', status: 'Pendiente' },
      { id: 5, name: 'Tarea 5', status: 'En Progreso' },
      { id: 6, name: 'Tarea 6', status: 'Hecho' },
    ],
  },
];
const statuses = ['Pendiente', 'En Progreso', 'Hecho'];


const CalendarPage = () => {
  const [state, setState] = useState(projects);
  const [taskName, setTaskName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [lastTaskId, setlastTaskId] = useState(7);
  const [lastProjectId, setlastProjectId] = useState(2);

  function addTaskToProject(projectName: any, task: any) {
    for (let project of projects) {
      // Verificamos si el nombre del proyecto coincide
      if (project.name === projectName) {
        // Agregamos la nueva tarea a la lista de tareas
        var nextTaskId = lastTaskId + 1;
        project.tasks.push( { id: nextTaskId, name: task, status: statuses[0] }  );
        setlastTaskId(nextTaskId);
        console.log(`Tarea agregada al proyecto "${projectName}":`, task);
      } else {
        console.log(`El proyecto "${projectName}" no fue encontrado.`);
      }
    }
  }

  const saveTask = function (event: any) {
    event.preventDefault();
    addTaskToProject(projectName, taskName);
  }

  return (
    <DefaultLayout>

      <div className="flex space-x-8 overflow-x-auto">
        {state.map((project) => (
          <div key={project.id} className="flex-shrink-0 w-96 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{project.name}</h2>
            <div className="space-y-4">
              {project.tasks.map((task) => (
                <div key={task.id} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="text-sm font-medium mb-2">{task.status}</h3>
                  <p className="text-base text-gray-800">{task.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Breadcrumb pageName="Tareas" />

      <div className="sm:grid-cols-2">
        <div className="flex flex-col">
          {/* <!-- Contact Form --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Formulario de Tareas
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">

                <InputGroup
                  label="Proyecto"
                  type="input"
                  onChange={(event: any) => setProjectName(event.target.value)}
                  placeholder="Nombre de Proyecto"
                  customClasses="mb-4.5"
                  required
                />

                <InputGroup
                  label="Tarea"
                  type="input"
                  onChange={(event: any) => setTaskName(event.target.value)}
                  placeholder="Nombre de Tarea"
                  customClasses="mb-4.5"
                  required
                />

                {/* <div className="mb-6">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Descripcion
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Descripcion de tarea"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div> */}

                <button onClick={saveTask} className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CalendarPage;
