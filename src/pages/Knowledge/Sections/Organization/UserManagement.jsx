import React, { useRef, useState } from "react";

function UserManagement() {
  const containerRef = useRef(null);
  const article1Ref = useRef(null);
  const article2Ref = useRef(null);
  const article3Ref = useRef(null);

  const [activeButton, setActiveButton] = useState(null);

  const scrollToArticle = (articleRef, buttonIndex) => {
    const container = containerRef.current;
    const article = articleRef.current;
    
    if (container && article) {
      // Calcular la posición de scroll
      const scrollPosition = article.offsetTop - container.offsetTop;
      
      // Hacer el scroll
      container.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      
      setActiveButton(buttonIndex);
    }
  };
  
  
  return (
    <div className="w-full h-full grid grid-cols-12 gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <div    ref={containerRef} className="w-full max-h-[70vh] overflow-auto col-span-8 px-6 py-10">
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          ORGANIZACIÓN
        </span>
        <h2 className="pt-5 font-poppins text-[16px] text-grisHeading">
          Gestión de Usuarios
        </h2>
        {/*ARTICLE 1 */}
        <div ref={article1Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Alta nueva Área
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para dar de alta una nueva área, ve al módulo Organización, en el
              submenú “Usuarios Gestor” selecciona el botón “más” en el área
              principal de la pantalla, a continuación selecciona Área.
            </p>
            <br />
            <p>Debes completar los siguientes campos:</p>
            <br />
            <ol>
              <li className="before:content-['a.'] before:mr-2">
                Nombre del área, será el nombre como aparecerá el área en todo
                el sistema
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Descripción del área, de forma breve explica a qué se dedicará
                el área deseada
              </li>
              <li className="before:content-['c.'] before:mr-2">
                Procesos, agrega todos los procesos que contenga el área
                presionando el botón más
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Tipo de turno, matutino o vespertino
              </li>
              <li className="before:content-['e.'] before:mr-2">
                Coloca el horario de entrada y el horario de salida aproximado
              </li>
            </ol>
          </article>
        </div>
        {/*ARTICLE 2 */}
        <div ref={article2Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Alta nuevo Puesto
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Una vez que hayas dado de alta el área, podrás crear puestos
              relacionados a ella. Selecciona el botón más en el área principal
              de la pantalla y toca Puestos.
            </p>
            <br />
            <p>Llena las siguientes secciones:</p>
            <br />
            <span>1. Información General</span>
            <br />
            <ol className="mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Selecciona área a la que pertenece
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Tipo o nivel de la posición
              </li>
              <li className="before:content-['c.'] before:mr-2">
                Nombre de la posición
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Selecciona si esta posición tendrá acceso a dar permisos
              </li>
              <li className="before:content-['e.'] before:mr-2">
                Indica qué posición tiene el jefe inmediato
              </li>
              <li className="before:content-['f.'] before:mr-2">
                Si coordina con alguna posición en especial, selecciona de la
                lista
              </li>
              <li className="before:content-['g.'] before:mr-2">
                Redacta cuál es el objetivo principal de esta posición
              </li>
            </ol>

            <span>2. Autoridad de la posición</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Describe el nombre
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Si es una autoridad total, que solo esta posición tiene o se
                comparte con alguien más
              </li>
              <li className="before:content-['c.'] before:mr-2">
                Selecciona con quién se comparte
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Puedes agregar hasta 5 autoridades diferentes
              </li>
            </ol>

            <span>3. Responsabilidad del puesto</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Indica la responsabilidad que debe realizar esta posición. Debe
                estar redactado con dos verbos en infinitivo + la descripción +
                la finalidad que responde al porqué/ para qué de las acciones
                descritas
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Puedes agregar hasta 8 responsabilidades
              </li>
            </ol>

            <span>4. Descripción de la posición</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Años de experiencia que se requieren para cubrir este puesto
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Sector de experiencia de preferencia
              </li>
              <li className="before:content-['c.'] before:mr-2">
                Describe una breve experiencia que se requiere para cubrir la
                posición
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Indica los estudios requeridos
              </li>
              <li className="before:content-['e.'] before:mr-2">
                Especifica el estudio requerido
              </li>
              <li className="before:content-['f.'] before:mr-2">
                Indica si se permite trabajo remoto (home office)
              </li>
              <li className="before:content-['g.'] before:mr-2">
                Tipo o lugar en donde se va a laborar, ya sea en oficina o en
                campo
              </li>
              <li className="before:content-['h.'] before:mr-2">
                Selecciona los idiomas necesarios y su respectivo porcentaje
              </li>
              <li className="before:content-['i.'] before:mr-2">
                Determina los días de la semana que se requiere laborar
              </li>
              <li className="before:content-['j.'] before:mr-2">
                Indica los horarios aproximados en que se debe tener
                disponibilidad
              </li>
              <li className="before:content-['k.'] before:mr-2">
                Determina los conocimientos que se requieren para cubrir el
                puesto
              </li>
              <li className="before:content-['l.'] before:mr-2">
                Puedes agregar hasta 8 conocimientos diferentes
              </li>
            </ol>

            <p>
              Una vez que hayas llenado todos los campos, da click en guardar
              para registrar la nueva posición en el sistema.
            </p>
          </article>
        </div>
        {/*ARTICLE 3 */}
        <div ref={article3Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Alta nuevo Usuario
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Una vez que hayas dado de alta un puesto, podrás crear usuarios
              relacionados a el. Selecciona el botón más en el área principal de
              la pantalla y toca Usuario.
            </p>
            <br />
            <p>
              Primero toca la imagen de usuario, para escoger la imagen que
              tendrá el usuario en su perfil.
            </p>
            <br />

            <p>Llena las siguientes secciones:</p>
            <span>1. Información Personal</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Llena los nombres del nuevo usuario
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Coloca apellido paterno y materno
              </li>
              <li className="before:content-['c.'] before:mr-2">
                Puedes agregar el acta de nacimiento, dando click en el recuadro
                “Acta de nacimiento”
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Indica la fecha de nacimiento
              </li>
              <li className="before:content-['e.'] before:mr-2">
                Ciudad y estado de nacimiento
              </li>
              <li className="before:content-['f.'] before:mr-2">
                Coloca el género
              </li>
              <li className="before:content-['g.'] before:mr-2">
                El estado civil
              </li>
              <li className="before:content-['h.'] before:mr-2">
                En caso de tener hijos, indica la cantidad correcta
              </li>
              <li className="before:content-['i.'] before:mr-2">
                Agregar el celular
              </li>
              <li className="before:content-['j.'] before:mr-2">
                Indica el correo personal
              </li>
              <li className="before:content-['k.'] before:mr-2">
                Agrega el CURP con la cantidad de caracteres correspondiente
              </li>
              <li className="before:content-['l.'] before:mr-2">
                Adjunta un comprobante donde muestre el CURP, dando click en el
                recuadro “CURP”
              </li>
              <li className="before:content-['m.'] before:mr-2">
                Debes indicar el RFC con la cantidad de caracteres
                correspondiente
              </li>
              <li className="before:content-['n.'] before:mr-2">
                Adjunta un comprobante donde muestre el RFC, dando click en el
                recuadro “RFC”
              </li>
              <li className="before:content-['o.'] before:mr-2">
                Agrega el Número de Seguridad Social (NSS) con la cantidad de
                caracteres correspondiente
              </li>
              <li className="before:content-['p.'] before:mr-2">
                Adjunta un comprobante donde muestre el NSS, dando click en el
                recuadro “NSS”
              </li>
            </ol>
            <span>2. Información de Salud</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Indica si el nuevo usuario tiene alguna enfermedad crónica
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Selecciona si es alérgico a algún medicamento
              </li>
              <li className="before:content-['c.'] before:mr-2">
                En caso de indicar SI, especifica cuál
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Indica el tipo de sangre
              </li>
            </ol>
            <span>3. Domicilio</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Coloca la calle
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Número exterior e interior y código postal
              </li>
              <li className="before:content-['c.'] before:mr-2">
                Indica la colonia
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Ciudad y estado
              </li>
            </ol>
            <span>4. Contacto de Emergencia</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Nombre del contacto
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Apellido paterno y materno
              </li>
              <li className="before:content-['c.'] before:mr-2">Parentesco</li>
              <li className="before:content-['d.'] before:mr-2">Celular</li>
            </ol>

            <span>5. Contacto Academica</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Indica el grado de estudios y especifica cuál es
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Agrega comprobante de cada grado de estudios, dando click en el
                recuadro “Comprobante”
              </li>
              <li className="before:content-['c.'] before:mr-2">
                Toca el + para agregar hasta 3 grados de estudios
              </li>
            </ol>

            <span>6. Información Laboral</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Indica la empresa
              </li>
              <li className="before:content-['b.'] before:mr-2">
                El puesto desempeñado
              </li>
              <li className="before:content-['c.'] before:mr-2">
                El tiempo laborado en esa posición
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Toca el + para agregar hasta 3 puestos anteriores
              </li>
            </ol>
            <span>7. Puesto actual a Desempeñar</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Indica el centro en donde se va a laborar
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Fecha de ingreso
              </li>
              <li className="before:content-['c.'] before:mr-2">
                Toca el recuadro “CV”, para adjuntar el curriculum vitae
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Indica qué usuario será el jefe directo
              </li>
              <li className="before:content-['e.'] before:mr-2">
                Selecciona el puesto que desempeñará y el área
              </li>
              <li className="before:content-['f.'] before:mr-2">
                Indica si conoce y le fue entregado el reglamento interno de
                trabajo
              </li>
              <li className="before:content-['g.'] before:mr-2">
                Agrega el sueldo mensual bruto y prestaciones
              </li>
              <li className="before:content-['h.'] before:mr-2">
                Indica el correo institucional que se le ha otorgado
              </li>
              <li className="before:content-['i.'] before:mr-2">
                Así mismo, el teléfono institucional con su extensión si es el
                caso
              </li>
              <li className="before:content-['j.'] before:mr-2">
                Agrega el contrato entregado
              </li>
              <li className="before:content-['k.'] before:mr-2">
                Indica su fecha de inicio y fin si se necesita
              </li>
              <li className="before:content-['l.'] before:mr-2">
                Toca el + para agregar hasta 5 contratos
              </li>
              <li className="before:content-['m.'] before:mr-2">
                Agrega el banco y la cuenta de banco o clave interbancaria
              </li>
              <li className="before:content-['n.'] before:mr-2">
                Por último, coloca una contraseña provisional para el usuario
              </li>
              <li className="before:content-['o.'] before:mr-2">
                Confirma la contraseña
              </li>
            </ol>

            <br />
            <p>
              Una vez que hayas llenado todos los campos, da click en guardar
              para registrar el nuevo usuario en el sistema.
            </p>
            <br />

            <p>
              Ingresa a nombredelsistema/login, coloca correo,contraseña y
              posteriormente toca la flecha para acceder al sistema.
            </p>
            <br />
          </article>
        </div>
      </div>
      <section className="col-span-4 max-h-[60vh] overflow-auto px-8 py-6">
        <div className="flex max-w-[155px] whitespace-nowrap flex-col space-y-5">
          <button
            onClick={() => scrollToArticle(article1Ref,0)}
            className={`px-3 py-2 font-roboto font-normal text-[14px] 
                ${activeButton === 0 
                  ? 'border-l border-[#000000] text-grisHeading font-semibold' 
                  : 'text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold'}`}
          >
            {" "}
            Alta nueva Área
          </button>
          <button
            onClick={() => scrollToArticle(article2Ref,1)}
            className={`px-3 py-2 font-roboto font-normal text-[14px] 
                ${activeButton === 1 
                  ? 'border-l border-[#000000] text-grisHeading font-semibold' 
                  : 'text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold'}`}
          >
            Alta nuevo Puesto
          </button>
          <button
            onClick={() => scrollToArticle(article3Ref, 2)}
            className={`px-3 py-2 font-roboto font-normal text-[14px] 
                ${activeButton === 2 
                  ? 'border-l border-[#000000] text-grisHeading font-semibold' 
                  : 'text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold'}`}
          >
            Alta nuevo Usuario
          </button>
        
        </div>
      </section>
    </div>
  );
}

export default UserManagement;
