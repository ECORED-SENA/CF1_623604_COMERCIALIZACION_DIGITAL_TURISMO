export default {
  global: {
    componenteFormativo: 'Estructuración de la experiencia turística',
    descripcionCurso:
      'Actualmente la manera en que se realizan y se disfrutan los viajes es diferente. Los turistas buscan satisfacer sus necesidades a partir de un producto o servicio turístico, y vivir una experiencia que satisfaga sus gustos, deseos y emociones. La flexibilidad y transformación, de la compra, obliga a las empresas del sector, a adaptarse a esta demanda, aplicar nuevas tecnologías y comercialización digital de servicios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    fondoBannerInterno: require('@/assets/curso/portada/fondo-banner-interno.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/banner/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/banner/5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades del turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivos, características y beneficios del turismo',
            hash: 'objetivos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Elementos básicos o factores que componen la actividad turística',
            hash: 'elementos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Prestadores de servicios turísticos',
            hash: 'prestadores',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Turista y sus motivaciones',
            hash: 'turista',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Evolución del turismo',
            hash: 'evolucion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Morfología del turismo',
            hash: 'morfologia',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Leyes en turismo',
            hash: 'leyes',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Sistema turístico',
            hash: 'sistema',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Inventario turístico',
            hash: 'inventario',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Producto turístico',
            hash: 'producto',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Agencias de viaje',
            hash: 'agencias',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: 'Paquetes turísticos',
            hash: 'paquetes',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.13',
            titulo: 'Rutas y circuitos turísticos',
            hash: 'rutas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.14',
            titulo: 'Establecimientos de alojamiento y hospedaje',
            hash: 'establecimiento',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.15',
            titulo: 'Sostenibilidad turística',
            hash: 'sostenibilidad',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.16',
            titulo: 'Colombia turística',
            hash: 'colombia',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.17',
            titulo: 'Estadísticas sectoriales',
            hash: 'estadisticas',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Experiencias turísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Comunicar la experiencia turística en la <i>web</i> y redes sociales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Servicio al cliente',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Negociación con proveedores',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Abarca Zaquinaula, M (s.f.). Propuesta de un modelo alternativo de funcionamiento del sistema turístico.',
      link:
        'https://repositorio.pucesa.edu.ec/bitstream/123456789/2224/1/Sistema%20Tur%C3%ADstico.pdf',
    },
    {
      referencia:
        'Boullón, R. C. (2006). Planificación del Espacio Turístico. Trillas. Cordente Rodríguez, M; Mondéjar Jiménez, J.A; Esteban Talaya, A (s.f.). Motivaciones del turista: cambio de paradigma. Universitat Jaume I.',
      link:
        'https://www2.fue.uji.es/gesfue2/doc_fue/docs/jornadas/15turismo/motivaciones.pdf',
    },
    {
      referencia:
        'Gurría, M. (2004). Introducción al Turismo. Editorial Trillas. Ledhesma, M (2018). Tipos de turismo: nueva clasificación.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/15091/mod_resource/content/0/Tipos%20de%20turismo%2C%20nueva%20clasificaci%C3%B3n%20-%20Manuel%20Ledhesma.pdf',
    },
    {
      referencia:
        'Martinez Espin, P. (2009). El contrato de viaje combinado. Ediciones la Universidad de Castilla. Marketing de pymes (2021). Fitur 2021 y las nuevas tendencias del Turismo.',
      link:
        'https://www.marketingdepymes.com/fitur-2021-y-las-nuevas-tendencias-del-turismo/',
    },
    {
      referencia:
        'Mincetur. (2014). Manual para la Planificación de Productos Turísticos de Perú. MINCETUR.',
    },
    {
      referencia:
        'Navarro, D. (2015). Recursos turísticos y atractivos turísticos: conceptualización, clasificación y valoración. Cuadernos de Turismo, 35, (2015), 335-357.',
      link: 'https://www.redalyc.org/pdf/398/39838701014.pdf',
    },
    {
      referencia:
        'Norma Técnica Sectorial Colombiana NTSH 006 del 2009. Clasificación de establecimientos de alojamiento y hospedaje. Categorización por estrellas de hoteles. Requisitos.',
    },
    {
      referencia:
        'OSTELEA, Tourism Management School (2019). Qué tipos de turismo existen y cuáles triunfarán en 2020.',
      link:
        'https://www.ostelea.com/actualidad/blog-turismo/que-tipos-de-turismo-existen-y-cuales-triunfaran-en-2020',
    },
    {
      referencia: 'Procolombia (2021). Cinco tendencias para viajar en 2021.',
      link:
        'https://procolombia.co/noticias/cinco-tendencias-para-viajar-en-2021 ',
    },
    {
      referencia:
        'Rolando León, L (2012). Diseño de paquetes turísticos para la fundación duchicela, parroquia cacha, cantón riobamba, provincia de chimborazo. [Tesis de pregrado Ingeniería en ecoturismo].',
    },
    {
      referencia:
        'Sernatur - Servicio Nacional de Turismo (2017). Manual de diseño experiencias turísticas. Subdirección de Desarrollo-Chile.',
      link:
        'https://www.sernatur.cl/wp-content/uploads/2018/11/MDD-Manual-de-Experiencias-Turi%CC%81sticas-1.pdf',
    },
    {
      referencia:
        'Subdirección de Productos y Destinos Sustentables SERNATUR (2015). Manual Paso a paso para el Diseño de Productos Turísticos integrados.',
      link:
        'https://asesoresenturismoperu.files.wordpress.com/2016/08/244-manual-productos-turc3adsticos-chile.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Experiencia turística',
      significado:
        'sensaciones y emociones, interpretadas por el turista, con base a una serie de estímulos durante todas las fases de contacto con el producto turístico.',
    },
    {
      termino: 'Prestadores de servicios turísticos',
      significado:
        'empresas que proporcionan, intermedian o contratan directa o indirectamente con el turista, para la prestación de los servicios turísticos.',
    },
    {
      termino: 'Producto turístico',
      significado:
        'es la combinación de atractivos y servicios, materiales e inmateriales, que posteriormente ofrecerán al mercado los diferentes actores de la cadena (operadores, guías, medios), para satisfacer una demanda turística.',
    },
    {
      termino: 'Turismo',
      significado:
        'actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año.',
    },
    {
      termino: 'Turismo sostenible',
      significado:
        'Persigue desarrollar su actividad generando un impacto mínimo sobre el medioambiente.',
    },
  ],
  complementario: [
    {
      tema: 'Evolución del turismo',
      referencia:
        'Redacción El Tiempo. (16 de octubre 2008). 25 Hitos de la historia del turismo colombiano. EL TIEMPO.',
      tipo: 'Artículo',
      descarga: 'downloads/25_hitos_de_la_historia_del_turismo_colombiano.pdf',
    },
    {
      tema: 'Producto Turístico',
      referencia:
        'Nicolau, J. (s.f.). El precio de los productos turísticos. Universidad de Alicante. Facultad de ciencias económicas y empresariales.',
      tipo: 'Documento de apoyo',
      link: 'https://rua.ua.es/dspace/bitstream/10045/16114/8/Tema%208.pdf',
    },
    {
      tema: 'Ruta turística',
      referencia:
        'Ministerio de Comercio y FONTUR. (s.f.). Cinco rutas turísticas para visitar Colombia.',
      tipo: 'Página oficial',
      link:
        'https://fontur.com.co/es/eventos/estas-son-las-5-nuevas-rutas-turisticas-que-mincomercio-y-fontur-tienen-para-ti ',
    },
    {
      tema: 'Sustentabilidad turística',
      referencia:
        'Organización de las Naciones Unidas y Organización Mundial del Turismo. (2001). Código de Ética Mundial para el Turismo. ',
      tipo: 'Libro- Documento',
      link:
        'https://webunwto.s3.eu-west-1.amazonaws.com/s3fs-public/2019-10/gcetpassportglobalcodees.pdf',
    },
    {
      tema: 'Colombia turística',
      referencia:
        'Colombia.co. (s.f.). 12 lugares que no puedes dejar de ver en Colombia.',
      tipo: 'Página web Colombia.co',
      link:
        'https://www.colombia.co/visita-colombia/experiencias-unicas/12-lugares-que-no-puedes-dejar-de-ver-en-colombia/',
    },
    {
      tema: 'Colombia turística',
      referencia:
        'Colombia.Travel. (s.f.). Conéctate con la faceta más salvaje de Colombia a través de sus lugares turísticos.',
      tipo: 'Página web Colombia.travel',
      link:
        'https://colombia.travel/es/blog/preparate-con-esta-lista-de-lugares-para-visitar-y-viaja-por-colombia',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luisa Fernanda Posada Hincapié',
        cargo: 'Experto temático',
        centro: 'Regional Quindío - Centro de Comercio, Industria y Turismo',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo ',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
}
