import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CalendarBox from "@/components/CalenderBox";
import InputGroup from "@/components/FormElements/InputGroup";
import SelectGroupOne from "@/components/FormElements/SelectGroup/SelectGroupOne";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Calender Page | NextAdmin - Next.js Dashboard Kit",
  description:
    "This is Next.js Calender page for NextAdmin  Tailwind CSS Admin Dashboard Kit",
  // other metadata
};

const CalendarPage = () => {
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

  return (
    <DefaultLayout>

<div className="flex space-x-8 overflow-x-auto">
      {projects.map((project) => (
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

    </DefaultLayout>
  );
};

export default CalendarPage;
