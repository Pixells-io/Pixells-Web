import React, { useRef, useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, ellipsisVertical } from "ionicons/icons";
function WorkSpace() {
  const article1Ref = useRef(null);
  const article2Ref = useRef(null);
  const article3Ref = useRef(null);
  const article4Ref = useRef(null);
  const article5Ref = useRef(null);
  const article6Ref = useRef(null);
  const article7Ref = useRef(null);
  const article8Ref = useRef(null);
  const article9Ref = useRef(null);
  const article10Ref = useRef(null);
  const article11Ref = useRef(null);
  const [activeButton, setActiveButton] = useState(null);

  const scrollToArticle = (articleRef, buttonIndex) => {
    articleRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveButton(buttonIndex);
  };

  return (
    <div className="w-full grid grid-cols-12 gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <div className="w-full max-h-[70vh] overflow-auto col-span-8 px-6 py-10">
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          PROJECT MANAGER
        </span>
        <h2 className="pt-5 font-poppins text-[16px] text-grisHeading">
          Espacio de Trabajo
        </h2>
        {/*ARTICLE 1 */}

        <div ref={article11Ref} className="mt-6">
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Un espacio de trabajo es el lugar donde podrás crear distintos
              objetivos, proyectos y actividades. Puedes crear los espacios de
              trabajo que sean necesarios para tu control y organización de
              agenda.
            </p>
            <br />

            <p>
              Para agregar un espacio de trabajo, presiona sobre el icono{" "}
              <IonIcon
                icon={ellipsisVertical}
                className="text-grisHeading text-[14px]"
              />{" "}
              a un costado de “Espacio de Trabajo”, escoge la opción “Nuevo
              espacio de trabajo”.
            </p>
            <br />

            <p>
              Si deseas cambiar el nombre, de la misma forma, selecciona la
              opción “Editar espacio de trabajo”.{" "}
            </p>
            <br />

            <p>
              Por último, si deseas eliminar el espacio de trabajo, selecciona
              la opción “Eliminar espacio de trabajo” en color rojo.
            </p>
            <br />

            <p>
              Para cambiar un espacio de trabajo, presiona sobre el nombre del
              espacio seleccionado, para abrir la lista de los espacios
              disponibles para cambiar.
            </p>
            <br />
          </article>
        </div>

        {/**ARTICLE 2  */}
        <div ref={article1Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Canales
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Los espacios de trabajo, se dividen en dos tipos de canales, canal
              “Individual” y “En Equipo”. El canal individual se usa para
              agregar objetivos, tareas y proyectos personales y que no son para
              compartir con otros colaboradores. En cambio en el canal en
              equipo, puedes compartir elementos a distintos colaboradores de la
              compañía.
            </p>
            <br />

            <p>
              Dentro de los canales Individual y en Equipo, se agregarán primero
              los Objetivos. Dentro de cada objetivo, se pueden agregar tareas y
              proyectos.
            </p>
            <br />
            <span className="text-grisHeading">Alineación Estratégica</span>
            <br />
            <span>1. ¿Qué es un Objetivo Estratégico?</span>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Un Objetivo Estratégico es la línea rectora de donde se van a
                derivar el resto de funciones del Project Manager. Es
                recomendable no tener más de 5 a 6 objetivos estratégicos para
                concentrar el esfuerzo de la organización en ellos.
              </li>
              <br />
              <li className="before:content-['b.'] before:mr-2">
                En la mayoría de los casos, los objetivos estratégicos están
                alineados a las principales áreas funcionales de la empresa.
              </li>
              <br />
              <li className="before:content-['c.'] before:mr-2">
                Los OE, son creados y determinados por los dueños o socios de la
                compañía o de lo contrario se crean desde el consejo para
                determinar el rumbo de las operaciones de la compañía para el
                año en curso.
              </li>
              <br />
            </ol>
            <span>2. Diferencia entre tarea y proyecto</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Una tarea es una actividad que tiene una sola acción, pero se
                puede repetir en las veces que sea necesario a través del
                tiempo.
              </li>
              <br />
              <li className="before:content-['b.'] before:mr-2">
                Un proyecto, es una actividad que tiene distintas fases y
                diferentes tareas dentro de cada fase.
              </li>
              <br />
              <li className="before:content-['c.'] before:mr-2">
                Los proyectos tienen un lapso de tiempo en el que deben ser
                completados.
              </li>
              <br />
              <li className="before:content-['d.'] before:mr-2">
                Los proyectos pueden ser operados por muchos usuarios al mismo
                tiempo.
              </li>
              <br />
            </ol>
          </article>
        </div>

        {/*ARTICLE 3 */}

        <div ref={article2Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Agregar Objetivo Estratégico
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Ve al módulo de Project Manager, y en el submenú toca el botón de
              “+”. Después llena el formulario con la siguiente información:
            </p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Nombre del Objetivo Estratégico. Buscar que sea un nombre
                conciso y determinante.
              </li>
            </ol>
            <p>Para guardar el registro, toca el botón “Guardar”.</p>
            <br />
          </article>
        </div>
        {/*ARTICLE 4 */}
        <div ref={article3Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Compartir
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para compartir un objetivo completo, como se menciona
              anteriormente, debes crearlo en el canal “En Equipo”.
            </p>
            <br />

            <p>
              Selecciona el boton de color verde “Compartir” y escoge la
              configuracipon deseada:
            </p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Selecciona si quieres compartir por área, puesto o usuario.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Busca las opciones de acuerdo a lo seleccionado anteriormente y
                selecciona si pueden “ver” o “editar”.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Por default, el sistema tiene seleccionada la opción de
                compartir solo a los invitados que desees, pero si deseas
                compartir a todos los usuarios del sistema, da click en “solo
                los invitados” y a continuación abre el selector y escoge
                “Todos”.
              </li>
              <br />
            </ol>
            <p>
              Todas las actividades y proyectos que se agreguen dentro del
              objetivo, serán compartidas de acuerdo a la configuración
              establecida, a menos de que individualmente se modifique la
              configuración de alguna tarea o proyecto.
            </p>
            <br />

            <p>
              Si quieres modificar la configuración de los usuarios
              seleccionados, puedes escoger los siguientes accesos:
            </p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Puede ver: solo ver las actividades y proyectos.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Puede Editar: puede editar las tareas o el proyecto, agregar
                actividades dentro del proyecto o eliminar el proyecto y agregar
                nuevas tareas dentro del objetivo.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Acceso Total: Puede modificar la configuración del acceso del
                objetivo o directamente de alguna actividad o proyecto.
              </li>
              <br />
              <li className="before:content-['4.'] before:mr-2">
                Eliminar: eliminas al usuario de esa actividad en específico.
              </li>
              <br />
            </ol>
          </article>
        </div>
        {/*ARTICLE 5 */}
        <div ref={article4Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Agregar una Tarea o un Proyecto
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Abre la fila del Factor Crítico de Éxito en donde deseas agregar
              una Tarea o un Proyecto. Al tocar la fila, se desplegará la
              información que se encuentra dentro de ese factor. Si vuelves a
              tocar se cerrará la información.
            </p>
            <br />

            <p>Al abrir, toca el botón “+” y llena la siguiente información:</p>
            <br />
            <span>1. Tarea</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Título de la tarea.
              </li>
              <br />
              <li className="before:content-['b.'] before:mr-2">
                Prioridad si es Baja, Media, Importante o Urgente.
              </li>
              <br />
              <li className="before:content-['c.'] before:mr-2">
                Selecciona el responsable que deberá completar la tarea.
              </li>
              <br />
              <li className="before:content-['d.'] before:mr-2">
                Posteriormente selecciona “SI”, si la tarea se va a repetir
                distintas ocasiones a través del tiempo. De lo contrario,
                selecciona la opción de NO, para no generar repeticiones.
              </li>
              <br />
              <li className="before:content-['e.'] before:mr-2">
                Elige la Fecha de Inicio y la Fecha de Fin en las cuales se
                repetirá la tarea.
              </li>
              <br />
              <li className="before:content-['f.'] before:mr-2">
                Escoge si la repetición será entre cada 1 día, 7, 15, o 30 días.
              </li>
              <br />
              <li className="before:content-['g.'] before:mr-2">
                Agrega una descripción para explicar con más detalle de qué
                trata la tarea.
              </li>
              <br />
            </ol>
            <p>Para guardar el registro, toca el botón “Guardar”.</p>
            <br />
            <span>2. Proyecto</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Título del proyecto.
              </li>
              <br />
              <li className="before:content-['b.'] before:mr-2">
                Prioridad si es Baja, Media, Importante o Urgente.
              </li>
              <br />
              <li className="before:content-['c.'] before:mr-2">
                Agrega una descripción para explicar con más detalle de qué
                trata el proyecto.
              </li>
              <br />
            </ol>

            <p>
              Para guardar el registro, toca el botón “Guardar” y posteriormente
              ve a configurar el proyecto administrandolo a través de fases,
              actividades y tiempos.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 6 */}
        <div ref={article5Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Compartir
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Las tareas y proyectos, tendrán la configuración que escojas en el
              botón principal de compartir del Objetivo, pero si deseas
              modificar la configuración de una tarea o proyecto de forma
              individual, debes posicionarte sobre la tarea o proyecto, da click
              sobre el botón{" "}
              <IonIcon
                icon={ellipsisVertical}
                className="text-grisHeading text-[14px]"
              />{" "}
              y escoge la opción “Compartir”
            </p>
            <br />
            <p>
              A continuación, escoge como deseas modificar la configuración, si
              deseas agregar más usuarios, o modificar los accesos de un usuario
              en específico:{" "}
            </p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Puede ver: solo ver las actividades y proyectos.
              </li>
              <br />
              <li className="before:content-['b.'] before:mr-2">
                Puede Editar: puede editar las tareas o el proyecto, agregar
                actividades dentro del proyecto o eliminar el proyecto.
              </li>
              <br />
              <li className="before:content-['c.'] before:mr-2">
                Acceso Total: Puede modificar la configuración del acceso de
                dicha actividad o proyecto.
              </li>
              <br />
              <li className="before:content-['d.'] before:mr-2">
                Eliminar: eliminas al usuario de esa actividad en específico.
              </li>
              <br />
            </ol>
          </article>
        </div>
        {/*ARTICLE 7 */}
        <div ref={article6Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Visualizar las repeticiones de una Tarea
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Ve a la actividad que deseas analizar y posicionate sobre el el
              número que se encuentra a un costado de la Tarea, se mostrará un
              modal con la siguiente información:
            </p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Fechas en que se repite la tarea.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Una opción para editar o eliminar la tarea únicamente de la
                fecha específica que estás modificando.
              </li>
              <br />
            </ol>
          </article>
        </div>
        {/*ARTICLE 8 */}
        <div ref={article7Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Configuración de un Proyecto
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              En el Proyecto Manager en la tabla principal de Actividades,
              encuentra el proyecto que deseas configurar.{" "}
            </p>
            <br />

            <p>
              En las acciones de la tabla, toca el icono “i” para entrar a la
              vista de Administración de Proyecto.
            </p>
            <br />

            <p>
              Los proyectos se dividen en Fases y Tareas. Las fases son etapas
              donde a su vez llevan dentro tareas con fechas específicas que son
              las que determinarán qué es lo que deberán hacer los usuarios.
            </p>
            <br />

            <p>
              Dentro de las tareas, puedes agregar usuarios que comparten la
              misma actividad. Cualquiera de los usuarios que están compartiendo
              actividad, puede finalizar la actividad, pero el creador del
              proyecto deberá validar que todo fue realizado correctamente.
            </p>
            <br />

            <p>
              El estatus de check azul, indica que algún usuario finalizó la
              actividad. El estatus verde check, indica que el creador validó la
              actividad finalizada.
            </p>
            <br />
            <p> Para configurar el proyecto sigue los siguientes pasos:</p>
            <br />

            <span>1. Agrega Fases o Etapas</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Toca el input “+ Agregar Fase/Etapa” para agregar texto,
                presiona enter para confirmar o el botón de enviar “poner
                icono”.{" "}
              </li>
              <br />
            </ol>
            <p>Repite la acción cuantas veces sea necesario.</p>
            <br />
            <span>2. Agregar Tarea dentro de una Fase/Etapa</span>

            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Posicionate sobre el input “Agregar Actividad” para agregar
                texto, presiona enter para confirmar o el botón de enviar “poner
                icono”.
              </li>
              <br />
              <li className="before:content-['b.'] before:mr-2">
                Agrega más usuarios en caso de que requieran ser parte del
                equipo que realizará dicha actividad. Da click en el botón “+” y
                selecciona el usuario.
              </li>
              <br />
              <li className="before:content-['c.'] before:mr-2">
                Coloca la fecha de Inicio y de Fin de la actividad, para
                delimitar los tiempos de ejecución.
              </li>
              <br />
              <li className="before:content-['d.'] before:mr-2">
                Puedes agregar comentarios en el icono de “comentario”.
              </li>
              <br />
              <li className="before:content-['e.'] before:mr-2">
                Se pueden agregar documentos, presiona el botón “Comentario”.
              </li>
              <br />
            </ol>
            <p>
              Puedes cambiar entre vistas de proyectos. Presionando el botón con
              el nombre del proyecto y selecciona el siguiente que deseas
              visualizar.
            </p>
            <br />

            <p>
              Para regresar a la tabla de Actividades del Project Manager,
              presiona el botón{" "}
              <IonIcon
                icon={chevronBack}
                className="text-grisHeading pr-1 text-[16px]"
              />
              en la esquina superior izquierda del área principal de la
              pantalla.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 9 */}
        <div ref={article8Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Completar, editar y eliminar una actividad
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para completar una actividad, presiona el botón de “check” que se
              encuentra en las acciones dentro de la tabla principal de
              actividades el Project Manager.{" "}
            </p>
            <br />

            <p>Sigue los siguientes pasos:</p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Revisa que el título y la descripción de la tarea, correspondan
                a la tarea que deseas completar.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Agrega un comentario para dar más detalle o información
                necesaria al completar.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Adjunta un documento si es necesario.
              </li>
              <br />
            </ol>
            <p>
              NOTA: También puedes completar la tarea en las distintas vistas
              donde puedes encontrar las actividades:
            </p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Project Manager{" "}
                <IonIcon
                  icon={chevronForward}
                  className="text-grisHeading text-[14px] px-1"
                />{" "}
                Submenú{" "}
                <IonIcon
                  icon={chevronForward}
                  className="text-grisHeading text-[14px] px-1"
                />{" "}
                “Hoy”. Presiona el botón “check” y sigue los pasos.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Project Manager{" "}
                <IonIcon
                  icon={chevronForward}
                  className="text-grisHeading text-[14px] px-1"
                />{" "}
                Submenú{" "}
                <IonIcon
                  icon={chevronForward}
                  className="text-grisHeading text-[14px] px-1"
                />{" "}
                “Actividades”. Selecciona la actividad, presiona el botón
                “check” y sigue los pasos.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Project Manager{" "}
                <IonIcon
                  icon={chevronForward}
                  className="text-grisHeading text-[14px] px-1"
                />{" "}
                Submenú{" "}
                <IonIcon
                  icon={chevronForward}
                  className="text-grisHeading text-[14px] px-1"
                />{" "}
                “Estatus”. Selecciona la actividad, presiona el botón “tres
                puntos”, después “completar” y sigue los pasos.
              </li>
              <br />
            </ol>
          </article>
        </div>
        {/*ARTICLE 10 */}
        <div ref={article9Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Vistas rápidas de Todas la Actividades
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Es la vista en donde encontrarás todas las actividades que debes
              realizar. No importa dentro de qué Objetivo y Canal se encuentren.
              Se divide en dos secciones:
            </p>
            <br />
            <span>Por Proyecto</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Sin Proyecto, son todas las actividades que se agregaron de
                forma directa, sin estar dentro de un proyecto.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Dentro del nombre de un proyecto, son las actividades
                relacionadas a dicho proyecto.
              </li>
              <br />
            </ol>
            <p>
              Para compartir, editar o eliminar, selecciona el botón{" "}
              <IonIcon
                icon={ellipsisVertical}
                className="text-grisHeading text-[14px] px-1"
              />
              y escoge alguna de las opciones deseadas.
            </p>
            <span>Estatus</span>
            <p>
              Esta vista mostrará todas las actividades que debes realizar
              organizadas por cuatro estatus distintos, pendientes, en progreso,
              completadas y canceladas. No importa dentro de qué Objetivo
              Estratégico se encuentren.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 11 */}
        <div ref={article10Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Vistas rápidas de Todas los Proyectos
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <span>Lista</span>

            <p>
              Es la lista de todos los proyectos creados, sin importar en qué
              Objetivo y Canal se elaboraron. Puedes acceder a los detalles del
              proyecto, posicionándote sobre el botón{" "}
              <IonIcon
                icon={ellipsisVertical}
                className="text-grisHeading text-[14px] px-1"
              />{" "}
              y seleccionando la opción “ver”.
            </p>
            <br />

            <p>
              También puedes seleccionar la opción editar, eliminar o compartir.
            </p>
            <br />
            <span>Estatus</span>
            <p>
              Esta vista mostrará todas los proyectos que debes realizar
              organizadas por cuatro estatus distintos, pendientes, en progreso,
              completadas y canceladas. No importa dentro de qué Objetivo
              Estratégico se encuentren.
            </p>
            <br />
            <span>Board</span>
            <p>
              Encontrarás todos los proyectos en forma de tablero, donde puedes
              acceder a los detalles del proyecto, posicionándote sobre el
              proyecto y dando click en el botón “Ver”.
            </p>
            <br />
          </article>
        </div>
      </div>
      <section className="col-span-4 max-h-[60vh] overflow-auto px-8 py-6">
        <div className="flex max-w-[155px] flex-col space-y-5">
          <button
            onClick={() => scrollToArticle(article11Ref, 10)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton === 10
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Espacios de Trabajo
          </button>
          <button
            onClick={() => scrollToArticle(article1Ref, 0)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton === 0
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Canales
          </button>
          <button
            onClick={() => scrollToArticle(article2Ref, 1)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton === 1
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Agregar Objetivo Estratégico
          </button>
          <button
            onClick={() => scrollToArticle(article3Ref, 2)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton === 2
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Compartir
          </button>
          <button
            onClick={() => scrollToArticle(article4Ref, 3)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton === 3
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Agregar una Tarea o un Proyecto
          </button>
          <button
            onClick={() => scrollToArticle(article5Ref, 4)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton === 4
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Compartir{" "}
          </button>
          <button
            onClick={() => scrollToArticle(article6Ref, 5)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton === 5
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Visualizar las repeticiones de una Tarea
          </button>
          <button
            onClick={() => scrollToArticle(article7Ref, 6)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton === 6
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Configuración de un Proyecto
          </button>
          <button
            onClick={() => scrollToArticle(article8Ref, 7)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton == 7
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Completar, editar y eliminar una actividad
          </button>
          <button
            onClick={() => scrollToArticle(article9Ref, 8)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton == 8
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Vistas rápidas de Todas la Actividades
          </button>
          <button
            onClick={() => scrollToArticle(article10Ref, 9)}
            className={`px-3 py-2 flex justify-start items-center whitespace-nowrap gap-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton == 9
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            Vistas rápidas de Todas los Proyectos
          </button>
        </div>
      </section>
    </div>
  );
}

export default WorkSpace;
