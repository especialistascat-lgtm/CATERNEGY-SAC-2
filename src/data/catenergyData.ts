import { Area, BlogPost, CompanyValue, ProjectCase, Service, TeamMember } from '../types';

export const COMPANY_INFO = {
  name: 'CATENERGY SAC',
  legalName: 'CONSULTORIAS EN ALTA TENSION Y ENERGIA SOCIEDAD ANONIMA CERRADA',
  shortLegalName: 'CATENER S.A.C.',
  ruc: '20609382105',
  taxStatus: 'ACTIVO / HABIDO',
  taxEntity: 'SOCIEDAD ANÓNIMA CERRADA (S.A.C.)',
  incorporationDate: '21/04/2022',
  startDate: '03/05/2022',
  fiscalAddress: 'Av. Húsares de Junín Mza. D Lote. 15, Ica – Ica – Parcona, Perú',
  phone: '+51 994 782 124',
  whatsappNumber: '51994782124',
  email: 'especialistascat@gmail.com',
  social: {
    instagram: '@Asesoriaymentoriacat',
    instagramUrl: 'https://instagram.com/Asesoriaymentoriacat',
    linkedin: 'CATENERGY SAC',
    linkedinUrl: 'https://linkedin.com/company/catenergy-sac',
    shortlink: 'https://bit.ly/CATENERGYPERU',
  },
  slogan: 'Auditoría, Consultoría y Servicios en Energía',
  valueProposition: 'Gestión inteligente de la energía, confiabilidad eléctrica y mantenimiento especializado.',
  visionStatement: 'Ser la empresa líder y referente en el sector eléctrico, reconocida por impulsar la excelencia operativa y la sostenibilidad a través de soluciones innovadoras en eficiencia energética y mantenimiento de subestaciones, convirtiéndonos en el socio de confianza para nuestros clientes y en un agente de cambio hacia un futuro energético más eficiente.',
  missionStatement: 'Ser el aliado estratégico de nuestros clientes en el sector eléctrico, brindando soluciones integrales de consultoría en eficiencia energética y mantenimiento de subestaciones, a través de la aplicación del ciclo de mejora continua PHVA. Nos comprometemos a entregar servicios de la más alta calidad y a la vanguardia tecnológica, asegurando la optimización de los recursos y la excelencia operativa para el crecimiento sostenible de sus negocios.',
  natureSlogan: 'La energía impulsa el desarrollo; la eficiencia y la sostenibilidad construyen el futuro.',
  safetyCommitment: 'En CAT ENERGY, la conciencia situacional y el IPERC son nuestras líneas de vida: CERO ACCIDENTES es nuestro compromiso.'
};

export const COMPANY_VALUES: CompanyValue[] = [
  {
    number: 1,
    title: 'Integridad',
    desc: 'Trabajar con ética, honestidad, disciplina y responsabilidad en nuestra labor, generando confianza y seguridad absoluta en cada intervención.',
    icon: 'ShieldCheck'
  },
  {
    number: 2,
    title: 'Innovación',
    desc: 'Búsqueda constante de mejora tecnológica para nuestras actividades de campo y laboratorio, asegurando la excelencia y calidad de servicio al cliente.',
    icon: 'Lightbulb'
  },
  {
    number: 3,
    title: 'Compromiso',
    desc: 'Involucrar a nuestros colaboradores asumiendo como propia la misión, visión y valores para el logro de los objetivos energéticos de nuestros clientes.',
    icon: 'Handshake'
  },
  {
    number: 4,
    title: 'Respeto',
    desc: 'Reconocimiento, apreciación y valoración a las normas técnicas, ambientales y grupos de interés, generando un ambiente de armonía y seguridad.',
    icon: 'Users'
  },
  {
    number: 5,
    title: 'Eficiencia',
    desc: 'Añadiendo valor constante a las funciones para incrementar nuestro conocimiento técnico y gestionar los recursos energéticos óptimamente.',
    icon: 'TrendingUp'
  }
];

export const PHVA_CYCLE = [
  {
    letter: 'P',
    title: 'Planificar',
    desc: 'Diagnóstico preliminar, levantamiento de parámetros, definición de alcances técnicos y matrices de riesgo IPERC.'
  },
  {
    letter: 'H',
    title: 'Hacer',
    desc: 'Ejecución rigurosa con personal especializado, equipos homologados Clase A y protocolos de seguridad eléctrica AT/MT.'
  },
  {
    letter: 'V',
    title: 'Verificar',
    desc: 'Ensayos dieléctricos, contrastación de mediciones, termografía, análisis de laboratorio y control metrológico estricto.'
  },
  {
    letter: 'A',
    title: 'Actuar',
    desc: 'Emisión de informes con valor oficial, planes de contingencia, recomendaciones de causa raíz y planes de mejora continua.'
  }
];

