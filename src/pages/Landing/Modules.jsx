import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MainModules() {
  const [openItem, setOpenItem] = useState(null);

  const handleAccordionChange = (value) => {
    setOpenItem(value === openItem ? null : value);
  };

  const modulesData = [
    {
      id: "organizacion",
      name: "Organización",
      shortDescription: "Enfocado en la creación de áreas, puestos usuarios y permisos",
      fullDescription: "Estructura tu empresa con facilidad. Crea áreas, define puestos, gestiona usuarios para un mejor control interno y gestiona permisos de acceso para cada usuario.\n\nMantén un organigrama actualizado y facilita la comunicación interna con una distribución eficiente de responsabilidades."
    },
    {
      id: "project-manager",
      name: "Project Manager",
      shortDescription: "Ideal para gestionar actividades y proyectos",
      fullDescription: "Planifica, organiza y da seguimiento a proyectos en un solo lugar. Gestiona tareas, asigna responsabilidades y visualiza el progreso en tiempo real.\n\nOptimiza la gestión de proyectos con herramientas intuitivas y colaborativas. Mejora la eficiencia con notificaciones automáticas y reportes detallados que te ayudarán a cumplir objetivos en tiempo y forma."
    },
    {
      id: "crm",
      name: "CRM",
      shortDescription: "La mejor herramienta para no perder prospectos en el camino",
      fullDescription: "Administra la relación con tus clientes de forma eficiente. Centraliza la información, haz seguimiento a interacciones y optimiza tus ventas con herramientas automatizadas.\n\nAutomatiza procesos de venta, envía recordatorios y segmenta clientes para personalizar la experiencia. Aumenta la fidelización y maximiza conversiones con estrategias basadas en datos."
    },
    {
      id: "tickets",
      name: "Tickets",
      shortDescription: "Organiza las no conformidades de clientes y usuarios de la empresa",
      fullDescription: "Mejora la atención al cliente y la gestión de incidencias con un sistema de tickets organizado. Asigna, prioriza y da seguimiento a incidencias o requerimientos internos y externos.\n\nPermite a los usuarios generar solicitudes, asignarlas a los equipos correspondientes y hacer seguimiento en tiempo real. Implementa niveles de prioridad, tiempos de respuesta y automatizaciones para brindar un soporte eficiente."
    },
    {
      id: "topics",
      name: "Topics",
      shortDescription: "Publica fotos, videos y documentos para que tu empresa sea un red social",
      fullDescription: "Crea un canal de comunicación interna efectivo. Comparte información clave dentro de la empresa. Publica anuncios, documentos y contenido relevante para mantener a todos informados.\n\nOrganiza la información por categorías, permite interacciones y mejora la cultura empresarial con una plataforma de contenido accesible."
    },
    {
      id: "chat",
      name: "Chat",
      shortDescription: "Las conversaciones internas y seguras, nunca habían sido tan sencillas",
      fullDescription: "Facilita la comunicación en tu empresa con un chat interno ágil y seguro. Además, con la integración de WhatsApp y Meta, centraliza la atención a clientes en una sola plataforma y mejorar la atención al cliente.\n\nAutomatiza respuestas, gestiona múltiples conversaciones y mejora la experiencia del usuario con un servicio rápido y personalizado."
    },
    {
      id: "bancos",
      name: "Bancos",
      shortDescription: "Enfocado en gestión del flujo de operaciones monetarias",
      fullDescription: "Administra tus cuentas bancarias de manera eficiente.\n\nRegistra ingresos, egresos, transferencias y movimientos financieros con total transparencia. Concilia operaciones fácilmente y reportes detallados para un control preciso de la tesorería."
    },
    {
      id: "inventario",
      name: "Inventario",
      shortDescription: "Administra y controla artículos, servicios, almacenes y stocks",
      fullDescription: "Gestiona tu stock en tiempo real con alertas de niveles mínimos y máximos. Controla existencias, movimientos y optimiza el uso de materiales y productos.\n\nOptimiza la distribución, reduce pérdidas y controla entradas y salidas con trazabilidad completa. Compatible con múltiples almacenes y códigos de barras para un manejo eficiente."
    },
    {
      id: "ventas",
      name: "Ventas",
      shortDescription: "Genera ingresos para la empresa y potencia tu crecimiento",
      fullDescription: "Lleva el control de tus ventas de manera sencilla. Desde cotizaciones hasta facturación, lleva el control de todas tus operaciones comerciales.\n\nRegistra pedidos, genera facturas electrónicas, gestiona clientes y analiza reportes de desempeño. Automatiza procesos y aumenta la productividad de tu equipo de ventas con una plataforma centralizada.\n\nFácil y rápida integración con tiendas en linea como MercadoLibre, Amazon, Shopify, Wix, entre otras, para tener todo el control de ventas centralizado."
    },
    {
      id: "compras",
      name: "Compras",
      shortDescription: "Abastece a la empresa y formaliza las ordenes de compra",
      fullDescription: "Administra proveedores, órdenes de compra y recepciones de productos para un mejor control de adquisiciones.\n\nControla presupuestos, tiempos de entrega y costos para garantizar la mejor inversión en cada compra."
    },
    {
      id: "transformacion",
      name: "Transformación",
      shortDescription: "Fabrica y transforma tus materiales en producto terminado",
      fullDescription: "Convierte materias primas e insumos en productos terminados con un control detallado de los procesos productivos y costos de producción.\n\nGestiona fórmulas, ordenes de fabricación, insumos utilizados y tiempos de manufactura para una producción eficiente y rentable."
    },
    {
      id: "punto-de-venta",
      name: "Punto de venta",
      shortDescription: "Vende de manera profesional y rápida en tus tiendas",
      fullDescription: "Vende de manera rápida y sencilla con nuestro sistema de punto de venta. Compatible con múltiples métodos de pago, gestión de clientes, descuentos y control de inventario en tiempo real.\n\nIdeal para negocios físicos y con integración a tiendas en línea."
    }
  ];

  return (
    <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-24 pt-6 md:pt-12">
      <h2 className="font-poppins font-bold text-[28px] text-grisHeading">
        Módulos para potenciar tu empresa
      </h2>
      
      <div className="flex justify-start items-start pt-6 md:pt-10">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={openItem}
          onValueChange={handleAccordionChange}
        >
          {modulesData.map((module, index) => {
            const itemValue = `item-${index + 1}`;
            const isOpen = openItem === itemValue;
            
            return (
              <AccordionItem 
                key={module.id} 
                value={itemValue}
                data-name={module.name}
                data-description={module.shortDescription}
              >
                <AccordionTrigger className="flex flex-col sm:flex-row justify-start border-b items-center gap-2 sm:gap-3">
                  <div
                    className={`bg-[#D9D9D9] rounded-[10px] transition-all duration-300 ${
                      isOpen
                        ? "h-0 w-0 opacity-0"
                        : "h-12 w-20 sm:h-16 md:h-[68px] sm:w-24 md:w-[120px] opacity-100"
                    }`}
                  />
                  <div className="flex flex-col sm:flex-row w-full sm:items-center gap-1 sm:gap-3">
                    <span className="font-poppins font-semibold text-[18px] text-grisHeading">
                      {module.name}
                    </span>
                    <span className="font-poppins font-light text-[18px] text-grisHeading">
                      {module.shortDescription}
                    </span>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="flex pt-4 md:pt-6 flex-col items-start pb-4 md:pb-6 border-b">
                  <span className="font-poppins font-semibold text-[18px] text-grisHeading">
                    {module.name}
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 pt-4 md:pt-6 gap-4 md:gap-2">
                    <div className="h-40 sm:h-48 md:h-[274px] w-full md:w-[513px] md:col-span-4 bg-[#D9D9D9] rounded-[10px]" />
                    
                    <div className="md:col-span-8">
                      <p className="font-poppins font-light text-grisHeading text-[18px] md:text-lg">
                        {module.fullDescription.split('\n\n').map((paragraph, i) => (
                          <React.Fragment key={i}>
                            {paragraph}
                            {i < module.fullDescription.split('\n\n').length - 1 && (
                              <>
                                <br />
                                <br />
                              </>
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

export default MainModules;