<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-dark 1
      h1 Generalidades del turismo

    .row.justify-content-center.align-items-center
      .col-xxl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up")
        img(src='@/assets/curso/tema1/imagen1.jpg')
      .col-xxl-6.col-lg-6.col-md-10.col-sm-11.col-11(data-aos="fade-up")
        .cajon.color-primario.p-4.mb-4.mt-4.fondo1
          p Debido al carácter multifacético del turismo, se puede encontrar diferentes definiciones que han sido aportadas desde varias disciplinas como la economía, historia, psicología, ecología, geografía, ciencias políticas, administrativas, entre otras; sin embargo,  una de las primeras definiciones aceptadas mundialmente ha sido la de la Organización Mundial del Turismo (OMT, 1994), quien menciona que “el turismo comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual, por un periodo de tiempo consecutivo inferior a un año, con fines de ocio, por negocios y otros”.
        p En el 2007, esta misma organización replanteó la definición agregando: “El turismo es un fenómeno social, cultural y económico relacionado con el movimiento de las personas a lugares que se encuentran fuera de su lugar de residencia habitual por motivos personales o de negocios/profesionales”.
      p El término hace entonces referencia al acto de visitar un destino por fuera del entorno habitual del sujeto e incluye la característica “movilidad” y el “carácter temporal” de los viajes.
      separador
      #objetivos.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
        h2 1.1 Objetivos, características y beneficios del turismo
      p Teniendo en cuenta los diferentes propósitos que enmarca el sector del turismo, se ha establecido como objetivos principales entre otros, los siguientes:
      .row.justify-content-center(data-aos="fade-up-right")
        .col-xxl-3.col-lg-4.col-md-5.col-9.fondo2.mb-4
          h3.text-white.text-center.pt-2.pb-3.mb-0 Objetivos del turismo 
    //--tarjetas slide
    .row.mb-5.justify-content-center(data-aos="fade-up-left")
      .col-sm-6.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido     
              img(src='@/assets/curso/tema1/slidepos1.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide1.svg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slidepos2.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide2.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slidepos3.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide3.svg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slidepos4.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide4.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slidepos5.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide5.svg')})`}")
    p De igual forma, se ofrecen multiplicidad de beneficios como puede observarse en el siguiente recurso educativo:
    .row.justify-content-center
      .col-xxl-3.col-lg-4.col-md-5.col-9.fondo2.mb-4
        h3.text-white.text-center.pt-2.pb-3.mb-0 Beneficios del turismo

    .row.justify-content-center.align-items-center
      .col-xxl-6.col-lg-6.col-md-10.col-sm-11.col-11.mb-5.mb-md-0(data-aos="fade-up-left")
        LineaTiempoD
          p.text-small(numero="1" titulo="Impacto en población receptora") Ayuda a los residentes de los destinos a tener mejor calidad de vida y disminuir los niveles de pobreza, además de posibilitar el contacto con otras culturas y comunidades. 
          
          p.text-small(numero="2" titulo="Crecimiento económico e inversión") Promueve el crecimiento económico y la inversión local en infraestructura y edificaciones aptas para el turismo, y servicios relacionados con el gremio.

          p.text-small(numero="3" titulo="Generación de empleo") Genera oportunidades de empleo, bien sea de forma directa o indirecta, estableciéndose mediante las temporadas de demanda o durante todo el año, de acuerdo con el lugar de destino.
          
          p.text-small(numero="4" titulo="Desarrollo de actividades asociadas") Contribuye a un mayor desarrollo de otras actividades como la agricultura, pesca y artesanía en los destinos receptores.

          p.text-small(numero="5" titulo="Mejora en prestación de servicios") Los diferentes medios ofrecidos al turista como el de trasporte o de vías, mejoran en cuanto a la calidad y la frecuencia. 

          p.text-small(numero="6" titulo="Contribuye en la macroeconomía") Contribuye a la generación del PIB, balanza de pagos y otros indicadores macroeconómicos de diferentes países.
      .col-xxl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
        img.mt-4(src='@/assets/curso/tema1/imagen2.jpg')
    .row.justify-content-center.mt-5
      .col-xxl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/imagen3.jpg')
      .col-xxl-6.col-lg-6.col-md-10.col-sm-11.col-11.mt-4(data-aos="fade-up-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Fenómeno social")
            .col-md-11.mb-4.mb-md-0
              p Surge a partir de la interacción social de individuos y/o grupos humanos.
          .row(titulo="Implica desplazamiento")
            .col-md-11.mb-4.mb-md-0
              span Desde el lugar de residencia habitual.
              br
              span Este desplazamiento es voluntario y temporal, debe ser elegido y realizado por voluntad propia. Los individuos o grupos deciden por ellos mismos cuándo y hacia dónde desplazarse. 
              br
              span Y puede realizarse de forma individual o grupal. 

          .row(titulo="Motivación por diferentes razones")
            .col-md-11.mb-4.mb-md-0
              p La motivación principal no es realizar una actividad lucrativa o remunerada: no se incluyen los desplazamientos que buscan recibir un sueldo, salario o retribución en el lugar de destino.
              p Sus motivaciones fundamentales son ejercer el derecho al ocio y hacer uso del tiempo libre e implican recreación, descanso, cultura y salud.
          .row(titulo="Interrelaciones de diferente índole")
            .col-md-11.mb-4.mb-md-0
              p Genera y se produce a través de interrelaciones de importancia social, económica y cultural: el gasto ejercido por los turistas impacta en la generación de empleos directos e indirectos en todos los sectores relacionados con la actividad.
          .row(titulo="Actividad multidisciplinaria y heterogénea")
            .col-md-11.mb-4.mb-md-0
              p Requiere la participación de diversos sectores económicos, productivos y sociales, a distintos niveles, es decir, gerenciales, técnicos y operativos.
      separador
      #elementos.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
        h2 1.2 Elementos básicos o factores que componen la actividad turística

    .row
      .col-xxl-12.col-lg-12.col-12.p-0(data-aos="fade-up-left")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/figurainfo1.svg')

          .tarjeta.fondo4.p-3(x="56.4%" y="11%" numero="+")
            .titulo-sexto.color-primario
              p.text-bold.mb-0 1. LA DEMANDA
            span Formada por el conjunto de consumidores de bienes y servicios turísticos que buscan satisfacer sus necesidades de viaje. Según la OMT, es el conjunto de turistas que, de forma individual o colectiva, están motivados por una serie de productos o servicios turísticos con el objetivo de cubrir sus necesidades.

          .tarjeta.fondo4.p-3(x="56.4%" y="35.5%" numero="+")
            .titulo-sexto.color-primario
              p.text-bold.mb-0 2. LA OFERTA
            span Son los productos y servicios que un destino pone a disposición del turista para que éste los adquiera al precio interno y por un periodo de tiempo determinado.

          .tarjeta.fondo4.p-3(x="56.4%" y="61%" numero="+")
            .titulo-sexto.color-primario
              p.text-bold.mb-0 3. EL ESPACIO GEOGRÁFICO
            span Lugar donde se produce la interacción entre la oferta y la demanda, es decir donde se realiza la práctica de actividades turísticas. La planta turística y los atractivos turísticos son los elementos primordiales del espacio turístico.

          .tarjeta.fondo4.p-3(x="56.4%" y="82%" numero="+")
            .titulo-sexto.color-primario
              p.text-bold.mb-0 4. LOS OPERADORES DEL MERCADO
            span Son aquellas empresas y organismos que facilitan la correcta relación entre la oferta y la demanda, como ejemplo de ellos se pueden nombrar: organismos públicos y privados dedicados a la regulación y/o a la promoción del turismo, compañías de transporte y agencias de viajes.

    p(data-aos="fade-up-left") Según la OMT (1998) “los operadores turísticos son aquellos agentes que participan en la actividad turística en calidad de intermediarios entre el consumidor final (el turista, la demanda turística) y el producto turístico (bien o servicio, destino turístico) aunque puede extender su acción intermediadora al resto de la oferta complementaria (restaurantes, hoteles, conjunto de oferta de alojamiento, etc.)".
    separador
    #prestadores.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.3 Prestadores de servicios turísticos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-up-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen4.jpg')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.mb-0 Son todas las empresas que tienen contacto con los viajeros para proporcionarles diferentes bienes y servicios turísticos dentro de un territorio con atractivo especial. Para el caso de Colombia, todos deben contar con el Registro Nacional de Turismo y en lo posible cumplir con los requisitos de sostenibilidad del destino.

    p.mt-5(data-aos="fade-up-left") Los prestadores de servicios turísticos deben estar pendientes de que clientes o proveedores acaten las normas de operación local; adicionalmente deben asegurar la capacitación del personal de trabajo y hacer cumplir los principios de la actividad turística por parte de todos los visitantes. 
    p.mb-5(data-aos="fade-up-left") Los prestadores de este tipo de servicios, tiene funciones específicas para con los diferentes actores del proceso, entre las que se encuentran:

    .row(data-aos="fade-up-left")
      .col-xxl-12.col-lg-12.col-12.p-0
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/figurainfo2.svg')

          div(x="13.2%" y="26.6%" tooltip="Click para leer mas..." numero="+")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-11.col-11
                h4.text-dark 1. Alojamiento y servicios de hospedaje
                p.text-dark Establecimiento abierto al público en general, dedicado a brindar hospedaje temporal mediante precio, con o sin otros servicios complementarios como alimentación, <i>tours</i>, <i>spa</i> entre otros.
                p.text-dark Puede ser un hotel, hotel-apartamento, hostal, pensión, casa rural, etc. 

              .col-xxl-5.col-lg-5.col-md-5.col-sm-11.col-11
                img(src='@/assets/curso/tema1/figuramodal1.svg')
          div(x="24.3%" y="32.2%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-11.col-11
                h4 2. Transporte
                p Es aquel servicio de alquiler de vehículos, con o sin conductor, que se facilita como parte de la actividad turística y que se presta bajo la responsabilidad de una empresa legalmente constituida para tales fines y debidamente habilitada en esta modalidad.
              .col-xxl-5.col-lg-5.col-md-5.col-sm-11.col-11
                img(src='@/assets/curso/tema1/figuramodal2.svg')

          div(x="34.6%" y="27.4%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-11.col-11
                h4.text-dark 3. Restaurantes o establecimientos de gastronomía
                p.text-dark Restaurantes o establecimientos de gastronomía: establecimientos comerciales cuya actividad económica está relacionada con la producción, servicio y venta de alimentos y/o bebidas para consumo. 
              .col-xxl-5.col-lg-5.col-md-5.col-sm-11.col-11
                img(src='@/assets/curso/tema1/figuramodal3.svg')

          div(x="61.2%" y="29.7%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-11.col-11
                h4 4. Agencias de viajes y turismo (vts, operadoras y mayoristas)
                p Agencias de viajes y turismo (vts, operadoras y mayoristas): son las empresas que se dedican profesionalmente al ejercicio de actividades turísticas dirigidas a la prestación de servicios, directamente o como intermediarios entre los viajeros y proveedores de los servicios.
                p Hay varios tipos:
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    | Agencias de viajes y turismo: se dedican profesionalmente a vender, operar y organizar planes turísticos. 
                  li
                    i.lista-ul__vineta
                    | Agencias de viajes operadoras: se dedican profesionalmente a operar planes turísticos.
                  li 
                    i.lista-ul__vineta
                    | Agencias mayoristas, que se dedican profesionalmente a programar y organizar planes turísticos
              .col-xxl-4.col-lg-4.col-md-5.col-sm-11.col-11
                img(src='@/assets/curso/tema1/figuramodal4.svg')

          div(x="67.5%" y="28.8%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-11.col-11
                h4 5. Guías de turismo
                p Tienen como función orientar, conducir, instruir y asistir al turista, viajero o pasajero durante la ejecución del servicio contratado.
              .col-xxl-5.col-lg-5.col-md-5.col-sm-11.col-11
                img(src='@/assets/curso/tema1/figuramodal5.svg')

          div(x="90%" y="39.5%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-11.col-11
                h5 6. Operador profesional de eventos 
                p Son Operadores Profesionales de Congresos, Ferias y Convenciones, las personas naturales o jurídicas legalmente constituidas que se dediquen a la organización de certámenes como congresos, convenciones, ferias, seminarios y reuniones similares, en sus etapas de gerenciamiento, planeación, promoción y realización, así como a la asesoría y/o producción de estos certámenes en forma total o parcial.
              .col-xxl-5.col-lg-5.col-md-5.col-sm-11.col-11
                img(src='@/assets/curso/tema1/figuramodal6.svg')

    separador
    #prestadores.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.4 Turista y sus motivaciones

    p(data-aos="fade-up-left") Cualquier persona que se encuentre realizando un viaje (por cualquier motivo) entre lugares geográficamente distintos y fuera de su entorno habitual, se puede llamar viajero; sin embargo, cuando una persona se establece en otro lugar para trabajar, o porque son refugiados, diplomáticos o migrantes, no serán considerados viajeros.
    p(data-aos="fade-up-left") Según esta definición y teniendo en cuenta que visitante es toda persona que se desplaza a una localidad donde no tiene fijada su residencia, Gurría (2004) categoriza estos viajeros en dos tipos (ver figura 1):
    .titulo-sexto.color-acento-contenido(data-aos="fade-up-left")
      span.text-bold.mb-0 Figura 1 
      span Diferencias entre turista y excursionista.
    .row.mb-5.justify-content-center.align-items-center
      .col-xxl-4.col-xxl.pe-0.col-xxl.me-3.col-xxl.pb-4.col-xl-5.col-lg-6.col-md-8.col-sm-10.col-12.col-lg.mb-5.mb-lg-0(data-aos="fade-up-left")
        .tarjeta-avatar
          img.sizeimg(src='@/assets/curso/tema1/turista.svg')
          .tarjeta.fondo3
            ul.lista-ul--color.col-xxl.ps-4.pb-5.mb-5.col-xxl.pe-4.col-md.me-2.col-sm.ps-4.col-xl-11.col-xl.ms-3
              li 
                i.lista-ul__vineta
                | Son visitantes que pernotan o amanecen en el lugar. 
              li
                i.lista-ul__vineta
                | Su estancia es superior o igual a 24 horas en el destino.
              li 
                i.lista-ul__vineta.mb-5
                | Razones del viaje: recreo, vacaciones, salud, estudio, religión, deportes o negocios.

      .col-xxl-4.col-xxl.pe-0.col-xxl.me-3.col-xxl.pb-3.col-xl-5.col-lg-6.col-md-8.col-sm-10.col-12.col-lg.mb-5.mb-lg-0(data-aos="fade-up-right")
        .tarjeta-avatar
          img.sizeimg(src='@/assets/curso/tema1/excursionista.svg')
          .tarjeta.fondo5
            ul.lista-ul--color.px-4.col-xxl.pb-5.col-xxl.mb-5.mb-5.col-xxl.pe-4.col-md.me-2.col-lg-11.col-xl-11
              li 
                i.lista-ul__vineta
                | Son los visitantes que se demoran menos de 24 horas en el destino.
              li
                i.lista-ul__vineta
                | Son viajeros que se desplazan a ciudades fronterizas, ya sea en su propio vehículo o en cruceros, a destinos de costa.
              li 
                i.lista-ul__vineta.mb-2
                | Se excluyen a los viajeros en un país.

    .row.justify-content-center
      .col-xxl-12(data-aos="fade-up")
        .cajon.color-primario.p-4.mb-4.mt-4.fondo1
          .row.justify-content-center.align-items-center
            .col-xxl-1.col-xl-1.col-lg-2.col-md-3.col-sm-4.col-4
              img(src='@/assets/curso/tema1/figura1.svg')
            .col-xxl-11.col-xl-11.col-lg-10.col-md-9.col-sm-8.col-8
              h4 Motivación para realizar el viaje
              p Cada turista o excursionista a su vez, tiene diferentes motivaciones para realizar su viaje. En el contexto turístico, este término se define como el conjunto de necesidades o fuerzas psicológicas que “predisponen a una persona a participar en una actividad turística”. 

    .row.justify-content-center.my-5
      .col-xxl-6.col-xl-6.col-lg-6.col-md-8.col-sm-9.col-11(data-aos="fade-down")
        img(src='@/assets/curso/tema1/piramide.svg')

    p(data-aos="fade-up-left") Respecto a la satisfacción de necesidades, se ha hablado mucho en la literatura, sin embargo, el autor que ha sido más reconocido en el tema, ha sido Maslow, quien brindó una teoría psicológica a partir de la cual se diseñó la jerarquía de las necesidades humanas que incluye las de seguridad (protección, seguridad o refugio), las fisiológicas (hambre, descanso o sed), las necesidades de estima (autoestima, estatus o reconocimiento por los demás), las necesidades sociales (de amor o pertenencia), y las necesidades de autorrealización (de realización y desarrollo personal).  
    p(data-aos="fade-up-left") Así pues, se puede decir que todos los viajes pueden tener un objetivo o finalidad diferente; habrá quienes busquen recreación, o quienes lo hagan por motivos profesionales o bien por otras razones como estudio, salud entre otros (ver tabla1).  
    .titulo-sexto.color-acento-contenido.my-5(data-aos="fade-up-left")
      span.text-small.mb-0 Tabla 1 
      span.text-small.mb-0 Relación entre necesidades, motivación y referencia turísticas
    .tabla-c(data-aos="fade-up-right")
      table
        tr.fondo6
          th 
            h4.text-center Necesidad
          td
            h4.text-center Motivación
          td
            h4.text-center Referencia turística
        tr
          th 
            p.text-bold.text-center Fisiológica
          td 
            p.text-center Relax
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Escapada
              li
                i.lista-ul__vineta
                | Relax
              li 
                i.lista-ul__vineta
                | Alivio de la tensión
              li 
                i.lista-ul__vineta
                | Deseo de sol
              li 
                i.lista-ul__vineta
                | Relajación mental y física
        tr
          th 
            p.text-bold.text-center Seguridad
          td 
            p.text-center Seguridad
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Salud
              li
                i.lista-ul__vineta
                | Diversión
              li 
                i.lista-ul__vineta
                | Mantenerse en forma
        tr
          th 
            p.text-bold.text-center Pertenencia
          td 
            p.text-center Amor
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Unión familiar
              li
                i.lista-ul__vineta
                | Relaciones sociales
              li 
                i.lista-ul__vineta
                | Compañerismo
              li 
                i.lista-ul__vineta
                | Mantenimiento de lazos personales
              li 
                i.lista-ul__vineta
                | Relaciones interpersonales
              li 
                i.lista-ul__vineta
                | Raíces y etnia
              li 
                i.lista-ul__vineta
                | Afecto familiar
        tr
          th 
            p.text-bold.text-center Estima
          td 
            p.text-center Obtención de status
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Auto convencimiento de logros
              li
                i.lista-ul__vineta
                | Prestigio
              li 
                i.lista-ul__vineta
                | Reconocimiento social
              li 
                i.lista-ul__vineta
                | Mejora del ego
              li 
                i.lista-ul__vineta
                | Reconocimiento profesional
              li 
                i.lista-ul__vineta
                | Desarrollo personal
              li 
                i.lista-ul__vineta
                | Status y prestigio
        tr
          th 
            p.text-bold.text-center Autodesarrollo
          td 
            p.text-center Ser sincero con uno mismo
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Exploración y autoevaluación
              li
                i.lista-ul__vineta
                | Autodescubrimiento 
              li 
                i.lista-ul__vineta
                | Satisfacción interna 
        tr
          th 
            p.text-bold.text-center Saber y entender
          td 
            p.text-center Conocimientos
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Cultura 
              li
                i.lista-ul__vineta
                | Educación 
              li 
                i.lista-ul__vineta
                | Pasión por viajar
              li 
                i.lista-ul__vineta
                | Interés en otras culturas
        tr
          th 
            p.text-bold.text-center Estética
          td 
            p.text-center Aprecio de la belleza
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Paisajes
              li
                i.lista-ul__vineta
                | Medioambiente
              li 
                i.lista-ul__vineta
                | Manifestaciones culturales y artísticas
    p.my-5.text-center(data-aos="fade-up") Nota. Adaptado de Gutiérrez y Bordas (1993) por Cordente Rodríguez, M; Mondéjar Jiménez, J.A; Esteban Talaya, A (s.f.).
    p.mt-5(data-aos="fade-up") Según la OMT, el perfil del turista ha ido evolucionando durante los últimos años. Hoy por hoy, se puede encontrar un viajero mucho más exigente, informado, digital y comprometido con el medio ambiente y el entorno. 
    p.mb-5(data-aos="fade-up") A pesar de que se siguen presentando las motivaciones descritas en la sección anterior, también se han venido presentando otras como la práctica de negocios, actividades saludables, formación o aprendizaje; actividades de sanación o espiritualidad y enriquecimiento cultural; todas ellas han dado lugar a nuevas tipologías de turista como puede apreciarse en el siguiente recurso educativo, se puede ver:

    //-slider    
    .tarjeta.tarjeta--azul.p-4.mb-5.fondo7(data-aos="fade-up-right")
      SlyderA.pt-4(tipo="b")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 El turista gastronómico
            p También llamado <i>“foodie”</i>, su viaje se basa en su pasión por la gastronomía. Les gusta conocer bares, <i>pubs</i> o restaurantes, degustando la comida local del país.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/gastronomico.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 El turista cultural
            p Visita lugares donde la cultura y el patrimonio histórico-artístico son destacables. Son turistas con alta capacidad de gasto y altos niveles de educación que son capaces de estimular la actividad cultural de un destino turístico.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/cultural.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 El turista de negocios y los nómadas digitales 
            p El turista de negocios es impulsado por su trabajo para viajar por negocios y reuniones. Los nómadas digitales trabajan como freelancers y encuentran en los viajes una fuente de inspiración para poder trabajar. Este colectivo dispone de cortos periodos de tiempo para conocer nuevos destinos.

          .col-md-7
            figure
              img(src='@/assets/curso/tema1/nomada.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 El turista comprador
            p La principal motivación para viajar es adquirir productos por fuera de su país de origen. En el <i>"shopping"</i> se prioriza la calidad tanto en los comercios donde se realizan las compras como en el tiempo que se dedica a las mismas.
            p Este tipo de turistas combina su viajes con el turismo cultural conociendo así los lugares más importantes del destino, así como sus mejores lugares para comprar.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/comprador.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 El turista aventurero
            p Es el interesado por las nuevas sensaciones; cuenta con un gran sentido de libertad que lo mueve a conocer el mundo sin mucha planificación.
            p Busca recreación activa para su entretenimiento, por ello normalmente se le asocia con actividades al aire libre.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/aventurero.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Mascotas con dueño
            p Dentro de los nuevos perfiles de viajeros ocupa un lugar cada vez más importante el de los turistas que viajan con mascotas, o más bien, las mascotas que viajan con sus dueños, ya que es el animal de compañía el verdadero protagonista del viaje y el que condiciona el destino, el alojamiento elegido y el transporte.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/mascotas.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 <i>PANK</i>: tías con sobrinos
            p Las <i>PANK (Professional Aunt, No Kids)</i> son mujeres que no tienen hijos pero que se llevan de viaje a sus sobrinos. 
            p Es una tendencia al alza que ya se está convirtiendo en todo un nicho de mercado, sobre todo en EEUU y Europa.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/pank.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Viajeros solos
            p Con edades entre los 35 y los 60 en busca de destinos poco convencionales durante cualquier época del año.
            p Ese es el perfil predominante del viajero single, un nuevo tipo de turista que apuesta por descubrir el mundo en solitario.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/solos.png')
    separador
    #evolucion.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.5 Evolución del turismo
    p.mb-5(data-aos="fade-up-left") Para el caso colombiano, el turismo comenzó a desarrollarse en mayor medida con la llegada del tren a comienzos del siglo XX, lo que permitió que varias familias pudieran realizar viajes cortos de descanso y diversión a los destinos cercanos a sus hogares. Lo anterior también impulsó la organización de <i>“tours”</i>, ya que algunas personas comenzaron a ofrecer viajes incluyendo los pasajes de tren, alimentación, alojamientos en establecimientos como fincas y hoteles, y visitas a monumentos y recintos religiosos. Se podrá entender un poco más sobre la evolución del turismo con la siguiente línea del tiempo:
    .row.justify-content-center(data-aos="fade-up-right")
      .col-xxl-10.col-lg-10.col-md-11.col-11.fondo9
        LineaTiempoB.m-5(:datos="datosLineaTiempoB")    

    p.my-5(data-aos="fade-up-left") Así surgieron las primeras agencias de viajes, que posteriormente a mediados de siglo, con la llegada de la aviación al país, crecieron en mayor medida, porque tuvieron la oportunidad de incursionar en el ámbito internacional.
    .row.justify-content-around.align-items-center(data-aos="fade-up-left")
      .col-xxl-10.col-xl-10.col-11.col-md-11
        .tarjeta.fondo8.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Se invita a conocer un poco más sobre el turismo, revisando el siguiente artículo publicado por El Tiempo el 16 de octubre del 2008, que agrupa los 25 hitos de la historia del turismo colombiano, y que puede consultar en el siguiente enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/25 hitos de la historia del turismo colombiano.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.my-5(data-aos="fade-up-left") En cuanto a las tendencias que rigen el turismo, se encuentra que la FITUR (2021), que es la feria de turismo más importante de España y Procolombia (2021), indica que entre las preferencias del turismo en los años entrantes estarán:
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-lg-6.col-md-6.col-sm-10.col-11(data-aos="fade-up-left")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Ecoturismo y turismo sostenible") Un modo de hacer turismo que consiste en el respeto por el medio ambiente y el planeta, acorde con los principios de sostenibilidad y la conservación de los recursos de los destinos turísticos.

          p.text-small(numero="2" titulo="<i>Mindful Travel</i>") Es un modo de viajar relacionado con el bienestar, autocuidado y la transformación personal. Son viajes tranquilos donde no se cumple con horarios estrictos ya que su principal objetivo es que los turistas, realmente conecten con el destino, con su cultura, sus costumbres y tradiciones.

          p.text-small(numero="3" titulo="Experiencias turísticas") Los turistas buscan experiencias memorables, sentir emociones y vivir aventuras placenteras en cada uno de sus viajes. El viajero experto busca actividades distintas, destinos turísticos que ofrezcan atractivos y experiencias diferentes, lejos del turismo masivo y en busca de vivencias en lugares especiales.

          
          p.text-small(numero="4" titulo="Turismo de viajes nómadas") Son los empresarios y empleados que se desplazan hacia cualquier destino con la intención de trabajar a distancia. Este tipo de turismo también combinado con los viajes, es una oportunidad excelente para que los destinos ofrezcan espacios ideales para trabajar y a la vez viajar. 
      .col-xxl-6.col-lg-6.col-md-6.col-sm-11.col-11(data-aos="fade-up-right")
        img.mt-4(src="@/assets/curso/tema1/imagen5.jpg")
    p.my-5(data-aos="fade-up-left") También se puede encontrar nuevas preferencias de los turistas a la hora de viajar como:
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-lg-6.col-md-6.col-sm-11.col-11(data-aos="fade-up-left")
        img.mb-4(src="@/assets/curso/tema1/imagen6.jpg")
      .col-xxl-6.col-lg-6.col-md-6.col-sm-10.col-11(data-aos="fade-up-right")
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Preferencia por destinos turísticos no masificados y viajes de una corta estancia en fechas de baja demanda.
          li
            i.fas.fa-check
            | Búsqueda de alojamientos de pequeño tamaño y sin espacios compartidos, como viviendas de turismo rural, apartamentos turísticos y bungalow.
          li 
            i.fas.fa-check
            | Interés en destinos de naturaleza, donde sea posible la realización de actividades al aire libre y espacios abiertos.
          li 
            i.fas.fa-check
            | Reservas a última hora y políticas que permitan la cancelación gratuita.
          li 
            i.fas.fa-check
            | Actividades turísticas en grupos reducidos.
          li 
            i.fas.fa-check
            | Turismo individual.
    separador
    #morfologia.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.6 Morfología del turismo
    p(data-aos="fade-down") El turismo se puede clasificar según el tipo de desplazamiento que se haga, como se puede apreciar en la siguiente figura 2:
    .titulo-sexto.color-acento-contenido(data-aos="fade-up-left")
      span.text-bold.mb-0 Figura 2 
      span Clasificación de los tipos de turismo, según el desplazamiento

    .row.mb-5.justificar.align-items-center(data-aos="fade-up-left")
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-11.col-11.margenesx
        .tarjeta-avatar.tamanotipo.fondo10
          .tarjeta
            p.px-5.ms-3 Realizado por los no residentes, en el territorio económico del país.

      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-11.col-11.margenesx
        .tarjeta-avatar.fondo11.tamanotipo
          .tarjeta
            p.px-5.ms-3 Residentes de propio país se dirigen a otros países.
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-11.col-11.margenesx
        .tarjeta-avatar.tamanotipo.fondo12
          .tarjeta
            p.px-5.ms-3 El realizado por los residentes en el territorio económico del país.
    p.my-5(data-aos="fade-up-left") En cuanto al turismo según la actividad desarrollada, en el siguiente recurso se podrá consultar con mayor detalle, la clasificación respectiva:
    .row.justify-content-center(data-aos="fade-up-right")
      .col-xxl-6.col-xl-7.col-lg-8.col-md-10.col-12.fondo2.mb-5
        h3.text-white.text-center.pt-2.pb-3.mb-0 Tipos de turismo según la actividad desarrollada
    //-slider    
    .tarjeta.tarjeta--azul.p-4.mb-5.fondo13(data-aos="fade-up-left")
      SlyderA.pt-4.otroslide(tipo="b")
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo sostenible
            p El turismo que tiene plenamente en cuenta las repercusiones actuales y futuras, económicas, sociales y medioambientales para satisfacer las necesidades de los visitantes, de la industria, del entorno y de las comunidades anfitrionas. 
            p Poco a poco la sociedad es cada vez más consciente del impacto que sus acciones tienen en el entorno y el turismo no es una excepción.
            p Muchas personas buscan que sus vacaciones no tengan repercusiones en el medio ambiente o al menos reducirlas al máximo.
        
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/sostenible.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo rural
            p Ofrece al turista la oportunidad de experimentar el encuentro con las diferentes formas de vivir de las comunidades que cohabitan en un ambiente rural y además lo sensibiliza sobre el respeto y valor de su identidad cultural.
            p Este tipo de turismo de complementa con el agroturismo, que consiste en involucras al turista, con las labores del campo y agrícolas, en donde se puede aprender técnicas, cultura y vivir en el entorno natural de conservación.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/rural.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo de aventura
            p Son los viajes que tienen como fin, realizar actividades recreativas, asociadas a desafíos impuestos por la naturaleza.
            p En tierra, agua, aire, disfrutar de: ciclismo de montaña, alpinismo, <i>rappel</i>, espeleísmo, cabalgata, descenso ríos, pesca recreativa, <i>rafting</i> / kayakismo, vuelo en parapente vuelo en ala delta y <i>bungee jumping</i>.

          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/aventura.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo gastronómico
            p Es un tipo de turismo emergente que atrae a viajeros que no solo buscan comer bien, sino descubrir que hay detrás de la gastronomía de un destino, vivir experiencias culinarias, recorrer la zona con rutas de vinos y tapas y visitar mercados en los que descubrir productos autóctonos.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/gastro.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo de negocios
            p Los viajes de negocios, MICE (por sus siglas en ingles,<i> Meetings, Incentives, Conventions and Exhibitions</i>),se refiere a los traslados de una ciudad o país a otra, relacionados con actividades corporativas o laborales. Este puede ser individual o grupal.
            ul.lista-ul--color
              li 
                i.fas.fa-caret-right
                | Es utilizado por empresarios, ejecutivos, comerciales y otros profesionales para cerrar negocios, captar clientes o prestar servicios.
              li
                i.fas.fa-caret-right
                | El cliente suele ser de alto poder adquisitivo.
              li 
                i.fas.fa-caret-right
                | Turismo fundamentalmente urbano
              li 
                i.fas.fa-caret-right
                | Se destacan las reuniones, congresos, convenciones, viajes de incentivos.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/negocios.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo de bienestar
            p Este incremento responde, sobre todo, a un cambio de mentalidad en la sociedad. Las personas están más implicadas en cuestiones relacionadas con su bienestar físico y mental. De ahí que cada vez surjan más ofertas de viajes que incluyen retiros de yoga, una alimentación saludable, tratamientos <i>wellness</i> y demás actividades relacionadas con el turismo de bienestar.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/bienestar.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo sol y playa
            p Aunque generalmente es masivo, de alto consumo y tiene un impacto considerable sobre los ecosistemas y la cultura anfitriona; hoy por hoy este tipo de turismo se viene combinando con la sostenibilidad, iniciativas de cuidados del medio ambiente y los viajes de bienestar, con la intención de disminuir los impactos adversos y cuidar de los ecosistemas.

          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/solyplaya.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 El turismo urbano
            p Son los viajes realizados a las grandes ciudades y centros urbanos del mundo. El turista busca grandes aeropuertos con vuelos directos a cualquier parte del mundo, amplia infraestructura hotelera (adaptada a todas las necesidades) y una gran oferta gastronómica y actividades de ocio. El turismo urbano engloba a su vez relaciones de negocios, turismo educativo y turismo cultural puesto que las ciudades aglutinan una variada y robusta oferta de ocio y entretenimiento.
        
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/noche.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo médico/salud
            p Es aquel en el que el turista se moviliza con la finalidad de realizar una consulta médica o someterse a un proceso quirúrgico al que no tiene acceso en su lugar de origen. Dentro de este grupo, la cirugía estética es una de las más demandadas, aunque puede tratarse de cualquier procedimiento o consulta.
        
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/salud.png') 
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo educativo
            p Es aquel en el que el turista se moviliza con la finalidad de realizar una consulta médica o someterse a un proceso quirúrgico al que no tiene acceso en su lugar de origen. Dentro de este grupo, la cirugía estética es una de las más demandadas, aunque puede tratarse de cualquier procedimiento o consulta.
        
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/educativo.png') 

    separador
    #leyes.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.7 Leyes en turismo
    p(data-aos="fade-up-left") El turismo no está exento de la aplicación de leyes y normativas que regulan la industria de este sector, desde 1996 se ha ido reconociendo no sólo su importancia, sino también la reglamentación que favorece el servicio, y el renglón económico al que pertenece y que genera un importante aporte a la economía del país. Las principales leyes que enmarcan la industria del turismo son (ver tabla 2):

    .titulo-sexto.color-acento-contenido.my-5(data-aos="fade-up-left")
      span.text-small.mb-0 Tabla 2 
      span.text-small.mb-0 Normatividad que regula el sector turístico
    .tabla-c(data-aos="fade-up-left")
      table
        tr.fondo14
          th 
            h4.text-center.text-white 
          td
            h4.text-center.text-white Ley 300 de 1996
          td
            h4.text-center.text-white Ley 1101 de 2006
          td
            h4.text-center.text-white Ley 1558 de 2012
          td
            h4.text-center.text-white Ley 2068 de 2020
        tr
          th 
            h4.text-center Objeto de la ley
          td.alinearArriba 
            p Ley general del turismo, reconoce la importancia del turismo para el desarrollo nacional.
          td.alinearArriba
            p Modifica la ley 300 de 1996 y crea el impuesto nacional con destino al turismo como inversión social mediante la promoción y el fortalecimiento de la competitividad que comprende la capacitación y la calidad turísticas.
          td.alinearArriba
            p Fomenta, el desarrollo, la promoción, la competitividad del sector y la regulación de la actividad turística, mediante el aprovechamiento de los recursos y atractivos turísticos nacionales.
          td.alinearArriba
            p Fomenta la sostenibilidad e implementa mecanismos para la conservación, protección y aprovechamiento de los destinos y atractivos turísticos, formaliza la competitividad del sector y promueve la recuperación de la industria turística, mediante incentivos, la calidad y el impulso de oportunidades del sector.
        tr
          th 
            h4.text-center Concepción del turismo
          td.alinearArriba 
            p Una industria esencial para el desarrollo del país con una función social.
          td.alinearArriba
            p Una industria esencial para el desarrollo del país con una función social.
          td.alinearArriba
            p El turismo se concibe, como una industria esencial para el desarrollo del país con una función social, una actividad comercial o industrial.
          td.alinearArriba
            p Un sector esencial para el desarrollo del país con funciones económicas, sociales y ambientales que se debe reactivar y velar por su crecimiento.
    .row.ampliarambos.fondo15
      .col-xxl-12.px-5
        p.my-5.text-center(data-aos="fade-up-left") Nota. SENA (2022).
        p.mb-5(data-aos="fade-up-left") En relación con la ley 1558 de 2012, como ya se indicó, su objetivo fue conseguir más recursos para promoción y competitividad a partir del pago de impuestos de los prestadores de servicios turísticos. Teniendo en cuenta que estos recursos se destinan a:
        .row.justify-content-center
          .col-xxl-3.col-xl-3.col-lg-3.col-md-4.col-sm-4.col-5(data-aos="fade-up-left")
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Promoción nacional e internacional.
              li
                i.fas.fa-check
                | Competitividad.
              li 
                i.fas.fa-check
                | Prevención del turismo sexual infantil.     
          .col-xxl-7.col-xl-7.col-lg-7.col-md-6.col-sm-6.col-5(data-aos="fade-up-left")
            p Para recolectarlos se crea el Fondo de Promoción Turística que se encarga de administrar el recaudo del impuesto al turismo, los recursos que entran a financiar la infraestructura turística, y también el dinero que se invertirá posteriormente en los temas relacionados con la promoción y la competitividad turística de los destinos.
        .cajon.color-primario.p-4.mb-4.mt-4.fondo1(data-aos="fade-down-right")
          p En esta ley se deja determinado el cumplimiento obligatorio para los prestadores de servicios turísticos en cuanto a la inscripción al Registro Nacional de Turismo, que es el documento legal que les confiere el permiso a estas empresas para que desempeñen su función y también para que puedan acceder a las diferentes fuentes de apoyo del Gobierno Nacional y sus programas regionales.
        p.my-5(data-aos="fade-up-left") Este Registro Nacional de Turismo, brinda unos beneficios, entre los que se puede encontrar:
        .titulo-sexto.color-acento-contenido(data-aos="fade-up-left")
          span.text-bold.mb-0 Figura 3 
          span Beneficios Registro Nacional de Turismo
        .row.justify-content-center
          .col-xxl-2.col-xl-3.col-lg-3.col-md-5.col-sm-5.col-6(data-aos="fade-up-left")
            img(src='@/assets/curso/tema1/beneficio1.svg')
          .col-xxl-2.col-xl-3.col-lg-3.col-md-5.col-sm-5.col-6(data-aos="fade-up")
            img(src='@/assets/curso/tema1/beneficio2.svg')
          .col-xxl-2.col-xl-3.col-lg-3.col-md-5.col-sm-5.col-6(data-aos="fade-up")
            img(src='@/assets/curso/tema1/beneficio3.svg')
          .col-xxl-2.col-xl-3.col-lg-3.col-md-5.col-sm-5.col-6(data-aos="fade-up-right")
            img.anchoimg(src='@/assets/curso/tema1/beneficio4.svg')
        p.text-center.mt-5(data-aos="fade-up-left") Nota. SENA (2022)
    p.mb-5(data-aos="fade-up-left") De manera adicional, en esta misma ley se generaron varios proyectos relacionados con el gremio, como puede verse a continuación:

    TabsC.color-primario(data-aos="fade-up-left")
      .py-3.py-md-4(titulo="Proyectos generados en la ley 1558 de 2012 de turismo")
        .row.justify-content-around
          .col-md-7.mb-4.mb-md-0
            p Comités locales para la Organización de las Playas  que divide las zonas así:
            ul.lista-ul--color
              li 
                i.fas.fa-caret-right
                | Zonas destinadas al baño y al descanso.
              li
                i.fas.fa-caret-right
                | Zonas destinadas a la recreación.
              li 
                i.fas.fa-caret-right
                | Zonas destinadas a las ventas de bienes de consumo. 
              li 
                i.fas.fa-caret-right
                | Zonas destinadas a la prestación de otros servicios relacionados con las actividades de aprovechamiento del tiempo libre que desarrollen los usuarios de las playas.
              li 
                i.fas.fa-caret-right
                | Aprovechamiento del tiempo libre que desarrollen los usuarios de las playas.
          .col-md-3
            figure
              img(src='@/assets/curso/tema1/ley1.jpg', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Programas de inversión social en las comunidades")
        .row.justify-content-around
          .col-md-7
            p Teniendo especial cuidado aquellas comunidades/personas, en condición de vulnerabilidad.
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/ley2.jpg', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Destinación al turismo de bienes incautados al narcotráfico")
        .row.justify-content-around
          .col-md-7.mb-4.mb-md-0
            p Los bienes inmuebles con vocación turística incautados por delitos de narcotráfico, serán administrados por el Fondo Nacional de Turismo o la entidad pública que este contrate.
          .col-md-3
            figure
              img(src='@/assets/curso/tema1/ley3.jpg', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Medalla al mérito turístico")
        .row.justify-content-around
          .col-md-7
            p Esta medalla, tiene como fin el reconocimiento a los prestadores de servicios turísticos que se destaquen por su innovación, promoción o internacionalización del turismo otorgada por el Ministerio de Comercio, Industria y Turismo.
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/ley4.jpg')

    p.mt-5(data-aos="fade-up-left") La última ley generada para regular las actividades del sector es la 2060 de 2020, esta ley modifica el programa de apoyo al empleo formal PAEF y el programa de apoyo para el pago de la prima de servicios PAP.
    p.mb-5(data-aos="fade-up-left") Entre sus objetivos principales está fortalecer la sostenibilidad, la formalización y la competitividad del sector y promover la reactivación del turismo, para consolidar el país como un destino altamente reconocido, sostenible, responsable y de alta calidad. Además de tener como propósito fundamental, reactivar económicamente al sector después de un año de pandemia, combinando medidas de corto, mediano y largo plazo.
    .row.justify-content-center.fondo16.ampliarambos
      .col-xxl-12.px-5
        p.mb-5(data-aos="fade-up-left") Entre las medidas tributarias transitorias de la ley y que serán de gran ayuda se encuentran las indicadas en la siguiente figura 4:
        .titulo-sexto.color-acento-contenido(data-aos="fade-up-left")
          span.text-bold.mb-0 Figura 4 
          span  Medidas tributarias transitorias en la Ley 2060 de 2020 de Turismo
        .row.justify-content-center
          .col-xxl-5.col-xl-5.col-lg-6.col-md-10.col-sm-0.col-0(data-aos="fade-up-left")
            img.mb-5.nomostrar(src='@/assets/curso/tema1/medidas1.svg', alt='Medidas tributarias')
          .col-xxl-5.col-xl-5.col-lg-6.col-md-10.col-sm-11.col-11(data-aos="fade-up-right")
            img(src='@/assets/curso/tema1/medidas2.svg', alt='Medidas tributarias')          
      p.text-center(data-aos="fade-up-left") Nota. SENA (2022).
    separador
    #sistema.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.8 Sistema turístico
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-10.col-sm-10.col-11(data-aos="fade-up-left")
        .cajon.puntacajon.p-4.mb-4.fondo17.sombracajon
          p Todo sistema es un conjunto de partes jerarquizadas que se interrelacionan y se coordinan entre sí permitiendo alcanzar una determinada función o comportamiento. El turismo a su vez es un conjunto de elementos conectados entre sí que generan repercusiones positivas o negativas en un territorio concreto. Todos esos elementos conforman un sistema donde las partes están conectadas. No existe una sola forma de explicar el sistema turístico ya que han sido diferentes los autores que han abordado el tema, sin embargo, todos ellos concuerdan en que el sistema turístico tiene varias facetas y a su vez, el estudio de cada una de ellas ha permitido crear varios modelos que buscan analizar su funcionamiento.
        p Una de las teorías más utilizadas es la de Roberto Boullón propuesta en el 2004, quien caracteriza esas facetas del sistema turístico teniendo en cuenta la oferta y la demanda, tal como puede observarse en la siguiente figura 5:        
      .col-xxl-6.col-xl-6.col-lg-6.col-md-6.col-sm-11.col-11(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen7.jpg', alt='Sistema turístico')

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-up-left")
      span.text-bold.mb-0 Figura 5 
      span Funcionamiento del sistema turístico según Roberto Boullón
    .row.justify-content-center.fondo16.ampliarambos
      .col-xxl-12.px-5
        .row.justify-content-center(data-aos="fade-up-left")
          .col-xxl-6.col-xl-6.col-lg-7.col-md-10.col-sm-11.col-12
            img(src='@/assets/curso/tema1/sistematuristico.svg', alt='Sistema turístico según Boullón')
        p.mt-5.text-center(data-aos="fade-up-left") Nota. Planificación del espacio turístico. Boullón, R (2004). 
    p.my-5(data-aos="fade-up-left") Tal como lo explica Boullón, en la gráfica se observa que en la parte izquierda, el punto de partida del funcionamiento del sistema, surge del encuentro entre oferta y demanda, mediante un proceso de venta llamado producto turístico. Este  junto con la infraestructura constituyen el centro de producción del sector, tal como se aprecia en la parte derecha de la imagen. En el centro, se ha representado la estructura turística, que tiene por función controlar la eficiencia del sistema, vigilando el funcionamiento e interrelación de las partes; con el fin de dar mayor claridad a lo explicado, se ampliarán cada uno de estos conceptos:
    .row.ampliarambos
      .col-xxl-12.px-0(data-aos="fade-up-left")
        ImagenInfograficaB.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/imageninfo1.jpg')

          div(x="36.8%" y="25.7%" tooltip="Click para leer mas..." numero="+")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-9.col-sm-10.col-10
                h4.text-dark 1. La demanda
                p.text-dark Esta formada por el conjunto de consumidores de bienes y servicios turísticos que buscan satisfacer sus necesidades de viaje. 
                p.text-dark Según la OMT  “Es el conjunto de turistas que, de forma individual o colectiva, están motivados por una serie de productos o servicios turísticos con el objetivo de cubrir sus necesidades".

              .col-xxl-4.col-lg-4.col-md-6.col-sm-7.col-8
                img(src='@/assets/curso/tema1/demanda.svg')
          div(x="33.7%" y="44%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-9.col-sm-10.col-10
                h4 2. La oferta
                p Es el conjunto de productos y servicios de un destino que se ponen a disposición del turista para que éste los adquiera al precio interno y por un periodo de tiempo determinado.
              .col-xxl-5.col-lg-5.col-md-6.col-sm-7.col-8
                img(src='@/assets/curso/tema1/oferta.png')

          div(x="64.2%" y="25.5%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-9.col-sm-10.col-10
                h4.text-dark 3. Producto turístico
                p.text-dark Es el conjunto de prestaciones tangibles e intangibles (que incluyen aspectos involucrados en la infraestructura, estructura y superestructura turística) las cuales se integran para ofrecer un producto que satisfaga las necesidades, deseos y expectativas del turista. Está conformado por tres elementos: los atractivos, el acceso y las facilidades.
              .col-xxl-4.col-lg-4.col-md-6.col-sm-7.col-8
                img(src='@/assets/curso/tema1/producto.svg')

          div(x="66.5%" y="44.1%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-9.col-sm-10.col-10
                h4 4. La planta turística
                p Son los servicios que se venden a los turistas, están elaborados por un subsistema al que denominamos "planta turística", que está integrado por dos elementos: 
                p a) El equipamiento. 
                p b) Las instalaciones.
              .col-xxl-4.col-lg-4.col-md-6.col-sm-7.col-8
                img(src='@/assets/curso/tema1/planta.svg')

    p(data-aos="fade-up-left") Anteriormente, se menciona que la planta turística está conformada por equipamiento e instalaciones. Es importante detenerse un poco en este punto. El equipamiento hace referencia a los lugares que le facilitan la estancia al turista y le permiten su estadía como hoteles, restaurantes, lugares de esparcimiento y otros. Las instalaciones por su parte son las construcciones que le permiten al visitante la práctica de actividades turísticas. 
    p(data-aos="fade-up-left") En la siguiente tabla 3 se especifica en los elementos del equipamiento turístico:
    
    .titulo-sexto.color-acento-contenido.my-5(data-aos="fade-up-left")
      span.text-small.mb-0 Tabla 3 
      span.text-small.mb-0 Elementos del equipamiento turístico
    .tabla-c(data-aos="fade-up")
      table
        tr.fondo14.align-items-top
          th 
            h4.text-center.text-white Categoría
          td
            h4.text-center.text-white Alojamiento
          td
            h4.text-center.text-white Alimentación
          td
            h4.text-center.text-white Esparcimiento
          td
            h4.text-center.text-white Otros servicios
        tr
          th 
            h4.text-center Tipo
          td.alinearArriba
            p.mb-1 Hoteles
            p.mb-1 Moteles
            p.mb-1 Hosterías y posadas
            p.mb-1 Pensiones
            p.mb-1 Aparta hoteles
            p.mb-1 Condominios (unidades o conjuntos)
            p.mb-1 Casas (unidades o barrios)
            p.mb-1 Cabañas
            p.mb-1 Albergues 
            p.mb-1 <i>Trailer parks</i>
            p.mb-1 <i>Campings</i>
            p.mb-1 Camas en casas de familia.
          td.alinearArriba
            p.mb-1 Restaurantes
            p.mb-1 Cafeterías
            p.mb-1 Quioscos
            p.mb-1 Comedores típicos (palapas, taquerías, ostionerías, parrillas, etc.)


          td.alinearArriba
            p.mb-1 Night clubs
            p.mb-1 Discotecas
            p.mb-1 Bares
            p.mb-1 Casinos y otros juegos de azar
            p.mb-1 Otros espectáculos públicos (toros, riñas de gallo, rodeos, etc.)
            p.mb-1 Cubes deportivos
            p.mb-1 Parques temáticos.

          td.alinearArriba
            p.mb-1 Agencias de viajes
            p.mb-1 Información
            p.mb-1 Guías
            p.mb-1 Comercio
            p.mb-1 Cambios de moneda
            p.mb-1 Dotación para congresos y convenciones
            p.mb-1 Transporte turístico
            p.mb-1 Primeros auxilios
            p.mb-1 Guarderías 
            p.mb-1 Estacionamientos.
    p.text-center.my-5(data-aos="fade-up-left") Nota. Propuesta de un modelo alternativo de funcionamiento del sistema turístico. Abarca Zaquinaula, M (s.f.).
    p.mb-5(data-aos="fade-up-left") Las instalaciones por su parte también se encuentran clasificadas, tal como se indica en la siguiente figura 6:
    .titulo-sexto.color-acento-contenido(data-aos="fade-up-left")
      span.text-bold.mb-0 Figura 6 
      span Clasificación de las instalaciones.
    .row.justify-content-center
      .col-xxl-5.col-xl-5.col-lg-5.col-md-6.col-sm-10.col-11.px-0(data-aos="fade-up-left")
        img.ms-3(src='@/assets/curso/tema1/clase1.svg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-6.col-sm-1.col-1.px-0(data-aos="fade-up-right")
        img.nomostrar1.alto1(src='@/assets/curso/tema1/clase2.png')

    p.my-5.text-center(data-aos="fade-up-left") Nota. Propuesta de un modelo alternativo de funcionamiento del sistema turístico. Abarca Zaquinaula, M (s.f.).
    p.mb-5(data-aos="fade-up-left") En cuanto a la infraestructura turística, se debe recordar que se trata de todas las obras y servicios que no solo apoyan al sector del turismo sino, también a los demás sectores para que las actividades económicas de un destino se desarrollen con normalidad. Puede existir infraestructura netamente creada para el turismo como caminos, vías marítimas etc.; sin embargo, la infraestructura es una de las bases esenciales para el desarrollo de cualquier territorio. Los componentes de la infraestructura dedicada al turismo son:

    //--tarjetas slide
    .row.mb-5.justify-content-center(data-aos="fade-up-left")
      .col-xxl-4.col-lg-4.col-md-4.col-sm-8.col-10.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido     
              img(src='@/assets/curso/tema1/t1b.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/t1a.svg')})`}")

      .col-xxl-4.col-lg-4.col-md-4.col-sm-8.col-10.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/t2b.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/t2a.svg')})`}")

      .col-xxl-4.col-lg-4.col-md-4.col-sm-8.col-10.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/t3b.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/t3a.svg')})`}")

    p.my-5(data-aos="fade-up-left") Cuando se habla de la superestructura, se integra tanto por organismos públicos como privados que tienen la misión de planificar, optimizar y regular el funcionamiento del sistema turístico, facilitando la producción y venta de los servicios por los cuales está compuesto el producto turístico.
    .row.justify-content-center(data-aos="fade-up")
      .col-xxl-10.col-xl-10.col-lg-10
        .cajon.color-primario.p-4.mb-4.mt-4.fondo1
          p El sector público incluye entidades gubernamentales que contribuyen de manera directa o indirecta con la actividad; ejemplo de ellos son los Organismos Municipales de Turismo y las Secretarías de Cultura, Deportes o Producción. El sector privado abarca a las instituciones y empresas que trabajan directa e indirectamente para el sector como Cámaras de turismo, hoteles, agencias de viajes, empresas de transportes, etc.

    .row.justify-content-center(data-aos="fade-down")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-10.col-sm-10.col-11
        .cajon.puntacajon2.p-4.mb-4.fondo18.sombracajon
          p Por otra parte, los recursos y atractivos turísticos requieren ser diferenciados entre sí. Los primeros son aquellos elementos naturales, culturales y humanos que contribuyen a generar el desplazamiento de los turistas (son potencialmente explotables por el turismo);  los segundos, “son los recursos turísticos que cuentan con las condiciones necesarias para ser visitados y disfrutados por el turista, es decir, que cuentan con planta turística, medios de transporte, servicios complementarios e infraestructura básica” (Boullon, 2006). Con esto se puede decir entonces, que no todos los recursos son atractivos turísticos.
        p Como se puede observar en el siguiente recurso educativo, la diferenciación entre estos (recursos y atractivos turísticos), se encuentran en derredor e incorporados en el ambiente que rodea al turista:       
      .col-xxl-6.col-xl-6.col-lg-6.col-md-6.col-sm-11.col-11
        img(src='@/assets/curso/tema1/imagen8.jpg')

    SlyderF.my-5(data-aos="fade-up")(columnas="col-lg-6 col-xl-6")
      .tarjeta.otra.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-6.col-md-4.col-8
            img(src='@/assets/curso/tema1/slider1.png' alt='AvatarTop')
        h3.text-dark Sitios naturales
        p.text-dark Montañas, planicies, costas, lagos, lagunas y esteros, ríos y arroyos y caídas de agua, grutas y cavernas, lugares de observación de flora y fauna, lugares de caza y pesca, caminos pintorescos, termas, parques nacionales y reservas de flora y fauna.

      .tarjeta.otra.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-6.col-md-5.col-8
            img(src='@/assets/curso/tema1/slider2.svg' alt='AvatarTop')
        h3.text-dark Museos y manifestaciones culturales históricas
        p.text-dark Museos, obras de arte y técnica, lugares históricos, ruinas y sitios arqueológicos.
      .tarjeta.otra.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-5.col-md-4.col-8
            img(src='@/assets/curso/tema1/slider3.png' alt='AvatarTop')
        h3.text-dark Folklore
        p.text-dark Manifestaciones religiosas y creencias populares, ferias y mercados, música y danzas, artesanías y artes populares comidas y bebidas típicas, grupos étnicos arquitectura popular y espontánea.
      .tarjeta.otra.p-4.fondo19
        .row.justify-content-left.mb-3
          .col-xxl-6.col-md-4.col-8
            img(src='@/assets/curso/tema1/slider4.png' alt='AvatarTop')
        h3.text-dark Realizaciones técnicas, científicas o artísticas contemporáneas
        p.text-dark Explotaciones mineras, explotaciones agropecuarias, explotaciones industriales, obras de arte y técnica, centros científicos y técnicos.
      .tarjeta.otra.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-6.col-md-5.col-8
            img(src='@/assets/curso/tema1/slider5.svg' alt='AvatarTop')
        h3.text-dark Acontecimientos programados
        p.text-dark Artísticos, deportivos, ferias y exposiciones, concursos, fiestas religiosas y profanas y carnavales.
    p.my-5(data-aos="fade-up-left") Al respecto del Patrimonio turístico, este se refiere al conjunto de bienes tangibles e intangibles que se clasifican como naturales y culturales, y que funcionan como atractivos para el conocimiento y disfrute del turista; además sirven como motores de motivación para que los turistas se desplacen desde su lugar de residencia. El Patrimonio turístico está conformado por la infraestructura y la superestructura turística, así como por la cantidad de activos turísticos, la planta y las instalaciones turísticas.
    separador
    #inventario.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.9 Inventario turístico

    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-6.col-sm-11.col-11(data-aos="fade-up-left")
        img.mt-4(src='@/assets/curso/tema1/imagen9.jpg', alt='Inventario turístico')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-10.col-sm-10.col-11(data-aos="fade-up-right")
        .cajon.puntacajon.p-4.my-4.fondo17.sombracajon
          p Es un instrumento valioso que sirve para registrar ordenadamente los atractivos físicos y culturales de un destino, a partir de sus características, su estado de conservación y su clasificación. El inventario le facilita el trabajo al agente de viajes, al planeador turístico o a los guías para poder determinar con bases claras cuáles atractivos se pueden incluir o no, en un producto turístico regional; de igual manera, este instrumento de registro sirve para realizar evaluaciones a dichos atractivos y así determinar las prioridades necesarias para el desarrollo turístico nacional. También es importante aclarar que la información condensada en este inventario, debe ser actualizada permanentemente para que cumpla con las funciones dichas anteriormente.
        p Para dar inicio al inventario turístico es necesario llevar a cabo la clasificación de los bienes y atractivos del lugar o lugares seleccionados. La evaluación de los recursos y atractivos susceptibles de uso turístico que serán incluidos en el inventario, debe ser realizada objetivamente por un grupo interdisciplinario, formado por profesionales de varias ciencias del saber y determinado por el organismo público encargado del manejo del turismo en la región o municipio.
    p.my-5(data-aos="fade-up-left") Los profesionales que participen de la creación del inventario tendrán la potestad para clasificar los atractivos en dos grupos: patrimonio cultural y sitios naturales. 
    p.mb-5(data-aos="fade-up-left") En cuanto al patrimonio cultural, se entienden que son todas aquellas manifestaciones culturales, materiales e inmateriales que se encuentran en permanente construcción sobre el territorio transformado por las comunidades. El patrimonio cultural tiene una clasificación propia, tal como se puede ver en el siguiente recurso:

    TabsC.color-primario(data-aos="fade-up")
      .py-3.py-md-4(titulo="Patrimonio material")
        .row
          .col-md-7.mb-4.mb-md-0
            p Se caracteriza por tener un cuerpo físico que puede ser dimensionado y percibido sensorialmente
            p Esta constituido por el territorio geográfico con sus recursos ambientales y naturales, los hechos construidos los sistemas de transporte y las obras de infraestructura como vías, caminos  y puentes, entre otros; y todo el universo de herramientas, utensilios, máquinas y demás objetos que apoyan la vida productiva y cotidiana.

          .col-md-5
            figure
              img(src='@/assets/curso/tema1/imagen10.jpg')

      .py-3.py-md-4(titulo="Patrimonio inmaterial")
        .row
          .col-md-7
            p Comprende las tradiciones  y expresiones orales, prácticas sociales, rituales y actos festivos, el conocimiento y prácticas sobre la naturaleza y el universo; y expresiones artísticas, entre otras, que continuamente se están recreando en la sociedad y reproduciendo generacionalmente. Es el folklore.

          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/imagen11.jpg')
        
      .py-3.py-md-4(titulo="Festividades y eventos")
        .row
          .col-md-7.mb-4.mb-md-0
            p Son atractivos que se generan en la realización de eventos con contenido actual o tradicional, en los cuales la población es actora o espectadora.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema1/imagen12.jpg')

      .py-3.py-md-4(titulo="Grupos de especial interés")
        .row
          .col-md-7
            p Constituidos por comunidades indígenas, comunidades negras, y comunidades raizales, en las cuales se valora el respeto por sus costumbres como una forma de conservación auténtica de su legado cultural.
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/imagen13.jpg')

    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10(data-aos="fade-up")
        .cajon.color-primario.p-4.mb-4.mt-4.fondo1
          h4 Sitios naturales
          p Son aquellos que contemplan las áreas geográficas (conjunto de atractivos con sus componentes) y los recursos naturales (que por sus características no permiten estar agrupados) de importancia e interés para el turismo.
    separador
    #producto.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.10 Producto turístico
    p.mb-5(data-aos="fade-up-left") El turista generalmente compra la combinación de paquetes turísticos que incluyen no solamente los atractivos de interés para él, sino también aquellas actividades que son complementarias en el país o región que pretende conocer; por tanto, cuando se habla de producto turístico, se puede definir como “el conjunto de componentes tangibles e intangibles que incluyen recursos o atractivos turísticos, infraestructura, actividades, imágenes y valores simbólicos para satisfacer motivaciones y expectativas, siendo percibidos en conjunto como parte de la experiencia turística” (Manual para la Planificación de Productos Turísticos de Perú-MINCETUR, 2014).
    .row.justify-content-between
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.fondo23.p-5(data-aos="fade-up-left")
        p El producto turístico se diseña teniendo en cuenta las características de los diferentes nichos de mercado y la motivación que éstos presentan para viajar. De igual manera todo producto turístico debe brindar 3 tipos de beneficios como se puede ver a continuación:
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.fondo22.pt-3(data-aos="fade-up")
        .row
          .col-xxl-4.col-xl-4.col-lg-5.col-md-4.col-sm-3.col-3
            img.mt-3.ms-3(src='@/assets/curso/tema1/nro1.svg')
          .col-xxl-12
            p.py-3.px-4 Los beneficios funcionales son aquellos que satisfacen necesidades elementales como alojamiento o comida, o aquellos que ofrecen ventajas en términos de comodidad y facilidad (cercanía, transporte cómodo y otros)
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.fondo22.pt-3(data-aos="fade-up")
        .row
          .col-xxl-4.col-xl-4.col-lg-5.col-md-4.col-sm-3.col-3
            img.mt-3.ms-3(src='@/assets/curso/tema1/nro2.svg')
          .col-xxl-12
            p.py-3.px-4 Los beneficios simbólicos responden a emociones, status y realización personal. Ej. Utilizar servicios “exclusivos”, que el guía del <i>tour</i> o anfitrión sea una personalidad reconocida, visitar lugares que confieren status.
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.fondo22.pt-3(data-aos="fade-up")
        .row
          .col-xxl-4.col-xl-4.col-lg-5.col-md-4.col-sm-3.col-3
            img.mt-3.ms-3(src='@/assets/curso/tema1/nro3.svg')
          .col-xxl-12
            p.py-3.px-4 Los beneficios vivenciales están relacionados con los cinco sentidos del ser humano, es decir, experiencias y vivencias resultantes de la actividad turística. Ej. ofrecer experiencias únicas, especiales, poco comunes, que la experiencia sea segura.
    p.mt-5(data-aos="fade-up-left") Cuando se piensa en crear productos turísticos, lo debe hacer de tal forma que sean novedosos, oportunos y eficaces para que aporten un valor económico, social y ambiental, tanto para el destino como para los turistas quienes finalmente los disfrutarán.
    p.mb-5(data-aos="fade-up-left") En dicho sentido, los componentes necesarios para tal fin según la Subdirección de Productos y Destinos Sustentables Sernatur (2015) son:
    .row.justify-content-center
      .col-xxl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up-left")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Atractivo turístico") Es todo lugar, objeto o acontecimiento de interés turístico. Estos pueden ser atractivos naturales o culturales. Y pueden ser:<br/><br/><span style="font-weight: 700;"> Naturales: </span><span> aquellos asociados a la geografía y la ecología, como los relacionados con las playas, el mar, la costa, el clima, el sol, la orografía, las montañas, los ríos, la flora, la fauna.</span><br/><br/><span style="font-weight: 700;">Asociados al ocio: </span><span> instalaciones existentes para la práctica de diferentes tipos de deportes.</span><br/><br/><span style="font-weight: 700;">Recursos Culturales e históricos: </span><span> monumentos arqueológicos, religiosos, museos, cascos antiguos, entre otros.</span>

          p.text-small(numero="2" titulo="Servicio turístico") Son todos los servicios que el turista requiere y consume mientras está de viaje como el alojamiento, alimentación, transporte, agencias de viajes, etc.
          
          p.text-small(numero="3" titulo="Infraestructura turística") Es la dotación de bienes y servicios básicos con que cuenta un país, departamento o municipio y permite que el viaje sea cómodo y agradable, se puede clasificar en: red de transportes (red ferroviaria y vial), terminales terrestres (aeropuertos, terminales de buses, puertos, etc.), redes de servicios básicos (agua potable, electricidad, etc.), redes de comunicaciones (correo, teléfonos fijos, equipos celulares, fax, Internet, etc.

          p.text-small(numero="4" titulo="Comunidad local") Habitantes, costumbres y tradiciones<br/><br/>El producto turístico debe incluir a los residentes, ya que son ellos los que ponen la diferencia principal entre un lugar y otro. En definitiva, es el sello que hace que un lugar sea agradable y único para visitar, es lo que lo hace diferente.

          p.text-small(numero="5" titulo="Servicio turístico") Percepción - Imagen - Emoción (Sensación) <br/>independiente de las características que posea un destino concreto, no todos los turistas que lo visitan van a percibirlo de igual forma, ya que cada uno construirá su propia imagen del destino y esto lo va a conectar con una emoción que finalmente se transforma en sensaciones.<br/><br/>También debemos tener presente que normalmente un turista no se satisface a partir de la oferta de un solo proveedor. El transporte, la alimentación, el alojamiento y las actividades serán entregadas por muchos oferentes distintos, razón por la que el éxito de nuestro producto depende del éxito de la combinación de estos oferentes.

      .col-xxl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
        img.mt-4(src="@/assets/curso/tema1/imagen14.jpg")
    p.my-5(data-aos="fade-up-left") Una condición más a tener en cuenta corresponde con la fijación de precios de los productos turísticos, y para hacerlo, se deben establecer los costos y gastos de la empresa o de quien esté diseñando el producto, en la siguiente tabla 4 se hace una conceptualización y diferenciación entre los costos y los gastos de un producto turístico:

    .titulo-sexto.color-acento-contenido(data-aos="fade-up-left")
      span.text-small.mb-0 Tabla 4 
      span.text-small.mb-0 Concepto y diferencia entre costos y gastos de un producto turístico
    .tabla-c(data-aos="fade-up")
      table
        tr.fondo6
          th 
            h4.text-center GASTO
          td
            h4.text-center COSTO
          td
            h4.text-center DIFERENCIA ENTRE GASTO Y COSTO
        tr
          th.alinearArriba 
            p Una partida que disminuye las ganancias (beneficio) de la empresa y que, por ende, contribuye a aumentar sus pérdidas (deuda).
          td.alinearArriba 
            p Es el desembolso económico que se realiza para la producción de algún bien o la oferta de algún servicio. El costo incluye la compra de insumos, el pago de la mano de obra, los gastos en la producción y los gastos administrativos, entre otras actividades.
          td.alinearArriba
            p El costo se define como todas aquellas inversiones necesarias para la producción del bien o servicio, como son: la mano de obra o las materias primas. Los costos son considerados como inversiones, ya que se espera que vuelvan como forma de ganancias para la empresa. 
            p Los gastos son todos aquellos pagos que la empresa debe realizar por aspectos que no tienen que ver directamente con la producción, como el pago de sueldos del personal administrativo. Estos gastos son los que permiten el correcto funcionamiento de la empresa, pero que no se encuentran directamente relacionados con las ganancias.
    p.text-center.my-4(data-aos="fade-up-left") Nota. Costo. Enciclopedia Concepto (2022).
    p.mb-5(data-aos="fade-up-left") En la siguiente gráfica puede consultar con detalle cada uno de los costos y de los gastos que se precisan en la industria del turismo, y que son obligatorios para llevar a cabo una excelente prestación del servicio:

    .row.fondo16.ampliarambos
      .col-xxl-12.col-lg-12.col-12.px-5(data-aos="fade-up")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/tema1/grafica1.svg")

          .tarjeta.fondo24.p-3(x="38.1%" y="28.6%" numero="+")
            p.text-bold.mb-0 Costos fijos
            span Son aquellos costos que posee una empresa más allá de la producción obtenida, es decir, que su valor no varía según lo producido. Ejemplos: el pago de alquileres y los impuestos.

          .tarjeta.fondo24.p-3(x="38.1%" y="36%" numero="+")
            p.text-bold.mb-0 Costos variables
            span Varían en relación a lo producido, es decir, que si se aumenta la producción estos costos serán mayores y viceversa. Ejemplos: la cantidad de materia prima utilizada, el embalaje y empaquetado de los productos.

          .tarjeta.fondo24.p-3(x="38.1%" y="51%" numero="+")
            p.text-bold.mb-0 Costos directos
            span Pueden ser asignados a cada bien o servicio en particular. Ejemplos: el aumento de harina (que tiene una repercusión directa sobre la producción de pan) o el aumento de tinta (que impacta en la producción de libros)

          .tarjeta.fondo24.p-3(x="38.1%" y="58.2%" numero="+")
            p.text-bold.mb-0 Costos indirectos
            span Tienen consecuencias sobre la producción en forma total, es decir, que no pueden ser asignados a un determinado producto. ejemplos: el aumento en insumos de limpieza de la fábrica o el aumento de los salarios de los trabajadores.

          .tarjeta.fondo24.p-3(x="38.1%" y="72.2%" numero="+")
            p.text-bold.mb-0 Costos de mano de obra
            span Derivan del pago de salarios de todos los miembros que participan de la estructura empresarial. 

          .tarjeta.fondo24.p-3(x="38.1%" y="79.2%" numero="+")
            p.text-bold.mb-0 Costos de materia prima
            span En los que se incurre al adquirir la materia prima para realizar un determinado producto o facilitar un servicio.

          .tarjeta.fondo24.p-3(x="38.1%" y="90%" numero="+")
            p.text-bold.mb-0 Costos financieros
            span Se necesitan para el financiamiento del negocio. 

          .tarjeta.fondo24.p-3(x="38.1%" y="97.6%" numero="+")
            p.text-bold.mb-0 Costos tributarios
            span Relacionados al pago de impuestos 

          .tarjeta.fondo24.p-3(x="75.7%" y="47.5%" numero="+")
            p.text-bold.mb-0 Gastos fijos
            span Independientemente del volumen de facturación o la actividad del negocio, estos gastos no varían y deben asumirse sin excepción. Algunos de estos gastos incluyen:
            br
            br
            span.text-bold.mb-0 Alquileres. 
            span Es uno de los gastos más comunes que tienen las empresas, relacionado al pago de arrendamiento de oficinas o locales. Incluso, cuando el modelo de negocio reposa en la utilización de un espacio de <i>coworking</i>, este gasto es fijo y debe incluirse dentro del código correspondiente.
            br
            br
            span.text-bold.mb-0 Nóminas. 
            span Este tipo de gasto, además de contemplar la nómina de sueldos, contempla igualmente lo relacionado con la Seguridad Social, ya sea que se trate de una empresa que cotiza al Régimen General o de la Seguridad Social de Autónomos.
            br
            br
            span.text-bold.mb-0 Suministros. 
            span De estos gastos hace parte el suministro de servicios como la electricidad, el agua, la telefonía o el gas.

          .tarjeta.fondo24.p-3(x="75.7%" y="54.8%" numero="+")
            p.text-bold.mb-0 Gastos variables
            span Relacionados con la actividad propia de cada empresa y el funcionamiento del negocio, a veces estos gastos son más difíciles de prever y contabilizar.
            br
            span Ejemplos: materia prima, tercerización de servicios
            br
            br
            span.text-bold.mb-0 Impuestos. 
            span Aquí se contempla todo lo referente a tributos municipales o autonómicos y las tasas que deban pagarse, de acuerdo a la actividad específica de cada empresa.
            br
            br
            span.text-bold.mb-0 Materia prima. 
            span A medida que aumenta el volumen de ventas, aumenta también el coste de producción, puesto que una mayor cantidad de materia prima es requerida para responder a la demanda.
            br
            br
            span.text-bold.mb-0 Comunicación externa. 
            span Con el objetivo de darse a conocer, promocionar sus productos y servicios y reforzar su marca, una empresa puede requerir dedicar parte de su presupuesto mensual a la comunicación externa.
            br
            br
            span.text-bold.mb-0 Subcontratación de servicios. 
            span Dependiendo de la actividad de tu empresa y el modelo de tu negocio, es posible que debas contratar servicios como el transporte de las materias primas o de los productos terminados.

    .row.justify-content-around.align-items-center.mt-3
      .col-xxl-10.col-xl-10.col-11.col-md-11(data-aos="fade-up-left")
        .tarjeta.fondo8.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Una vez se han establecido los costos y los gastos, se pueden usar diferentes estrategias para definir el precio, tal como se nos indica en el documento anexo de la Universidad de Alicante. Facultad de ciencias económicas y empresariales, que puede acceder en el enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://rua.ua.es/dspace/bitstream/10045/16114/8/Tema%208.pdf" target="_blank")
                    span Ingresar
                    i.fas.fa-file-download

    separador
    #agencias.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.11 Agencias de viaje
    .bloque-texto-g.fondo25.p-3.p-sm-4.p-md-5(data-aos="fade-up-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen15.jpg')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.mb-0 La historia de las agencias de viaje se remonta a mediados del siglo XIX, cuando <i>Thomas Cook</i>, residente de <i>Leicester</i>, Inglaterra, incitó a sus conocidos a participar en un evento académico en la ciudad de <i>Loughborough</i>; para tal fin contrató un tren que los llevaría en el recorrido de ida y regreso; de esta forma evitó el desgaste de todos, en cuanto a la búsqueda de tiquetes de viaje, atender horarios, etc. Una vez estuvo organizado todo, 540 personas “contrataron el servicio”, a pesar de no haber realizado la operación de tal servicio con la intención de generar ganancias, <i>Thomas</i> evidenció el potencial empresarial en dicha actividad y creó la primera agencia de viajes del mundo; por ello se le conoce como uno de los precursores en turismo.

    .row.justify-content-center.my-5
        .col-xxl-6.col-lg-6.col-md-11.col-sm-11.col-11.mt-4(data-aos="fade-up-left")
          LineaTiempoD.color-secundario
            p.text-small(numero="1" titulo="Agencias de viajes y turismo") Son las empresas comerciales, debidamente constituidas por personas naturales o jurídicas que se dediquen profesionalmente a vender planes turísticos.<br/>Funciones<br/><ul style="list-style-type:disc; color: #FFB338; margin-left: 10px;"><li><span style="color: #12263F;">Organizar, promover y vender planes turísticos nacionales, para ser operados por las agencias de viajes operadoras establecidas legalmente en el país.</span></li><li><span style="color: #12263F;">Organizar, promover y vender planes turísticos para ser operados fuera del territorio nacional.</span></li><li><span style="color: #12263F;">Reservar y contratar alojamiento y demás servicios turísticos.</span></li><li><span style="color: #12263F;">Promover y vender planes turísticos hacia Colombia, para ser ejecutados por las agencias operadoras establecidas en el país.</span></li><li><span style="color: #12263F;">Operar turismo receptivo, para lo cual deberán contar con un departamento de turismo receptivo y cumplir con las funciones propias de las agencias de viajes operadoras.</span></li></ul>

            p.text-small(numero="2" titulo="Agencias de viajes operadoras") Son las empresas comerciales, debidamente constituidas por personas naturales o jurídicas que se dediquen profesionalmente a operar planes turísticos.<br/>Funciones<br/><ul style="list-style-type:disc; color: #FFB338; margin-left: 10px;"><li><span style="color: #12263F;">Operar dentro del país planes turísticos, programados por agencias de viajes del exterior y del país.</span></li><li><span style="color: #12263F;">Organizar y promover planes turísticos para ser operados por ellas mismas, sus sucursales y agencias si las tuviere, de acuerdo con la ubicación de cada una de ellas dentro del territorio nacional.</span></li><li><span style="color: #12263F;">Prestar los servicios de transporte turístico de acuerdo con las disposiciones que reglamentan la materia.</span></li><li><span style="color: #12263F;">Brindar equipo especializado tal como implementos de caza y pesca, buceo y otros elementos deportivos, cuando la actividad lo requiera.</span></li><li><span style="color: #12263F;">Prestar el servicio de guianza con personas debidamente inscritas en el Registro Nacional de Turismo.</span></li></ul>
            
            p.text-small(numero="3" titulo="Agencias de viajes mayoristas") Son las empresas comerciales, debidamente constituidas por personas naturales o jurídicas, que se dediquen profesionalmente a programar y organizar planes turísticos.<br/>Funciones<br/><ul style="list-style-type:disc; color: #FFB338; margin-left: 10px;"><li><span style="color: #12263F;">Programar y organizar planes turísticos nacionales e internacionales, para ser ejecutados o por agencias de viajes operadoras y vendidos por las agencias de viajes y turismo.</span></li><li><span style="color: #12263F;">Programar y organizar planes turísticos para ser operados fuera del territorio nacional por sus corresponsales o agentes y para ser vendidos por las agencias de viajes y turismo.</span></li><li><span style="color: #12263F;">Promover y vender planes turísticos hacia Colombia, para ser ejecutados por las agencias operadoras establecidas en el país.</span></li><li><span style="color: #12263F;">Reservar y contratar alojamiento y demás servicios turísticos, para ser vendidos por las agencias de viajes y turismo.</span></li></ul>
        .col-xxl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
          img.mt-4(src="@/assets/curso/tema1/imagen16.jpg")
    .row(data-aos="fade-up-left")
      .col-xxl-4.col-xl-5.col-lg-5.col-md-7.col-sm-11.col-12.fondomundo
        h4.ps-5.pt-5.ms-5 <i>Online Travel Agency</i> - OTA
    p.my-5(data-aos="fade-up-left") Las OTA por su definición en inglés (<i>Online Travel Agency</i>) o Agencias de Viajes <i>Online</i>, son sitios <i>web</i> enfocados a vender servicios turísticos ofrecidos por sus socios o proveedores como lo son aerolíneas, empresas <i>rent car</i> o de alquiler de vehículos, hoteles, hostales, organizadores de eventos y más; quienes le pagan un porcentaje de comisión a las OTA al momento de recibir una reserva por parte del cliente a través de su portal.

    .row.justify-content-center.alineacion
      .col-xxl-6.col-xl-6.col-lg-6.col-md-6.col-sm-11.col-11(data-aos="fade-up-left")
        img.mt-4.altura(src="@/assets/curso/tema1/imagen17.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
        .cajon.color-primario.p-4.mb-4.mt-4.fondo1
          p De una manera más simple, se puede decir que un OTA es un sitio <i>web</i> donde los interesados en viajar pueden buscar y comparar los precios de los servicios turísticos que desean adquirir, para posteriormente realizar su reserva sin la necesidad de tener un agente de viajes de manera presencial. Así pues, estos portales cuentan con grandes fortalezas ya que pueden tener un alcance mayor y en menor tiempo que una agencia tradicional o física; por ello, las pequeñas empresas del sector o incluso quienes ofrecen sus servicios de manera independiente, pueden beneficiarse de las OTA por la visibilidad y alcance en línea que ésta les ofrece.
        p.fondo26 Internet les permite reunir la oferta mundial de viajes en un solo lugar, para que los turistas reserven sus propios viajes <i>online</i>. Son una herramienta de autoservicio que han cambiado la manera en que se buscan y reservan los viajes, porque en vez de tener que recurrir a una agencia en físico, los viajeros tienen mayor facilidad para planear y reservar vuelos, alojamiento y visitas guiadas por su cuenta.
    .row.justify-content-center
      .col-xxl-8.col-xl-8.col-lg-8.col-md-10.col-sm-11.col-11(data-aos="fade-up-left")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 “La primer OTA nació en 1996 en Estados Unidos y es la conocida Expedia; que creó un modelo de negocios revolucionario para la época y al cabo de tres años se estableció como una de las diez agencias de viajes con más ventas en aquel país.”
            i.fas.fa-quote-right
    p.my-5(data-aos="fade-up-left") Este tipo de sitios se basan en comentarios y críticas sobre los servicios que ofrecen puntualmente, por ejemplo: <i>TripAdvisor</i> muestra las opiniones sobre destinos turísticos, hoteles y restaurantes; Despegar.com muestra vuelos y hoteles; y <i>Airbnb</i> ofrece información sobre el alquiler de casas o apartamentos a precios realmente económicos.
    .row.justify-content-center.alineacion
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up-left")
        p La mayoría de las OTA funcionan como una red social que se nutre a partir de los comentarios, fotografías y opiniones de los turistas que desean compartir su opinión al respecto y las imágenes de lo vivido durante su recorrido en el destino elegido. Lo diferencial en estos tipos de agencias de viaje, es que los turistas son quienes realizan la búsqueda de los servicios que desean contratar y tienen el poder de comparar y seleccionar el que más les convenga según su presupuesto; por ello, en este tipo de OTA el principal canal de reservas y/o compras es el internet y no un empleado. 
        p No es entonces un secreto que el trabajo de las OTA ha cobrado gran importancia a nivel mundial ya que hoy por hoy son la primera parada de los cibernautas a la hora de planear sus viajes. Estas <i>webs</i> brindan valor en cada fase del proceso de compra:  incorporan la necesidad de los usuarios, realizan la búsqueda de información, presentan alternativas, influyen en la decisión de compra y también buscan conocer el desenlace posterior a ésta. Su importancia tiene hoy un gran peso ya que los turistas rescatan el acceso global que se les brinda, sin importar la ubicación donde se encuentren; la transparencia en los precios; la competitividad y la confianza que obtienen al realizar su compra. Se invita a consultar el siguiente recurso, en donde se podrá conocer un poco más sobre las OTA a nivel mundial:
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-11.col-11(data-aos="fade-up-right")
        img.altura(src="@/assets/curso/tema1/imagen18.jpg")

    .row.justify-content-center.alineacion
      .col-xxl-6.col-xl-6.col-lg-6.col-md-6.col-sm-11.col-11(data-aos="fade-up-left")
        img.altura.mt-4(src="@/assets/curso/tema1/figura4.svg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-10.col-sm-11.col-11(data-aos="fade-up-right")
        //-slider    
        .tarjeta.tarjeta--gris.px-4.my-4.pt-4
          SlyderA.otroslide2(tipo="b")
            .row.justify-content-center
              .col-lg-4.col-md-4.col-5
                figure
                  img(src='@/assets/curso/tema1/agoda.svg')
              .col-lg-12.col-md-12.mb-4.mb-md-0.px-4
                p.mt-5 Fundada en el año 1998 y adquirida por <i>Priceline Group</i> (ahora conocido como <i>Booking Holdings</i>) en 2007. El sitio <i>web</i> de se encuentra disponible en 38 idiomas y su fuerte son los anuncios de todo tipo de propiedades. Es una de las mayores agencias de viaje <i>online</i> en el mercado asiático, pero continúa expandiéndose en los mercados de Estados Unidos, la India y Europa.
                p Es ideal para: todas las categorías de alojamiento.

            .row.justify-content-center
              .col-lg-3.col-md-3.col-4
                figure
                  img(src='@/assets/curso/tema1/airbnb.svg')
              .col-lg-12.col-md-12.mb-md-0.px-4
                p.mt-4 Se conoce por brindar acceso a alojamientos únicos en el mundo entero. La mayoría de propiedades que usan <i>Airbnb</i> no hacen parte de los principales segmentos de hotelería, sino que están más orientadas a la cultura y vida local.
                p Ideal para: alquileres vacacionales, <i>bed and breakfasts</i>, alojamientos compartidos, hoteles <i>boutique</i>, hostales y propiedades independiente.

            .row.justify-content-center
              .col-lg-4.col-md-4.col-4
                figure
                  img(src='@/assets/curso/tema1/booking.svg')
              .col-lg-12.col-md-12.mb-4.mb-md-0.px-4
                p.mt-5 Es uno de los sitios <i>web</i> de viajes más grandes y conocidos en el mundo entero. Su sitio <i>web</i> y aplicaciones móviles son accesibles en 43 idiomas y reúnen más de 50 millones de comentarios de huéspedes verificados en más de 200 países. sus tasas de comisión son generalmente más bajas que las de otras OTA.
                p Ideal para: todo tipo de alojamientos, incluyendo <i>resorts</i>, villas, cabañas, hoteles, apartamentos, hostales, alquileres vacacionales, B&B y más.

            .row.justify-content-center
              .col-lg-3.col-md-3.col-4
                figure
                  img(src='@/assets/curso/tema1/expedia.svg')
              .col-lg-12.col-md-12.mb-4.mb-md-0.px-4
                p.mt-4 Incluye 200 sitios <i>web</i> de reservas de viajes en 75 países y en 35 idiomas. Su sitio <i>web</i> recibe más de 600 millones de visitas por mes. Incluye búsquedas para todo tipo de alojamientos y vuelos, alquiler de automóviles, cruceros y paquetes promocionales. Al habilitar la conexión a <i>Expedia</i>, las propiedades se anuncian en <i>Hotels.com</i>, <i>Wotif</i> y muchos otros canales.
                p Ideal para: alojamientos de toda clase y tamaño en el mundo entero.

            .row.justify-content-center
              .col-lg-5.col-md-5.col-5
                figure
                  img(src='@/assets/curso/tema1/hotel.svg')
              .col-lg-12.col-md-12.mb-4.mb-md-0.px-4
                p.mt-5 Es la mayor OTA para alojamientos de hostales en el mundo entero. Cuenta con más de 12 millones de comentarios de usuarios. Su inventario incluye hoteles, B&B y demás alojamientos de distintos presupuestos. Su aplicación y sitio <i>web</i> están en 20 idiomas distintos.
                p Ideal para: hostales, hoteles, bed and breakfast, casas de huéspedes, apartamentos y zonas de <i>camping</i>.

            .row.justify-content-center
              .col-lg-5.col-md-5.col-5
                figure
                  img(src='@/assets/curso/tema1/despegar.svg')
              .col-lg-12.col-md-12.mb-4.mb-md-0.px-4
                p.mt-5 Es la OTA más grande de América Latina, sirviendo a toda la región y más allá. se especializa en hoteles y vuelos. Sin embargo, también ofrece alquileres de vacaciones, alquiler de automóviles, actividades y paquetes.
                p Ideal para: hoteles y aerolíneas.

            .row.justify-content-center
              .col-lg-4.col-md-4.col-5
                figure
                  img(src='@/assets/curso/tema1/travel.svg')
              .col-lg-12.col-md-12.mb-4.mb-md-0.px-4
                p.mt-5 Se especializa en reservas de hoteles y vuelos, ofreciendo también paquetes y <i>tours</i>. Aparte, esta OTA también ofrece reservas en algunos de los principales destinos de México, Estados Unidos, República Dominicana y el Caribe.
                p Ideal para: hoteles y aerolíneas.

            .row.justify-content-center
              .col-lg-3.col-md-3.col-4
                figure
                  img(src='@/assets/curso/tema1/tiquetes.svg')
              .col-lg-12.col-md-12.mb-4.mb-md-0.px-4
                p.mt-5 Se especializa en reservas de hoteles y vuelos, ofreciendo también paquetes y <i>tours</i>. Aparte, esta OTA también ofrece reservas en algunos de los principales destinos de México, Estados Unidos, República Dominicana y el Caribe.
                p Ideal para: hoteles y aerolíneas.
    .row
      .col-xxl-4.col-xl-5.col-lg-5.col-md-7.col-sm-9.col-9.fondomundo(data-aos="fade-up-left")
        h4.ps-5.pt-5.ms-5 Metabuscadores

    .row.justify-content-center.my-5
      .col-xxl-5.col-xl-5.col-lg-7.col-md-11.col-sm-11.col-11(data-aos="fade-up-left")
        .cajon.puntacajon.p-4.mb-4.fondo17.sombracajon
          p Los metabuscadores son herramientas de búsqueda avanzada que sirven para consultar información y poder obtener de manera rápida los datos recopilados de diferentes fuentes. En turismo, estos metabuscadores hacen uso de la información de otros motores de búsqueda globales como <i>Google</i>, páginas <i>web</i> de hoteles e incluso los mismos sitios <i>web</i> de las OTA, para agrupar y presentarle al cibernauta los precios de muchos hoteles de un solo destino, de manera actualizada y práctica para que el turista compare las tarifas y elija entre las diferentes opciones.
        p Los resultados que se pueden hallar en los metabuscadores se filtran por productos o servicios buscados por el usuario; por ello, este proceso se convierte en algo más sencillo y rápido donde en un solo portal web, se encuentran las opciones de varios establecimientos. Así pues, este tipo de herramientas permiten acceder a unos datos más completos con una sola búsqueda, impidiendo reprocesos y desgaste en el tiempo del viajero.  
      .col-xxl-7.col-xl-7.col-lg-5.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
        p En turismo los dos metabuscadores más usuales son <i>Tripadvisor</i> o <i>Kayak</i>. En la figura 7 se puede ver un ejemplo de búsqueda:
        .titulo-sexto.color-acento-contenido
          span.text-bold.mb-0 Figura 7 
          span Ejemplo de cómo funcionan el metabuscador <i>Tripadvisor</i>    
        img(src='@/assets/curso/tema1/imagen19.jpg')
      
    .row.mb-5
      .col-xxl-12.fondonaranja.py-4.px-5(data-aos="fade-up-left")
        p.mb-0 Como se observa, al ingresar fecha de llegada y de salida y el tipo de habitación, el metabuscador <i>Tripadvisor</i> encuentra diferentes opciones de OTA como <i>Booking</i>, <i>Expedia</i> y Hoteles.com con sus respectivos precios, para que el usuario elija el que más se acomoda a su bolsillo y a su gusto. Acá es importante destacar que el metabuscador busca la información, pero no vende; sin embargo, agiliza el trabajo del usuario ya que éste puede ir directamente al sitio de la OTA a comprar y no tener que detenerse haciendo dos, tres o más búsquedas para comparar precios.   

    p.mb-5(data-aos="fade-up-left") Existen diferencias entre un metabuscador y una OTA, tal como se presenta a continuación:
    .row.justify-content-center
      .col-xxl-6.col-xl-7.col-lg-8.col-md-10.col-12.fondo2.mb-5(data-aos="fade-up-left")
        h3.text-white.text-center.pt-2.pb-3.mb-0 Diferencias entre un metabuscador y una OTA's 
    TabsA.color-acento-botones.mb-5(data-aos="fade-up-left")
      .tarjeta.p-4.fondo27(titulo="Reserva")
        h4 Reserva
        p Una OTA efectúa la reserva desde su propia web; un metabuscador no tiene medios técnicos para confirmar o gestionar reservas de ningún tipo. Lo que hacen, en cambio, es llevar tráfico a los sitios que sí que pueden <i>web</i> de la OTA o de la empresa proveedora. 
      
      .tarjeta.fondo27.p-4(titulo="<i>Marketing</i>")
        h4 <i>Marketing</i>
        p Las OTA's  son muy necesarias para la distribución de cualquier hotel bien sea grande o pequeño, ya que les ayudan a ampliar y alcanzar nuevos mercados gracias a la inversión cuantiosa que realizan en marketing. <br/>Una OTA vende las habitaciones de los hoteles mostrando sus características, su valor económico y las imágenes llamativas para completar la reserva desde dicho portal web.  
      
      .tarjeta.p-4.fondo27(titulo="Factor económico")
        h4 Factor económico
        p Un metabuscador agrupa los valores económicos de los servicios ofrecidos por las OTA's y se los muestra a los turistas como una lista; de esta forma el proceso de elección se vuelve más ágil y fácil ya que se pueden contrastar los precios a fin de elegir la habitación a reservar, por ejemplo. La diferencia más importante es que los metabuscadores no venden su propio inventario.

      .tarjeta.p-4.fondo27(titulo="Pago de comisión")
        h4 Pago de comisión
        p Cuando la OTA realiza una venta desde su propia página web, el proveedor a quien le entró esa venta (por ejemplo, un hotel), debe pagar un porcentaje de comisión por utilizar el canal de la agencia de viajes virtual. Acá se puede ver otra diferencia con el metabuscador: los pequeños hoteles pueden aumentar sus ventas directas ya que el usuario solo encontrará su valor, pero no podrá comprar; por tanto, se tendrá que dirigir directamente a la página de la empresa a la que le desea contratar el servicio.
    .row.justify-content-center.mb-5
      .col-xxl-10.col-xl-10.col-lg-10.col-md-11.col-sm-11.col-11(data-aos="fade-up-left")
        .cajon.puntacajon.p-4.mb-4.fondo17.sombracajon
          h4.mb-3.mx-3 Importante
          p.mb-0.mx-3 Una diferencia significativa entre metabuscadores y las OTA es que mientras los metabuscadores muestran información, ellos venden los alojamientos.
    p.mb-5(data-aos="fade-up-left") A nivel de las ventajas que se tiene al utilizar los metabuscadores se puede encontrar que:
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-7.col-md-8.col-sm-11.col-11(data-aos="fade-up-left")
        ul.lista-ul
          li.otrocolorcheck
            i.fas.fa-check
            p El metabuscador es mucho más rápido ya que le permite al cliente buscar a la vez distintas web, posibilitando comparar precios en un solo vistazo, ahorrando tiempo y complejidad.
          li.otrocolorcheck
            i.fas.fa-check
            p Un metabuscador permite a los hoteles pequeños competir en igualdad de condiciones con hoteles y cadenas más grandes.
          li.otrocolorcheck 
            i.fas.fa-check
            p Aumenta las reservas directas ya que al mostrarles la comparación entre los precios de las OTA y el real del hotel; existen más probabilidades de que el turista decida hacer la reserva directamente con el establecimiento de alojamiento.
          li.otrocolorcheck 
            i.fas.fa-check
            p Los metabuscadores funcionan con un sistema PPC (Pago Por Clic) que suele ser más barato que un sistema basado en comisiones como el de las OTA.
          li.otrocolorcheck 
            i.fas.fa-check
            p Un metabuscador ofrece un sentimiento de confianza y seguridad al turista ya que le muestra los comentarios a otras personas que han contratado el mismo servicio turístico anteriormente.   
      .col-xxl-6.col-xl-6.col-lg-5.col-md-4.col-sm-11.col-11(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen20.jpg')
    p.my-5(data-aos="fade-up-left") Entre los principales metabuscadores en turismo se encuentran Tripadvisor, Trivago, Kayak. Google Hotel Ads, en la siguiente figura 8 se encuentra una explicación más detallada al respecto:
    .titulo-sexto.color-acento-contenido(data-aos="fade-up-left")
      span.text-bold.mb-0 Figura 8 
      span Principales Metabuscadores en turismo
    .row.justify-content-center
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-11.mt-4(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/triadvisor.svg')
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-11.mt-4(data-aos="fade-up")
        img(src='@/assets/curso/tema1/trivago.svg')
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-11.mt-4(data-aos="fade-up")
        img(src='@/assets/curso/tema1/kayak.svg')
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-11.mt-4(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/google.svg')
    p.text-center.my-5(data-aos="fade-up-left") Nota. SENA (2022).

    .row
      .col-xxl-7.col-xl-8.col-lg-10.col-md-12.col-sm-12.col-12.fondomundo2.ps-5(data-aos="fade-up-left")
        h4.ps-5.pt-5.ms-5.mt-3 <i>Customer Relationship Management y Enterprise Resoure Planning</i>
    p.my-5(data-aos="fade-up-left") Estas dos herramientas permiten la gestión del servicio y la relación que ejerce con el cliente o los clientes interesados, así como la fidelización de estos, posibilitando perdurabilidad en el tiempo, a continuación, se explica cada una de estas:
    p.subrayar.mb-5(data-aos="fade-up-left") <i>Customer Relationship Management.</i>
    p.mb-5(data-aos="fade-up-left") Este término se refiere a una herramienta diseñada para gestionar las estrategias y prácticas de negocio que están dirigidas a la relación con el cliente y prospectos. Son <i>software</i> especializados de gran ayuda para los equipos de ventas y marketing. Observar el siguiente video para aprender más al respecto. 
    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-up-left") Anteriormente las compañías usaban métodos tradicionales para poder gestionar sus relaciones con clientes; era tradicional encontrar post it, cuadernos, agendas físicas, hojas de cálculo, etc., con la información de sus usuarios y con las tareas a desarrollar para agendar reuniones con ellos, llamarlos e incluso cobrarles. Hoy día, esto se hace de manera mucho más eficiente y tecnológica con la ayuda de un CRM. Hay diferentes recursos en el mercado, sin embargo, la decisión de compra dependerá de los requerimientos de cada empresa. Estas diferencias pueden establecerse como tipos de CRM, tal como se muestra en la siguiente figura 9:
    .titulo-sexto.color-acento-contenido(data-aos="fade-up-left")
      span.text-bold.mb-0 Figura 9 
      span tipos de CRM
    .row.justify-content-center
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-sm-11.col-11(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/crm1.svg')
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-sm-11.col-11(data-aos="fade-up")
        img(src='@/assets/curso/tema1/crm2.svg')
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-sm-11.col-11(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/crm3.svg')

    p.text-center.my-5(data-aos="fade-up-left") Nota. SENA (2022).

    p.subrayar.mb-5 <i>Enterprise Resoure Planning - ERP.</i>
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11(data-aos="fade-up-left")
        p La globalización y los cambios constantes del entorno y los mercados han conllevado a que las empresas tomen consciencia sobre la digitalización de sus procesos estratégicos. Este panorama no ha sido ajeno al sector turístico, por el contrario, hoy por hoy los prestadores de servicios turísticos han ido implementado herramientas digitales con el objetivo de ser más eficientes y competitivos, prestando un mejor servicio a sus clientes.
        p El término ERP se refiere a Enterprise Resource Planning, que significa “sistema de planificación de recursos empresariales”. Es un <i>software</i> integrado por módulos que administra diferentes procesos internos de la compañía como las compras, la contabilidad, la gerencia de proyectos, la gestión de riesgos y los procedimientos de la cadena de suministros. 
        p El objetivo primordial de un ERP es agrupar la información que proviene de las distintas áreas de la empresa, evitando que ésta se duplique y generando así, mayor fluidez de la información y menos reprocesos para quienes la gestionan.
      .col-xxl-6.col-xl-6.col-lg-5.col-md-9.col-sm-11.col-11(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen21.jpg')
    p.mt-5(data-aos="fade-up-right") Entre las ventajas de un ERP se pueden apreciar las siguientes (ver figura 10):
    .row.fondo28.ampliarambos.px-5
      .titulo-sexto.color-acento-contenido.my-5(data-aos="fade-up-right")
        span.text-bold.mb-0 Figura 10. 
        span Ventajas de un ERP
      .row.justify-content-center
        .col-xxl-2.col-xl-2.col-lg-3.col-md-4.col-sm-5.col-6.mb-2(data-aos="fade-up-right")
          img(src='@/assets/curso/tema1/erp1.svg')
        .col-xxl-6.col-xl-7.col-lg-8.col-md-12.mb-2.my-2(data-aos="fade-up-left")
          img(src='@/assets/curso/tema1/erp2.svg')
          .row.justify-content-center.my-2
            .col-xxl-6.col-xl-6.col-lg-6.col-md-10.col-sm-10.mb-2
              img(src='@/assets/curso/tema1/erp3-1.svg')
            .col-xxl-6.col-xl-6.col-lg-6.col-md-10.col-sm-10.mb-2
              img(src='@/assets/curso/tema1/erp3-2.svg')
          .row.justify-content-center.my-2
            .col-xxl-6.col-xl-6.col-lg-6.col-md-10.col-sm-10.mb-2
              img(src='@/assets/curso/tema1/erp4-1.svg')
            .col-xxl-6.col-xl-6.col-lg-6.col-md-10.col-sm-10.mb-2
              img(src='@/assets/curso/tema1/erp4-2.svg')

      p.text-center.my-5(data-aos="fade-up-right") Nota. SENA (2022).
    p.mb-5(data-aos="fade-up-right") Debido a sus múltiples funciones y beneficios, hoy día existen muchas compañías que ofrecen diferentes tipos de ERP; sin embargo, cuando se analizan sus ofertas, se pueden encontrar muchas similitudes en los servicios, por ello, es importante diferenciar los tipos de ERP que existen y que las compañías tengan presentes sus necesidades a la hora de adquirir uno, como se muestra a continuación:
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
        AcordionA.otroacordion.otratarjetaazul(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Según el diseño")
            .col-md-11
              p Se divide en:
              p A medida: se crea desde 0 para una empresa en particular. Es una solución más costosa y que exige encontrar a la compañía adecuada para llevarla a cabo, pero a cambio ofrece la máxima adaptabilidad.
              p Predefinido: son más baratos y rápidos de implementar. Se contratan por módulos o paquetes en función de las necesidades de cada empresa.

          .row(titulo="Según la instalación")
            .col-md-11
              p Se divide en dos:
              p Local: se instalan en el entramado informático de la propia empresa para que pueda ser utilizado en uno o varios equipos dentro de la sede del negocio.
              p En la Nube: se puede usar desde cualquier lugar donde haya una conexión a internet, porque está ubicado en un servidor concreto. Esto significa que su funcionamiento no se reduce solamente a la sede de la empresa, sino que permite una mayor versatilidad en este sentido.

      .col-xxl-6.col-xl-6.col-lg-5.col-md-8.col-sm-11.col-11(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/imagen22.jpg')

    p.mt-5(data-aos="fade-up-right") Entre los valores más buscados de los ERP se encuentran, su flexibilidad frente a los cambios que puede presentar la compañía y sus procesos, la facilidad de uso, el mantenimiento, el precio de licencias y de mantenimiento, los costos de instalación y lo más importante, en realidad que el fabricante conozca del sector turismo y que el <i>software</i> se adecúe al mismo.

    separador
    #paquetes.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.12 Paquetes turísticos
    p(data-aos="fade-up-right") Es un conjunto de servicios como alojamiento, transporte, alimentación, etc. que se le ofrecen a un cliente y que son contratados con base a un itinerario organizado previamente, a un precio único y global. Estos servicios pueden pertenecer a la agencia de viajes que ofrece el paquete turístico o pueden ser contratados con los diferentes prestadores de servicios turísticos para posibilitar al usuario su consumo y disfrute.
    p.mb-5(data-aos="fade-up-right") Cuando se habla de itinerario se hace referencia al recorrido, y al tipo de actividades y servicios incluidos en el paquete (ver tabla 5):
    .titulo-sexto.color-acento-contenido(data-aos="fade-up-right")
      span.text-small.mb-0 Tabla 5 
      span.text-small.mb-0 Itinerario de un paquete turístico
    .tabla-c(data-aos="fade-up")
      table
        tr.fondo14.align-items-top
          th.bordetabla 
            img.dimensiones(src='@/assets/curso/tema1/calendario.svg')
          td.bordetabla
            img.dimensiones(src='@/assets/curso/tema1/lugares.svg')
          td.bordetabla
            img.dimensiones(src='@/assets/curso/tema1/bus.svg')
          td.bordetabla
            img.dimensiones(src='@/assets/curso/tema1/alojamiento.svg')
          td.bordetabla
            img.dimensiones(src='@/assets/curso/tema1/reloj.svg')
          td.bordetabla
            img.dimensiones(src='@/assets/curso/tema1/huellas.svg')
          td
            img.dimensiones(src='@/assets/curso/tema1/pesos.svg')
        tr
          th.bordetabla.alinearArriba
            p.text-center.size15px Fechas y horarios para llevar cabo cada una de las actividades que incluye el paquete turístico.
          td.alinearArriba.bordetabla
            p.text-center.size15px Lugares de salida y regreso.
          td.alinearArriba.bordetabla
            p.text-center.size15px Características de los transportes que van a ser utilizados para el traslado de los viajeros.
          td.alinearArriba.bordetabla
            p.text-center.size15px Alojamiento, con el detalle de las características, categoría y comodidades que ofrece.
          td.alinearArriba.bordetabla
            p.text-center.size15px Horario de comidas en el caso de que incluya.
          td.alinearArriba.bordetabla
            p.text-center.size15px Nombre y detalle de cada una de las visitas o excursiones.
          td.alinearArriba
            p.text-center.size15px Precio y detalles de la empresa que lo organiza.
    p.mb-5.mt-3.text-center(data-aos="fade-up") Nota. SENA (2022).
    p(data-aos="fade-up") El recorrido presenta las rutas o caminos a tomar, los lugares que se visitarán y también donde se pasará la noche, el tipo de transporte que se usará para ir de un lugar a otro, y las distancias y tiempos que se usarán para tales desplazamientos.
    p.mb-5(data-aos="fade-up") Para el diseño de todo paquete es necesario determinar también el orden en que se ofrecerán los servicios, sus tiempos y la asignación del dinero para que el paquete opere bajo lo establecido y lo requerido por el usuario. Recordar que se debe ofrecer una experiencia completa para el tipo de turistas que se elija y por ello, cada servicio que se incluya en el paquete deberá estar asociado a sus necesidades, expectativas, y deseos, tal como se indica a continuación:
    //-slider
    SlyderF.my-5(data-aos="fade-up-right")(columnas="col-lg-6 col-xl-6")
      .tarjeta.otra.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-6.col-md-4.col-8
            img(src='@/assets/curso/tema1/slider2-1.png')
        h3.text-dark Programas de estancia
        p.text-dark Incluyen la combinación de un medio de transporte y una estancia en algún alojamiento turístico. no suele haber horarios o excursiones preestablecidas. Se usa para playas, campo o montañas.

      .tarjeta.otra.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-6.col-md-5.col-8
            img(src='@/assets/curso/tema1/slider2-2.png')
        h3.text-dark Circuitos
        p.text-dark Se visitan un conjunto de destinos de manera articulada y programada. Suelen clasificarse de acuerdo al medio de transporte que utilicen.
      .tarjeta.otra.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-5.col-md-4.col-8
            img(src='@/assets/curso/tema1/slider2-3.png')
        h3.text-dark Circuitos terrestres
        p.text-dark Generalmente son <i>tours</i> en autobús para viajes dentro del territorio nacional o países limítrofes.
      .tarjeta.otra.p-4.fondo19
        .row.justify-content-left.mb-3
          .col-xxl-6.col-md-4.col-8
            img(src='@/assets/curso/tema1/slider2-4.png')
        h3.text-dark Circuitos aeroterrestres
        p.text-dark El paquete incluye el vuelo aéreo para llegar al destino turístico determinado donde se desarrolla el resto de los servicios turísticos: paseos, alojamiento, visitas guiadas, etc.; y luego se utiliza nuevamente el avión para volver.
      .tarjeta.otra.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-6.col-md-5.col-8
            img(src='@/assets/curso/tema1/slider2-5.png')
        h3.text-dark Larga distancia
        p.text-dark Este tipo de paquetes turísticos suele utilizar transporte y guía particular para llegar al destino.
      .tarjeta.otra.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-6.col-md-5.col-8
            img(src='@/assets/curso/tema1/slider2-6.png')
        h3.text-dark Viajes alternativos
        p.text-dark Están diseñados exclusivamente con destinos inéditos, suelen implementar medios de transporte o alojamiento insólitos o poco frecuentes. El objetivo de estos paquetes es ofrecer actividades y experiencias diferentes.
      .tarjeta.otra.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-6.col-md-5.col-8
            img(src='@/assets/curso/tema1/slider2-7.png')
        h3.text-dark Viajes a medida
        p.text-dark De acuerdo a las requerimientos o preferencias del cliente, incluyendo en el producto final todos los servicios necesarios como transporte, alojamiento y experiencias.
    .row.fondo29.ampliarambos
      .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11.px-5(data-aos="fade-up-right")
        p.mb-4 Los elementos fundamentales de un paquete turístico deben tener en cuenta:
        ul.lista-ul--color
          li.otrocolorcheck 
            i.fas.fa-check
            | Atractivo: opciones de lugares naturales, culturales, históricos o científicos que el turista pueda elegir según sus gustos y conveniencia.
          li.otrocolorcheck
            i.fas.fa-check
            | Facilidades: horarios, tipo de financiación, lugares, precios, hospedaje, esparcimiento, alimentación, y otros.
          li.otrocolorcheck 
            i.fas.fa-check
            | Transporte: accesible al cliente y sus gustos y/o necesidades.    
      .col-xxl-6.col-xl-6.col-lg-5.col-md-11.col-sm-11.col-11.px-5(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/figura5.svg')
    p.my-5(data-aos="fade-up-right") Adicional a lo anterior, se debe tener presente que cada paquete está conformado por unos servicios básicos y otros complementarios:

    .row.justify-content-around.fondo31.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11.p-5(data-aos="fade-up-right")
        .row.justify-content-start
          .col-xxl-8.col-xl-7.col-lg-7.col-md-11.col-sm-11.col-11
            h4.margen Básicos
            p Los básicos son el componente central que subsana las principales necesidades del turista; en este caso, el transporte resuelve la necesidad de trasladar a una persona de un lugar a otro; el alojamiento resuelve la necesidad de descanso y horas de sueño y la alimentación resuelve la necesidad de satisfacer el hambre nutriendo al cuerpo.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11.pt-5.pb-4.px-5(data-aos="fade-up-left")
        .row.justify-content-end
          .col-xxl-9.col-xl-9.col-lg-9.col-md-12.col-sm-12.col-12
            h4.text-white.margen Complementarios
            p.text-white Los complementarios amplían la percepción de valor del turista, frente al servicio básico. Incluir estos servicios dependerá de las necesidades del viajero, pero generalmente influyen en la diferenciación y posicionamiento de la agencia de viajes, con respecto a los servicios de la competencia. En este caso podríamos hablar de la inclusión de atractivos turísticos, fiestas, recorridos guiados, actividades de recreación, conocimiento de personajes representativos del destino, entre otros.

    p.my-5(data-aos="fade-up-right") Estos servicios se organizan dependiendo de varios factores, entre los que se deben tener en cuenta los siguientes, como se aprecia en la figura 11 a continuación:
    .titulo-sexto.color-acento-contenido.my-5(data-aos="fade-up-right")
      span.text-bold.mb-0 Figura 11. 
      span Organización de paquetes turísticos
    .row.fondo16.ampliarambos
      .col-xxl-12.p-5
        .row.justify-content-center(data-aos="fade-up-right")
          .col-xxl-4.col-xl-4.col-lg-4.col-md-10.col-sm-10.col-11
            img.mb-5(src='@/assets/curso/tema1/paquete1.svg')
          .col-xxl-4.col-xl-4.col-lg-4.col-md-10.col-sm-10.col-11
            img.mb-5(src='@/assets/curso/tema1/paquete2.svg')
          .col-xxl-3.col-xl-3.col-lg-3.col-md-8.col-sm-8.col-8
            img.mb-5(src='@/assets/curso/tema1/paquete3.svg')
        p.mt-3.mb-5.text-center(data-aos="fade-up-right") Nota. SENA (2022).
        p.mb-5(data-aos="fade-up-right") Teniendo en claro esos puntos se puede seguir la siguiente ruta para crear un paquete turístico, tal como se explica en el siguiente recurso educativo:
    .row.justify-content-center
      .col-xxl-6.col-xl-7.col-lg-8.col-md-10.col-12.fondo2.mb-5(data-aos="fade-up-right")
        h3.text-white.text-center.pt-2.pb-3.mb-0 Ruta para la creación de un paquete turístico
    //-slider    
    .tarjeta.tarjeta--azul.p-4.mb-5.fondo7(data-aos="fade-up-right")
      SlyderA.pt-4.otroslide3(tipo="b")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Creación o diseño del producto - Análisis de Información
            p Se debe trabajar sobre las necesidades del cliente para realizar la investigación de mercado del producto turístico que ofreceremos. debemos conocer el perfil del pasajero, sus intereses, sus expectativas, así como tener en claro el tipo de turismo en el cual se especializa la agencia y conocer todos los tipos de actividades turísticas existentes.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider21.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Planificación del itinerario
            p En este punto se distribuye el tiempo para cada una de las actividades del paquete turístico. Debemos tener en cuenta las distancias a recorrer, tipo de transporte, duración de las salidas, tiempos de transporte entre ciudades, etc.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider22.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Elección de proveedores
            p Ees necesario conocer la calidad de la oferta que le brindaremos a los turistas, por ello es necesario tener buena relación con los proveedores y escoger siempre los mejores a fin de obtener una buena recomendación y fidelidad de marca por parte del viajero.

          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider23.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Cálculo del presupuesto del viaje
            p Algunas cuestiones a tener en cuenta a la hora de cotizar el viaje serán:
            p Que sea competitivo.
            p Precios netos por día y persona (hay que incluir la comisión del proveedor.
            p Incluir los impuestos correspondientes a cada tipo de servicio.
            p Tener en cuenta los cambios en las cotizaciones de divisas.
            p Tener en cuenta la temporada.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider24.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Cálculo del punto de equilibrio
            p Es muy importante establecer el número mínimo de plazas a vender para cubrir los costes del viaje. Debemos tener claro cuáles son los Costos Fijos (el alquiler de un micro para 50 pasajeros o los servicios de un guía, por ejemplo), los Costos Variables (alojamiento y comidas para los pasajeros, por ejemplo) y el precio de venta. Con esos 3 datos, aplicamos la siguiente fórmula para determinar ese punto de equilibrio.
            .row.justify-content-center
              .col-xxl-4.col-xl-4.col-lg-5.col-md-6.col-sm-3.col-3
                img(src='@/assets/curso/tema1/formula.svg')
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider25.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Elaboración y promoción del folleto
            p Debemos hacer uso de un buen diseño gráfico para presentarle el paquete turístico a los turistas. Acá debemos tener presente la manera de ofrecer el paquete, bien sea de forma presencial o digital. 
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider26.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Promoción del producto
            p Debemos elegir el medio por el cual se va promocionar el paquete turístico, bien sea a través de redes sociales, e-mail, llamadas telefónicas, presencial etc. aquí es fundamental contar con una buena base de datos de potenciales clientes (los que siempre nos compran, los que nos compraron alguna vez o los que sólo preguntaron), y para ello contar con un CRM turístico es muy importante, porque sabremos exactamente que quiere cada cliente, y nos permitirá personalizar las ofertas.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider27.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Formalización y realización
            p Se debe formalizar el viaje previa reserva del mismo. Aquí comienza la fase de venta del viaje, que es sumamente importante para el cliente, ya que es la etapa donde él confía plenamente en el agente, y hace sus primeros pagos por el servicio que le ofrecerán.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider28.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Control de calidad y seguimiento de la venta
            p Se recomienda fuertemente que, luego de finalizado el viaje, se llame al cliente para consultarle como estuvo el mismo, en que podemos mejorar, y cualquier otro dato del viaje y del cliente que sea importante para fidelizar a este último
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider29.png')
    p.my-5(data-aos="fade-up-right") Existen tres fases ligadas al ciclo de compra del cliente que están relacionadas con el proceso de venta de un paquete turístico, estas son:
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
        AcordionA.otroacordion2.otratarjetaazul2(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Fase anterior a la compra del paquete turístico")
            .col-md-11
              p Es la fase en la cual el usuario tiene todas las expectativas e imaginarios sobre el viaje que desea y a partir de ello, investiga con otros viajeros que ya han tenido la experiencia para conocer de primera mano, lo bueno y lo no tan bueno del destino y de la empresa con quienes viajaron, dado el caso.

          .row(titulo="Fase durante el consumo del paquete turístico")
            .col-md-11
              p El cliente vive la experiencia ofrecida en el paquete turístico y obtiene una percepción favorable o desfavorable al respecto.
          .row(titulo="Fase después del consumo del paquete turístico")
            .col-md-11
              p la experiencia generada se califica y se difunde a otros turistas por medio de la voz a voz. En esta fase consolidamos o no, la fidelidad al producto y marca.
      .col-xxl-6.col-xl-6.col-lg-5.col-md-8.col-sm-11.col-11(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/imagen24.jpg')

    p.mt-5(data-aos="fade-up-right") Vender de manera <i>online</i> se convirtió en una necesidad para las empresas que desean hacer crecer sus negocios. En turismo, el escenario virtual es un buen lugar para ofrecer los paquetes turísticos; sin embargo, se debe tener una buena estrategia para lograr la venta y poder llegar al nicho de mercado indicado. En este sentido, el mercadeo digital, cumple una función muy importante ya que brinda herramientas para incrementar las ventas de una manera personalizada logrando que el usuario conecte con la experiencia que ofrece la agencia de viajes. 
    p.mb-5(data-aos="fade-up-right") A continuación, se va pueden ver diferentes consejos para poder dar mayor fuerza a la promoción <i>online</i> de los paquetes turísticos (ver figura 12):
    .titulo-sexto.color-acento-contenido.my-5(data-aos="fade-up-right")
      span.text-bold.mb-0 Figura 12. 
      span Tips para la promoción <i>online</i> de los paquetes turísticos
    .row.fondo30.ampliarambos
      .col-xxl-12.px-5
        .row.justify-content-center.my-5(data-aos="fade-up-right")
          .col-xxl-4.col-xl-4.col-lg-4.fondo32.pt-4.px-4.mx-5.mb-4
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                p El entorno <i>web</i> de la agencia de viajes requiere una optimización SEO del contenido, capaz de situar la página en las primeras posiciones. Cuanto más específico sea el contenido más efectivo y fácil de posicionar.
          .col-xxl-4.col-xl-4.col-lg-4.fondo32.pt-4.px-4.mb-4
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                p Con el fin de mejorar la relevancia del contenido del sitio <i>web</i> para los usuarios, es bueno incluir palabras clave en el texto relacionadas con las principales cualidades del paquete turístico.
        .row.justify-content-center.mb-5(data-aos="fade-up-right")
          .col-xxl-3.col-xl-3.col-lg-3.fondo33.pt-4.px-4.mx-5.mb-4
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                p Tener perfil en diferentes redes sociales y hacer uso de videos para promover la agencia a bajo costo, atraer visitantes y generar interés del público.
          .col-xxl-3.col-xl-3.col-lg-3.fondo34.pt-4.px-4.mx-5.mb-4
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                p Contar con opiniones de turistas en los perfiles de redes sociales, puede ayudar para que nuevos viajeros deseen comprarnos un nuevo producto.
          .col-xxl-3.col-xl-3.col-lg-3.fondo33.pt-4.px-4.mx-5.mb-4
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                p El tratamiento de las valoraciones negativas ha de ser rápido. Para evitar una controversia mayor, la estrategia predeterminada es responder de un modo profesional y empático.
    p.text-center.mb-5(data-aos="fade-up-right") Nota. SENA (2022).
    separador
    #rutas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.13 Rutas y circuitos turísticos
    p.mb-5(data-aos="fade-up-right") Hay una diferenciación entre rutas y circuitos turísticos, dependiendo de las actividades involucradas e itinerario que se aborda, a continuación, se encontrará una explicación detallada a este respecto:
    .bloque-texto-g.fondo25.p-3.p-sm-4.p-md-5(data-aos="fade-up-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen25.jpg')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        h4.mb-3 Ruta Turística
        br
        br
        p.mb-0 Es el recorrido que se realiza en un territorio determinado bajo una propuesta estandarizada de lugares y actividades, con el fin de admirar los espacios naturales y disfrutar el legado cultural a partir de la interacción entre grupos sociales que habitan el mismo territorio. Cuentan con un itinerario previo que, a su vez, facilita la orientación del turista en el destino.
    p.mt-5(data-aos="fade-up-right") Dentro de una ruta turística se podrán encontrar señales y carteles especiales que permiten resaltar los atractivos turísticos del lugar, con la intención de facilitar el recorrido del turista. Estos carteles, por tanto, no solo definen la ubicación, sino también la información aportante del atractivo a visitar.
    p.mb-5(data-aos="fade-up-right") En los últimos años, las rutas turísticas han tomado bastante importancia al momento de viajar ya que ayudan a evitar la saturación de ciertos destinos, responden a las nuevas tendencias del mercado, y les brindan a los turistas experiencias innovadoras al tener contacto con diferentes comunidades autóctonas y sus manifestaciones culturales.

    .row.justify-content-around.align-items-center.mt-3
      .col-xxl-10.col-xl-10.col-11.col-md-11(data-aos="fade-up-right")
        .tarjeta.fondo8.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p En Colombia hay cinco rutas turísticas que ofrece el Ministerio de Comercio y Fontur a nacionales y extranjeros y que permiten conocer el territorio, en el siguiente enlace se podrá consultarlas:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://fontur.com.co/es/eventos/estas-son-las-5-nuevas-rutas-turisticas-que-mincomercio-y-fontur-tienen-para-ti?q=es/eventos/estas-son-las-5-nuevas-rutas-turisticas-que-mincomercio-y-fontur-tienen-para-ti" target="_blank")
                    span Ingresar
                    i.fas.fa-file-download
    p.my-5(data-aos="fade-up-right") Las rutas turísticas se establecen por tipos, dependiendo de su finalidad, o su recorrido, en el siguiente recurso se ofrece esta diferenciación:
    p.subrayar.mb-5(data-aos="fade-up-right") Según su finalidad
    .row.justify-content-center.my-5
        .col-xxl-6.col-lg-6.col-md-11.col-sm-11.col-11.mt-4(data-aos="fade-up-right")
          LineaTiempoD.color-secundario
            p.text-small(numero="1" titulo="Temática") Con una orientación de excursión o conocimientos.
            p.text-small(numero="2" titulo="Senderismo") Con formas activas de moverse por el territorio.
            p.text-small(numero="3" titulo="Bienestar") Con el predominio del deporte y el descanso activo.
            p.text-small(numero="3" titulo="Combinadas") Son las rutas que combinan elementos de todas las rutas anteriores.
        .col-xxl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up-left")
          img.mt-4(src="@/assets/curso/tema1/imagen26.jpg")
    p.subrayar.mb-5(data-aos="fade-up-right") Según tipo de recorrido
    .row.justify-content-center
      .col-xxl-5.col-xl-5.col-lg-5.col-md-9.col-sm-9.col-11.fondo35.p-4.me-3.mb-5(data-aos="fade-up-right")
        .row
          .col-xxl-4.col-xl-4.col-lg-4.col-md-4.col-sm-4.col-5
            img(src="@/assets/curso/tema1/figura6.png")
          .col-xxl-12.col-xl-12.col-lg-12
            h3.mt-3 Circulares
            p Son las que inician desde un punto de partida, haciendo paradas en lugares de interés por su atractivo natural o cultural, hasta volver al punto inicial donde comenzó el recorrido.
      .col-xxl-5.col-xl-5.col-lg-5.col-md-9.col-sm-9.col-11.fondo36.p-4.me-3.mb-5(data-aos="fade-up-right")
        .row
          .col-xxl-4.col-xl-4.col-lg-4.col-md-4.col-sm-4.col-5
            img(src="@/assets/curso/tema1/figura7.png")
          .col-xxl-12.col-xl-12.col-lg-12
            h3.mt-3 Lineales
            p Van en línea, de un punto a otro, y los destinos turísticos se encuentran ligados por medio de características en común.
    .bloque-texto-g.fondonaranja.p-3.p-sm-4.p-md-5.my-5.otrobloque(data-aos="fade-up-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen27.png')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        h4.mb-3 Circuito turístico
        br
        br
        p.mb-0 Es un recorrido que inicia desde un punto emisor o receptor y cuenta con atractivos y facilidades a lo largo de su ruta. Se le conoce como circuito porque siempre se regresa al punto de partida inicial, sin pasar dos veces por un mismo sitio.
    separador
    #establecimiento.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.14 Establecimientos de alojamiento y hospedaje
    .row.fondo30.ampliarambos
      .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11.ps-5(data-aos="fade-up-right")
        p.mb-4 Son los establecimientos de comercio que brindan el servicio de alojamiento turístico no permanente inferior a 30 días, con o sin alimentación y servicios básicos y/o complementarios, mediante contrato de hospedaje, y se clasifican en:
        ul.lista-ul--color
          li.otrocolorcheck 
            i.fas.fa-check
            | Según el tamaño, y está determinado por el número de habitaciones, depende del país. Pueden ser establecimientos pequeños, medianos o grandes.
          li.otrocolorcheck
            i.fas.fa-check
            | Según la explotación comercial o modalidad: de acuerdo con la Norma Técnica Sectorial Colombiana NTSH 006 del 2009, los establecimientos de alojamiento y hospedaje se clasifican según la modalidad en la prestación del servicio, de la siguiente forma:
          p.ms-4 Albergue-refugio-hostal, aparta hotel, apartamentos turísticos, alojamiento rural-<i>lodge</i>, hotel, posadas turísticas y recinto de campamento o <i>camping</i>.  
      .col-xxl-6.col-xl-6.col-lg-5.col-md-11.col-sm-11.col-11.pe-5(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/imagen28.jpg')
    //-slider    
    .tarjeta.tarjeta--azul.p-4.my-5.fondo13
      SlyderA.pt-4.otroslide(data-aos="fade-up-right")(tipo="b")
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Hostal
            p Un concepto más <i>low-cost</i>, con habitaciones individuales y compartidas. 
            p En muchos casos tienen los servicios comunes como la cocina y los baños. son reconocidas hasta con 3 estrellas.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/hostal.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Aparta hotel
            p Es un tipo de hotel, orientado a las largas estadías, y se diferencian de los hoteles tradicionales por el hecho de ofrecer apartamentos enteros, en vez de habitaciones; en ese sentido están dotadas de instalaciones, equipamiento y servicios en condiciones de ocupación inmediata, es decir, combinan la comodidad e independencia de un apartamento, con servicios que normalmente ofrece y disfrutas en un hotel.  No cuentan con carácter de residencia permanente, ya que son lugares de estadías transitorias para los turistas. Están ubicados en lugares vacacionales. Su estructura e instalaciones permiten la conservación, elaboración y consumo de alimentos.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/apartahotel.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Alojamiento rural
            p Son casas de alquiler, a las afueras de la ciudad, cerca de las montañas, o de lugares similares; para escapadas de un par de días o fines de semana. Ideales para ir con la familia o un grupo de amigos. No cuentan con servicios personalizados.

          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/alojamientorural.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 <i>Camping</i>
            p Una alternativa a los clásicos y muy popular para quienes quieren escapar de lo cotidiano, se asocian con tiendas de campaña o carpas para pasar la noche. Se usan mucho en los safaris, expediciones, grupos de escuelas y universidades. En definitiva, para aquellos que quieren disfrutar de la naturaleza.
            p Aunque no está estipulado en la norma de turismo; actualmente existe un sub-titpo de <i>camping</i> pero con más <i>glamour</i> y estilo y es el llamado: <i>Glamping</i>.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/camping.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 <i>Glamping</i>
            p La unión de las palabras <i>Glamour + Camping</i>, está adquiriendo relevancia en el mundo viajero, porque combina los beneficios de acampar al aire libre y cerca de la naturaleza (<i>camping</i>), con la exquisitez y comodidades que te ofrece un hotel de lujo (<i>glamour</i>).
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/glamping.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Hotel
            p Un hotel es el concepto más común y más amplio que encontramos. Es básicamente uno de los tipos de hospedaje que alberga de forma temporal a huéspedes o viajeros en habitaciones independientes, brindándoles diversos servicios diarios (limpieza, comida, recepción, etc.) personalizados y complementarios. Por lo general, se clasifican entre 1 y 7 estrellas.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/hotel.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Resort
            p Hotel orientado hacia la recreación.
            p Cuentan con varios restaurantes, piscinas. 
            p En ocasiones se llega a percibir como destinos “ todo incluido” 
            p Cobra una sola tarifa Tienden a estar en categoría de calidad o lujo.

          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/resort.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Hotel Casino
            p Hotel que tiene juegos de azar.
            p En algunos lugares ( especial mente en Europa) los hoteles casinos son sofisticados y elegantes.
            p En otros lugares ( especial mete en las vegas) son <i>resort</i> extravagantes.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/casino.png')
    p.mb-5(data-aos="fade-up-right") Además, se encuentra una clasificación según las estrellas otorgadas. Normalmente, los hoteles deben cumplir unos requisitos mínimos para tener diferentes estrellas que van desde la superficie mínima de las habitaciones, hasta el equipamiento con el que cuenta el hotel. En Colombia se han establecido diferentes requisitos que deben ser cumplidos por los hoteles que deseen certificar su calidad bajo la clasificación por estrellas.

    //-slider
    SlyderF.my-5(data-aos="fade-up-right")(columnas="col-lg-6 col-xl-6")
      .tarjeta.otra2.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-4.col-md-5.col-8
            img(src='@/assets/curso/tema1/star1.png')
        h3.text-dark 1 Estrella
        p.text-dark Alojamiento limpio, básico, puede o no tener un baño privado, teléfono en la habitación, televisión o servicios. 
        p Un hotel de una estrella es ideal para el viajero con poco presupuesto, donde el precio es la principal preocupación.
        p Deberán cumplir el 100% de los requisitos definidos en la Norma NTSH006, 178 puntos y los requisitos legales vigentes.
      .tarjeta.otra2.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-5.col-md-5.col-8
            img(src='@/assets/curso/tema1/star2.png')
        h3.text-dark 2 Estrellas
        p.text-dark Alojamiento limpio y básico, pueden tener o no un centro de negocios o acceso a internet, pero por lo general sin salas de reuniones, botones, gimnasio o instalaciones recreativas. El restaurante a menudo se limita a servicio de café o un desayuno continental. Las habitaciones ofrecen normalmente baño privado, teléfono, televisión y servicios limitados.
        p Es ideal para viajeros de negocios o exploradores, donde el costo es un factor, pero sí se desean servicios básicos.
        p Deberán cumplir el 100% de los requisitos definidos en la Norma NTSH006, 181 puntos y los requisitos legales vigentes.
      .tarjeta.otra2.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-5.col-md-4.col-8
            img(src='@/assets/curso/tema1/star3.png')
        h3.text-dark 3 Estrellas
        p.text-dark Mayor énfasis en la comodidad, estilo y servicio personalizado. A menudo tienen un restaurante, gimnasio, una tienda de souvenirs o elementos de higiene personal y botones. Generalmente, hay salas de juntas y / o salas de conferencia y servicios relacionados disponibles. Las habitaciones incluyen más servicios y hay una atención más cuidadosa a la calidad y comodidad.
        p Es ideal para viajeros de negocios o de placer en busca de un poco más que los servicios básicos.
        p Deberán cumplir el 80% de los requisitos definidos en la Norma NTSH006, rango 208 - 260 puntos y los requisitos legales vigentes.
      .tarjeta.otra2.p-4.fondo19
        .row.justify-content-left.mb-3
          .col-xxl-6.col-md-4.col-8
            img(src='@/assets/curso/tema1/star4.png')
        h3.text-dark 4 Estrellas
        p.text-dark Mayor calidad y mayor nivel de confort. Tienen más de un restaurante, bar y servicio a cuartos con horario prolongado. Los servicios disponibles pueden incluir botones, limpieza y servicio de <i>valet parking</i>. Normalmente, cuentan con centro de conferencias y servicios de negocios. Las habitaciones son amplias y por lo general ofrecen un mobiliario elegante, ropa de cama de alta calidad, productos de baño y una amplia gama de servicios como minibar y secadora de pelo.
        p Deberán cumplir mínimo con el 85% de los requisitos definidos en la Norma NTSH006, rango 283 - 333 puntos y los requisitos legales vigentes.
      .tarjeta.otra2.p-4.fondo19
        .row.justify-content-start.mb-3
          .col-xxl-6.col-md-5.col-8
            img(src='@/assets/curso/tema1/star5.png')
        h3.text-dark 5 Estrellas
        p.text-dark Muy orientado al servicio y brinda altos estándares de comodidad y calidad. Cuenta con más de un restaurante, a menudo incluyendo una opción de restaurante <i>gourmet</i>, así como un bar o sala de estar y servicio a cuartos las 24 horas. Puede ofrecer canchas de tenis y acceso a campo de golf, así como un <i>spa</i>, un gimnasio moderno. 
        p Deberán cumplir mínimo con el 95% de los requisitos definidos en la norma NTSH006, Rango 349 - 337 puntos y los requisitos legales vigentes.
    p.my-5(data-aos="fade-up-right") Según la explotación comercial, modalidad o temática escogida para llevar a cabo su oferta, los hoteles pueden especializarse en las siguientes:
    .row.justify-content-center
      .col-xxl-8.col-xl-8.col-lg-10.col-md-11.col-12.fondo2.mb-5.py-3(data-aos="fade-up-right")
        h3.text-white.text-center.pt-2.pb-3.mb-0 Clasificación en función de su temática, localización o régimen de alojamiento
    //-slider    
    .tarjeta.tarjeta--azul.p-4.mb-5.fondo7
      SlyderA.pt-4.otroslide3(data-aos="fade-up-right")(tipo="b")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Hoteles Spa
            p Un hotel spa es un tipo de alojamiento que cuenta entre sus instalaciones con servicios de tratamiento de salud con agua. 
            p Esto se traduce en hoteles con servicios con piscinas especiales y climatizadas, especiales para el relax en familia o con la pareja
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider31.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Hotel Boutique
            p Estos hoteles cuentan con pocas habitaciones, idealmente menos de 30, y en muchas ocasiones las características de espacio y decoración distinguen claramente a cada una de ellas. Generalmente están ambientados con una temática o estilo particular. Los hoteles boutique van orientados al turismo de esparcimiento; ofrecen un servicio personalizado que en muchas ocasiones incluye servicio de masajes y SPA. La arquitectura, decoración y mobiliario generalmente dan una personalidad distintiva al lugar. 
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider32.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Hoteles Hacienda
            p Estos hoteles de gran extensión se encuentran en sitios originalmente aislados o retirados de las ciudades. 
            p En algún momento los inmuebles fueron minas, fincas u otro tipo de centros de trabajo y ahora han sido remodelados, incorporándoseles extensas áreas verdes y espacios para la recreación y actividades al aire libre, sin perder su esencia histórica. 
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider33.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Hotel <i>Resort</i>
            p Son un complejo turístico con una calificación de entre 4 y 5 estrellas.  Normalmente se encuentran ubicados en ambientes naturales o playas, lo cual permite ofrecer a sus huéspedes una  cantidad de actividades de ocio adicionales. Cuentan con todos los servicios básicos de los que dispone un hotel y muchos de ellos tienen regímenes de “todo incluido” que permiten que, por un precio fijo, se puedan  aprovechar todos los servicios que ofrece el complejo hotelero, así como actividades para niños y para adultos. Ejemplo: Hoteles Decamerón
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider34.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Hoteles de Naturaleza
            p Están situados en las proximidades de parajes naturales de interés como parques naturales, reservas y áreas protegidas. Las estancias suelen ser de varios días. El turismo ecológico es una de las actividades que esta creciendo por la variedades que la naturaleza y las costumbres que los habitantes nos brindan, aunque la naturaleza como la única y verdadera fuente de descanso y paz por lo tanto tenemos que ser muy responsables para no causar daño a la naturaleza ni a los nativos de la región. Debido a su rápido crecimiento han contribuido al desarrollo de la actividad turística. Ejemplo: Ecohabs Minca (Santa Marta, Colombia)
            .row.justify-content-center
              .col-xxl-4.col-xl-4.col-lg-5.col-md-6.col-sm-3.col-3
                img(src='@/assets/curso/tema1/formula.svg')
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider35.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Hoteles temáticos para niños y adultos
            p Estos hoteles tienen la singularidad de corresponderse con una idea general. Así pues, podemos ver hoteles temáticos inspirados en lugares especiales como en decorados de cine, caracterizados con personajes de películas famosas, o diseñados en los entornos más sorprendentes. 
            p Ejemplo: hoteles de <i>Disney</i>
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/slider36.png')
        .row.justify-content-center
          .col-md-11
            figure
              img(src='@/assets/curso/tema1/slider37.png')
        .row.justify-content-center
          .col-md-11
            figure
              img(src='@/assets/curso/tema1/slider38.png')
    separador
    #sostenibilidad.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.15 Sostenibilidad turística
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
        p El turismo sostenible está enfocado en generar un menor impacto o desgaste en la cultura del destino y en el medioambiente. Se le ha reiterado su importancia desde los años noventa, donde se comenzó a evidenciar los efectos adversos de la actividad no solo en el medio ambiente, sino también en la cultura local de los destinos. La sostenibilidad, por tanto, busca satisfacer las necesidades de los turistas, pero teniendo en cuenta las consecuencias actuales y futuras, económicas, sociales y medioambientales que puede haber en la industria, el entorno y de las comunidades anfitrionas.  
        p Es importante comprender que no es un subtipo, ni una clase, ni una forma diferente de turismo; por el contrario, todos los tipos de turismo deberían ser conscientes con el medioambiente y la cultura del territorio. Ejerciendo la actividad turística de manera sostenible, no solo se busca mitigar los impactos negativos de la industria, sino también buscar beneficios para las comunidades locales a nivel económico y social a partir de la sensibilización y el apoyo para la conservación del entorno. 

      .col-xxl-6.col-xl-6.col-lg-5.col-md-9.col-sm-11.col-11(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/imagen29.jpg')
    p.my-5(data-aos="fade-up-right") Según la explotación comercial, modalidad o temática escogida para llevar a cabo su oferta, los hoteles pueden especializarse en las siguientes:
    .row.justify-content-around(data-aos="fade-up-right")
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-11.col-11.fondo37.p-5.mb-5
        h4.mb-4 Dimensión socio cultural
        p Hace referencia al respeto por la identidad de las comunidades anfitrionas, su cultura, valores y tradiciones. También a la preservación de los activos culturales, arquitectónicos y arqueológicos de los destinos, y a la protección del patrimonio inmaterial y las costumbres ancestrales de comunidades étnicas (Política de Turismo Sostenible, MINCIT 2012).
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-11.col-11.fondo38.p-5.mx-1.mb-5
        h4.mb-4 Dimensión ambiental 
        p Gestión óptima de los recursos naturales que están en la base del desarrollo turístico, y a la conservación del medio ambiente y de los ecosistemas, que soportan la vida de distintas especies y la salud del ser humano.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-11.col-11.fondo39.p-5.mb-5
        h4.mb-4 Mejor opción
        p El turismo sostenible debe ser rentable y debe haber una distribución equitativa de los beneficios socio-económicos como el empleo estable y la obtención de ingresos y servicios sociales para las comunidades anfitrionas.
    .row(data-aos="fade-up-right")
      .col-xxl-4.col-xl-5.col-lg-6.col-md-8.col-sm-10.col-11.fondomundo2.ps-3
        h4.ps-5.pt-5.ms-5.mt-3 Colombia y el turismo sostenible
      p.my-5 El compromiso de Colombia con la sostenibilidad inició en el año 2012, cuando el país definió los ODS (Objetivos de Desarrollo Sostenible) en la Cumbre de Rio de Janeiro. Este evento estuvo enfocado en los requerimientos económicos e institucionales para el desarrollo sostenible y allí Colombia defendió la necesidad de realizar prácticas sostenibles cuando de turismo se habla y adicionalmente mencionó que los ODS deberían ser aplicados en todos los países y no solo en las economías emergentes a las que estaban inicialmente dirigidos (ver figura 13). 
    .row.justify-content-center.mb-5(data-aos="fade-up-right")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-11.col-sm-11.col-11
        .cajon.puntacajon.p-4.mb-4.fondo17.sombracajon
          p.mb-0.mx-3 En el documento plasmado por la Organización Mundial del Turismo y la Organización de los Estados Americanos en el 2018 y titulado “El turismo y los Objetivos de Desarrollo Sostenible - Buenas prácticas en las Américas” se explican 17 objetivos creados con el fin de “erradicar la pobreza, proteger el planeta y garantizar la igualdad y la prosperidad para todos”. En dichos objetivos se le presta gran importancia al rol que pueden desempeñar las empresas para crear un desarrollo más sostenible para todos. 

    .titulo-sexto.color-acento-contenido.my-5(data-aos="fade-up-right")
      span.text-bold.mb-0 Figura 13. 
      span Objetivos de Desarrollo Sostenible
    .row.justify-content-center.mb-3(data-aos="fade-up-right")
      .col-xxl-8.col-xl-8.col-lg-8.col-md-11.col-sm-11.col-11
        img(src='@/assets/curso/tema1/imagen30.png')
    p.text-center.mb-0(data-aos="fade-up-right") Nota. Tomado de 
    p.text-center.mb-5(data-aos="fade-up-right") https://www.cepal.org/sites/default/files/styles/content_big/public/static/images/e_2018_ods_poster_with_un_emblem_es.png?itok=aSBP-hQC
    p.mt-5(data-aos="fade-up-right") En el 2012, en Colombia se genera una política de naturaleza, y su objetivo es “posicionar a Colombia como destino de turismo de naturaleza, reconocido por el desarrollo de productos y servicios altamente competitivos y sostenibles”.
    p.mb-5(data-aos="fade-up-right") Desde el Ministerio de Industria, Comercio y Turismo de Colombia también se ha implementado el programa de Normas Técnicas Sectoriales de Turismo Sostenible, que buscan asegurar mayores estándares de calidad en los servicios de las empresas turísticas, certificando así que sus actividades fomentan el turismo sostenible y la protección de la biodiversidad de la zona. 
    .row.justify-content-around.align-items-center.mt-3
      .col-xxl-10.col-xl-10.col-11.col-md-11(data-aos="fade-up-right")
        .tarjeta.fondo8.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Las Naciones Unidas y la Organización Mundial del Turismo, han formulado el código ético mundial, para llevar a cabo una práctica responsable y sostenible de gobiernos, empresas, comunidades y turistas, con responsabilidad en cada uno de sus territorios, en el siguiente enlace podrá consultarlo:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.ugto.mx/images/eventos/06-07-16/codigo-etico-mundial-turismo.pdf" target="_blank")
                    span Ingresar
                    i.fas.fa-file-download
    separador
    #colombia.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.16 Colombia turística
    p.mb-5(data-aos="fade-up-right") Colombia tiene un amplio territorio, surcado por 3 cordilleras lo que permite disfrutar de varios pisos térmicos, variedad de cultivos y bosques tropicales, a continuación, se podrá aprender un poco más de las bellezas naturales con que se cuenta:
    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5(data-aos="fade-up-right") En Colombia no existen estaciones (invierno, verano, primavera, otoño) como en otros países el mundo, esto debido a su ubicación en la zona ecuatorial que mantiene una igualdad en las horas en las que sale el sol o cae la noche. A cambio de estaciones, en el país se puede hablar de temporadas secas (de diciembre a enero y de julio a agosto) y temporadas de lluvias (de abril a mayo y de octubre a noviembre). Adicional a lo anterior, en Colombia también se puede encontrar una gran variedad de paisajes, biodiversidad y de pisos térmicos debido a la diversidad topográfica del territorio. 
    p.mb-5(data-aos="fade-up-right") El clima en el país varía de acuerdo con los pisos térmicos que hay en cada región, de acuerdo con la explicación que encuentra a continuación:
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
        AcordionA.otroacordion.otratarjetaazul(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Clima cálido")
            .col-md-11
              p Son zonas en las que el calor supera los 24º C., como ocurre en el Pacífico, en donde se puede hacer avistamiento de ballenas jorobadas; San Andrés, un destino con playas increíbles para bucear; y  la costa Caribe, en donde se celebra el famoso Carnaval de Barranquilla, y en donde se encuentra el Parque Nacional Natural Tayrona.
          .row(titulo="Clima templado")
            .col-md-11
              p En estas zonas, la temperatura oscila entre los 17ºC. Y los 24º C. Como ocurre en Medellín, en donde se celebra la Feria de las flores, o en Cali hogar de la famosa Feria de Cali.
          .row(titulo="Clima frío")
            .col-md-11
              p La temperatura oscila entre los 12º C y los 17º C. Ejemplo de éste clima es la ciudad de Bogotá, la cual fusiona historia, patrimonio y modernidad, en donde hay variedad de museos y centros culturales, como el Museo del Oro del Banco de la República.
          .row(titulo="Páramos")
            .col-md-11
              p En estas zonas, las temperaturas oscilan entre los 6º C y los 12º C. El parque Nacional Natural Chingaza, en el cual habitan especies como venados de cola blanca, cóndores y osos andinos.
          .row(titulo="Zonas glaciares")
            .col-md-11
              p Tienen una temperatura inferior a los 6º C. En la Sierra Nevada de Santa Marta, se puede apreciar paisajes nevados, además de practicar el <i>trekking</i>.
          .row(titulo="Selvas tropicales")
            .col-md-11
              p Son hábitats calurosos y húmedos, y las temperaturas superan los 27º C. En Colombia, la región del Amazonas es una selva tropical, con gran riqueza de paisajes naturales.
          .row(titulo="Tropical de estepa")
            .col-md-11
              p Se caracteriza por sus altas temperaturas, sus lluvias mínimas y muy poca vegetación, con temperaturas que sobrepasan los 34º C. La Guajira es un ejemplo de este clima, en donde se puede disfrutar de paisajes desérticos, visitar las rancherías y conocer algo más de la cultura <i>Wayuu</i>.
      .col-xxl-6.col-xl-6.col-lg-5.col-md-8.col-sm-11.col-11(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen31.jpg')
    p.mt-5(data-aos="fade-up-right") Anteriormente por parte del turismo, Colombia no obtenía ingresos importantes debido a la inseguridad y la violencia en la que se había sumergido desde los años sesenta; sin embargo, este panorama cambió y en la última década bajo todas las políticas públicas, el país ha tenido un desarrollo económico y cultural exponencial, lo que ha ayudado a que el sector turismo ocupe una de las bases fundamentales del país.
    p.mb-5(data-aos="fade-up-right") Colombia está lleno de atractivos turísticos, su variada geografía, la riqueza ecológica, la variedad de regiones y climas, su historia llena aventuras, sus personajes representativos, sus residentes y su cultura, ha encantado a propios y foráneos durante años. Es un país que hace vibrar a sus visitantes, con sus emociones y toda su cultura. El gobierno ha enfatizado 7 sectores de turismo, como forma de promoción, estos son (ver figura 14):
    .titulo-sexto.color-acento-contenido.my-5(data-aos="fade-up-right")
      span.text-bold.mb-0 Figura 14. 
      span Sectores de énfasis turístico 
    h3.text-center.mb-5(data-aos="fade-up-right") El énfasis del gobierno en turismo se hace en siete sectores
    .row.ampliarambos.justify-content-center.fondo40
      .col-xxl-8.col-xl-8.col-lg-8.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen32.png')
    .row.justify-content-around.align-items-center.mt-3
      .col-xxl-10.col-xl-11.col-lg-11.col-12.col-md-12(data-aos="fade-up-right")
        .tarjeta.fondo8.p-3.mb-5
          .row.justify-content-between.align-items-center
            .col-3.col-sm-2.col-lg-2.col-xl-2.col-xxl-2
              img(src="@/assets/curso/tema1/figura2.svg")
            .col.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.col-xxl-10.col-xl-10.col-lg-10
                  p.text-bold Encuentra en las páginas oficiales de turismo en Colombia, los lugares más impactantes para conocer en el país:
                .col-sm-auto
                  <ul style="list-style-type:disc; color: #FFf; margin-left: 10px;">
                    <li>
                      .row.justify-content-center.mb-3
                        .col-xxl-10.col-xl-10.col-lg-9.col-md-9
                          <span style="color: #12263F;">Colombia.co.12 lugares que no puedes dejar de ver en Colombia.</span>
                        .col-xxl-2.col-xl-2.col-lg-2.col-md-3
                          a.boton.color-acento-botones.texto-blanco.ms-0(href="https://www.colombia.co/visita-colombia/experiencias-unicas/12-lugares-que-no-puedes-dejar-de-ver-en-colombia/ " target="_blank")
                            span Ingresar
                            i.fas.fa-file-download 
                    </li>
                    <li>
                      .row.justify-content-center.mb-3
                        .col-xxl-10.col-xl-10.col-lg-9.col-md-9
                          <span style="color: #12263F;">Colombia.<i>Travel</i>. Conéctate con la faceta más salvaje de Colombia a través de sus lugares turísticos.</span>
                        .col-xxl-2.col-xl-2.col-lg-2.col-md-3
                          a.boton.color-acento-botones.texto-blanco.ms-0(href="https://colombia.travel/es/blog/preparate-con-esta-lista-de-lugares-para-visitar-y-viaja-por-colombia" target="_blank")
                            span Ingresar
                            i.fas.fa-file-download 
                    </li>
                  </ul>
    separador
    #estadisticas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.17 Estadísticas sectoriales
    .row.justify-content-center
      .col-xxl-4.col-xl-4.col-lg-4.col-md-11.col-11(data-aos="fade-up-right")
        p Colombia obtiene las estadísticas de turismo de diferentes fuentes:
        ul.lista-ul--color.fondo41.otrocolorcheck 
          li 
            i.fas.fa-check
            | CITUR.
          li
            i.fas.fa-check
            | SITUR.
          li 
            i.fas.fa-check
            | DANE.
          li 
            i.fas.fa-check
            | ANATO.
        p En la siguiente infografía se podrá conocer más acerca de estas fuentes de información estadística y su uso:
      .col-xxl-8.col-xl-8.col-lg-8.col-md-11.col-11(data-aos="fade-up-left")
        img(src="@/assets/curso/tema1/imagen33.jpg")

    .row.justify-content-center.my-5
      .col-xxl-6.col-xl-6.col-lg-6.col-md-8.col-8(data-aos="fade-up-right")
        img(src="@/assets/curso/tema1/imagen34.svg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-11(data-aos="fade-up-left")
        //-slider    
        .tarjeta.tarjeta--gris.px-4.my-4.pt-4
          SlyderA.otroslide2(tipo="b")
            .row.justify-content-center
              .col-lg-4.col-md-4.col-5
                figure
                  img(src='@/assets/curso/tema1/citur.svg')
              .col-lg-12.col-md-12.mb-4.mb-md-0.px-4
                p.mt-5 Sistema de estadísticas de turismo que permite identificar la estructura y evolución del turismo a partir de un conjunto de datos sobre la oferta y demanda a nivel nacional e internacional. 
                p Este sistema mide varios aspectos:
                p Estadística económico, empleo, flujos turísticos, flujos aéreos, parques nacionales naturales, agencias de viaje, hoteles y transporte terrestre.
            .row.justify-content-center
              .col-lg-5.col-md-5.col-5
                figure
                  img(src='@/assets/curso/tema1/situr.svg')
              .col-lg-12.col-md-12.mb-md-0.px-4
                p.mt-5 Es un sistema de medición, similar al anterior, pero en este caso es utilizado para cada departamento. En su página web se pueden seleccionar los diferentes departamentos con sus municipios, para encontrar información turística asociada a los atractivos turísticos del lugar, indicadores departamentos, indicadores de sostenibilidad y mapa regional de oportunidades. 
            .row.justify-content-center
              .col-lg-6.col-md-5.col-6.col-sm-6
                figure
                  img(src='@/assets/curso/tema1/dane.svg')
              .col-lg-12.col-md-12.mb-4.mb-md-0.px-4
                p.mt-5 El DANE (entidad responsable de la planeación, levantamiento, procesamiento, análisis y difusión de las estadísticas oficiales de Colombia), como lo es la Encuesta de Gasto en Turismo Interno (EGIT) y de la Encuesta Nacional de Hoteles, cuyo objetivo es “consolidar el sistema de estadísticas de turismo con el fin de disponer  de información que permita el diseño eficiente de políticas, estrategias, planes y programas turísticos y fortalecer el proyecto de cuenta satélite de turismo de Colombia”.
            .row.justify-content-center
              .col-lg-4.col-md-4.col-5
                figure
                  img(src='@/assets/curso/tema1/anato.svg')
              .col-lg-12.col-md-12.mb-4.mb-md-0.px-4
                p.mt-5 ANATO (Asociación Nacional de Agencias de Viajes y Turismo) viene trabajando con sus Agencias Asociadas para recolectar los datos en las Encuestas de Temporada, las cuales presentan datos asociados a las ventas de las Agencias en las cuatro temporadas altas del año y en la actualidad, mediante la Encuesta Trimestral que mide los resultados de las Agencias para cada trimestre en específico.
    p.my-5(data-aos="fade-up-right") El Ministerio de Comercio, Industria y Turismo de Colombia, en su plataforma Centro de Información Turística de Colombia, CITUR, establece la medición de una serie de datos, que permiten obtener estadísticas puntuales, estos son (ver tabla 6):
    .titulo-sexto.color-acento-contenido(data-aos="fade-up-right")
      span.text-small.mb-0 Tabla 6 
      span.text-small.mb-0 Datos Estadísticos CITUR
    <table>
      <tr style="align-items: center;">
        <th class="fondo6 text-center anchocol"><h4 class="text-bold">Estadística económica</h4></th>
        <td style="background-color: #F6F6F6; align-items: center;">
          <span>Muestra un panorama cualitativo y cuantitativo del volumen, composición y dinamismo de las fuerzas productivas de un país.</span><br/>
          <span>Registro Nacional de Turismo: La Ley 300 de 1996 en el artículo 61 estableció el Registro Nacional de Turismo y el artículo 12 de la Ley 1101 de 2006 define los prestadores de servicios turísticos obligados a registrarse antes de iniciar sus operaciones en Colombia. Vienen clasificados por categoría y subcategoría según sea el caso.</span><br/>
          <span>Este Registro es obligatorio para su funcionamiento y debe actualizarse anualmente.</span><br/>
          <span>En esta sección se miden el número de Prestadores de Servicios Turísticos en Colombia, número de habitaciones, camas y empleados de los prestadores de servicios turísticos de alojamiento, número de empleados de los prestadores de servicios turísticos, etc.</span>
        </td>
      </tr>
      <tr>
        <th class="fondo6 text-center anchocol"><h4 class="text-bold">Empleo</h4></th>
        <td style="background-color: #F6F6F6;">
          <p style="margin-bottom: 0px;">Los indicadores de mercado laboral muestran las condiciones y características de empleo de los colombianos.</p>
        </td>
      </tr>
      <tr>
        <th class="fondo6 text-center anchocol"><h4 class="text-bold">Flujos turísticos</h4></th>
        <td style="background-color: #F6F6F6;">
          <p style="margin-bottom: 0px;">Corresponde a corrientes de turistas que se desplazan a nivel mundial con el objetivo de tener nuevas experiencias en diferentes ámbitos de la vida como ocio, convenciones, salud, cultura, entre otras. Acá se mide la llegada de cruceros, turismo emisor y turismo receptor.</p>
        </td>
      </tr>
      <tr>
        <th class="fondo6 text-center anchocol"><h4 class="text-bold">Flujos aéreos</h4></th>
        <td style="background-color: #F6F6F6;">
          <p style="margin-bottom: 0px;">Miden las llegadas de pasajeros aéreos nacionales e internacionales en vuelos regulares.</p>
        </td>
      </tr>
      <tr>
        <th class="fondo6 text-center anchocol"><h4 class="text-bold">Parques Nacionales Naturales</h4></th>
        <td style="background-color: #F6F6F6;">
          <p style="margin-bottom: 0px;">Colombia tiene 59 áreas protegidas que pertenecen al sistema de Parques Nacionales Naturales de Colombia, los cuales representan un área total de 17.541.489 hectáreas. En esta sección se miden, por tanto, la cantidad de visitantes a dichos lugares.</p>
        </td>
      </tr>
      <tr>
        <th class="fondo6 text-center anchocol"><h4 class="text-bold">Agencias de viaje</h4></th>
        <td style="background-color: #F6F6F6;">
          <p style="margin-bottom: 0px;">Mide el personal ocupado, ingresos nominales, Índice de agencias de viajes y coeficiente de variación</p>
        </td>
      </tr>
      <tr>
        <th class="fondo6 text-center anchocol"><h4 class="text-bold">Hoteles</h4></th>
        <td style="background-color: #F6F6F6;">
          <p style="margin-bottom: 0px;">Obtienen datos del empleo en estos establecimientos, así como la ocupación hotelera, el motivo de viajes de los huéspedes y la variación de ingresos totales.</p>
        </td>
      </tr>
      <tr>
        <th class="fondo6 text-center anchocol"><h4 class="text-bold">Transporte terrestre</h4></th>
        <td style="background-color: #F6F6F6;">
          <p style="margin-bottom: 0px;">Mide el flujo de viajeros en terminales de transporte terrestre, el medio de desplazamiento más utilizado en Colombia, son las carreteras.</p>
        </td>
      </tr>
    </table>
    p.text-center.mt-3.mb-5(data-aos="fade-up-right") Nota. SENA (2022).
    .row.justify-content-center.mb-5
      .col-xxl-10.col-xl-10.col-lg-10.col-md-11.col-sm-11.col-11(data-aos="fade")
        .cajon.puntacajon.p-4.mb-4.fondo17.sombracajon
          p.mb-0.mx-3 La cuenta satélite de turismo (CST) es una parte del sistema de cuentas nacionales que se ha convertido en una herramienta de análisis en la formulación de políticas para la promoción y comercialización del sector, Con los datos que arroja, se genera conocimiento sobre la manera en que se desarrollan las actividades turísticas teniendo en cuenta las recomendaciones de la Organización Mundial del Turismo (OMT).
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '<p style="color: #111E61; font-weight: 700;">Prehistoria</p>',
        texto:
          '<p style="color: #111E61;">Primeros desplazamientos por cuestiones climáticas, de alimentación y presiones de grupos.</p>',
        icono: require('@/assets/curso/tema1/prehistoria.png'),
      },
      {
        titulo: '<p style="color: #111E61; font-weight: 700;">Edad antigua</p>',
        texto:
          '<p style="color: #111E61;">Aparecen actividades de tiempo libre y de ocio creativo en la Antigua Grecia. Con la cultura Romana inician las primeras actividades de termalismo. Primeros viajes hacia el mar en época dorada de la antigua Roma, así como las actividades de teatro.</p>',
        icono: require('@/assets/curso/tema1/antigua.png'),
      },
      {
        titulo: '<p style="color: #111E61; font-weight: 700;">Edad media</p>',
        texto:
          '<ul style="list-style-type: disc; margin-left:1em; color:#008BD2;"><li><p style="color: #111E61;">Primeros peregrinaciones hacia lugares cristianos.</p></li><li><p style="color: #111E61;">Surgen las Cruzadas con el objetivo de recuperar territorios cristianos invadidos por los árabes.</p></li><li><p style="color: #111E61;">Primeros mapas y rutas de caminos de peregrinación.</p></li><li><p style="color: #111E61;">Nacen los refugios y hospedajes en dichos caminos por Europa.</p></li></ul>',
        icono: require('@/assets/curso/tema1/media.png'),
      },
      {
        titulo: '<p style="color: #111E61; font-weight: 700;">Edad moderna</p>',
        texto:
          '<p style="color: #111E61;">Aparecen las primeras formas de alojamiento y surge el concepto de Hotel. Por cuenta de los viajes a América, aparece la geografía como ciencia. Surgen las expediciones para jóvenes aristócratas <i>“El Grand Tour”</i>.Aumenta la demanda de visitas a aguas termales.</p>',
        icono: require('@/assets/curso/tema1/moderna.png'),
      },
      {
        titulo:
          '<p style="color: #111E61; font-weight: 700;">Edad contemporánea</p>',
        texto:
          '<p style="color: #111E61;">Revolución industrial que aumenta actividades de tiempo libre y viajes. El inglés Thomas Cook organiza el primer viaje y crea su agencia de viajes. Se fortalecen hoteles y la administración en este campo. Se potencializan los viajes en automóvil y avión. Se universaliza el mercado turístico a partir de la apertura de fronteras.</p>',
        icono: require('@/assets/curso/tema1/contemporanea.png'),
      },
      {
        titulo: '<p style="color: #111E61; font-weight: 700;">Siglo XXI</p>',
        texto:
          '<p style="color: #111E61;">Aumentan los viajes a destinos como Asia Central y el Pacífico. Entra el auge del Turismo de aventura y de naturaleza. Con las tendencias del siglo XXI se potencializa el turismo experiencial. En turismo de sol y playa, los viajes se dirigen hacia lugares lejanos.</p>',
        icono: require('@/assets/curso/tema1/xxi.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