export const AREAS_DATA: Area[] = [
  {
    id: 'energia',
    number: '01',
    title: 'Consultorías en Gestión de la Energía',
    subtitle: 'Eficiencia, diagnóstico normativo y transición renovable',
    heroPhrase: 'Transformamos el consumo de energía en oportunidades de eficiencia.',
    description: 'Diagnósticos técnicos especializados, auditorías según D.S. y normas internacionales, estudios de calidad de energía con analizadores Clase A y diseño de proyectos de ahorro y fuentes renovables.',
    icon: 'Zap',
    badge: 'Eficiencia & Sostenibilidad',
    servicesCount: 7,
    featuredStats: [
      { label: 'Homologación', value: 'OSINERGMIN' },
      { label: 'Normativa', value: 'ISO 50001' },
      { label: 'Ahorro Potencial', value: 'Hasta 28%' }
    ]
  },
  {
    id: 'mantenimiento',
    number: '02',
    title: 'Consultorías en Gestión de Mantenimiento',
    subtitle: 'Confiabilidad de activos, análisis causa raíz y seguridad',
    heroPhrase: 'Prevenir una falla siempre cuesta menos que detener una operación.',
    description: 'Análisis de causa raíz (ACR), planes de contingencia para obras y transporte de residuos peligrosos (MATPEL), gestión de activos eléctricos, planes de contingencia IPEN y consultoría metrológica.',
    icon: 'Wrench',
    badge: 'Confiabilidad & Seguridad',
    servicesCount: 5,
    featuredStats: [
      { label: 'Enfoque', value: 'MCC / RCM' },
      { label: 'Metodología', value: 'Causa Raíz ACR' },
      { label: 'Seguridad', value: 'IPERC / SST' }
    ]
  },
  {
    id: 'subestaciones',
    number: '03',
    title: 'Mantenimiento de Subestaciones AT / MT / BT',
    subtitle: 'Intervención integral en patio de llaves, celdas y potencia',
    heroPhrase: 'Confiabilidad eléctrica para mantener su operación en marcha.',
    description: 'Mantenimiento preventivo, predictivo y correctivo en subestaciones eléctricas hasta 500 kV. Transformadores, interruptores SF6, seccionadores, pozos a tierra, bancos de baterías y servicios auxiliares.',
    icon: 'ShieldAlert',
    badge: 'Infraestructura Crítica',
    servicesCount: 7,
    featuredStats: [
      { label: 'Tensiones', value: 'Hasta 500 kV' },
      { label: 'Equipos DILO', value: 'Detección SF6' },
      { label: 'Compromiso', value: 'Cero Accidentes' }
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  // AREA 01: ENERGÍA
  {
    id: 'aee-auditoria',
    areaId: 'energia',
    areaName: 'Consultorías en Gestión de la Energía',
    slug: 'auditoria-eficiencia-energetica',
    title: 'Auditoría en Eficiencia Energética (AEE)',
    shortTitle: 'Auditoría Energética (AEE)',
    tag: 'Auditoría Normativa',
    heroPhrase: 'Identifique pérdidas ocultas y maximice el rendimiento de sus instalaciones industriales.',
    summary: 'Evaluación técnica integral del perfil de consumo, balances energéticos y oportunidades de optimización según normativa nacional e internacional.',
    iconName: 'FileSpreadsheet',
    coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'La Auditoría en Eficiencia Energética (AEE) es un estudio técnico exhaustivo de los flujos de energía que ingresan, se transforman y se consumen en una instalación industrial, agroindustrial o comercial.',
      whatFor: 'Permite cuantificar la intensidad energética, detectar ineficiencias en motores, compresores, calderas, iluminación y sistemas de bombeo, determinando planes de ahorro rentables.',
      problemSolved: 'Resuelve sobrecostos en facturación eléctrica por mala gestión de demanda máxima, penalizaciones por bajo factor de potencia y pérdidas no cuantificadas en procesos térmicos o eléctricos.',
      clientBenefits: 'Reducción directa de 12% a 30% en costos de energía, aumento de vida útil de activos electromecánicos y cumplimiento cabal de exigencias de auditoría energética sectorial.'
    },
    scopeActivities: [
      'Levantamiento de inventario de cargas energéticas y diagramas de balance de masa y energía.',
      'Instalación de registradores portátiles de variables eléctricas, térmicas y de flujo.',
      'Identificación y jerarquización de Medidas de Conservación de Energía (MCE).',
      'Evaluación técnico-financiera (VAN, TIR, Payback) de proyectos de ahorro.',
      'Elaboración del informe técnico final con plan de acción escalonado y metas de reducción.'
    ],
    benefits: [
      { title: 'Reducción de Costos', desc: 'Disminución verificable en la factura eléctrica mensual.', metric: '15-28%' },
      { title: 'Retorno de Inversión', desc: 'Planes de acción con periodos de repago inferiores a 18 meses.', metric: '<1.5 años' },
      { title: 'Sostenibilidad', desc: 'Reducción de huella de carbono y emisiones de CO2 equivalente.', metric: '-350 t CO2/año' }
    ],
    applications: [
      'Plantas agroindustriales y fundos de agroexportación (como Complejo Agroindustrial Beta)',
      'Plantas concentradoras y campamentos mineros',
      'Industria papelera, textil, alimentaria y manufacturera',
      'Grandes superficies comerciales y hospitales'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico Preliminar', desc: 'Recolección de facturación histórica y visitas de inspección técnica visual.' },
      { step: 2, title: 'Análisis de Datos', desc: 'Modelamiento de líneas base de consumo y determinación de indicadores energéticos.' },
      { step: 3, title: 'Evaluación en Campo', desc: 'Mediciones instrumentadas in-situ durante ciclos de operación representativos.' },
      { step: 4, title: 'Propuesta de Medidas', desc: 'Diseño técnico y cálculo económico de alternativas de optimización.' },
      { step: 5, title: 'Implementación Guiada', desc: 'Acompañamiento en la adquisición y calibración de nuevos equipos eficientes.' },
      { step: 6, title: 'Verificación de Ahorro', desc: 'Contrastación de métricas posteriores y ajuste del ciclo de mejora continua.' }
    ],
    realCasesExecuted: ['Complejo Agroindustrial Beta S.A. (Plantas y fundos Ica, Chincha, Piura y Lambayeque)']
  },
  {
    id: 'diagnostico-energetico',
    areaId: 'energia',
    areaName: 'Consultorías en Gestión de la Energía',
    slug: 'diagnostico-energetico-industrial',
    title: 'Diagnóstico Energético de Instalaciones y Procesos',
    shortTitle: 'Diagnóstico Energético',
    tag: 'Evaluación Operativa',
    heroPhrase: 'Radiografía técnica de precisión sobre el desempeño eléctrico de cada línea productiva.',
    summary: 'Evaluación técnica enfocada en el comportamiento dinámico del consumo eléctrico en sistemas de fuerza, iluminación, refrigeración y bombeo.',
    iconName: 'Activity',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Un estudio de alta resolución que analiza los patrones horarios de demanda eléctrica, pérdidas por sobrecalentamiento en conductores y desbalances entre fases.',
      whatFor: 'Sirve para priorizar las intervenciones de mantenimiento eléctrico y redistribuir cargas para evitar paradas imprevistas por disparo de protecciones.',
      problemSolved: 'Elimina disparos térmicos en tableros, sobrecarga de transformadores de distribución y envejecimiento acelerado del aislamiento de conductores.',
      clientBenefits: 'Garantiza la estabilidad operativa de la planta, libera capacidad de potencia en subestaciones existentes y reduce mermas de producción.'
    },
    scopeActivities: [
      'Monitoreo continuo de curvas de carga horarias y factor de utilización.',
      'Inspección termográfica de tableros de fuerza y centros de control de motores (CCM).',
      'Evaluación de caídas de tensión en conductores de alimentadores principales.',
      'Revisión del dimensionamiento y estado de condensadores de compensación reactiva.'
    ],
    benefits: [
      { title: 'Confiabilidad Continua', desc: 'Mitigación de disparos intempestivos en líneas de proceso críticas.' },
      { title: 'Capacidad Disponible', desc: 'Recuperación de hasta 15% de capacidad útil en transformadores.' },
      { title: 'Seguridad Operacional', desc: 'Eliminación de puntos calientes en barras y bornes de conexión.' }
    ],
    applications: [
      'Sistemas de bombeo agrícola y canales de regadío tecnificado',
      'Molinos, hornos y trituradoras industriales',
      'Plantas de frío, compresión y congelados'
    ],
    methodology: [
      { step: 1, title: 'Inspección Termoeléctrica', desc: 'Registro de perfiles térmicos con cámara infrarroja calibrada.' },
      { step: 2, title: 'Adquisición de Datos', desc: 'Monitoreo de corriente, tensión y potencias en barras maestras.' },
      { step: 3, title: 'Correlación de Producción', desc: 'Cruce de datos de consumo eléctrico vs. toneladas producidas.' },
      { step: 4, title: 'Informe de Hallazgos', desc: 'Clasificación de anomalías por nivel de severidad y urgencia.' },
      { step: 5, title: 'Plan de Corrección', desc: 'Rebalanceo de fases y ajuste de ajustes de protección.' },
      { step: 6, title: 'Auditoría Post-Intervención', desc: 'Verificación del restablecimiento de temperaturas normales de trabajo.' }
    ]
  },
  {
    id: 'calidad-energia',
    areaId: 'energia',
    areaName: 'Consultorías en Gestión de la Energía',
    slug: 'estudio-calidad-energia',
    title: 'Estudios y Mediciones de Calidad de Energía',
    shortTitle: 'Calidad de Energía Clase A',
    tag: 'Analizador Homologado OSINERGMIN',
    heroPhrase: 'Blindaje contra armónicos, caídas de tensión y perturbaciones de red.',
    summary: 'Monitoreo de armónicos, flicker, factor de potencia, transitorios y desbalances con analizadores de redes de Clase A certificados bajo estándar IEC 61000-4-30.',
    iconName: 'Gauge',
    coverImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Estudio técnico de parámetros eléctricos conforme a la Norma Técnica de Calidad de los Servicios Eléctricos (NTCSE) del Perú y códigos internacionales IEEE 519 e IEC 61000.',
      whatFor: 'Detecta armónicos generados por variadores de velocidad y rectificadores, interrupciones cortas (sags/swells), flicker y microcortes que dañan componentes electrónicos sensibles.',
      problemSolved: 'Resuelve la quema inexplicable de tarjetas electrónicas en PLCs, calentamiento excesivo en neutros, vibración en motores y multas del suministrador por inyección de armónicos.',
      clientBenefits: 'Eliminación de pérdidas parásitas, prevención de paradas no programadas en sistemas automatizados y certificación técnica ante entidades reguladoras.'
    },
    scopeActivities: [
      'Conexión de Analizador de Redes Clase A homologado por OSINERGMIN en barra de media o baja tensión.',
      'Registro de parámetros durante 7 días continuos (168 horas) según protocolo NTCSE.',
      'Medición de distorsión armónica total de tensión (THDv) e intensidad (THDi) hasta el armónico 50.',
      'Registro de eventos transitorios, variaciones rápidas de tensión, flicker Pst/Plt e interrupciones.',
      'Diseño e ingeniería de bancos de condensadores desintonizados o filtros activos de armónicos.'
    ],
    benefits: [
      { title: 'Equipo Certificado', desc: 'Analizadores de redes Clase A homologados por OSINERGMIN.', metric: 'Clase A IEC' },
      { title: 'Cumplimiento NTCSE', desc: 'Evite penalizaciones en facturación por bajo factor de potencia o distorsión.', metric: '100% Legal' },
      { title: 'Vida Útil de Equipos', desc: 'Protección efectiva de motores y variadores contra sobretensiones.', metric: '+40% vida útil' }
    ],
    applications: [
      'Empresas del sector minero e industrial con alta densidad de variadores de frecuencia',
      'Data centers y centros de telecomunicaciones con tolerancia cero a perturbaciones',
      'Parques eólicos y plantas fotovoltaicas en el punto de interconexión (PCC)'
    ],
    methodology: [
      { step: 1, title: 'Instalación de Analizador', desc: 'Montaje seguro en celdas de MT o tableros generales de BT con EPP adecuado.' },
      { step: 2, title: 'Registro Normativo (7 días)', desc: 'Adquisición de eventos eléctricos a 200 milisegundos y 10 minutos según NTCSE.' },
      { step: 3, title: 'Procesamiento de Armónicos', desc: 'Evaluación espectral de armónicos y cálculo de resonancias potenciales.' },
      { step: 4, title: 'Dictamen de Conformidad', desc: 'Emisión de informe con sello de ingeniero colegiado habilitado.' },
      { step: 5, title: 'Dimensionamiento de Filtros', desc: 'Ingeniería de filtros activos o trampas de armónicos cuando aplique.' },
      { step: 6, title: 'Verificación Post-Filtro', desc: 'Comprobación del cumplimiento de THD < 5% en el punto de acople común.' }
    ],
    equipmentHomologated: 'Analizador de redes Clase A homologado por OSINERGMIN (Partner: Khalergy)'
  },
  {
    id: 'potencial-renovables',
    areaId: 'energia',
    areaName: 'Consultorías en Gestión de la Energía',
    slug: 'evaluacion-energias-renovables',
    title: 'Evaluación del Potencial de Energías Renovables',
    shortTitle: 'Energías Renovables & Autoconsumo',
    tag: 'Transición Sostenible',
    heroPhrase: 'Aproveche el sol y el viento para independizar y descarbonizar su matriz energética.',
    summary: 'Estudios de viabilidad técnica y económica para generación solar fotovoltaica, térmica y eólica para autoconsumo e inyección a red.',
    iconName: 'Sun',
    coverImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Estudio de radiación solar y recursos eólicos locales para dimensionar centrales de generación limpia en techos, terrenos industriales o zonas rurales.',
      whatFor: 'Permite reducir la dependencia de la red convencional, fijar costos de energía a largo plazo y acceder a certificaciones de sostenibilidad (I-REC / Huella de Carbono).',
      problemSolved: 'Supera la volatilidad de las tarifas eléctricas comerciales y la falta de suministro estable en zonas rurales o aisladas.',
      clientBenefits: 'Ahorros sostenidos hasta por 25 años, retorno de inversión predecible y valorización corporativa como empresa ecológica responsable.'
    },
    scopeActivities: [
      'Modelamiento solar con datos satelitales NASA / PVGIS y estaciones meteorológicas locales.',
      'Análisis de sombras estructurales y capacidad portante de techos o terrenos.',
      'Diseño conceptual y simulación energética en software especializado (PVSyst).',
      'Evaluación de alternativas On-Grid (interconectadas), Off-Grid (aisladas) o híbridas con almacenamiento BESS.',
      'Estudio de interconexión eléctrica según procedimientos del COES y empresas distribuidoras.'
    ],
    benefits: [
      { title: 'Generación Limpia', desc: 'Energía 100% renovable sin emisiones contaminantes.', metric: '0 g CO2/kWh' },
      { title: 'Blindaje Tarifario', desc: 'Coste nivelado de energía (LCOE) altamente competitivo.', metric: 'Hasta -45%' },
      { title: 'Autonomía Energética', desc: 'Disponibilidad de energía aún ante cortes en la red pública.' }
    ],
    applications: [
      'Fundos agroexportadores en la costa peruana con alta radiación solar (Ica, Piura, Lambayeque)',
      'Plantas agroindustriales con extensas superficies de cubiertas de almacenes',
      'Campamentos remotos sin acceso a líneas del SEIN'
    ],
    methodology: [
      { step: 1, title: 'Evaluación de Recurso', desc: 'Análisis de irradiancia solar GHI y DNI histórica en las coordenadas del proyecto.' },
      { step: 2, title: 'Perfil de Demanda', desc: 'Comparación del perfil de generación solar proyectado contra la curva de consumo.' },
      { step: 3, title: 'Ingeniería Conceptual', desc: 'Selección de módulos monocristalinos bifaciales e inversores tipo string o central.' },
      { step: 4, title: 'Modelo Financiero', desc: 'Cálculo de flujo de caja libre, CAPEX, OPEX, LCOE y periodo de retorno.' },
      { step: 5, title: 'Gestión de Permisos', desc: 'Preparación de expediente para la empresa concesionaria de distribución eléctrica.' },
      { step: 6, title: 'Supervisión de Montaje', desc: 'Control de calidad en la instalación de estructuras, cableado solar y puesta a tierra.' }
    ]
  },
  {
    id: 'iso-50001',
    areaId: 'energia',
    areaName: 'Consultorías en Gestión de la Energía',
    slug: 'implementacion-sistemas-iso-50001',
    title: 'Implementación de Sistemas de Gestión ISO 50001',
    shortTitle: 'Gestión ISO 50001',
    tag: 'Estándar Internacional',
    heroPhrase: 'Estructure la excelencia energética bajo el estándar global más reconocido.',
    summary: 'Consultoría integral para el diseño, implementación y acompañamiento a la certificación de Sistemas de Gestión de la Energía (SGEn).',
    iconName: 'Award',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Metodología sistemática para que las organizaciones establezcan políticas, objetivos, metas y planes de acción para reducir el consumo y costo energético de forma continua.',
      whatFor: 'Permite institucionalizar el uso eficiente de la energía en toda la organización, desde la alta dirección hasta los operarios de campo.',
      problemSolved: 'Evita que los proyectos de eficiencia energética se abandonen tras la implementación inicial, garantizando sostenibilidad en el tiempo.',
      clientBenefits: 'Mejora continua del desempeño energético, acceso a licitaciones internacionales exigentes y prestigio de marca con certificación auditada.'
    },
    scopeActivities: [
      'Diagnóstico de brechas (Gap Analysis) respecto a los requisitos de la norma ISO 50001:2018.',
      'Definición de la Política Energética y conformación del Comité de Energía.',
      'Desarrollo de la Revisión Energética, identificación de Usos Significativos de Energía (USE).',
      'Construcción de Líneas Base Energéticas (LBEn) e Indicadores de Desempeño Energético (IDEn).',
      'Capacitación al personal y auditorías internas pre-certificación.'
    ],
    benefits: [
      { title: 'Certificación Global', desc: 'Alineamiento con los estándares exigidos por clientes multinacionales.' },
      { title: 'Ahorro Permanente', desc: 'Cultura corporativa enfocada en la reducción del desperdicio de energía.' },
      { title: 'Gobernanza de Datos', desc: 'Monitoreo formal mediante tableros de control e indicadores en tiempo real.' }
    ],
    applications: ['Empresas mineras, siderúrgicas, cementeras, agroindustriales y de manufactura pesada'],
    methodology: [
      { step: 1, title: 'Gap Analysis', desc: 'Evaluación del estado actual de los procesos de gestión energética.' },
      { step: 2, title: 'Revisión Energética', desc: 'Determinación de los equipos de mayor consumo y variables influyentes.' },
      { step: 3, title: 'Indicadores IDEn', desc: 'Definición de variables clave (kWh/ton, kWh/m3) y líneas base.' },
      { step: 4, title: 'Documentación SGEn', desc: 'Elaboración de manuales, procedimientos, registros y planes de calibración.' },
      { step: 5, title: 'Auditoría Interna', desc: 'Simulación de auditoría para levantar no conformidades potenciales.' },
      { step: 6, title: 'Acompañamiento Final', desc: 'Soporte presencial durante la auditoría de la casa certificadora.' }
    ]
  },
  {
    id: 'diseno-ahorro',
    areaId: 'energia',
    areaName: 'Consultorías en Gestión de la Energía',
    slug: 'diseno-proyectos-ahorro-energetico',
    title: 'Diseño de Proyectos de Ahorro Energético',
    shortTitle: 'Ingeniería de Ahorro Energético',
    tag: 'Ingeniería Aplicada',
    heroPhrase: 'Soluciones llave en mano con cálculos rigurosos de rentabilidad y retorno.',
    summary: 'Ingeniería de detalle para migración de sistemas motrices, variadores de frecuencia de media y baja tensión, iluminación industrial LED y recuperación de calor.',
    iconName: 'Sparkles',
    coverImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Elaboración de expedientes técnicos e ingeniería de proyectos específicos de optimización de procesos térmicos y eléctricos.',
      whatFor: 'Permite pasar de la idea de ahorro a una especificación de compra exacta, con diagramas unifilares, planos de montaje y especificaciones de equipos.',
      problemSolved: 'Elimina compras erradas de equipos sobredimensionados o incompatibles con las condiciones eléctricas del cliente.',
      clientBenefits: 'Máximo rendimiento por dólar invertido con garantías técnicas de desempeño energético.'
    },
    scopeActivities: [
      'Especificación técnica de motores de alta eficiencia IE3/IE4 y variadores de frecuencia (VFD).',
      'Diseño de sistemas de control automático y monitoreo energético SCADA / IoT.',
      'Cálculo de protecciones, conductores y bancos de condensadores de compensación reactiva.',
      'Elaboración de presupuestos, metrados y cronograma de ejecución.'
    ],
    benefits: [
      { title: 'Ingeniería Precisa', desc: 'Planos y memorias de cálculo validados por ingenieros especialistas.' },
      { title: 'Cero Riesgo Técnico', desc: 'Compatibilidad garantizada con los sistemas de control y protección existentes.' },
      { title: 'Financiamiento Viable', desc: 'Expedientes listos para presentación a fondos de innovación o banca verde.' }
    ],
    applications: ['Sistemas de aire comprimido, sistemas de bombeo multietapa, torres de enfriamiento y celdas industriales'],
    methodology: [
      { step: 1, title: 'Levantamiento de Campo', desc: 'Toma de medidas dimensionales y relevamiento de circuitos de fuerza.' },
      { step: 2, title: 'Simulación Eléctrica', desc: 'Modelado de arranque de motores y perfiles de corriente en software.' },
      { step: 3, title: 'Planos Constructivos', desc: 'Elaboración de esquemas unifilares, conexionado y ruteo de bandejas.' },
      { step: 4, title: 'Selección de Marcas', desc: 'Evaluación técnica comparativa de proveedores líderes del mercado.' },
      { step: 5, title: 'Supervisión de Instalación', desc: 'Dirección técnica durante la obra eléctrica y mecánica.' },
      { step: 6, title: 'Comisionamiento', desc: 'Pruebas en vacío y con carga con protocolo de aceptación firmado.' }
    ]
  },
  {
    id: 'diseno-renovables',
    areaId: 'energia',
    areaName: 'Consultorías en Gestión de la Energía',
    slug: 'diseno-proyectos-energias-renovables',
    title: 'Diseño de Proyectos de Energías Renovables',
    shortTitle: 'Diseño de Plantas Renovables',
    tag: 'Ingeniería Solar & Eólica',
    heroPhrase: 'Ingeniería conceptual, básica y de detalle para plantas solares e híbridas.',
    summary: 'Desarrollo de expedientes técnicos para parques solares sobre suelo, techos solares industriales y sistemas híbridos diésel-fotovoltaico con baterías.',
    iconName: 'SunMedium',
    coverImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Ingeniería integral para plantas de generación limpia con módulos fotovoltaicos, inversores centrales o string, y subestaciones elevadoras asociadas.',
      whatFor: 'Permite a empresas con altos consumos diurnos suministrar su propia energía a costos fijos y estables durante más de 25 años.',
      problemSolved: 'Resuelve la dependencia de combustibles fósiles caros y contaminantes en operaciones aisladas o industriales.',
      clientBenefits: 'Reducción masiva de la huella de carbono y retorno financiero sólido asegurado con componentes de primer nivel Tier 1.'
    },
    scopeActivities: [
      'Estudios topográficos, geológicos y georreferenciación con dron del área de implantación.',
      'Cálculo de estructuras de montaje fijas o seguidores solares (trackers a 1 eje).',
      'Ingeniería de interconexión en media tensión (10 kV, 22.9 kV, 60 kV).',
      'Elaboración del Estudio de Pre-Operatividad (EPO) y Estudio de Operatividad (EO) según requerimientos COES.'
    ],
    benefits: [
      { title: 'Generación Segura', desc: 'Disponibilidad de energía calculada con percentiles P50 y P90.' },
      { title: 'Normativa COES', desc: 'Aprobación fluida de estudios ante los organismos de despacho.' },
      { title: 'Integración Inteligente', desc: 'Sistemas con almacenamiento de baterías para control de picos (Peak Shaving).' }
    ],
    applications: ['Agroexportadoras en valles costeros, minería en puna, empresas industriales y cooperativas agrícolas'],
    methodology: [
      { step: 1, title: 'Estudio de Radiación', desc: 'Análisis microclimático con series temporales satelitales de alta precisión.' },
      { step: 2, title: 'Diseño de Arreglo Solar', desc: 'Optimización del pitch, tilt y azimut para minimizar sombras entre filas.' },
      { step: 3, title: 'Ingeniería Eléctrica', desc: 'Cálculo de cajas combinadoras, inversores, transformadores y celdas de MT.' },
      { step: 4, title: 'Expediente COES / Distribuidora', desc: 'Flujo de potencia, cortocircuito, coordinación de protecciones y estabilidad.' },
      { step: 5, title: 'Procura y Montaje', desc: 'Acompañamiento en licitación y supervisión técnica en campo.' },
      { step: 6, title: 'Puesta en Operación', desc: 'Pruebas de inyección a red y entrega de planos Conforme a Obra.' }
    ]
  },

  // AREA 02: MANTENIMIENTO
  {
    id: 'acr-causa-raiz',
    areaId: 'mantenimiento',
    areaName: 'Consultorías en Gestión de Mantenimiento',
    slug: 'analisis-de-causa-raiz-acr',
    title: 'Consultorías en Análisis de Causa Raíz (ACR)',
    shortTitle: 'Análisis Causa Raíz (ACR)',
    tag: 'Metodología Técnica',
    heroPhrase: 'Identifique el origen real de la falla y elimine eventos recurrentes para siempre.',
    summary: 'Metodologías estructuradas (Árbol de Fallas, Diagrama Causa-Efecto, 5 Por Qués) aplicadas a transformadores, interruptores, motores y celdas eléctricas.',
    iconName: 'SearchCheck',
    coverImage: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Un proceso analítico multidisciplinario para investigar a fondo las fallas catastróficas o paradas no deseadas en equipos eléctricos de alta y media tensión.',
      whatFor: 'Permite descubrir las causas físicas, humanas y latentes (organizacionales) que provocaron la avería, evitando que se repita.',
      problemSolved: 'Detiene el ciclo vicioso de reparar el mismo componente una y otra vez sin solucionar el desencadenante real de la falla.',
      clientBenefits: 'Ahorro millonario en reemplazo prematuro de transformadores e interruptores, aumento de disponibilidad operativa y protección del personal.'
    },
    scopeActivities: [
      'Preservación de evidencias físicas, muestras de aceite, restos de aislamiento y registros de oscilografía.',
      'Entrevistas técnicas con operadores y técnicos de guardia.',
      'Construcción del Diagrama de Secuencia de Eventos y Árbol Lógico de Fallas.',
      'Análisis metalúrgico, químico y dieléctrico de componentes dañados.',
      'Elaboración del plan de acciones correctivas y preventivas con responsables y fechas límite.'
    ],
    benefits: [
      { title: 'Cero Recurrencia', desc: 'Eliminación definitiva de fallas repetitivas en equipos de patio de llaves.' },
      { title: 'Dictamen Pericial', desc: 'Informes con rigor pericial aceptados por compañías de seguros y fabricantes.' },
      { title: 'Aumento de MTBF', desc: 'Incremento medible del tiempo medio entre fallas de los activos intervenidos.' }
    ],
    applications: ['Subestaciones de transmisión, centrales hidroeléctricas, plantas químicas y minas'],
    methodology: [
      { step: 1, title: 'Preservación de Evidencias', desc: 'Aseguramiento de datos de relés de protección, fotos y muestras de fluidos.' },
      { step: 2, title: 'Línea de Tiempo', desc: 'Reconstrucción cronológica exacta de los hechos previos, durante y post-evento.' },
      { step: 3, title: 'Formulación de Hipótesis', desc: 'Planteamiento y descarte riguroso mediante pruebas técnicas de laboratorio.' },
      { step: 4, title: 'Identificación de Causas', desc: 'Determinación de la causa raíz física, humana y de gestión.' },
      { step: 5, title: 'Plan de Mitigación', desc: 'Propuesta de rediseño de esquemas de protección o cambio de especificación.' },
      { step: 6, title: 'Seguimiento y Control', desc: 'Auditoría a los 3 y 6 meses para verificar la efectividad de las medidas.' }
    ],
    realCasesExecuted: ['S.E. Chilca (Atlantica: Fuga gas SF6 en interruptor 500 kV)', 'Centrales Hidroeléctricas Huasahuasi 1 y 2 (Egejunin: Celdas 6kV)']
  },
  {
    id: 'planes-contingencia',
    areaId: 'mantenimiento',
    areaName: 'Consultorías en Gestión de Mantenimiento',
    slug: 'planes-de-contingencia-electricos-matpel',
    title: 'Elaboración y Actualización de Planes de Contingencia',
    shortTitle: 'Planes de Contingencia & MATPEL',
    tag: 'Cumplimiento Legal & IPEN',
    heroPhrase: 'Respuesta rápida y estructurada ante emergencias eléctricas y de materiales peligrosos.',
    summary: 'Planes de contingencia para obras eléctricas de gran envergadura, centros nucleares, subestaciones y transporte terrestre nacional de materiales peligrosos (MATPEL).',
    iconName: 'ShieldAlert',
    coverImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Documentos técnicos y protocolos de acción inmediata elaborados conforme a la Ley N° 28551 y normativas del MTC, MINEM, OSINERGMIN y entidades nucleares.',
      whatFor: 'Permite responder con orden, eficacia y seguridad ante derrames de aceite dieléctrico, fugas de gas SF6, conatos de incendio o emergencias en transporte de sustancias críticas.',
      problemSolved: 'Evita sanciones regulatorias severas, paralizaciones de obras públicas o privadas y daños irreversibles al medio ambiente o personas.',
      clientBenefits: 'Aprobación sin observaciones ante autoridades fiscalizadoras y preparación total del personal para actuar con serenidad y destreza.'
    },
    scopeActivities: [
      'Identificación de escenarios críticos de riesgo de fuga, derrame, cortocircuito y desastres naturales.',
      'Diseño de rutas de evacuación, zonas seguras y protocolos de activación de brigadas de emergencia.',
      'Planes específicos para transporte terrestre de materiales peligrosos (MATPEL) según D.S. 021-2008-MTC.',
      'Planes de contingencia para expedientes técnicos de obras electromecánicas y centros especializados.',
      'Organización y ejecución de simulacros de campo con registro fotográfico y acta de evaluación.'
    ],
    benefits: [
      { title: 'Aprobación Garantizada', desc: 'Planes formulados según directivas oficiales de IPEN, MTC y OSINERGMIN.' },
      { title: 'Protección Ambiental', desc: 'Manejo seguro y disposición final certificada de residuos peligrosos.' },
      { title: 'Continuidad de Obra', desc: 'Asegura la viabilidad técnica y legal para licitaciones y ejecución de saldos de obra.' }
    ],
    applications: [
      'Proyectos de energía nuclear y medicina nuclear (como IPEN Centro Nuclear Racso)',
      'Empresas de transporte terrestre de transformadores, aceites y sustancias químicas a nivel nacional',
      'Subestaciones eléctricas en zonas urbanas o de amortiguamiento ambiental'
    ],
    methodology: [
      { step: 1, title: 'Evaluación del Entorno', desc: 'Mapeo de rutas de tránsito, vulnerabilidad sísmica y comunidades aledañas.' },
      { step: 2, title: 'Clasificación de Sustancias', desc: 'Revisión de hojas de datos de seguridad (MSDS / HDS) de materiales involucrados.' },
      { step: 3, title: 'Definición de Procedimientos', desc: 'Protocolos paso a paso para contención de derrames y primeros auxilios.' },
      { step: 4, title: 'Conformación de Brigadas', desc: 'Asignación de roles de mando, comunicaciones y enlace con autoridades.' },
      { step: 5, title: 'Entrenamiento y Simulacro', desc: 'Capacitación presencial al equipo operativo y conductores.' },
      { step: 6, title: 'Trámite Regulatorio', desc: 'Sustentación del expediente técnico ante el organismo competente.' }
    ],
    realCasesExecuted: [
      'Instituto Peruano de Energía Nuclear (IPEN): Plan de contingencia saldo de obra Centro Nuclear Racso (Nov 2024)',
      'Instituto Peruano de Energía Nuclear (IPEN): Plan de contingencia transporte terrestre MATPEL a nivel nacional (Dic 2024)'
    ]
  },
  {
    id: 'gestion-mantenimiento-integral',
    areaId: 'mantenimiento',
    areaName: 'Consultorías en Gestión de Mantenimiento',
    slug: 'gestion-mantenimiento-integral-mcc',
    title: 'Gestión Integral de Mantenimiento y MCC (RCM)',
    shortTitle: 'Gestión de Mantenimiento & MCC',
    tag: 'Estrategias de Confiabilidad',
    heroPhrase: 'Optimice costos de ciclo de vida con mantenimiento centrado en confiabilidad.',
    summary: 'Levantamiento de planos eléctricos As-Built, inventario georreferenciado de activos, actualización de procedimientos y formulación de estrategias MCC / RCM.',
    iconName: 'Settings',
    coverImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Diseño e implantación del modelo de gestión de mantenimiento basado en criticidad de activos eléctricos y estándares internacionales ISO 55000 y SAE JA1011.',
      whatFor: 'Permite pasar de un modelo reactivo (apagar incendios) a uno proactivo y predictivo, donde cada dólar de mantenimiento se invierte en activos que realmente impactan el negocio.',
      problemSolved: 'Resuelve el desorden documental, la falta de planos actualizados en subestaciones en servicio y el sobregasto en mantenimiento preventivo ciego.',
      clientBenefits: 'Disminución de hasta 35% en horas de parada no programada, trazabilidad de piezas de recambio y planos eléctricos actualizados al 100%.'
    },
    scopeActivities: [
      'Inventario físico y codificación estandarizada de activos eléctricos (KKS o personalizado).',
      'Levantamiento y actualización en campo de planos eléctricos unifilares y esquemas de control en servicio.',
      'Matriz de criticidad de equipos (FMECA / AMFE) para transformadores, interruptores y cables.',
      'Desarrollo de procedimientos operativos estándar (POE) e instructivos de trabajo seguro (ITS).',
      'Elaboración de planes de mantenimiento preventivo, predictivo y paradas mayores (Overhaul).'
    ],
    benefits: [
      { title: 'Planos 100% Actualizados', desc: 'Esquemas funcionales y unifilares fieles a la realidad de la subestación.' },
      { title: 'Reducción de Paradas', desc: 'Disminución drástica de paradas imprevistas en líneas de producción.', metric: '-35% paradas' },
      { title: 'Gestión de Repuestos', desc: 'Stock crítico de repuestos optimizado sin inmovilizar capital excesivo.' }
    ],
    applications: ['Centrales de generación hidroeléctrica, térmica y solar, concesionarias de transmisión y distribución, plantas industriales'],
    methodology: [
      { step: 1, title: 'Auditoría de Activos', desc: 'Inspección física y verificación de placas de características técnicas.' },
      { step: 2, title: 'Levantamiento As-Built', desc: 'Seguimiento de cableado borne a borne para corregir planos desfasados.' },
      { step: 3, title: 'Análisis de Criticidad', desc: 'Ponderación según impacto en seguridad, medio ambiente y finanzas.' },
      { step: 4, title: 'Definición de Estrategias', desc: 'Asignación de tareas preventivas, predictivas o a la falla justificada.' },
      { step: 5, title: 'Carga en Software CMMS', desc: 'Estructuración del plan en SAP PM, Maximo u otro sistema del cliente.' },
      { step: 6, title: 'Capacitación a Cuadrillas', desc: 'Talleres prácticos sobre ejecución de procedimientos estandarizados.' }
    ]
  },
  {
    id: 'gestion-metrologica',
    areaId: 'mantenimiento',
    areaName: 'Consultorías en Gestión de Mantenimiento',
    slug: 'gestion-metrologica-instrumentacion',
    title: 'Consultoría en Gestión Metrológica',
    shortTitle: 'Gestión Metrológica',
    tag: 'Control de Instrumentación',
    heroPhrase: 'Confianza y trazabilidad absoluta en cada medición de campo y tablero.',
    summary: 'Inventario de instrumentos, control metrológico, programación de calibraciones, trazabilidad INACAL y aseguramiento documental.',
    iconName: 'Compass',
    coverImage: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Administración técnica del parque de instrumentos de medición eléctrica (analizadores, telurómetros, megóhmetros, microóhmetros, medidores de energía de facturación).',
      whatFor: 'Garantiza que todos los valores medidos en pruebas de campo y facturación sean fidedignos, trazables a patrones nacionales e internacionales (INACAL / NIST).',
      problemSolved: 'Evita mediciones erróneas que conduzcan a diagnósticos falsos de equipos en buen estado o, peor aún, a no detectar fallas incipientes graves.',
      clientBenefits: 'Validez legal y pericial de todos los informes técnicos, auditorías de calidad aprobadas y precisión en la contabilidad energética interna.'
    },
    scopeActivities: [
      'Censo e inventario codificado de equipos de medida, protección y prueba.',
      'Determinación de intervalos de calibración óptimos basados en frecuencia de uso y deriva.',
      'Gestión y verificación de certificados de calibración emitidos por laboratorios acreditados.',
      'Cálculo de incertidumbre de medición y criterios de aceptación/rechazo en campo.',
      'Configuración y verificación de medidores de energía multifunción (como ION 7650, Nexus 1500).'
    ],
    benefits: [
      { title: 'Trazabilidad INACAL', desc: 'Cadena ininterrumpida de comparaciones con patrones acreditados.' },
      { title: 'Precisión de Facturación', desc: 'Garantía de exactitud en medidores de frontera comercial.' },
      { title: 'Auditorías Impecables', desc: 'Cumplimiento de requisitos de metrología ISO 9001 e ISO 17025.' }
    ],
    applications: ['Subestaciones de potencia, laboratorios de ensayos eléctricos, plantas mineras y generadoras'],
    methodology: [
      { step: 1, title: 'Censo de Equipos', desc: 'Relevamiento de marcas, modelos, números de serie y rangos de medida.' },
      { step: 2, title: 'Hoja de Vida de Instrumentos', desc: 'Apertura de expediente individual con historial de calibraciones.' },
      { step: 3, title: 'Cronograma Maestro', desc: 'Programación anual anticipada para no desabastecer operaciones.' },
      { step: 4, title: 'Pruebas de Repetibilidad', desc: 'Verificaciones intermedias con patrones de chequeo rápido.' },
      { step: 5, title: 'Ajuste y Parametrización', desc: 'Calibración in-situ de medidores de energía en tableros de control.' },
      { step: 6, title: 'Auditoría Documental', desc: 'Inspección periódica del estado de vigencia de certificados.' }
    ],
    realCasesExecuted: [
      'Atlantica: Configuración y calibración de 4 medidores ION 7650 (Feb 2022)',
      'Atlantica: Desmontaje de medidores NEXUS 1500 y montaje de medidores ION 7650 en S.E. Poroma, Ocoña y Moquegua (Feb 2022)'
    ]
  },
  {
    id: 'consultoria-sst-iperc',
    areaId: 'mantenimiento',
    areaName: 'Consultorías en Gestión de Mantenimiento',
    slug: 'consultoria-sst-iperc-mapas-de-riesgo',
    title: 'Consultorías en SST, Matrices IPERC y Mapas de Riesgo',
    shortTitle: 'Seguridad SST & IPERC',
    tag: 'Ley 29783 & Cero Accidentes',
    heroPhrase: 'Identifica, Evalúa, Controla: Tu Seguridad Comienza Con Un Riesgo Identificado.',
    summary: 'Elaboración y actualización de matrices IPERC, mapas de riesgo, planes para materiales peligrosos y capacitaciones especializadas en riesgo eléctrico en AT/MT/BT.',
    iconName: 'Shield',
    coverImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Servicio de ingeniería en Seguridad y Salud en el Trabajo enfocado específicamente en los riesgos de arco eléctrico, contacto directo, inducción electromagnética y trabajos en altura en subestaciones.',
      whatFor: 'Permite identificar cada peligro existente en instalaciones eléctricas, evaluando su severidad y aplicando la jerarquía de controles (Eliminación, Sustitución, Controles de Ingeniería, Administrativos y EPP).',
      problemSolved: 'Erradica accidentes por arco eléctrico, descargas por inducción en líneas desenergizadas y caídas a distinto nivel en trabajos en pórticos.',
      clientBenefits: 'Cero accidentes laborales, blindaje legal para la plana directiva ante inspecciones de SUNAFIL y colaboradores con alta conciencia situacional.'
    },
    scopeActivities: [
      'Visita de evaluación técnica integral a sedes operativas, patios de llaves y subestaciones.',
      'Elaboración y actualización de Matrices IPERC Línea Base y Continuo según R.M. 050-2013-TR.',
      'Diseño e instalación de Mapas de Riesgo con señalética normalizada técnica.',
      'Establecimiento de controles según la jerarquía de controles para riesgo de electrocución.',
      'Capacitación en uso de implementos de seguridad y EPP dieléctrico (guantes, banquetas, pértigas, trajes arc flash).'
    ],
    benefits: [
      { title: 'Conciencia 360°', desc: 'Protocolos de conciencia situacional antes de iniciar maniobras.' },
      { title: 'Cumplimiento SUNAFIL', desc: 'Documentación rigurosamente sustentada conforme a Ley 29783.' },
      { title: 'Cero Accidentes', desc: 'Cultura preventiva arraigada en cuadrillas y supervisores.' }
    ],
    applications: ['Entidades públicas con múltiples sedes nacionales, centrales hidroeléctricas, contratistas de obras eléctricas'],
    methodology: [
      { step: 1, title: 'Inspección en Sedes', desc: 'Recorrido técnico identificando fuentes de peligro en todas las instalaciones.' },
      { step: 2, title: 'Taller Participativo', desc: 'Sesiones con los trabajadores para levantar peligros cotidianos.' },
      { step: 3, title: 'Matriz IPERC', desc: 'Valoración del riesgo residual y definición de medidas de control.' },
      { step: 4, title: 'Mapas Gráficos', desc: 'Diagramación de planos de planta con simbología de riesgo y equipos de emergencia.' },
      { step: 5, title: 'Entrenamiento de Campo', desc: 'Instrucción en las 5 reglas de oro de la seguridad eléctrica.' },
      { step: 6, title: 'Auditoría de Eficacia', desc: 'Supervisión en maniobras reales para verificar la adopción de controles.' }
    ],
    realCasesExecuted: [
      'Servicio Nacional de Meteorología e Hidrología del Perú (SENAMHI): Visita de evaluación a las 14 sedes a nivel nacional, elaboración de Matrices IPERC y Mapas de Riesgo (Junio a Agosto 2025)'
    ]
  },

  // AREA 03: SUBESTACIONES AT / MT / BT
  {
    id: 'mantenimiento-pozos-tierra',
    areaId: 'subestaciones',
    areaName: 'Mantenimiento de Subestaciones AT / MT / BT',
    slug: 'mantenimiento-pozos-a-tierra',
    title: 'Mantenimiento y Medición de Sistemas de Puesta a Tierra',
    shortTitle: 'Pozos a Tierra & Malla AT/MT',
    tag: 'Telurómetro Calibrado',
    heroPhrase: 'El camino más seguro y de menor resistencia para la protección de vidas y equipos.',
    summary: 'Evaluación, mantenimiento, medición de resistividad de terreno y tratamiento químico de mallas de puesta a tierra en subestaciones y plantas industriales.',
    iconName: 'Ground',
    coverImage: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Servicio técnico especializado para verificar y optimizar el valor óhmico de resistencia de dispersión en pozos individuales y mallas de tierra profundas de subestaciones.',
      whatFor: 'Permite drenar corrientes de falla a tierra en milisegundos, garantizando que los voltajes de paso y toque no superen los umbrales letales para las personas.',
      problemSolved: 'Resuelve valores de resistencia elevados por resequedad del terreno, corrosión de conectores o robo de cables de cobre, evitando daños en relés y transformadores.',
      clientBenefits: 'Valores certificados conformes al Código Nacional de Electricidad (CNE) y normas IEEE 80, con emisión de protocolo firmado por ingeniero colegiado.'
    },
    scopeActivities: [
      'Medición de resistencia de puesta a tierra con telurómetro digital calibrado de 3 y 4 picas.',
      'Medición de resistividad aparente del terreno mediante el método Wenner para diseño de ampliaciones.',
      'Limpieza mecánica de bornes, conectores split-bolt y varillas de cobre (copperweld).',
      'Aplicación de dosis de tratamiento ecológico con sales minerales o geles electrolíticos.',
      'Emisión de Protocolo de Pruebas de Puesta a Tierra con vigencia de 1 año ante INDECI/Municipalidades.'
    ],
    benefits: [
      { title: 'Certificado Oficial', desc: 'Protocolo válido para inspecciones técnicas de seguridad INDECI.', metric: '< 5 Ω / < 1 Ω' },
      { title: 'Seguridad Humana', desc: 'Control garantizado de tensiones de paso y contacto en patios de AT.' },
      { title: 'Durabilidad', desc: 'Tratamiento químico anticorrosivo con garantía de estabilidad temporal.' }
    ],
    applications: ['Patios de llaves de alta tensión, centros de cómputo, celdas de media tensión, plantas industriales'],
    methodology: [
      { step: 1, title: 'Aislamiento de Circuito', desc: 'Desconexión del puente de prueba de la barra equipotencial.' },
      { step: 2, title: 'Tendido de Picas', desc: 'Disposición de electrodos de corriente y potencial a 62% de distancia.' },
      { step: 3, title: 'Toma de Lecturas', desc: 'Registro de valores óhmicos en diferentes ángulos para descartar interferencias.' },
      { step: 4, title: 'Mantenimiento Químico', desc: 'Remoción de tierra vegetal, aplicación de gel y compactación por capas.' },
      { step: 5, title: 'Remedición Final', desc: 'Comprobación del descenso del valor de resistencia al valor normativo.' },
      { step: 6, title: 'Emisión de Certificado', desc: 'Firma y sello de ingeniero electricista colegiado con copia de calibración.' }
    ]
  },
  {
    id: 'analisis-aceite-transformadores',
    areaId: 'subestaciones',
    areaName: 'Mantenimiento de Subestaciones AT / MT / BT',
    slug: 'analisis-aceite-transformadores',
    title: 'Análisis Físico-Químico y Cromatográfico de Aceite Dieléctrico',
    shortTitle: 'Análisis de Aceite Dieléctrico',
    tag: 'Laboratorio Especializado',
    heroPhrase: 'El diagnóstico más certero sobre el estado interno de sus transformadores de potencia.',
    summary: 'Toma de muestras bajo norma ASTM, análisis de gases disueltos (DGA), rigidez dieléctrica, contenido de humedad Karl Fischer, acidez y tensión interfacial.',
    iconName: 'Droplet',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'El equivalente a un análisis de sangre para el transformador. Estudia la degradación térmica y química del líquido aislante mineral o vegetal y del papel aislante.',
      whatFor: 'Permite diagnosticar arcos eléctricos sumergidos, descargas parciales y sobrecalentamientos internos sin necesidad de destapar ni sacar de servicio el equipo.',
      problemSolved: 'Previene la explosión súbita de transformadores de distribución y potencia que cuesta cientos de miles de dólares y semanas de paralización.',
      clientBenefits: 'Detección temprana de fallas con años de anticipación, prolongando la vida útil del activo y planificando tratamientos de desgasificado o regeneración.'
    },
    scopeActivities: [
      'Muestreo hermético con jeringas de vidrio especiales y botellas ámbar certificadas según ASTM D923.',
      'Ensayo de Rigidez Dieléctrica según ASTM D877 / D1816.',
      'Determinación de Humedad residual por método Karl Fischer coulométrico (ASTM D1533).',
      'Cromatografía de Gases Disueltos (DGA - ASTM D3612): Hidrógeno, Metano, Etano, Etileno, Acetileno, CO y CO2.',
      'Interpretación de resultados mediante Triángulo de Duval, Métodos Rogers y Doernenburg según IEEE C57.104.'
    ],
    benefits: [
      { title: 'Detección Precoz', desc: 'Identificación de acetileno (arcos internos) antes de que se produzca un cortocircuito.' },
      { title: 'Planificación Inteligente', desc: 'Define si el transformador requiere secado al vacío o regeneración de aceite.' },
      { title: 'Informe Diagnóstico', desc: 'Recomendaciones claras emitidas por ingenieros expertos en transformadores.' }
    ],
    applications: ['Transformadores de potencia hasta 500 kV, transformadores de distribución, reactores de potencia'],
    methodology: [
      { step: 1, title: 'Purga y Limpieza', desc: 'Purga previa de la válvula de muestreo para evitar contaminantes acumulados.' },
      { step: 2, title: 'Toma Hermética', desc: 'Llenado de jeringa sin presencia de burbujas de aire ni contacto ambiental.' },
      { step: 3, title: 'Transporte Protegido', desc: 'Embalaje isotérmico protegido de la luz solar directa hacia el laboratorio.' },
      { step: 4, title: 'Ensayos Físico-Químicos', desc: 'Medición de tensión interfacial, color, acidez y factor de potencia.' },
      { step: 5, title: 'Cromatografía Gaseosa', desc: 'Extracción de gases por vacío y cuantificación en cromatógrafo de gases.' },
      { step: 6, title: 'Dictamen de Condición', desc: 'Clasificación de condición (Condición 1 a 4 según IEEE) con plan de acción.' }
    ]
  },
  {
    id: 'mantenimiento-interruptores-sf6',
    areaId: 'subestaciones',
    areaName: 'Mantenimiento de Subestaciones AT / MT / BT',
    slug: 'mantenimiento-especializado-interruptores-sf6',
    title: 'Mantenimiento Especializado de Interruptores de Potencia y Detección SF6',
    shortTitle: 'Interruptores de Potencia & Gas SF6',
    tag: 'Detección DILO & Tiempos',
    heroPhrase: 'El corazón de la protección de su subestación listo para actuar con total sincronismo.',
    summary: 'Mantenimiento en AT, MT y BT. Detección de fugas de gas SF6 con equipos DILO, medición de presión, calidad de gas, tiempos de apertura/cierre y resistencia de contactos.',
    iconName: 'ToggleRight',
    coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Intervención mecánica, neumática y dieléctrica en interruptores de potencia en aire, vacío y hexafluoruro de azufre (SF6) de 6 kV hasta 500 kV.',
      whatFor: 'Garantiza que el interruptor abra sus polos en menos de 40 milisegundos cuando un relé de protección ordene el disparo ante un cortocircuito mayor.',
      problemSolved: 'Resuelve pérdidas de presión de gas SF6, desincronismo entre fases, desajustes mecánicos en resortes de carga y desgaste de contactos de arco.',
      clientBenefits: 'Protección absoluta de la subestación. Si el interruptor falla al abrir, la energía de cortocircuito destruye el transformador de potencia.'
    },
    scopeActivities: [
      'Verificación y localización de fugas en bridas y tapas romboidales con equipo detector de gas DILO SF6.',
      'Medición de calidad del gas SF6: Pureza porcentual, humedad (punto de rocío) y productos de descomposición SO2.',
      'Pruebas de tiempos de apertura, cierre y discrepancia de polos con cronómetro oscilográfico.',
      'Medición de resistencia estática y dinámica de contactos principales (microohmios).',
      'Mantenimiento y lubricación de mecanismos de resorte, motores de carga y bobinas de disparo/cierre.'
    ],
    benefits: [
      { title: 'Detección DILO SF6', desc: 'Instrumentos de clase mundial para ubicar microfugas invisibles.', metric: 'Ppm exactas' },
      { title: 'Tiempos de Disparo', desc: 'Aseguramiento de apertura simultánea en menos de 2.5 ciclos de red.', metric: '< 40 ms' },
      { title: 'Cero Paradas', desc: 'Evite disparos por bajo nivel de presión de gas o bloqueo de mando.' }
    ],
    applications: ['Patios de llaves de 500 kV, 220 kV y 60 kV, celdas de distribución en 10 kV y 22.9 kV'],
    methodology: [
      { step: 1, title: 'Consignación y Bloqueo', desc: 'Verificación de ausencia de tensión y colocación de tierras temporales.' },
      { step: 2, title: 'Inspección de Gas SF6', desc: 'Chequeo de manómetros, compensación por temperatura y rastreo DILO.' },
      { step: 3, title: 'Resistencia de Contacto', desc: 'Inyección de 100 A continuos para verificar valor de microohmios.' },
      { step: 4, title: 'Prueba de Tiempos', desc: 'Disparo de bobinas 1 y 2 registrando velocidad de recorrido de contactos.' },
      { step: 5, title: 'Mantenimiento Mecánico', desc: 'Ajuste de pernos de base, engrase de levas y prueba de motor de carga.' },
      { step: 6, title: 'Puesta en Servicio', desc: 'Comprobación de enclavamientos eléctricos y mecánicos con la sala de control.' }
    ],
    realCasesExecuted: [
      'Atlantica: Identificación y reparación de fuga de gas SF6 en Interruptor INT-5261 500kV, fase "S", S.E. Chilca (Abril 2022)'
    ]
  },
  {
    id: 'mantenimiento-seccionadores',
    areaId: 'subestaciones',
    areaName: 'Mantenimiento de Subestaciones AT / MT / BT',
    slug: 'mantenimiento-especializado-seccionadores',
    title: 'Mantenimiento Especializado de Seccionadores AT / MT / BT',
    shortTitle: 'Seccionadores AT / MT / BT',
    tag: 'Aislamiento Visible',
    heroPhrase: 'Garantía de seccionamiento físico visible y contacto perfecto sin puntos calientes.',
    summary: 'Mantenimiento, ajuste mecánico, alineamiento de cuchillas, pruebas de resistencia de contacto y lubricación dieléctrica en seccionadores de 10 kV a 500 kV.',
    iconName: 'Unplug',
    coverImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Revisión exhaustiva de seccionadores de apertura central, semipantógrafo, pantógrafo y rotación de columna en subestaciones eléctricas.',
      whatFor: 'Permite aislar tramos de barras o líneas para mantenimiento con corte visible 100% seguro y conducir la corriente nominal sin disipación térmica excesiva.',
      problemSolved: 'Elimina falsos contactos, sobrecalentamientos por desalineamiento de mandíbulas, agarrotamiento de cajas de mando y desajustes en enclavamientos.',
      clientBenefits: 'Maniobras operativas suaves y sin riesgo de desgarro mecánico, y reducción de pérdidas por resistencia de contacto.'
    },
    scopeActivities: [
      'Inspección visual de aisladores de soporte y columnas rotativas (búsqueda de fisuras o desportilladuras).',
      'Limpieza criogénica o mecánica de cuchillas principales y contactos hembra.',
      'Medición de resistencia de contacto (ducter) en cada polo.',
      'Alineamiento de entrada y penetración de contactos para asegurar presión uniforme.',
      'Mantenimiento y calibración de fines de carrera en motorreductores de accionamiento.'
    ],
    benefits: [
      { title: 'Alineamiento Milimétrico', desc: 'Cierre perfecto entre contactos macho-hembra con presión controlada.' },
      { title: 'Baja Resistencia', desc: 'Valores de microohmios dentro de la tolerancia de fábrica del fabricante.' },
      { title: 'Enclavamientos Seguros', desc: 'Garantía de imposibilidad de maniobra indebida con cuchilla de tierra.' }
    ],
    applications: ['Subestaciones de transmisión y transformación en minería, siderurgia y generación eléctrica'],
    methodology: [
      { step: 1, title: 'Inspección Mecánica', desc: 'Revisión de juegos en bielas, crucetas y ejes de transmisión.' },
      { step: 2, title: 'Limpieza de Aisladores', desc: 'Descontaminación de polvo y salinidad en faldones de porcelana o poliméricos.' },
      { step: 3, title: 'Regulación de Contactos', desc: 'Ajuste de resortes de presión de contacto y aplicación de grasa conductora.' },
      { step: 4, title: 'Prueba Eléctrica de Contacto', desc: 'Inyección de corriente DC para medir la resistencia de unión.' },
      { step: 5, title: 'Maniobras de Prueba', desc: 'Ejecución de 10 ciclos completos de apertura y cierre manual y eléctrico.' },
      { step: 6, title: 'Verificación de Señales', desc: 'Confirmación de reporte correcto de posición abierta/cerrada al SCADA.' }
    ]
  },
  {
    id: 'mantenimiento-equipos-medicion',
    areaId: 'subestaciones',
    areaName: 'Mantenimiento de Subestaciones AT / MT / BT',
    slug: 'mantenimiento-transformadores-medida-tc-pt-trafomix',
    title: 'Mantenimiento de Equipos de Medición (TC, PT, CVT, Trafomix)',
    shortTitle: 'Equipos de Medida (TC / PT / CVT)',
    tag: 'Precisión de Protección',
    heroPhrase: 'Ojos y oídos de la subestación: Medición exacta y respuesta fiel ante contingencias.',
    summary: 'Evaluación dieléctrica, pruebas eléctricas de relación de transformación, curvas de saturación, resistencia de aislamiento y factor de potencia en TC, PT y CVT hasta 220 kV.',
    iconName: 'Sliders',
    coverImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Ensayos y mantenimiento a Transformadores de Corriente (TC), Transformadores de Potencial Inductivos (PT), Capacitivos (CVT) y conjuntos compactos Trafomix.',
      whatFor: 'Garantiza que la información enviada a los medidores de facturación y relés de protección no tenga desfases ni errores de clase que provoquen disparos falsos.',
      problemSolved: 'Detecta degradación en el dieléctrico sólido o líquido, saturación indebida de núcleos de medición y fallas capacitivas en divisores de tensión.',
      clientBenefits: 'Exactitud milimétrica en medición de energía facturable y disparo selectivo de protecciones ante fallas reales en la red.'
    },
    scopeActivities: [
      'Medición de resistencia de aislamiento (Megado) y factor de disipación / tangente delta (Tan δ).',
      'Verificación de relación de transformación y polaridad en todos los taps secundarios.',
      'Trazado de la curva de saturación (tensión de inflexión / knee point) según norma IEC / IEEE.',
      'Montaje, conexionado y puesta en servicio de nuevos transformadores capacitivos (CVT).',
      'Termografía infrarroja para detectar puntos calientes en bornes primarios H1-H2.'
    ],
    benefits: [
      { title: 'Clase de Precisión', desc: 'Verificación de clase 0.2S o 0.5 para medidores de frontera comercial.' },
      { title: 'Curva de Saturación', desc: 'Garantía de que los TCs no se saturen durante un cortocircuito severo.' },
      { title: 'Montaje Especializado', desc: 'Desconexión, izaje seguro y cableado de nuevos transformadores de patio.' }
    ],
    applications: ['Líneas de transmisión de 220 kV y 60 kV, celdas de medición de MT de concesionarias, minas'],
    methodology: [
      { step: 1, title: 'Desconexión Primaria/Secundaria', desc: 'Separación física de conductores de potencia y circuitos de control.' },
      { step: 2, title: 'Prueba de Aislamiento', desc: 'Megado a 5 kV entre primario-secundario y primario-tierra.' },
      { step: 3, title: 'Verificación de Relación', desc: 'Inyección de corriente o tensión comprobando la relación teórica.' },
      { step: 4, title: 'Curva de Excitación', desc: 'Elevación de tensión en el secundario determinando el punto de saturación.' },
      { step: 5, title: 'Comprobación de Puesta a Tierra', desc: 'Verificación de que el circuito secundario esté aterrizado en un solo punto.' },
      { step: 6, title: 'Reconexión y Normalización', desc: 'Retiro de cortocircuitos de prueba y puesta en servicio vigilada.' }
    ],
    realCasesExecuted: [
      'Atlantica: Montaje y puesta en servicio de transformador de tensión capacitivo (CVT) en S.E. Conococha 220 kV (Dic 2021)',
      'Egejunin: Reemplazo de transformadores de tensión AVR en celdas de 6 kV CH Huasahuasi 1 y 2 (Oct 2022)'
    ]
  },
  {
    id: 'mantenimiento-preventivo-transformadores',
    areaId: 'subestaciones',
    areaName: 'Mantenimiento de Subestaciones AT / MT / BT',
    slug: 'mantenimiento-preventivo-transformadores-potencia',
    title: 'Mantenimiento Preventivo de Transformadores de Potencia y Distribución',
    shortTitle: 'Transformadores de Potencia & Distribución',
    tag: 'Activo Crítico',
    heroPhrase: 'El activo más valioso de su sistema eléctrico mantenido bajo estándares internacionales.',
    summary: 'Inspección integral, pruebas eléctricas de aislamiento, relación de transformación TTR, resistencia de devanados, termografía, mantenimiento de cambiadores de tomas (Tap Changer) y radiadores.',
    iconName: 'Layers',
    coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Programa exhaustivo de conservación para transformadores en aceite o secos encapsulados en resina, desde pequeñas unidades de distribución hasta transformadores de 100 MVA.',
      whatFor: 'Asegura la capacidad de transferencia de potencia requerida por la planta sin sobrecalentamientos nocivos ni degradación prematura del devanado.',
      problemSolved: 'Elimina fugas de aceite por empaquetaduras envejecidas, silica gel saturada en el respirador, falsos contactos en cambiadores de tomas y corrosión en aletas radiadoras.',
      clientBenefits: 'Prolonga la vida operativa del transformador de 25 a 40 años, preserva la garantía y evita pérdidas financieras descomunales por parada.'
    },
    scopeActivities: [
      'Prueba de Resistencia de Aislamiento (Índice de Polarización IP e Índice de Absorción Dieléctrica DA).',
      'Prueba de Relación de Transformación (TTR) en todas las posiciones del conmutador de tomas.',
      'Medición de Resistencia de Devanados en DC (milióhmetros) para descartar espiras en cortocircuito.',
      'Mantenimiento de accesorios: Válvula de alivio de sobrepresión, relé Buchholz, termómetros de aceite/devanado y silica gel.',
      'Limpieza y tratamiento de pintura epóxica anticorrosiva en cuba, conservador y radiadores.'
    ],
    benefits: [
      { title: 'Confiabilidad Máxima', desc: 'Verificación completa del estado mecánico y electromagnético del núcleo y bobinas.' },
      { title: 'Protección de Accesorios', desc: 'Calibración y prueba de disparo de contactos de alarma y disparo del relé Buchholz.' },
      { title: 'Cero Fugas de Fluido', desc: 'Sellado y reapriete de uniones bridadas con materiales de alta resistencia térmica.' }
    ],
    applications: ['Centrales de generación hidroeléctrica, minería a tajo abierto, parques fotovoltaicos, plantas de fundición'],
    methodology: [
      { step: 1, title: 'Inspección Previa', desc: 'Revisión del nivel de aceite, presión interna y registro de temperatura máxima.' },
      { step: 2, title: 'Limpieza Integral', desc: 'Eliminación de polución en aisladores de paso (Bushings) de AT y BT.' },
      { step: 3, title: 'Batería de Pruebas Eléctricas', desc: 'TTR, devanados, aislamiento y prueba de continuidad del cambiador de taps.' },
      { step: 4, title: 'Mantenimiento del Respirador', desc: 'Reemplazo o reactivación de silica gel y reposición de sello de aceite.' },
      { step: 5, title: 'Prueba de Señales de Control', desc: 'Inyección de aire/señal para comprobar que el relé de sobrepresión actúa sobre el interruptor.' },
      { step: 6, title: 'Entrega con Protocolo', desc: 'Conformidad técnica firmada con valores de referencia para tendencias futuras.' }
    ]
  },
  {
    id: 'bancos-baterias-servicios-auxiliares',
    areaId: 'subestaciones',
    areaName: 'Mantenimiento de Subestaciones AT / MT / BT',
    slug: 'mantenimiento-bancos-baterias-servicios-auxiliares',
    title: 'Mantenimiento de Bancos de Baterías, Cargadores y Servicios Auxiliares (SSAA)',
    shortTitle: 'Bancos de Baterías & SSAA',
    tag: 'Energía Ininterrumpida DC',
    heroPhrase: 'El seguro de vida de la subestación cuando la red colapsa: Energía DC permanente.',
    summary: 'Mantenimiento de bancos de baterías de 110V/125V/220V DC, pruebas de descarga controlada de 300 Ah, medición de impedancia celda a celda, cargadores y grupos electrógenos con transferencias automáticas.',
    iconName: 'BatteryCharging',
    coverImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80',
    description: {
      whatIs: 'Servicio especializado en los sistemas de alimentación de corriente continua (DC) y corriente alterna esencial que alimentan los relés de protección, bobinas de disparo y mandos de la subestación.',
      whatFor: 'Garantiza que ante un apagón total (Blackout), la subestación cuente con energía autónoma para abrir o cerrar interruptores y comunicarse con el centro de control.',
      problemSolved: 'Evita la muerte súbita de celdas de batería ácidas o alcalinas, sulfatación de bornes y fallas en los cargadores que provocan pérdida total de control de la subestación.',
      clientBenefits: 'Disponibilidad del 100% del sistema de respaldo, cumplimiento de normas COES y prevención de daños catastróficos por disparos no ejecutados.'
    },
    scopeActivities: [
      'Limpieza y neutralización de sulfato en bornes y pernos interceldas.',
      'Medición de tensión de flotación individual y tensión total del banco.',
      'Medición de impedancia interna celda por celda para evaluar envejecimiento químico.',
      'Prueba de descarga controlada con banco de cargas resistivas (bancos de hasta 300 Ah).',
      'Termografía infrarroja durante la descarga para ubicar celdas con alta resistencia interna.',
      'Mantenimiento a rectificadores/cargadores de baterías y grupos electrógenos de respaldo con tableros de transferencia automática (TTA).'
    ],
    benefits: [
      { title: 'Autonomía Comprobada', desc: 'Pruebas de capacidad real en amperios-hora (Ah) según IEEE 450/1188.' },
      { title: 'Detección de Celda Débil', desc: 'Identificación y reemplazo puntual de celdas defectuosas sin cambiar todo el banco.' },
      { title: 'Grupos Electrógenos', desc: 'Arranque garantizado en menos de 10 segundos ante corte del suministro comercial.' }
    ],
    applications: ['Subestaciones de potencia AT, salas de control hidroeléctricas, hospitales, centros de datos'],
    methodology: [
      { step: 1, title: 'Inspección de Flotación', desc: 'Medición de voltaje celda por celda en condiciones normales de flotación.' },
      { step: 2, title: 'Limpieza y Torquímetro', desc: 'Reapriete de uniones con llave dinamométrica según recomendación de fábrica.' },
      { step: 3, title: 'Conexión de Banco de Carga', desc: 'Instalación de banco resistivo controlado por microprocesador.' },
      { step: 4, title: 'Descarga a Corriente Constante', desc: 'Monitoreo de curva de caída de tensión registrando temperatura y tiempo.' },
      { step: 5, title: 'Cálculo de Capacidad (%)', desc: 'Determinación de la capacidad remanente real del banco contra curva nominal.' },
      { step: 6, title: 'Recarga y Ecualización', desc: 'Puesta en marcha del cargador en modo Boost/Ecualización supervisada.' }
    ],
    realCasesExecuted: [
      'Atlantica - ATN: Mantenimiento de bancos de batería de 300 Ah en S.E. de potencia, medición de impedancia y termografía (Dic 2023)',
      'Red de Energía del Perú (ISA REP): Supervisión, montaje y puesta en servicio de grupos electrógenos y sistema de transferencia automática (Mar 2022)'
    ]
  }
];

