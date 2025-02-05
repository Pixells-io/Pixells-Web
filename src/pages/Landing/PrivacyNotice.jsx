import Footer from "@/layouts/Footer";
import React from "react";

function PrivacyNotice() {
  return (
    <div>
      <div className="mx-4 my-4 rounded-3xl bg-[#7794F915] px-6 py-6 text-center sm:mx-8">
        <span className="font-poppins text-2xl text-grisHeading">
          AVISO DE PRIVACIDAD
        </span>
        <div className="pt-14 text-justify font-roboto text-base text-grisHeading sm:px-20">
          <p class="mb-4">
            <strong>1. Responsable del Tratamiento de Datos Personales</strong>
            <br />
            <span>
              Kilauea (en adelante, "la Empresa"), con domicilio en Justo Sierra
              1830, Col. Ladrón de Guevara, Gdl, Jal, es responsable del
              tratamiento de sus datos personales conforme a lo dispuesto en la
              Ley Federal de Protección de Datos Personales en Posesión de los
              Particulares (LFPDPPP).
            </span>
          </p>

          <p class="mb-4">
            <strong>2. Finalidad del Tratamiento de Datos</strong>
            <br />
            Los datos personales que recabamos de usted serán utilizados para
            las siguientes finalidades:
            <ul class="ml-6 mt-2 list-disc">
              <li>Proveer los servicios y productos solicitados por usted.</li>
              <li>Informar sobre cambios o nuevos productos o servicios.</li>
              <li>Cumplir con obligaciones contractuales y fiscales.</li>
              <li>Evaluar la calidad del servicio que le brindamos.</li>
              <li>
                Envío de promociones, ofertas, y noticias relacionadas con
                nuestros productos y servicios.
              </li>
            </ul>
          </p>

          <p class="mb-4">
            <strong>3. Datos Personales Recabados</strong>
            <br />
            Para llevar a cabo las finalidades descritas en el presente aviso de
            privacidad, utilizaremos los siguientes datos personales:
            <ul class="ml-6 mt-2 list-disc">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección postal</li>
              <li>
                Información financiera, en caso de ser necesaria para el pago de
                nuestros productos o servicios
              </li>
            </ul>
          </p>

          <p class="mb-4">
            <strong>4. Transferencia de Datos Personales</strong>
            <br />
            La Empresa podrá compartir sus datos personales con terceros
            nacionales o extranjeros que sean necesarios para cumplir con las
            finalidades descritas, incluyendo:
            <ul class="ml-6 mt-2 list-disc">
              <li>
                Proveedores de servicios de TI, para el almacenamiento y
                procesamiento de datos.
              </li>
              <li>
                Instituciones financieras, para la gestión de pagos y
                transacciones.
              </li>
            </ul>
          </p>

          <p class="mb-4">
            <strong>5. Derechos ARCO</strong>
            <br />
            Usted tiene derecho a conocer qué datos personales tenemos de usted,
            para qué los utilizamos y las condiciones del uso que les damos
            (Acceso). Asimismo, es su derecho solicitar la corrección de su
            información personal en caso de que esté desactualizada, sea
            inexacta o incompleta (Rectificación); que la eliminemos de nuestros
            registros o bases de datos cuando considere que la misma no está
            siendo utilizada conforme a los principios, deberes y obligaciones
            previstas en la normativa (Cancelación); así como oponerse al uso de
            sus datos personales para fines específicos (Oposición).
            <br />
            Para ejercer cualquiera de los derechos ARCO, deberá enviar una
            solicitud a nuestro correo electrónico [correo electrónico de
            contacto] o por escrito a nuestra dirección física. La solicitud
            deberá incluir:
            <ul class="ml-6 mt-2 list-disc">
              <li>
                Nombre completo y correo electrónico o domicilio para comunicar
                la respuesta.
              </li>
              <li>
                Descripción clara y precisa de los datos personales respecto de
                los cuales se busca ejercer alguno de los derechos ARCO.
              </li>
              <li>
                Cualquier otro elemento que facilite la localización de los
                datos personales.
              </li>
            </ul>
          </p>

          <p class="mb-4">
            <strong>6. Modificaciones al Aviso de Privacidad</strong>
            <br />
            La Empresa se reserva el derecho de realizar en cualquier momento
            modificaciones o actualizaciones al presente aviso de privacidad,
            para la atención de novedades legislativas, políticas internas o
            nuevos requerimientos para la prestación u ofrecimiento de nuestros
            servicios o productos.
            <br />
            Estas modificaciones estarán disponibles al público a través de
            nuestro sitio web{" "}
            <a href="https://pixels.io" target="_blank">
              pixels.io
            </a>{" "}
            o se las haremos llegar al último correo electrónico que nos haya
            proporcionado.
          </p>

          <p class="mb-4">
            <strong>7. Aceptación del Aviso de Privacidad</strong>
            <br />
            El uso de nuestros servicios o la contratación de nuestros productos
            implica que ha leído, entendido y aceptado los términos de este
            aviso de privacidad. Si no está de acuerdo con los términos, le
            solicitamos que no utilice nuestros servicios.
          </p>

          <p class="mb-4">
            <strong>8. Contacto</strong>
            <br />
            Si tiene alguna duda sobre este Aviso de Privacidad, puede
            contactarnos en:
            <ul class="ml-6 mt-2 list-disc">
              <li>
                Correo electrónico:{" "}
                <a href="mailto:hola@yacamba.com">hola@yacamba.com</a>
              </li>
              <li>
                Dirección: Justo Sierra 1830, Col. Ladrón de Guevara, Gdl, Jal
              </li>
            </ul>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyNotice;
