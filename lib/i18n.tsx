"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "pt" | "en" | "es";

export const translations = {
  pt: {
    nav: {
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato",
    },
    hero: {
      role: "engenheiro de software",
      headline1: "Resolvo problemas complexos de TI",
      headline2: "Do hardware ao software em produção.",
      subheadline:
        "Engenharia de software com foco em sistemas críticos, performance e automação inteligente.",
      highlighted: ["sistemas críticos", "performance", "automação inteligente"],
      stats: {
        years: "anos de experiência",
        leadership: "anos de liderança",
        users: "usuários impactados",
      },
      cta: {
        projects: "Ver projetos",
        contact: "Falar comigo",
        download: "Download CV",
      },
    },
    authority: {
      tag: "// PROVA DE AUTORIDADE",
      title: "Impacto mensurável",
      subtitle:
        "Números reais de sistemas em produção. Cada métrica representa um problema complexo resolvido.",
      achievements: [
        {
          metric: "140.000+",
          label: "funcionários",
          description: "Sistema de folha de pagamento processando dados mensalmente",
          highlight: "100% de precisão nos cálculos fiscais",
        },
        {
          metric: "-20%",
          label: "tempo de processamento",
          description: "Otimização em sistema ASP.NET com C#",
          highlight: "160h/mês economizadas em validações",
        },
        {
          metric: "60%",
          label: "redução de erros",
          description: "Automação de validações de cálculos complexos",
          highlight: "IR, e-Social, INSS, FGTS, férias",
        },
        {
          metric: "10M+",
          label: "registros processados",
          description: "Sistema de análise de preços para SEFAZ/MS",
          highlight: "De 4 horas para 5 minutos",
        },
        {
          metric: "99%",
          label: "uptime garantido",
          description: "Gestão de infraestrutura crítica em cloud",
          highlight: "AWS + Azure + monitoramento 24/7",
        },
        {
          metric: "100%",
          label: "solicitações rastreáveis",
          description: "Sistema de gestão de demandas com score",
          highlight: "80% mais produtividade na equipe",
        },
      ],
      log: {
        filename: "production_logs.txt",
        lines: [
          { time: "[2024-03-15 08:00:01]", type: "SUCCESS", msg: "Folha de pagamento processada: 142.847 funcionários" },
          { time: "[2024-03-15 08:00:02]", type: "INFO", msg: "Cálculos fiscais: IR, INSS, FGTS - 100% validados" },
          { time: "[2024-03-15 08:00:03]", type: "SUCCESS", msg: "Tempo de processamento por matrícula: 9s (meta: 6s)" },
          { time: "[2024-03-15 08:00:04]", type: "INFO", msg: "Relatórios e-Social gerados e enviados" },
          { time: "[2024-03-15 08:00:05]", type: "SUCCESS", msg: "Pipeline completo. Zero erros críticos." },
        ],
      },
    },
    projects: {
      tag: "// PROJETOS",
      title: "Sistemas em produção",
      subtitle:
        "Cada projeto representa um problema real resolvido com engenharia de software de verdade.",
      labels: {
        problem: "Problema",
        solution: "Solução",
        stack: "Stack",
        results: "Resultados",
      },
      items: [
        {
          id: "01",
          title: "Sistema de Folha de Pagamento",
          client: "Secretaria de Administração - SAD/MS",
          context:
            "Sistema crítico que processa a folha de pagamento de mais de 140 mil funcionários públicos do estado, com cálculos complexos de impostos e benefícios.",
          problem:
            "Processamento manual consumia 160+ horas/mês e apresentava alta taxa de erros em cálculos fiscais sensíveis.",
          solution:
            "Desenvolvi procedures e pacotes PL/SQL otimizados, implementei funções de auditoria e automatizei validações no sistema ASP.NET Web Forms.",
          results: [
            "20% menos tempo de processamento",
            "60% menos erros",
            "160h/mês automatizadas",
            "100% conformidade com Receita Federal",
          ],
        },
        {
          id: "02",
          title: "Plataforma de Análise de Preços",
          client: "SEFAZ/MS",
          context:
            "Sistema de gestão e análise de preços para medição de índices econômicos estaduais, processando milhões de registros de notas fiscais.",
          problem:
            "Coleta manual de dados levava 4+ horas diárias e não garantia atualização consistente das informações.",
          solution:
            "Arquitetei solução distribuída com web scraping automatizado, filas de mensagens e APIs REST, seguindo ciclo completo de desenvolvimento.",
          results: [
            "10M+ registros processados",
            "4h → 5min de processamento",
            "70% menos trabalho manual",
            "100+ usuários simultâneos",
          ],
        },
        {
          id: "03",
          title: "Sistema de Gestão de Solicitações",
          client: "Secretaria de Administração - SAD/MS",
          context:
            "Sistema de distribuição automatizada de demandas internas com relatórios de performance e rastreamento completo.",
          problem:
            "Solicitações se perdiam, não havia métricas de atendimento e a produtividade da equipe era difícil de medir.",
          solution:
            "Desenvolvi sistema completo em C# com frontend Angular, incluindo algoritmo de distribuição e dashboard de performance com score.",
          results: [
            "40 solicitações/mês automatizadas",
            "100% rastreabilidade",
            "80% mais produtividade",
            "99% uptime",
          ],
        },
      ],
    },
    stack: {
      tag: "// STACK",
      title: "Domínio técnico",
      subtitle: "Engenharia ponta a ponta. Da arquitetura ao deploy em produção.",
      categories: [
        { title: "Arquitetura", items: ["Clean Architecture", "Sistemas Distribuídos", "Microsserviços", "REST APIs", "Event-Driven"] },
        { title: "Backend", items: [".NET Core (Avançado)", "C# (Avançado)", "ASP.NET", "Node.js", "Java", "PHP"] },
        { title: "Frontend", items: ["React", "Angular", "TypeScript", "JavaScript", "HTML5/CSS3", "Bootstrap"] },
        { title: "Infraestrutura", items: ["AWS (EC2, RDS, S3, ECS)", "Azure Cloud", "Docker", "RabbitMQ", "Git/GitHub"] },
        { title: "Banco de Dados", items: ["SQL Server", "PL/SQL (Avançado)", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB"] },
        { title: "IA & Automação", items: ["Integração de IA em sistemas", "Automação inteligente", "Web Scraping", "Processamento de dados", "Pipelines automatizados"] },
      ],
    },
    about: {
      tag: "// SOBRE",
      title: "Edson Argemon",
      bio1:
        "Engenheiro de Software com forte atuação em sistemas críticos e de alto impacto. Minha experiência vai além do código: entendo o problema de negócio, projeto a arquitetura e entrego soluções que funcionam em produção.",
      bio2:
        "Nos últimos anos, trabalhei com sistemas governamentais processando milhões de registros, infraestrutura cloud em AWS e Azure, e automação inteligente de processos. Tenho diferencial de atuação na área de ensino e pesquisa tecnológica na UFMS.",
      quote:
        "Não escrevo código só pra funcionar. Escrevo para escalar, manter e resolver problemas reais.",
      languages: { label1: "Espanhol:", val1: "Fluente", label2: "Inglês:", val2: "Avançado" },
      highlights: [
        { title: "7 anos", description: "de experiência em desenvolvimento web e ecossistemas .NET, Angular e React" },
        { title: "3 anos", description: "de liderança técnica em projetos de sistemas críticos" },
        { title: "Ensino", description: "Professor de programação para +160 alunos em Node.js, PHP, C#, JavaScript" },
        { title: "Pesquisa", description: "Iniciação científica na UFMS com foco em inovação tecnológica" },
      ],
      certsLabel: "Certificações",
      certs: [
        "Programação .NET: Avançado – IFMG",
        "Design Centrado no Usuário (UX) – PUCRS",
        "Lean Six Sigma Yellow Belt – FM2S",
        "Desenvolvimento Web – IFSP",
        "UX Design – Google",
      ],
      educationLabel: "Formação",
      educationTitle: "Bacharelado em Engenharia de Software",
      educationInstitution: "Centro Universitário da Grande Dourados | 2019 – 2025",
    },
    referral: {
      tag: "// PROGRAMA DE INDICAÇÃO",
      title: "Indique e ganhe",
      subtitle:
        "Conhece alguém que precisa de um engenheiro de software? Indique e seja recompensado.",
      howTitle: "Como funciona",
      steps: [
        "Você indica uma empresa ou contato interessado",
        "Eu entro em contato e apresento meus serviços",
        "Se fechar contrato, você ganha um salário meu",
      ],
      benefitsTitle: "Benefícios",
      benefits: [
        "Um salário meu por indicação convertida",
        "Sem limite de indicações",
        "Processo simples e transparente",
      ],
      cta: "Fazer uma indicação",
    },
    contact: {
      tag: "// CONTATO",
      title: "Vamos conversar",
      subtitle:
        "Interessado em trabalhar junto ou tem um projeto em mente? Entre em contato direto.",
      labels: { email: "Email", linkedin: "LinkedIn", whatsapp: "WhatsApp" },
      terminal: {
        filename: "terminal",
        cmd1: "whoami",
        res1: "Edson Argemon - Engenheiro de Software",
        cmd2: "cat disponibilidade.txt",
        res2: "Disponível para projetos, consultoria e oportunidades.",
      },
    },
    footer: {
      links: ["Projetos", "Sobre", "Contato"],
    },
  },

  en: {
    nav: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      role: "software engineer",
      headline1: "I solve complex IT problems",
      headline2: "From hardware to production software.",
      subheadline:
        "Software engineering focused on critical systems, performance and intelligent automation.",
      highlighted: ["critical systems", "performance", "intelligent automation"],
      stats: {
        years: "years of experience",
        leadership: "years of leadership",
        users: "users impacted",
      },
      cta: {
        projects: "View projects",
        contact: "Get in touch",
        download: "Download CV",
      },
    },
    authority: {
      tag: "// PROOF OF AUTHORITY",
      title: "Measurable impact",
      subtitle:
        "Real numbers from production systems. Each metric represents a complex problem solved.",
      achievements: [
        {
          metric: "140,000+",
          label: "employees",
          description: "Payroll system processing data monthly",
          highlight: "100% accuracy in tax calculations",
        },
        {
          metric: "-20%",
          label: "processing time",
          description: "Optimization in ASP.NET system with C#",
          highlight: "160h/month saved on validations",
        },
        {
          metric: "60%",
          label: "error reduction",
          description: "Automation of complex calculation validations",
          highlight: "Income tax, e-Social, INSS, FGTS, vacations",
        },
        {
          metric: "10M+",
          label: "records processed",
          description: "Price analysis system for SEFAZ/MS",
          highlight: "From 4 hours to 5 minutes",
        },
        {
          metric: "99%",
          label: "guaranteed uptime",
          description: "Critical cloud infrastructure management",
          highlight: "AWS + Azure + 24/7 monitoring",
        },
        {
          metric: "100%",
          label: "traceable requests",
          description: "Demand management system with score",
          highlight: "80% more team productivity",
        },
      ],
      log: {
        filename: "production_logs.txt",
        lines: [
          { time: "[2024-03-15 08:00:01]", type: "SUCCESS", msg: "Payroll processed: 142,847 employees" },
          { time: "[2024-03-15 08:00:02]", type: "INFO", msg: "Tax calculations: income tax, pension, FGTS - 100% validated" },
          { time: "[2024-03-15 08:00:03]", type: "SUCCESS", msg: "Processing time per employee: 9s (target: 6s)" },
          { time: "[2024-03-15 08:00:04]", type: "INFO", msg: "e-Social reports generated and submitted" },
          { time: "[2024-03-15 08:00:05]", type: "SUCCESS", msg: "Pipeline complete. Zero critical errors." },
        ],
      },
    },
    projects: {
      tag: "// PROJECTS",
      title: "Production systems",
      subtitle:
        "Each project represents a real problem solved with real software engineering.",
      labels: {
        problem: "Problem",
        solution: "Solution",
        stack: "Stack",
        results: "Results",
      },
      items: [
        {
          id: "01",
          title: "Payroll Management System",
          client: "State Administration Secretary - SAD/MS",
          context:
            "Critical system processing payroll for over 140,000 state public employees, with complex tax and benefit calculations.",
          problem:
            "Manual processing consumed 160+ hours/month and had high error rates in sensitive tax calculations.",
          solution:
            "Built optimized PL/SQL procedures and packages, implemented audit functions, and automated validations in ASP.NET Web Forms.",
          results: [
            "20% less processing time",
            "60% fewer errors",
            "160h/month automated",
            "100% Federal Revenue compliance",
          ],
        },
        {
          id: "02",
          title: "Price Analysis Platform",
          client: "SEFAZ/MS",
          context:
            "Price management and analysis system for measuring state economic indices, processing millions of invoice records.",
          problem:
            "Manual data collection took 4+ hours daily and didn't guarantee consistent information updates.",
          solution:
            "Architected a distributed solution with automated web scraping, message queues, and REST APIs following the full development cycle.",
          results: [
            "10M+ records processed",
            "4h → 5min processing",
            "70% less manual work",
            "100+ simultaneous users",
          ],
        },
        {
          id: "03",
          title: "Request Management System",
          client: "State Administration Secretary - SAD/MS",
          context:
            "Automated distribution system for internal demands with performance reports and full traceability.",
          problem:
            "Requests were lost, there were no service metrics, and team productivity was hard to measure.",
          solution:
            "Built a full system in C# with Angular frontend, including a distribution algorithm and performance dashboard with scoring.",
          results: [
            "40 requests/month automated",
            "100% traceability",
            "80% more productivity",
            "99% uptime",
          ],
        },
      ],
    },
    stack: {
      tag: "// STACK",
      title: "Technical mastery",
      subtitle: "End-to-end engineering. From architecture to production deployment.",
      categories: [
        { title: "Architecture", items: ["Clean Architecture", "Distributed Systems", "Microservices", "REST APIs", "Event-Driven"] },
        { title: "Backend", items: [".NET Core (Advanced)", "C# (Advanced)", "ASP.NET", "Node.js", "Java", "PHP"] },
        { title: "Frontend", items: ["React", "Angular", "TypeScript", "JavaScript", "HTML5/CSS3", "Bootstrap"] },
        { title: "Infrastructure", items: ["AWS (EC2, RDS, S3, ECS)", "Azure Cloud", "Docker", "RabbitMQ", "Git/GitHub"] },
        { title: "Databases", items: ["SQL Server", "PL/SQL (Advanced)", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB"] },
        { title: "AI & Automation", items: ["AI integration in systems", "Intelligent automation", "Web Scraping", "Data processing", "Automated pipelines"] },
      ],
    },
    about: {
      tag: "// ABOUT",
      title: "Edson Argemon",
      bio1:
        "Software Engineer with strong expertise in critical, high-impact systems. My experience goes beyond code: I understand the business problem, design the architecture, and deliver solutions that work in production.",
      bio2:
        "Over the past years, I've worked with government systems processing millions of records, cloud infrastructure on AWS and Azure, and intelligent process automation. I have a unique background in tech education and research at UFMS.",
      quote:
        "I don't write code just to make it work. I write it to scale, maintain, and solve real problems.",
      languages: { label1: "Spanish:", val1: "Fluent", label2: "English:", val2: "Advanced" },
      highlights: [
        { title: "7 years", description: "of experience in web development and .NET, Angular, and React ecosystems" },
        { title: "3 years", description: "of technical leadership in critical system projects" },
        { title: "Teaching", description: "Programming instructor for 160+ students in Node.js, PHP, C#, JavaScript" },
        { title: "Research", description: "Scientific research at UFMS focused on technological innovation" },
      ],
      certsLabel: "Certifications",
      certs: [
        "Advanced .NET Programming – IFMG",
        "User-Centered Design (UX) – PUCRS",
        "Lean Six Sigma Yellow Belt – FM2S",
        "Web Development – IFSP",
        "UX Design – Google",
      ],
      educationLabel: "Education",
      educationTitle: "Bachelor's in Software Engineering",
      educationInstitution: "Centro Universitário da Grande Dourados | 2019 – 2025",
    },
    referral: {
      tag: "// REFERRAL PROGRAM",
      title: "Refer & earn",
      subtitle:
        "Know someone who needs a software engineer? Refer them and get rewarded.",
      howTitle: "How it works",
      steps: [
        "You refer a company or interested contact",
        "I reach out and present my services",
        "If a contract is signed, you earn one month of my salary",
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "One month of my salary per converted referral",
        "Unlimited referrals",
        "Simple and transparent process",
      ],
      cta: "Make a referral",
    },
    contact: {
      tag: "// CONTACT",
      title: "Let's talk",
      subtitle:
        "Interested in working together or have a project in mind? Reach out directly.",
      labels: { email: "Email", linkedin: "LinkedIn", whatsapp: "WhatsApp" },
      terminal: {
        filename: "terminal",
        cmd1: "whoami",
        res1: "Edson Argemon - Software Engineer",
        cmd2: "cat availability.txt",
        res2: "Available for projects, consulting, and opportunities.",
      },
    },
    footer: {
      links: ["Projects", "About", "Contact"],
    },
  },

  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      role: "ingeniero de software",
      headline1: "Resuelvo problemas complejos de TI",
      headline2: "Del hardware al software en producción.",
      subheadline:
        "Ingeniería de software enfocada en sistemas críticos, rendimiento y automatización inteligente.",
      highlighted: ["sistemas críticos", "rendimiento", "automatización inteligente"],
      stats: {
        years: "años de experiencia",
        leadership: "años de liderazgo",
        users: "usuarios impactados",
      },
      cta: {
        projects: "Ver proyectos",
        contact: "Hablar conmigo",
        download: "Descargar CV",
      },
    },
    authority: {
      tag: "// PRUEBA DE AUTORIDAD",
      title: "Impacto medible",
      subtitle:
        "Números reales de sistemas en producción. Cada métrica representa un problema complejo resuelto.",
      achievements: [
        {
          metric: "140.000+",
          label: "empleados",
          description: "Sistema de nómina procesando datos mensualmente",
          highlight: "100% de precisión en cálculos fiscales",
        },
        {
          metric: "-20%",
          label: "tiempo de procesamiento",
          description: "Optimización en sistema ASP.NET con C#",
          highlight: "160h/mes ahorradas en validaciones",
        },
        {
          metric: "60%",
          label: "reducción de errores",
          description: "Automatización de validaciones de cálculos complejos",
          highlight: "IR, e-Social, INSS, FGTS, vacaciones",
        },
        {
          metric: "10M+",
          label: "registros procesados",
          description: "Sistema de análisis de precios para SEFAZ/MS",
          highlight: "De 4 horas a 5 minutos",
        },
        {
          metric: "99%",
          label: "uptime garantizado",
          description: "Gestión de infraestructura crítica en la nube",
          highlight: "AWS + Azure + monitoreo 24/7",
        },
        {
          metric: "100%",
          label: "solicitudes trazables",
          description: "Sistema de gestión de demandas con puntuación",
          highlight: "80% más productividad del equipo",
        },
      ],
      log: {
        filename: "production_logs.txt",
        lines: [
          { time: "[2024-03-15 08:00:01]", type: "SUCCESS", msg: "Nómina procesada: 142.847 empleados" },
          { time: "[2024-03-15 08:00:02]", type: "INFO", msg: "Cálculos fiscales: IR, INSS, FGTS - 100% validados" },
          { time: "[2024-03-15 08:00:03]", type: "SUCCESS", msg: "Tiempo de procesamiento por matrícula: 9s (meta: 6s)" },
          { time: "[2024-03-15 08:00:04]", type: "INFO", msg: "Informes e-Social generados y enviados" },
          { time: "[2024-03-15 08:00:05]", type: "SUCCESS", msg: "Pipeline completo. Cero errores críticos." },
        ],
      },
    },
    projects: {
      tag: "// PROYECTOS",
      title: "Sistemas en producción",
      subtitle:
        "Cada proyecto representa un problema real resuelto con ingeniería de software real.",
      labels: {
        problem: "Problema",
        solution: "Solución",
        stack: "Stack",
        results: "Resultados",
      },
      items: [
        {
          id: "01",
          title: "Sistema de Nómina",
          client: "Secretaría de Administración - SAD/MS",
          context:
            "Sistema crítico que procesa la nómina de más de 140 mil empleados públicos estatales, con cálculos complejos de impuestos y beneficios.",
          problem:
            "El procesamiento manual consumía 160+ horas/mes y presentaba alta tasa de errores en cálculos fiscales sensibles.",
          solution:
            "Desarrollé procedimientos y paquetes PL/SQL optimizados, implementé funciones de auditoría y automaticé validaciones en el sistema ASP.NET Web Forms.",
          results: [
            "20% menos tiempo de procesamiento",
            "60% menos errores",
            "160h/mes automatizadas",
            "100% conformidad con la Receita Federal",
          ],
        },
        {
          id: "02",
          title: "Plataforma de Análisis de Precios",
          client: "SEFAZ/MS",
          context:
            "Sistema de gestión y análisis de precios para medición de índices económicos estatales, procesando millones de registros de facturas.",
          problem:
            "La recolección manual de datos llevaba 4+ horas diarias y no garantizaba actualización consistente de la información.",
          solution:
            "Arquitecté una solución distribuida con web scraping automatizado, colas de mensajes y APIs REST, siguiendo el ciclo completo de desarrollo.",
          results: [
            "10M+ registros procesados",
            "4h → 5min de procesamiento",
            "70% menos trabajo manual",
            "100+ usuarios simultáneos",
          ],
        },
        {
          id: "03",
          title: "Sistema de Gestión de Solicitudes",
          client: "Secretaría de Administración - SAD/MS",
          context:
            "Sistema de distribución automatizada de demandas internas con informes de rendimiento y rastreo completo.",
          problem:
            "Las solicitudes se perdían, no había métricas de atención y la productividad del equipo era difícil de medir.",
          solution:
            "Desarrollé un sistema completo en C# con frontend Angular, incluyendo algoritmo de distribución y dashboard de rendimiento con puntuación.",
          results: [
            "40 solicitudes/mes automatizadas",
            "100% trazabilidad",
            "80% más productividad",
            "99% uptime",
          ],
        },
      ],
    },
    stack: {
      tag: "// STACK",
      title: "Dominio técnico",
      subtitle: "Ingeniería de extremo a extremo. De la arquitectura al despliegue en producción.",
      categories: [
        { title: "Arquitectura", items: ["Clean Architecture", "Sistemas Distribuidos", "Microservicios", "REST APIs", "Event-Driven"] },
        { title: "Backend", items: [".NET Core (Avanzado)", "C# (Avanzado)", "ASP.NET", "Node.js", "Java", "PHP"] },
        { title: "Frontend", items: ["React", "Angular", "TypeScript", "JavaScript", "HTML5/CSS3", "Bootstrap"] },
        { title: "Infraestructura", items: ["AWS (EC2, RDS, S3, ECS)", "Azure Cloud", "Docker", "RabbitMQ", "Git/GitHub"] },
        { title: "Bases de Datos", items: ["SQL Server", "PL/SQL (Avanzado)", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB"] },
        { title: "IA & Automatización", items: ["Integración de IA en sistemas", "Automatización inteligente", "Web Scraping", "Procesamiento de datos", "Pipelines automatizados"] },
      ],
    },
    about: {
      tag: "// SOBRE MÍ",
      title: "Edson Argemon",
      bio1:
        "Ingeniero de Software con fuerte actuación en sistemas críticos de alto impacto. Mi experiencia va más allá del código: entiendo el problema de negocio, diseño la arquitectura y entrego soluciones que funcionan en producción.",
      bio2:
        "En los últimos años, trabajé con sistemas gubernamentales procesando millones de registros, infraestructura cloud en AWS y Azure, y automatización inteligente de procesos. Tengo un diferencial en el área de enseñanza e investigación tecnológica en la UFMS.",
      quote:
        "No escribo código solo para que funcione. Lo escribo para escalar, mantener y resolver problemas reales.",
      languages: { label1: "Español:", val1: "Fluente", label2: "Inglés:", val2: "Avanzado" },
      highlights: [
        { title: "7 años", description: "de experiencia en desarrollo web y ecosistemas .NET, Angular y React" },
        { title: "3 años", description: "de liderazgo técnico en proyectos de sistemas críticos" },
        { title: "Enseñanza", description: "Profesor de programación para +160 alumnos en Node.js, PHP, C#, JavaScript" },
        { title: "Investigación", description: "Investigación científica en la UFMS con enfoque en innovación tecnológica" },
      ],
      certsLabel: "Certificaciones",
      certs: [
        "Programación .NET: Avanzado – IFMG",
        "Diseño Centrado en el Usuario (UX) – PUCRS",
        "Lean Six Sigma Yellow Belt – FM2S",
        "Desarrollo Web – IFSP",
        "UX Design – Google",
      ],
      educationLabel: "Formación",
      educationTitle: "Licenciatura en Ingeniería de Software",
      educationInstitution: "Centro Universitário da Grande Dourados | 2019 – 2025",
    },
    referral: {
      tag: "// PROGRAMA DE REFERIDOS",
      title: "Refiere y gana",
      subtitle:
        "¿Conoces a alguien que necesite un ingeniero de software? Refiere y recibe tu recompensa.",
      howTitle: "Cómo funciona",
      steps: [
        "Tú refieres una empresa o contacto interesado",
        "Yo me pongo en contacto y presento mis servicios",
        "Si se cierra el contrato, ganas un salario mío",
      ],
      benefitsTitle: "Beneficios",
      benefits: [
        "Un salario mío por referido convertido",
        "Sin límite de referidos",
        "Proceso simple y transparente",
      ],
      cta: "Hacer una referencia",
    },
    contact: {
      tag: "// CONTACTO",
      title: "Hablemos",
      subtitle:
        "¿Interesado en trabajar juntos o tienes un proyecto en mente? Contáctame directamente.",
      labels: { email: "Email", linkedin: "LinkedIn", whatsapp: "WhatsApp" },
      terminal: {
        filename: "terminal",
        cmd1: "whoami",
        res1: "Edson Argemon - Ingeniero de Software",
        cmd2: "cat disponibilidad.txt",
        res2: "Disponible para proyectos, consultoría y oportunidades.",
      },
    },
    footer: {
      links: ["Proyectos", "Sobre mí", "Contacto"],
    },
  },
};

type TranslationType = typeof translations.pt;

const I18nContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TranslationType;
}>({
  locale: "pt",
  setLocale: () => {},
  t: translations.pt,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");
  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