export const REAL_PROJECTS_PORTFOLIO: ProjectCase[] = [
  {
    id: 'proj-1',
    number: 1,
    title: 'Consultoría en Seguridad y Salud en el Trabajo (SST), IPERC y Mapas de Riesgo',
    client: 'Servicio Nacional de Meteorología e Hidrología del Perú (SENAMHI)',
    category: 'mantenimiento',
    date: '06 Junio hasta 08 Agosto 2025',
    descriptionPoints: [
      'Visita de evaluación técnica a las 14 sedes de SENAMHI a nivel nacional.',
      'Elaboración y actualización de Matrices IPERC Línea Base y Continuo.',
      'Elaboración de Mapas de Riesgo por cada sede e instalación.',
      'Establecimiento de controles rigurosos según la jerarquía de controles para riesgo eléctrico y de campo.'
    ],
    location: '14 sedes a nivel nacional (Perú)',
    badge: 'Sector Público / SST Nacional'
  },
  {
    id: 'proj-2',
    number: 2,
    title: 'Auditoría en Eficiencia Energética Integral en Plantas y Fundos',
    client: 'Complejo Agroindustrial Beta S.A.',
    category: 'energia',
    date: '06 Febrero hasta 15 Agosto 2024',
    descriptionPoints: [
      'Auditoría en eficiencia energética en planta industrial y fundos de ICA.',
      'Auditoría en eficiencia energética en planta industrial y fundos de Chincha.',
      'Auditoría en eficiencia energética en planta industrial y fundos de Piura.',
      'Auditoría en eficiencia energética en planta industrial y fundos de Lambayeque.',
      'Determinación de balances energéticos de frío, bombeo tecnificado e identificación de ahorros sustanciales.'
    ],
    location: 'Ica, Chincha, Piura y Lambayeque',
    badge: 'Agroindustria / Alta Potencia'
  },
  {
    id: 'proj-3',
    number: 3,
    title: 'Consultoría en Elaboración de Plan de Contingencia - Centro Nuclear Racso',
    client: 'Instituto Peruano de Energía Nuclear (IPEN)',
    category: 'mantenimiento',
    date: 'Noviembre 2024',
    descriptionPoints: [
      'Contratación del servicio de elaboración del plan de contingencia del expediente técnico del saldo de obra del proyecto:',
      '"Mejoramiento del servicio de energía eléctrica en el centro nuclear Racso, distrito de Carabayllo, provincia y departamento de Lima", CUI N° 2252487.',
      'Protocolos técnicos de mitigación de riesgos ante fallas en el suministro eléctrico en instalaciones nucleares.'
    ],
    location: 'Centro Nuclear Racso, Carabayllo, Lima',
    badge: 'Energía Nuclear / Expediente CUI'
  },
  {
    id: 'proj-4',
    number: 4,
    title: 'Plan de Contingencia para Transporte Terrestre MATPEL a Nivel Nacional',
    client: 'Instituto Peruano de Energía Nuclear (IPEN)',
    category: 'mantenimiento',
    date: 'Diciembre 2024',
    descriptionPoints: [
      'Contratación del servicio para la elaboración del plan de contingencia para el transporte terrestre de materiales y/o residuos peligrosos a nivel nacional.',
      'Cumplimiento de estándares D.S. 021-2008-MTC y directivas de seguridad radiológica y ambiental.'
    ],
    location: 'Nacional (Rutas terrestres del Perú)',
    badge: 'MATPEL / Residuos Peligrosos'
  },
  {
    id: 'proj-5',
    number: 5,
    title: 'Mantenimiento de Cables de Potencia hasta 36 kV',
    client: 'EGEJUNIN S.A.',
    category: 'subestaciones',
    date: '17 al 21 de Diciembre 2024',
    descriptionPoints: [
      'Desconexión de cables de potencia en tableros de Media Tensión (MT).',
      'Retiro y reemplazo de terminaciones termocontraíbles en CH Huasahuasi 1 y 2.',
      'Ejecución de pruebas eléctricas de aislamiento Hi-Pot y VLF.',
      'Conexión y torquímetro final de cables de media tensión.'
    ],
    location: 'Centrales Hidroeléctricas Huasahuasi 1 y 2, Junín',
    badge: 'Hidroeléctrica / 36 kV'
  },
  {
    id: 'proj-6',
    number: 6,
    title: 'Mantenimiento de Bancos de Batería en Subestaciones de Potencia',
    client: 'ATLANTICA - ATN',
    category: 'subestaciones',
    date: '17 al 21 de Diciembre 2023',
    descriptionPoints: [
      'Limpieza y ajuste con torquímetro de componentes intercelda.',
      'Medición de tensión de flotación y tensión en bornes.',
      'Medición de impedancia interna celda por celda.',
      'Descarga controlada de bancos de baterías de 300 Ah.',
      'Inspección termográfica de alta precisión durante el ciclo de descarga.'
    ],
    location: 'Subestaciones del Sistema Eléctrico Interconectado',
    badge: 'Transmisión / 300 Ah'
  },
  {
    id: 'proj-7',
    number: 7,
    title: 'Reemplazo de Transformadores de Tensión AVR en Celdas de 6 kV',
    client: 'EGEJUNIN S.A.',
    category: 'subestaciones',
    date: '08 Octubre 2022',
    descriptionPoints: [
      'Reemplazo de 03 Transformadores de Tensión para Medición y Protección Tipo TJC 4 ABB (Relación 6000/√3 // 120/√3 V, a-n, cl 0.5 20 VA).',
      'Reemplazo de 01 Transformador de Tensión de Sincronismo tipo TDC 4 ABB (Relación 6000 // 120 V, a-b, cl 0.5 20 VA).',
      'Reemplazo de 01 Transformador de Tensión AVR tipo TD3A EPLI SAC (Relación 6000 // 220 V, Yyn0, relación 6300 // 220 V, peso 90 kg).',
      'Pruebas eléctricas de polaridad, relación y puesta en marcha en CH Huasahuasi 1 y 2.'
    ],
    location: 'Centrales Hidroeléctricas Huasahuasi 1 y 2, Junín',
    badge: 'Generación / ABB & EPLI'
  },
  {
    id: 'proj-8',
    number: 8,
    title: 'Instalación de Sistema de Ventilación Automática para Celdas de 6 kV',
    client: 'EGEJUNIN S.A.',
    category: 'mantenimiento',
    date: '08 Octubre 2022',
    descriptionPoints: [
      'Instalación de un sistema de refrigeración automática con mando automatizado por termostato.',
      'Acondicionamiento para los cuatro tableros de MT con un sistema de ventilador/extractor de alto caudal.',
      'Objetivo cumplido: Aminorar la alta temperatura existente en las celdas de 6 kV ocasionada por el incremento de carga operativa.'
    ],
    location: 'Central Hidroeléctrica Huasahuasi 1 y 2, Junín',
    badge: 'Automatización & Refrigeración'
  },
  {
    id: 'proj-9',
    number: 9,
    title: 'Identificación y Reparación de Fuga de Gas SF6 en Interruptor 500 kV',
    client: 'ATLANTICA',
    category: 'subestaciones',
    date: '17 de Abril 2022',
    descriptionPoints: [
      'Verificación y detección milimétrica de fugas en bridas del Interruptor fase S con equipo detector de fugas de gas DILO SF6.',
      'Verificación de la presión actual del Interruptor IN 5261 fase S (7.25 bar abs).',
      'Reemplazo de tapas romboidales en el IN 5261 fase S.',
      'Medición de calidad, pureza y humedad del gas SF6 en el polo de la Fase S de la Subestación Chilca.'
    ],
    location: 'Subestación Chilca 500 kV, Lima',
    badge: 'Extra Alta Tensión 500 kV'
  },
  {
    id: 'proj-10',
    number: 10,
    title: 'Supervisión, Montaje y Puesta en Servicio de Grupos Electrógenos y TTA',
    client: 'Red de Energía del Perú (ISA REP)',
    category: 'subestaciones',
    date: '12 de Marzo 2022',
    descriptionPoints: [
      'Anclado de tanque de combustible y tuberías asociadas.',
      'Fijado de rejilla en canaleta de tuberías de combustible.',
      'Instalación de lona técnica para salida y disipación de aire caliente.',
      'Conexionado de cables de fuerza en tableros Preferentes y NO Preferentes.',
      'Traslado e instalación de resilentes antivibratorios tipo resorte sobre losa de cimentación con pernos de expansión HILTI.',
      'Pruebas de conmutación automática de transferencia y puesta en servicio con carga.'
    ],
    location: 'Instalaciones ISA REP, Perú',
    badge: 'Transmisión ISA REP / Respaldo'
  },
  {
    id: 'proj-11',
    number: 11,
    title: 'Desmontaje de Medidores Nexus 1500 y Montaje de Medidores ION 7650',
    client: 'ATLANTICA',
    category: 'subestaciones',
    date: '16 al 22 de Febrero 2022',
    descriptionPoints: [
      'Desmontaje técnico de 4 medidores NEXUS 1500.',
      'Montaje, cableado de señales de corriente y tensión, y puesta en servicio de 4 medidores ION 7650 de alta gama.',
      'Trabajos ejecutados en las Subestaciones Poroma, Ocoña y Moquegua.'
    ],
    location: 'Subestaciones Poroma, Ocoña y Moquegua',
    badge: 'Medición Schneider ION 7650'
  },
  {
    id: 'proj-12',
    number: 12,
    title: 'Servicio de Configuración y Calibración de Medidores ION 7650',
    client: 'ATLANTICA',
    category: 'mantenimiento',
    date: '12 de Febrero 2022',
    descriptionPoints: [
      'Configuración de puertos de comunicación y parámetros de red.',
      'Calibración y contrastación de 4 medidores multifunción ION 7650 con equipo patrón calibrado.',
      'Emisión de reportes de calibración con curvas de error dentro de clase.'
    ],
    location: 'Laboratorio y Subestaciones Atlantica',
    badge: 'Metrología Eléctrica'
  },
  {
    id: 'proj-13',
    number: 13,
    title: 'Montaje y Puesta en Servicio de CVT en Subestación Conococha 220 kV',
    client: 'ATLANTICA',
    category: 'subestaciones',
    date: '19 de Diciembre 2021',
    descriptionPoints: [
      'Desembalaje técnico e inspección del repuesto.',
      'Pruebas eléctricas previas al montaje.',
      'Desconexión del CVT existente averiado.',
      'Montaje mecánico con grúa y conexionado del nuevo Transformador de Tensión Capacitivo (CVT).',
      'Verificación y contrastación de tensiones secundarias en panel de protección.'
    ],
    location: 'Subestación Conococha 220 kV, Áncash',
    badge: 'Alta Tensión 220 kV'
  },
  {
    id: 'proj-14',
    number: 14,
    title: 'Montaje de AVR y Puesta en Servicio de Generador G-2 (Minicentral Hidroeléctrica)',
    client: 'CANCHAYLLO',
    category: 'subestaciones',
    date: '14 de Diciembre 2021',
    descriptionPoints: [
      'Seguimiento de cableado para elaborar esquemas funcionales de bornes del amperímetro inteligente (P2) hasta regletas D1 y D2.',
      'Seguimiento del cableado desde tablero +1UE2 hasta tablero +2UE2.',
      'Elaboración del esquema funcional del Amperímetro Inteligente (P2).',
      'Puesta en servicio y sincronización del Generador Eléctrico G-2.'
    ],
    location: 'Minicentral Hidroeléctrica Canchayllo, Junín',
    badge: 'Generación Hidráulica G-2'
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: 'Ing. Richter Gómez',
    role: 'Gerente de Proyectos y Mantenimiento / CEO',
    credentials: [
      'Ingeniero Mecánico Electricista Colegiado',
      '17 años de destacada trayectoria en el sector eléctrico de alta potencia',
      'Ex-especialista en Red de Energía del Perú (ISA REP)',
      'Catedrático y formador técnico en SENATI',
      'Especialista en Mantenimiento de Subestaciones de 60 kV a 500 kV'
    ],
    bio: 'Especializado en la gestión y optimización de sistemas de alta, media y baja tensión. Su experiencia se centra en la consultoría y el mantenimiento de equipos críticos de subestaciones, incluyendo transformadores de potencia, interruptores de alta tensión, seccionadores, pararrayos y grupos electrógenos. Dedicado a aplicar tecnología de vanguardia y el ciclo de mejora continua PHVA para garantizar confiabilidad y eficiencia energética sostenible.',
    specialties: ['Subestaciones de Alta Potencia', 'Gestión de Activos Eléctricos', 'Auditoría Energética', 'Análisis Causa Raíz'],
    experience: '17+ años'
  },
  {
    name: 'Ing. Analista en Energía',
    role: 'Líder de Eficiencia Energética & Calidad de Red',
    credentials: [
      'Ingeniero Electricista / Especialista en Normativa NTCSE',
      'Certificado en Analizadores de Redes Clase A IEC 61000-4-30',
      'Auditor Interno de Sistemas de Gestión de la Energía ISO 50001'
    ],
    bio: 'Encargado del análisis de curvas de carga, identificación de pérdidas parásitas, balances energéticos y diagnóstico de armónicos y perturbaciones en plantas industriales y agroindustrias.',
    specialties: ['Calidad de Energía', 'Auditorías Energéticas', 'ISO 50001', 'Energías Renovables'],
    experience: '10+ años'
  },
  {
    name: 'Ingeniero de Subestaciones',
    role: 'Especialista en Patio de Llaves y Protección',
    credentials: [
      'Ingeniero Electricista Especialista en AT/MT',
      'Experto en gas SF6 certificado DILO',
      'Especialista en relés de protección multifunción y transformadores'
    ],
    bio: 'Responsable técnico de las maniobras de campo, pruebas dieléctricas, ensayos de aislamiento, puesta en servicio de transformadores de potencia e interruptores de 60 kV a 500 kV.',
    specialties: ['Interruptores SF6', 'Transformadores de Potencia', 'Relés de Protección', 'Celdas MT'],
    experience: '12+ años'
  },
  {
    name: 'Ingeniero de Líneas de Transmisión',
    role: 'Especialista en Alta Tensión y Puesta a Tierra',
    credentials: [
      'Ingeniero Electromecánico',
      'Especialista en diseño de líneas de transmisión aéreas y subterráneas',
      'Experto en modelamiento de mallas de tierra IEEE 80'
    ],
    bio: 'Supervisa el tendido de conductores, aisladores, pararrayos y estudios de resistividad de suelo para garantizar la continuidad y seguridad de las arterias de transmisión.',
    specialties: ['Líneas de Transmisión', 'Puesta a Tierra', 'Cables Subterráneos 36 kV', 'Aisladores'],
    experience: '11+ años'
  },
  {
    name: 'Técnico Mecánico / Electricista Senior',
    role: 'Supervisor de Maniobras de Campo y Torquimetría',
    credentials: [
      'Técnico Electricista Industrial Egresado de SENATI',
      'Certificación en Trabajos de Alto Riesgo en Altura y Riesgo Eléctrico',
      'Especialista en mantenimiento de cambiadores de tomas y grupos electrógenos'
    ],
    bio: 'Lidera las cuadrillas operativas en subestaciones, asegurando el cumplimiento estricto del protocolo de Cero Accidentes, ajuste de conexiones y maniobras mecánicas de precisión.',
    specialties: ['Montaje Electromecánico', 'Bancos de Baterías', 'Grupos Electrógenos', 'Seguridad IPERC'],
    experience: '14+ años'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'eficiencia-energetica-sector-agroindustrial-peru',
    title: 'Eficiencia energética en el sector agroindustrial: Importancia, reducción de costos e impacto en el Perú',
    category: 'ENERGÍA',
    date: '28 de Agosto, 2024',
    author: 'Ing. Richter Gómez',
    authorRole: 'CEO & Gerente de Proyectos CATENERGY SAC',
    readTime: '6 min de lectura',
    featured: true,
    excerpt: 'El sector agroindustrial en la costa peruana enfrenta tarifas crecientes y alta exigencia en bombeo y frío. Un análisis exhaustivo de cómo las auditorías energéticas y el monitoreo continuo reducen hasta un 28% de la factura eléctrica.',
    tags: ['Agroindustria', 'Eficiencia Energética', 'Ica', 'Reducción de Costos', 'Auditoría AEE'],
    keyTakeaways: [
      'El 60% al 75% del costo operativo eléctrico de una agroexportadora se concentra en bombeo de pozo profundo y cámaras de refrigeración.',
      'La corrección de penalizaciones por energía reactiva inductiva y capacitiva genera ahorros inmediatos desde el primer ciclo de facturación.',
      'La implementación de variadores de frecuencia inteligentes en cabezales de pozo evita golpes de ariete y optimiza el consumo en horas punta.',
      'Casos reales como Complejo Agroindustrial Beta demuestran que las auditorías multisede pagan su inversión en menos de 10 meses.'
    ],
    content: [
      'La agroindustria peruana se ha posicionado como uno de los motores económicos más dinámicos de Latinoamérica. Regiones como Ica, Piura, Lambayeque y La Libertad albergan complejos de producción de uva de mesa, palta hass, arándanos y espárragos de exportación con exigencias operativas 24/7.',
      'Sin embargo, el costo de la energía eléctrica representa uno de los factores más determinantes en el margen operativo de las empresas agroindustriales. Los sistemas de riego tecnificado con pozos profundos de 80 a 150 metros y las cadenas ininterrumpidas de frío demandan potencias considerables que frecuentemente incurren en sobrecostos por demanda máxima en horas punta y penalizaciones por factor de potencia.',
      'A través de las auditorías energéticas exhaustivas que ejecutamos en CATENERGY SAC —como la desarrollada en las múltiples plantas y fundos de Complejo Agroindustrial Beta S.A.—, identificamos patrones claros donde la optimización de los ciclos de bombeo fuera de las horas punta (18:00 a 23:00 hrs) y el reajuste de la compensación reactiva generan impactos financieros tangibles de dos dígitos porcentuales.',
      'Además, la integración de energía solar fotovoltaica para autoconsumo en techos de empaquetadoras y terrenos eriazos complementa de manera natural la curva de radiación con la demanda diurna de las plantas de procesamiento, sentando las bases de una agroexportación verdaderamente sostenible y competitiva frente a los exigentes mercados europeos y asiáticos.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'deteccion-reparacion-fugas-gas-sf6-subestaciones-500kv',
    title: 'Monitoreo y detección de fugas de gas SF6 en interruptores de alta tensión (500 kV)',
    category: 'SUBESTACIONES',
    date: '15 de Mayo, 2024',
    author: 'Ingeniero de Subestaciones CATENERGY',
    authorRole: 'Especialista en Equipos de Patio AT',
    readTime: '5 min de lectura',
    featured: false,
    excerpt: 'El hexafluoruro de azufre (SF6) es el medio aislante por excelencia en extra alta tensión, pero una fuga compromete la seguridad del interruptor y el medio ambiente. Metodología DILO aplicada en campo.',
    tags: ['SF6', 'Interruptores 500 kV', 'DILO', 'Mantenimiento Predictivo', 'S.E. Chilca'],
    keyTakeaways: [
      'El SF6 tiene un potencial de calentamiento global 23,500 veces superior al CO2, por lo que su contención es tanto una exigencia operativa como ambiental.',
      'Una caída de presión por debajo de 7.0 bar en interruptores de 500 kV dispara alarmas críticas de bloqueo de apertura por riesgo de explosión.',
      'El uso de detectores infrarrojos y cámaras de ionización tipo DILO permite ubicar con precisión milimétrica la fuga en tapas romboidales y bridas sin despresurizar innecesariamente.',
      'La verificación de calidad incluye pureza >97%, humedad menor a 15 ppm y SO2 menor a 1 ppm.'
    ],
    content: [
      'En los sistemas de transmisión de extra alta tensión (500 kV), el interruptor de potencia representa la última línea de defensa contra cortocircuitos masivos. En instalaciones como la Subestación Chilca, el gas SF6 actúa como medio de extinción del arco eléctrico gracias a su altísima rigidez dieléctrica y propiedades electronegativas.',
      'No obstante, variaciones térmicas extremas y el envejecimiento de juntas elastoméricas pueden originar microfugas imperceptibles al ojo humano. En CATENERGY SAC contamos con instrumental homologado DILO para la detección y recuperación de SF6, logrando identificar fugas críticas en tapas romboidales y sellos de accionamiento.',
      'El mantenimiento oportuno no solo restituye la presión nominal de trabajo del interruptor, sino que garantiza que las bobinas de disparo puedan actuar con total confianza ante eventos intempestivos de la red interconectada.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'ciclo-phva-en-mantenimiento-predictivo-subestaciones',
    title: 'La filosofía PHVA aplicada al mantenimiento de subestaciones eléctricas: Cómo lograr Cero Accidentes y Cero Fallas',
    category: 'MANTENIMIENTO',
    date: '10 de Febrero, 2024',
    author: 'Ing. Richter Gómez',
    authorRole: 'CEO CATENERGY SAC',
    readTime: '7 min de lectura',
    featured: false,
    excerpt: 'El ciclo de Deming (Planificar, Hacer, Verificar, Actuar) no es solo una teoría de gestión; es la metodología que garantiza seguridad de vida en patios de 220 kV y confiabilidad operativa.',
    tags: ['PHVA', 'Gestión de Mantenimiento', 'Cero Accidentes', 'Confiabilidad', 'IPERC'],
    keyTakeaways: [
      'Planificar: Identificación previa de peligros (IPERC) y definición de distancias dieléctricas de seguridad.',
      'Hacer: Aplicación de las 5 Reglas de Oro de la seguridad eléctrica sin ninguna excepción.',
      'Verificar: Ensayos de laboratorio (cromatografía DGA, factor de potencia Tan δ y termografía).',
      'Actuar: Estandarización de procedimientos As-Built e incorporación de lecciones aprendidas.'
    ],
    content: [
      'Trabajar en proximidad de conductores energizados a decenas o cientos de kilovoltios no admite el más mínimo margen de improvisación. En CATENERGY SAC, nuestra filosofía operativa se cimienta en el ciclo PHVA.',
      'Antes de ingresar a un patio de llaves, la fase de Planificación contempla el análisis situacional 360°, la validación de permisos de trabajo y la charla de 5 minutos con matrices IPERC continuas.',
      'En la fase de Ejecución, el uso de herramientas calibradas y EPP normado (arc flash clase 4, guantes dieléctricos ensayados) garantiza que cada técnico regrese sano y salvo a casa. Esa es la esencia de nuestro compromiso: Cero Accidentes.'
    ]
  },
  {
    id: 'blog-4',
    slug: 'calidad-de-energia-analizadores-clase-a-osinergmin',
    title: 'Por qué su empresa necesita un estudio de calidad de energía con analizadores Clase A homologados',
    category: 'ELECTRICIDAD',
    date: '18 de Diciembre, 2023',
    author: 'Ing. Analista en Energía',
    authorRole: 'Especialista en Eficiencia & Calidad',
    readTime: '5 min de lectura',
    featured: false,
    excerpt: 'Distorsión armónica, flickers y microcortes pueden destruir motores y PLCs sin dejar rastro visible. Conozca por qué solo un analizador Clase A cumple con OSINERGMIN y la norma IEC 61000-4-30.',
    tags: ['Calidad de Energía', 'OSINERGMIN', 'Clase A', 'Armónicos', 'NTCSE'],
    keyTakeaways: [
      'Los analizadores convencionales no sincronizan sus ventanas de integración con la frecuencia de red, arrojando errores de hasta 15%.',
      'La norma IEC 61000-4-30 Clase A garantiza que dos instrumentos distintos midan exactamente los mismos valores ante la misma perturbación.',
      'El estudio de 7 días continuos según la NTCSE es el único documento aceptado para reclamos o justificaciones técnicas ante concesionarias eléctricas.',
      'La inversión en filtrado de armónicos reduce las pérdidas por calentamiento en cables y transformadores de distribución.'
    ],
    content: [
      'La proliferación de cargas no lineales como variadores de velocidad, servomotores y fuentes conmutadas ha transformado las redes eléctricas industriales. Aunque estos equipos incrementan la eficiencia del proceso, inyectan corrientes armónicas que distorsionan la onda senoidal pura de tensión.',
      'Para diagnosticar con rigor legal y técnico este fenómeno, en CATENERGY empleamos analizadores de redes Clase A homologados por OSINERGMIN. Solo estos equipos cumplen con los protocolos estrictos de agregación temporal de 10 minutos y 2 horas exigidos por la legislación peruana.',
      'Invertir en calidad de energía es proteger el corazón tecnológico de la planta y asegurar continuidad productiva sin paradas intempestivas.'
    ]
  }
];

export const BLOG_ARTICLES = BLOG_POSTS;

