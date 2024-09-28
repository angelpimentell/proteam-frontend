import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default function Home() {


  const projects = [
    {
      id: 1,
      name: 'Desarrollo',
      tasks: [
        { id: 1, name: 'Configuración del entorno de desarrollo', status: 'Pendiente' },
        { id: 2, name: 'Implementación de la funcionalidad principal', status: 'En Progreso' },
        { id: 3, name: 'Realizar pruebas de unidad', status: 'Hecho' },
      ],
    },
    {
      id: 2,
      name: 'Contabilidad',
      tasks: [
        { id: 4, name: 'Revisión de facturas', status: 'Pendiente' },
        { id: 5, name: 'Preparación de informes mensuales', status: 'En Progreso' },
        { id: 6, name: 'Conciliación bancaria', status: 'Hecho' },
      ],
    },
  ];
  const statuses = ['Pendiente', 'En Progreso', 'Hecho']; return (
    <>
      <DefaultLayout>
        <div className="flex space-x-8 overflow-x-auto">
          {projects.map((project) => (
            <div key={project.id} className="dark:border-dark-3 dark:bg-gray-dark dark:shadow-card flex-shrink-0 w-96 bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{project.name}</h2>
              <div className="space-y-4">
                {project.tasks.map((task) => (
                  <div key={task.id} className="p-4 bg-white rounded-lg shadow dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                    <h3 className="text-sm font-medium mb-2 dark:text-white">{task.status}</h3>
                    <p className="text-base text-gray-800 dark:text-white">{task.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DefaultLayout>
    </>
  );
}
