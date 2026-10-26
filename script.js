var CONFIG = { email:"ibnabdelhedi.eya@gmail.com", phone:"+216 22 016 449", linkedinName:"Eya Ben Abdelhedi", github:"https://github.com/eyabenabdelhedi", githubName:"eyabenabdelhedi", linkedin:"https://www.linkedin.com/in/eya-ben-abdelhedi-a09062308", cv:"cv-eya-ibn-abdelhedi.pdf", photo:"images/eya.jpg" };

var T = {
fr:{swipe_hint:"Faites glisser pour voir les projets →",gh_end_t:"Explorer plus sur GitHub",gh_end_p:"Tous mes dépôts et mes projets en cours sont sur mon profil GitHub.",gh_end_b:"Ouvrir GitHub",proj_open:"Voir le projet",p_back:"← Tous les projets",p_about:"Le projet",p_tools:"Outils utilisés",p_shots:"Captures d'écran",p_drive:"Voir les fichiers sur Drive",p_github:"Voir le code sur GitHub",gh_all:"Tous mes dépôts sur GitHub",p_prev:"← Projet précédent",p_next:"Projet suivant →",nav_about:"À propos",nav_path:"Parcours",nav_work:"Projets",nav_exp:"Compétences",nav_mood:"Mood",nav_contact:"Contact",
status:"Disponible pour un stage de fin d'études de 4 mois",
hero_h1:"Des plateformes, des processus, <em>de l'IA et un PFE à construire ensemble.</em>",
hero_lead:"Étudiante en 3ème année de Business Information Systems à l'ISG Tunis. Je développe des plateformes web, je modélise des processus métier et je m'intéresse aux ERP et à l'intégration de l'IA.",
hero_cta:"Voir mes projets",hero_cta2:"Me contacter",st1:"années de licence validées",st2:"stage d'été réalisé",st3:"mois de PFE recherchés",stick:"PFE • 4 MOIS • DISPONIBLE • ",
about_eb:"À propos",about_h2:"Motivée, rigoureuse, <em>toujours en train d'apprendre.</em>",about_hi:"Bonjour, moi c'est Eya.",
about_p1:"Je suis en troisième année de Licence Business Information Systems à l'ISG Tunis. Ma formation couvre les systèmes d'information, le développement informatique, les ERP, la Business Intelligence et l'e-business.",
about_p2:"Je veux mettre ces compétences en pratique à travers des projets concrets et contribuer activement aux projets de l'entreprise qui m'accueillera pour mon PFE.",
about_p3:"Cet été, chez COFICAB, j'ai construit une application web de bout en bout. J'ai aussi été consultante junior à la Junior Entreprise Smart Marketing Advisors.",
tap:"TOUCHER POUR RETOURNER ↻",id_pfe:"4 MOIS",id_b_h:"Au dos de la carte",tel:"Téléphone",id_b1k:"Programme",id_b1v:"Licence Nationale en Business Computing",id_b2k:"Association",
facts_eb:"Un peu plus sur moi",f1k:"Études",f1v:"ISG Tunis, Business Information Systems",f2k:"Langues",f2v:"Arabe (maternelle), Français et English (courants), Deutsch (débutant)",f3k:"Je cherche",f3v:"Un stage de fin d'études de 4 mois",f4k:"Mes atouts",f4v:"Équipe, organisation, autonomie, esprit analytique",tagline:"Comprendre le besoin, puis l'écrire proprement.",
sql_foot:"1 candidate trouvée · 0 erreur · prête à démarrer",
path_eb:"Parcours",path_h2:"Du bac à <em>votre équipe.</em>",
case_eb:"Stage d'été · Juillet – Août 2026",case_h2:"Mon stage, <em>de l'Excel au tableau de bord.</em>",case_h3:"Wire Break Tracker",
case_l1:"Application web de gestion et de consultation des données, avec des fonctionnalités adaptées aux rôles administrateur et utilisateur.",
case_l2:"Importation et transformation de données Excel en fichiers CSV, puis intégration dans la base de données avec SQL Developer.",
case_l3:"Interfaces web en HTML, CSS, JavaScript et PHP, déployées dans un environnement Docker.",
case_l4:"Tableaux de bord interactifs avec Power BI pour visualiser et suivre les données.",
work_eb:"Projets académiques",work_h2:"Des projets qui <em>fonctionnent.</em>",work_sub:"Réalisés en cours et en groupe, de la base de données à l'écran.",
exp_eb:"Compétences",exp_h2:"Une boîte à outils <em>bien remplie.</em>",f_all:"Tout",f_lang:"Langages",f_web:"Web",f_data:"Données",f_si:"SI et ERP",f_tools:"Outils",feat_eb:"Zoom sur l'outil",
why_eb:"Pourquoi m'accueillir",why_h2:"Ce que j'apporte <em>à votre équipe.</em>",
w1_t:"Rigueur",w1_p:"Des applications livrées complètes : base de données, interfaces, tests et rapport.",
w2_t:"Autonomie",w2_p:"Un stage d'été mené de bout en bout : de l'import des données Excel au tableau de bord.",
w3_t:"Équipe",w3_p:"Consultante junior en Junior Entreprise et nombreux projets de groupe à l'ISG.",why_cta:"Parlons de mon PFE",
mood_eb:"À votre goût",mood_h2:"Choisissez votre <em>ambiance.</em>",mood_p:"Choisissez une palette et tout le portfolio change avec elle. Une bonne interface doit être un peu personnelle.",mood_hint:"Touchez une palette. Toute la page suit.",mood_pal:"Ma palette",mood_script:"Fait avec soin, et beaucoup de CSS.",tag1:"bases de données",tag2:"interfaces claires",tag3:"projets d'équipe",
m_indigo:"Indigo",m_lavender:"Lavande",m_rose:"Rose",m_mint:"Menthe",
c_eb:"Restons en contact",c_h2:"Un échange, un entretien, <em>un PFE ?</em>",circ:"DIS BONJOUR • DIS BONJOUR • ",
l_mail:"Email",l_tel:"Téléphone",l_lin:"LinkedIn",l_cv:"CV",copy:"Copier",copied:"Copié",open:"Télécharger le PDF ↓",
sqlq:'<span class="k">SELECT</span> formation, stack, disponibilité, langues, contact\n<span class="k">FROM</span>   eya_ibn_abdelhedi\n<span class="k">WHERE</span>  projet = <span class="s">\'PFE\'</span> <span class="k">AND</span> durée = <span class="s">\'4 mois\'</span>;<span class="cur"></span>',
sqlr:[["formation","Licence BIS, ISG Tunis (3ème année)"],["stack","Java · PHP · SQL Developer · Power BI · Docker"],["disponibilité","Stage de fin d'études, 4 mois"],["langues","Arabe, Français, English, Deutsch"],["contact","ibnabdelhedi.eya@gmail.com"]],
tl:[["2023","Baccalauréat en mathématiques","Le point de départ."],["2024 – 2026","Licence en Business Computing","Parcours Business Information Systems à l'ISG Tunis, deux années validées."],["2025 – 2026","Consultante junior","Smart Marketing Advisors, la Junior Entreprise de l'ISG."],["Juillet – Août 2026","Stage d'été chez COFICAB","Une application web de suivi, de l'import Excel aux tableaux de bord."],["2026 – 2027","Troisième année de Licence","Dernière ligne droite avant le diplôme."],["Prochaine étape","Votre PFE, 4 mois","Je cherche l'équipe qui m'accueillera."]],
pipe:[["Excel","Source"],["CSV","Transformation"],["SQL Developer","Base de données"],["Application web","Admin · Utilisateur"],["Docker","Déploiement"],["Power BI","Tableaux de bord"]]},
en:{swipe_hint:"Swipe to browse the projects →",gh_end_t:"Explore more on GitHub",gh_end_p:"All my repositories and ongoing projects are on my GitHub profile.",gh_end_b:"Open GitHub",proj_open:"View the project",p_back:"← All projects",p_about:"About the project",p_tools:"Tools used",p_shots:"Screenshots",p_drive:"Open the files on Drive",p_github:"View the code on GitHub",gh_all:"All my repositories on GitHub",p_prev:"← Previous project",p_next:"Next project →",nav_about:"About",nav_path:"Path",nav_work:"Work",nav_exp:"Skills",nav_mood:"Mood",nav_contact:"Contact",
status:"Available for a 4-month end-of-studies internship",
hero_h1:"Platforms, processes, AI, <em>and an end-of-studies project to build together.</em>",
hero_lead:"Third-year Business Information Systems student at ISG Tunis. I develop web platforms, model business processes and I'm interested in ERP and AI integration.",
hero_cta:"See my work",hero_cta2:"Contact me",st1:"licence years completed",st2:"summer internship done",st3:"months of PFE wanted",stick:"PFE • 4 MONTHS • AVAILABLE • ",
about_eb:"About",about_h2:"Motivated, rigorous, <em>always learning.</em>",about_hi:"Hi, I'm Eya.",
about_p1:"I'm a third-year Business Information Systems student at ISG Tunis. My studies cover information systems, software development, ERP, Business Intelligence and e-business.",
about_p2:"I want to put these skills into practice on concrete projects and contribute actively to the projects of the company that hosts my PFE.",
about_p3:"This summer at COFICAB I built a web application end to end. I was also a junior consultant at the Smart Marketing Advisors Junior Entreprise.",
tap:"TAP TO FLIP ↻",id_pfe:"4 MONTHS",id_b_h:"On the back",tel:"Phone",id_b1k:"Program",id_b1v:"National Licence in Business Computing",id_b2k:"Association",
facts_eb:"A little more about me",f1k:"Studies",f1v:"ISG Tunis, Business Information Systems",f2k:"Languages",f2v:"Arabic (native), French and English (fluent), German (beginner)",f3k:"Looking for",f3v:"A 4-month end-of-studies internship",f4k:"My strengths",f4v:"Teamwork, organization, autonomy, analytical mind",tagline:"Understand the need, then write it cleanly.",
sql_foot:"1 candidate found · 0 errors · ready to start",
path_eb:"Path",path_h2:"From high school to <em>your team.</em>",
case_eb:"Summer internship · July – August 2026",case_h2:"My internship, <em>from Excel to dashboard.</em>",case_h3:"Wire Break Tracker",
case_l1:"Web app to manage and browse the data, with features tailored to administrator and user roles.",
case_l2:"Import and transformation of Excel data into CSV files, then loading into the database with SQL Developer.",
case_l3:"Web interfaces in HTML, CSS, JavaScript and PHP, deployed in a Docker environment.",
case_l4:"Interactive Power BI dashboards to visualize and monitor the data.",
work_eb:"Academic projects",work_h2:"Projects that <em>work.</em>",work_sub:"Built in class and in teams, from the database to the screen.",
exp_eb:"Skills",exp_h2:"A well-stocked <em>toolbox.</em>",f_all:"All",f_lang:"Languages",f_web:"Web",f_data:"Data",f_si:"IS and ERP",f_tools:"Tools",feat_eb:"Tool in focus",
why_eb:"Why host me",why_h2:"What I bring <em>to your team.</em>",
w1_t:"Rigor",w1_p:"Applications delivered complete: database, interfaces, tests and report.",
w2_t:"Autonomy",w2_p:"A summer internship led end to end: from Excel data import to dashboard.",
w3_t:"Teamwork",w3_p:"Junior consultant in a Junior Entreprise and many group projects at ISG.",why_cta:"Let's talk about my PFE",
mood_eb:"Make it yours",mood_h2:"Pick your <em>mood.</em>",mood_p:"Choose a palette and the whole portfolio changes with you. A good interface should feel a little personal.",mood_hint:"Tap a palette. Everything on this page follows.",mood_pal:"My palette",mood_script:"Made with care, and a lot of CSS.",tag1:"databases",tag2:"clear interfaces",tag3:"team projects",
m_indigo:"Indigo",m_lavender:"Lavender",m_rose:"Rose",m_mint:"Mint",
c_eb:"Let's connect",c_h2:"A chat, an interview, <em>an internship?</em>",circ:"SAY HELLO • SAY HELLO • ",
l_mail:"Email",l_tel:"Phone",l_lin:"LinkedIn",l_cv:"CV",copy:"Copy",copied:"Copied",open:"Download the PDF ↓",
sqlq:'<span class="k">SELECT</span> studies, stack, availability, languages, contact\n<span class="k">FROM</span>   eya_ibn_abdelhedi\n<span class="k">WHERE</span>  project = <span class="s">\'PFE\'</span> <span class="k">AND</span> duration = <span class="s">\'4 months\'</span>;<span class="cur"></span>',
sqlr:[["studies","BIS Licence, ISG Tunis (third year)"],["stack","Java · PHP · SQL Developer · Power BI · Docker"],["availability","End-of-studies internship, 4 months"],["languages","Arabic, French, English, German"],["contact","ibnabdelhedi.eya@gmail.com"]],
tl:[["2023","Baccalaureate in mathematics","Where it started."],["2024 – 2026","Licence in Business Computing","Business Information Systems track at ISG Tunis, two years completed."],["2025 – 2026","Junior consultant","Smart Marketing Advisors, ISG's Junior Entreprise."],["July – August 2026","Summer internship at COFICAB","A web tracking app, from Excel import to dashboards."],["2026 – 2027","Third year of Licence","The final stretch before the degree."],["Next step","Your PFE, 4 months","I'm looking for the team that will host me."]],
pipe:[["Excel","Source"],["CSV","Transformation"],["SQL Developer","Database"],["Web app","Admin · User"],["Docker","Deployment"],["Power BI","Dashboards"]]}
};

var TOOLS=["Java","C#","Python","JavaScript","PHP","SQL Developer","Oracle","Power BI","Docker","Odoo","Camunda","Django","Linux","Git","Ubuntu","VM","WordPress"];

var PROJECTS=[
{id:"clinique-fawn",i:"C",g:0,k:{fr:"C# · Groupe",en:"C# · Team"},n:"Clinique Fawn",
 d:{fr:"Application de bureau de gestion d'une clinique vétérinaire : menus par rôle, rendez-vous, consultations et facturation.",en:"Desktop app to manage a veterinary clinic: role-based menus, appointments, consultations and invoicing."},
 long:{fr:["Application de bureau pour gérer une clinique vétérinaire, développée en C# avec Windows Forms et ADO.NET sur SQL Server LocalDB.","Les menus s'adaptent au rôle : administrateur, vétérinaire ou secrétaire. L'application gère les propriétaires et les animaux avec leur historique médical, les rendez-vous et le planning, les consultations, les vaccinations et le stock de médicaments.","Elle inclut aussi la facturation et un tableau de bord."],
  en:["Desktop application to manage a veterinary clinic, built in C# with Windows Forms and ADO.NET on SQL Server LocalDB.","The menus adapt to the role: administrator, veterinarian or secretary. The app manages owners and animals with their medical history, appointments and scheduling, consultations, vaccinations and medication stock.","It also includes invoicing and a dashboard."]},
 tools:["C#","Windows Forms","ADO.NET","SQL Server LocalDB"],
 shots:["1.png","2.png","3.png","4.png"]},
{id:"aerotunis",i:"A",g:1,k:{fr:"Oracle · PL/SQL",en:"Oracle · PL/SQL"},n:"AeroTunis",gh:"https://github.com/eyabenabdelhedi/AeroTunis",
 d:{fr:"Base de données de gestion d'aéroport sous Oracle SQL Developer, avec sécurité, procédures PL/SQL et triggers.",en:"Airport management database on Oracle SQL Developer, with security, PL/SQL procedures and triggers."},
 long:{fr:["Projet de base de données pour la gestion d'un aéroport, réalisé sous Oracle SQL Developer dans un cours d'administration de bases de données et de PL/SQL.","Le modèle relationnel couvre les pilotes, les avions, les vols et les affectations, avec clés, contraintes, index et séquences. La sécurité repose sur des tablespaces, des utilisateurs, des rôles, des profils de mot de passe, le verrouillage de comptes et un journal d'audit.","Des procédures PL/SQL calculent les primes des pilotes et produisent des rapports de performance des avions. Des triggers vérifient la disponibilité des pilotes, la validité des vols et l'intégrité des données.","Le dépôt contient les scripts de création (aeroport_setup.sql), de sécurité et de règles métier (AeroTunis_Final.sql) et un journal de tests (Test_Journal.sql)."],
  en:["Database project for airport management, built on Oracle SQL Developer for a database administration and PL/SQL course.","The relational model covers pilots, aircraft, flights and assignments, with keys, constraints, indexes and sequences. Security relies on tablespaces, users, roles, password profiles, account locking and audit logging.","PL/SQL procedures compute pilot bonuses and produce aircraft performance reports. Triggers check pilot availability, flight validity and data integrity.","The repository holds the creation scripts (aeroport_setup.sql), the security and business rules (AeroTunis_Final.sql) and a test journal (Test_Journal.sql)."]},
 tools:["Oracle","SQL Developer","PL/SQL"],
 shots:["1.png","2.png","3.png","4.png"]},
{id:"manufacturing-orchestrator",i:"M",g:3,k:{fr:"Python · Multi-agents",en:"Python · Multi-agent"},n:"Manufacturing Orchestrator",gh:"https://github.com/eyabenabdelhedi/manufacturing-orchestrator",
 d:{fr:"Système d'orchestration multi-agents pour l'analyse de production : planification, exécution, supervision et reprise.",en:"Multi-agent orchestration system for manufacturing analytics: planning, execution, monitoring and recovery."},
 long:{fr:["Système d'orchestration multi-agents pour l'analyse de production industrielle.","Il enchaîne des workflows de planification, d'exécution, de supervision et de reprise après erreur, avec une interface Tkinter pour piloter l'analyse."],
  en:["Multi-agent orchestration system for manufacturing analytics.","It chains planning, execution, monitoring and recovery workflows, with a Tkinter interface to drive the analysis."]},
 tools:["Python","pandas","Tkinter"],
 shots:["1.png","2.png","3.png","4.png"]},
{id:"sudoku",i:"9",g:0,k:{fr:"Python · Contraintes",en:"Python · Constraints"},n:{fr:"Solveur de Sudoku",en:"Sudoku solver"},gh:"https://github.com/eyabenabdelhedi/sudoku-solver",
 d:{fr:"Solveur de Sudoku en Python : problème de satisfaction de contraintes, backtracking et heuristiques de recherche.",en:"Python Sudoku solver: constraint satisfaction, backtracking and search heuristics."},
 long:{fr:["Solveur de Sudoku en Python qui traite la grille comme un problème de satisfaction de contraintes (CSP).","Il combine le backtracking avec vérification en avant, les heuristiques MRV et degré pour choisir les cases, et LCV pour choisir les valeurs.","Le projet inclut aussi un générateur de grilles, des benchmarks et des tests automatiques. Google OR-Tools est proposé en option pour comparer les résultats.","Utilisation : python sudoku_csp_solver.py, avec --test pour les tests et --bench pour les benchmarks."],
  en:["Sudoku solver in Python that treats the grid as a constraint satisfaction problem (CSP).","It combines backtracking with forward checking, MRV and degree heuristics to pick cells, and LCV to pick values.","The project also includes a puzzle generator, benchmarks and automated tests. Google OR-Tools is available as an option to compare results.","Usage: python sudoku_csp_solver.py, with --test for the tests and --bench for the benchmarks."]},
 tools:["Python","CSP","Backtracking","OR-Tools"],
 shots:["1.png","2.png","3.png","4.png"]},
{id:"ubercueillette",i:"U",g:1,k:{fr:"PHP · MySQL · Groupe",en:"PHP · MySQL · Team"},n:"UberCueillette",gh:"https://github.com/eyabenabdelhedi/ubercueillette",
 d:{fr:"Plateforme web qui met en relation agriculteurs et ouvriers pour les saisons de récolte : offres, candidatures, évaluations et gains.",en:"Web platform connecting farmers and seasonal workers for harvest seasons: offers, applications, ratings and earnings."},
 long:{fr:["Plateforme web réalisée en groupe de trois à l'ISG Tunis, inspirée du modèle Uber : les agriculteurs publient des offres de récolte et les ouvriers saisonniers postulent.","Elle gère le cycle complet : inscription, publication d'offre, candidature, acceptation ou refus, puis évaluation et suivi des gains après la récolte. Les offres se filtrent par fruit, gouvernorat et prix, et les 24 gouvernorats tunisiens sont pré-chargés.","Côté technique : PHP 8.2 avec PDO et requêtes préparées, mots de passe hachés avec bcrypt, sessions par rôle, validation en PHP et JavaScript, et une base MySQL de 6 tables reliées par clés étrangères."],
  en:["Web platform built by a team of three at ISG Tunis, inspired by the Uber model: farmers publish harvest offers and seasonal workers apply.","It covers the full cycle: sign-up, offer publishing, application, acceptance or refusal, then rating and earnings tracking after the harvest. Offers can be filtered by fruit, governorate and price, and the 24 Tunisian governorates are pre-loaded.","Technically: PHP 8.2 with PDO and prepared statements, bcrypt password hashing, role-based sessions, validation in PHP and JavaScript, and a MySQL database of 6 tables linked by foreign keys."]},
 tools:["PHP","MySQL","PDO","HTML / CSS","JavaScript","XAMPP"],
 shots:["1.png","2.png","3.png","4.png"]},
{id:"agenda",i:"Ag",g:3,k:{fr:"Java · JavaFX · Oracle",en:"Java · JavaFX · Oracle"},n:{fr:"Agenda personnel",en:"Personal agenda"},gh:"https://github.com/eyabenabdelhedi/agenda-app",
 d:{fr:"Application de bureau d'agenda personnel : gestion des événements, recherche multicritère et export en fichier texte.",en:"Personal agenda desktop app: event management, multi-criteria search and text file export."},
 long:{fr:["Application de bureau d'agenda personnel réalisée en binôme à l'ISG Tunis (2025/2026), avec Java (JavaFX), JDBC et une base de données Oracle.","Elle permet de gérer des événements (titre, date, heure, description, type et marqueur d'importance) avec toutes les opérations de création, lecture, modification et suppression, de les rechercher selon plusieurs critères et de les exporter dans un fichier texte.","Le dépôt GitHub contient le code du projet NetBeans, les scripts de la base Oracle (schéma et données d'exemple) et le rapport."],
  en:["Personal agenda desktop app built as a pair at ISG Tunis (2025/2026), with Java (JavaFX), JDBC and an Oracle database.","It lets the user manage events (title, date, time, description, type and an importance flag) with full create, read, update and delete operations, search them by several criteria and export them to a text file.","The GitHub repository contains the NetBeans project code, the Oracle database scripts (schema and sample data) and the report."]},
 tools:["Java","JavaFX","JDBC","Oracle XE","NetBeans"],
 shots:["1.png","2.png","3.png","4.png"]}
];

var SKILLS=[
{a:"Jv",n:"Java",c:"lang",d:{fr:"Applications Java et JEE, connexion JDBC à Oracle.",en:"Java and JEE applications, JDBC connection to Oracle."}},
{a:"C",n:"C",c:"lang",d:{fr:"Les bases de la programmation, vues en cours.",en:"Programming fundamentals, studied in class."}},
{a:"C#",n:"C#",c:"lang",d:{fr:"Windows Forms et ADO.NET, modes connecté et déconnecté.",en:"Windows Forms and ADO.NET, connected and disconnected modes."}},
{a:"Py",n:"Python",c:"lang",d:{fr:"pandas, algorithmes de planification, interfaces Tkinter.",en:"pandas, planning algorithms, Tkinter interfaces."}},
{a:"Js",n:"JavaScript",c:"lang",d:{fr:"Programmation web côté client.",en:"Client-side web programming."}},
{a:"Ph",n:"PHP",c:"lang",d:{fr:"Applications web avec MySQL, sessions par rôle et formulaires (UberCueillette).",en:"Web apps with MySQL, role-based sessions and forms (UberCueillette)."}},
{a:"Hc",n:"HTML / CSS",c:"web",d:{fr:"Pages responsives et mise en page soignée.",en:"Responsive pages and careful layout."}},
{a:"Je",n:"JEE",c:"web",d:{fr:"Applications web Java d'entreprise.",en:"Enterprise Java web applications."}},
{a:"Dj",n:"Django",c:"web",d:{fr:"Framework web Python, vu en projet académique.",en:"Python web framework, used in an academic project."}},
{a:"Wp",n:"WordPress",c:"web",d:{fr:"Sites vitrines administrables.",en:"Manageable showcase sites."}},
{a:"Sd",n:"SQL Developer",c:"data",d:{fr:"Conception et gestion de bases, alimentées par import CSV.",en:"Database design and management, fed by CSV import."}},
{a:"Or",n:"Oracle",c:"data",d:{fr:"Vues, curseurs, procédures, packages et triggers en PL/SQL.",en:"Views, cursors, procedures, packages and triggers in PL/SQL."}},
{a:"Pb",n:"Power BI",c:"data",d:{fr:"Tableaux de bord interactifs de suivi.",en:"Interactive monitoring dashboards."}},
{a:"Xl",n:"Excel",c:"data",d:{fr:"Visualisation et analyse de données.",en:"Data visualization and analysis."}},
{a:"Od",n:"Odoo",c:"si",d:{fr:"Prise en main de l'ERP Odoo.",en:"Hands-on with the Odoo ERP."}},
{a:"Cm",n:"Camunda",c:"si",d:{fr:"Modélisation de processus : BPMN, DMN et formulaires.",en:"Process modeling: BPMN, DMN and forms."}},
{a:"Dk",n:"Docker",c:"tools",d:{fr:"Applications et bases conteneurisées.",en:"Containerized apps and databases."}},
{a:"Gt",n:"Git",c:"tools",d:{fr:"Gestion de versions pour le travail en équipe.",en:"Version control for teamwork."}},
{a:"Lx",n:"Linux",c:"tools",d:{fr:"Ubuntu et Kali Linux, machines virtuelles.",en:"Ubuntu and Kali Linux, virtual machines."}},
{a:"Ub",n:"Ubuntu",c:"tools",d:{fr:"Distribution Linux utilisée en machine virtuelle.",en:"Linux distribution used in a virtual machine."}},
{a:"VM",n:{fr:"Machines virtuelles",en:"Virtual machines"},c:"tools",d:{fr:"Création et utilisation de machines virtuelles (Ubuntu, Kali Linux).",en:"Creating and using virtual machines (Ubuntu, Kali Linux)."}}
];

var MOODS=[["indigo","indigo","#7b86f2","#3d4bd8","#e5533b"],["lavender","lavender","#9a88d0","#7b66b8","#b0556f"],["rose","rose","#e08aa8","#bd4f74","#4a55d6"],["mint","mint","#6fcfb2","#237f69","#d2553a"]];
var FILTERS=["all","lang","web","data","si","tools"];
var lang="fr", filter="all", sel=0, mood="indigo";
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function tx(o){return typeof o==="string"?o:o[lang]}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}

function renderTools(){var h="";for(var r=0;r<2;r++)TOOLS.forEach(function(t){h+="<span>"+t+"</span>"});$("#track").innerHTML=h}
function renderCards(){
  var L=T[lang];
  $("#cards").innerHTML=PROJECTS.map(function(p){
    return '<article class="box pc"><div class="shot g'+p.g+'"><i aria-hidden="true">'+p.i+'</i></div><p class="kind">'+p.k[lang]+'</p><h3>'+tx(p.n)+'</h3><p>'+p.d[lang]+'</p>'+'<a class="go" href="project.html?p='+p.id+'">'+L.proj_open+' →</a></article>'}).join("")
  +'<article class="box pc end"><div class="shot gh"><i aria-hidden="true">↗</i></div><p class="kind">GitHub</p><h3>'+L.gh_end_t+'</h3><p>'+L.gh_end_p+'</p><a class="go" href="'+CONFIG.github+'" target="_blank" rel="noopener">'+L.gh_end_b+' ↗</a></article>';
  if(window.swipeRefresh)window.swipeRefresh();
}
function initSwipe(){
  var sc=$("#cards"),dots=$("#sDots"),pv=$("#sPrev"),nx=$("#sNext");if(!sc||!dots)return;
  var items=[],cur=0,drag=null,moved=false;
  function pad(){return parseFloat(getComputedStyle(sc).paddingLeft)||0}
  function near(){var best=0,bd=1e9;items.forEach(function(it,i){var d=Math.abs(it.offsetLeft-pad()-sc.scrollLeft);if(d<bd){bd=d;best=i}});return best}
  function go(i){i=Math.max(0,Math.min(items.length-1,i));sc.scrollTo({left:items[i].offsetLeft-pad(),behavior:"smooth"})}
  function upd(){
    var atEnd=sc.scrollLeft+sc.clientWidth>=sc.scrollWidth-4;
    cur=atEnd?items.length-1:near();
    items.forEach(function(it,i){it.classList.toggle("act",i===cur)});
    $$("#sDots i").forEach(function(d,i){d.classList.toggle("on",i===cur)});
    pv.disabled=cur===0;nx.disabled=cur===items.length-1;
  }
  window.swipeRefresh=function(){
    items=$$("#cards > .pc");
    dots.innerHTML=items.map(function(_,i){return '<i data-i="'+i+'"></i>'}).join("");
    $$("#sDots i").forEach(function(d){d.onclick=function(){go(+d.dataset.i)}});
    upd();
  };
  sc.addEventListener("scroll",function(){window.requestAnimationFrame(upd)},{passive:true});
  window.addEventListener("resize",upd);
  pv.onclick=function(){go(cur-1)};nx.onclick=function(){go(cur+1)};
  sc.addEventListener("keydown",function(e){if(e.key==="ArrowRight"){e.preventDefault();go(cur+1)}if(e.key==="ArrowLeft"){e.preventDefault();go(cur-1)}});
  sc.addEventListener("pointerdown",function(e){if(e.pointerType!=="mouse"||e.button!==0)return;drag={x:e.clientX,s:sc.scrollLeft};moved=false});
  window.addEventListener("pointermove",function(e){if(!drag)return;var dx=e.clientX-drag.x;if(Math.abs(dx)>5){moved=true;sc.classList.add("drag")}if(moved)sc.scrollLeft=drag.s-dx});
  window.addEventListener("pointerup",function(){if(!drag)return;drag=null;if(moved){var i=near();sc.classList.remove("drag");go(i)}});
  sc.addEventListener("click",function(e){if(moved){e.preventDefault();e.stopPropagation();moved=false}},true);
  window.swipeRefresh();
}
function renderSQL(){
  $("#sqlcode").innerHTML=T[lang].sqlq;
  $("#sqlres").innerHTML=T[lang].sqlr.map(function(r){return '<tr><th scope="row">'+esc(r[0])+'</th><td>'+esc(r[1])+'</td></tr>'}).join("");
}
function renderTL(){
  var L=T[lang].tl;
  $("#tl").innerHTML=L.map(function(x,i){return '<article class="box ti'+(i===L.length-1?' next':'')+'"><p class="yr">'+x[0]+'</p><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>'}).join("");
}
function renderPipe(){
  var P=T[lang].pipe,h="";
  P.forEach(function(n,i){h+=(i?'<div class="arrow" aria-hidden="true">↓</div>':'')+'<div class="node"><b>'+n[0]+'</b><span>'+n[1]+'</span></div>'});
  $("#pipe").innerHTML=h;
}
function renderFilters(){
  $("#filters").innerHTML=FILTERS.map(function(f){return '<button type="button" data-f="'+f+'" aria-pressed="'+(f===filter)+'">'+T[lang]["f_"+f]+'</button>'}).join("");
  $$("#filters button").forEach(function(b){b.onclick=function(){filter=b.dataset.f;var vis=SKILLS.filter(function(s){return filter==="all"||s.c===filter});if(vis.indexOf(SKILLS[sel])<0)sel=SKILLS.indexOf(vis[0]);renderFilters();renderTiles();renderFeat()}});
}
function renderTiles(){
  var vis=SKILLS.filter(function(s){return filter==="all"||s.c===filter});
  $("#tiles").innerHTML=vis.map(function(s,i){var idx=SKILLS.indexOf(s);var cols=window.innerWidth<=640?2:(window.innerWidth<=1100?3:4);var row=Math.floor(i/cols),col=i%cols;
    return '<button type="button" class="tile'+(idx===sel?' sel':'')+'" data-i="'+idx+'" data-tone="'+((row+col)%2)+'"><span class="ar" aria-hidden="true">→</span><div><b>'+s.a+'</b><span>'+tx(s.n)+'</span></div></button>'}).join("");
  $$("#tiles .tile").forEach(function(b){var f=function(){sel=+b.dataset.i;$$("#tiles .tile").forEach(function(x){x.classList.toggle("sel",x===b)});renderFeat()};b.onclick=f;b.onmouseenter=f});
}
function renderFeat(){var s=SKILLS[sel];$("#feat").innerHTML='<p class="mono">'+T[lang].feat_eb+'</p><div class="gem" aria-hidden="true"><i>✳</i></div><b>'+s.a+'</b><h3>'+tx(s.n)+'</h3><p>'+s.d[lang]+'</p>'}
function renderPal(){
  if(!$("#pal"))return;
  $("#pal").innerHTML=MOODS.map(function(m){return '<button type="button" data-m="'+m[1]+'" aria-pressed="'+(m[1]===mood)+'"><span class="d"><i style="background:'+m[2]+'"></i><i style="background:'+m[3]+'"></i><i style="background:'+m[4]+'"></i></span>'+T[lang]["m_"+m[0]]+'</button>'}).join("");
  $$("#pal button").forEach(function(b){b.onclick=function(){setMood(b.dataset.m)}});
}
function setMood(m){mood=m;if(m==="indigo")document.documentElement.removeAttribute("data-mood");else document.documentElement.setAttribute("data-mood",m);store("eya-mood2",m);renderPal()}
function copyText(el,btn){
  var txt=el.textContent,L=T[lang];
  function ok(){btn.textContent=L.copied;setTimeout(function(){btn.textContent=L.copy},1600)}
  function fallback(){try{var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);ok()}catch(e){}}
  try{navigator.clipboard.writeText(txt).then(ok,fallback)}catch(e){fallback()}
}
function renderLinks(){
  var L=T[lang],h="";
  h+='<div class="box lk"><span class="mono">'+L.l_mail+'</span><strong id="vMail">'+CONFIG.email+'</strong><button type="button" data-c="vMail">'+L.copy+'</button></div>';
  h+='<div class="box lk"><span class="mono">'+L.l_tel+'</span><strong id="vTel">'+CONFIG.phone+'</strong><button type="button" data-c="vTel">'+L.copy+'</button></div>';
  h+=CONFIG.linkedin?'<a class="box lk" href="'+CONFIG.linkedin+'" target="_blank" rel="noopener"><span class="mono">'+L.l_lin+'</span><strong>'+CONFIG.linkedinName+' ↗</strong></a>'
                    :'<div class="box lk"><span class="mono">'+L.l_lin+'</span><strong id="vLin">'+CONFIG.linkedinName+'</strong><button type="button" data-c="vLin">'+L.copy+'</button></div>';
  h+=CONFIG.github?'<a class="box lk" href="'+CONFIG.github+'" target="_blank" rel="noopener"><span class="mono">GitHub</span><strong>'+CONFIG.githubName+' ↗</strong></a>':'';
  h+=CONFIG.cv?'<a class="box lk" href="'+CONFIG.cv+'" download="'+CONFIG.cv+'"><span class="mono">'+L.l_cv+'</span><strong>'+L.open+'</strong></a>':'';
  $("#links").innerHTML=h;
  $$("#links button").forEach(function(b){b.onclick=function(){copyText($("#"+b.dataset.c),b)}});
  if(CONFIG.linkedin){var el=$("#hLin");el.href=CONFIG.linkedin;el.hidden=false}
  if(CONFIG.github){var eg=$("#hGit");if(eg){eg.href=CONFIG.github;eg.hidden=false}}
}
function applyLang(l){
  lang=l;document.documentElement.lang=l;
  $$("[data-i18n]").forEach(function(el){var v=T[l][el.dataset.i18n];if(v!==undefined)el.innerHTML=v});
  $("#lang").textContent=l==="fr"?"EN":"FR";
  $("#circText").textContent=T[l].circ;$("#stickText").textContent=T[l].stick;
  renderCards();renderSQL();renderTL();renderPipe();renderFilters();renderTiles();renderFeat();renderPal();renderLinks();store("eya-lang2",l);
}

function initHome(){
renderTools();
initSwipe();
if(CONFIG.photo){var img='<img src="'+CONFIG.photo+'" alt="Eya Ibn Abdelhedi">';$("#portrait").innerHTML=img;$("#idPhoto").innerHTML=img}
var sm=store("eya-mood2");if(sm&&MOODS.some(function(m){return m[1]===sm}))setMood(sm);
var sl=store("eya-lang2");
applyLang(sl==="en"?"en":"fr");
$("#lang").onclick=function(){applyLang(lang==="fr"?"en":"fr")};
$("#id").onclick=function(){this.classList.toggle("flip")};
var rz;window.addEventListener("resize",function(){clearTimeout(rz);rz=setTimeout(renderTiles,150)});

var secs=$$("[data-sec]"),links=$$("#nav a"),dots=$("#dots"),cur=-1;
dots.innerHTML=secs.map(function(s,i){return '<i data-i="'+i+'"></i>'}).join("");
$$("#dots i").forEach(function(d){d.onclick=function(){secs[+d.dataset.i].scrollIntoView({behavior:"smooth"})}});
function mark(i){cur=i;$$("#dots i").forEach(function(d,j){d.classList.toggle("on",j===i)});var id=secs[i].id;links.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+id)});var on=$("#nav a.on");if(on&&window.innerWidth<=900){var nv=$("#nav");nv.scrollLeft=on.offsetLeft-nv.clientWidth/2+on.clientWidth/2}}
function onScroll(){
  var y=window.scrollY,mid=y+window.innerHeight*.4,idx=0;
  secs.forEach(function(s,i){if(s.getBoundingClientRect().top+y<=mid)idx=i});
  if(idx!==cur)mark(idx);
  $("#pager").classList.toggle("show",y>260);
}
window.addEventListener("scroll",onScroll,{passive:true});window.addEventListener("resize",onScroll);onScroll();
$("#prev").onclick=function(){secs[Math.max(0,cur-1)].scrollIntoView({behavior:"smooth"})};
$("#next").onclick=function(){secs[Math.min(secs.length-1,cur+1)].scrollIntoView({behavior:"smooth"})};
}

function initProject(){
  var sm=store("eya-mood2");if(sm&&MOODS.some(function(m){return m[1]===sm}))setMood(sm);
  var q=(location.search.match(/[?&]p=([^&]+)/)||[])[1],idx=0;
  PROJECTS.forEach(function(p,i){if(p.id===q)idx=i});
  var p=PROJECTS[idx];
  $$("#nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="index.html#work")});
  if(CONFIG.linkedin){var el=$("#hLin");if(el){el.href=CONFIG.linkedin;el.hidden=false}}
  if(CONFIG.github){var eg=$("#hGit");if(eg){eg.href=CONFIG.github;eg.hidden=false}}

  var grid=$("#pShotGrid"),box=$("#pShots"),lb=$("#lb");
  (p.shots||[]).forEach(function(f,n){
    var b=document.createElement("button");b.type="button";
    var im=document.createElement("img");im.src="images/projects/"+p.id+"/"+f;im.alt=tx(p.n)+" "+(n+1);
    im.onload=function(){grid.appendChild(b);box.hidden=false};
    b.appendChild(im);
    b.onclick=function(){$("img",lb).src=im.src;lb.hidden=false};
  });
  lb.onclick=function(){lb.hidden=true};
  document.addEventListener("keydown",function(e){if(e.key==="Escape")lb.hidden=true});

  function draw(){
    var L=T[lang];
    document.documentElement.lang=lang;
    $$("[data-i18n]").forEach(function(el){var v=L[el.dataset.i18n];if(v!==undefined)el.innerHTML=v});
    document.title=tx(p.n)+" · Eya Ibn Abdelhedi";
    $("#lang").textContent=lang==="fr"?"EN":"FR";
    $("#pKind").textContent=p.k[lang];
    $("#pTitle").textContent=tx(p.n);
    $("#pText").innerHTML=p.long[lang].map(function(t){return "<p>"+esc(t)+"</p>"}).join("");
    $("#pTools").innerHTML=p.tools.map(function(t){return "<span>"+esc(t)+"</span>"}).join("");
    var tlb=$(".tl-label");if(tlb)tlb.hidden=!p.tools.length;
    $("#pCta").innerHTML=(p.gh?'<a class="btn primary" href="'+p.gh+'" target="_blank" rel="noopener"><span>'+L.p_github+'</span><span>↗</span></a>':'')+(p.u?'<a class="btn'+(p.gh?'':' primary')+'" href="'+p.u+'" target="_blank" rel="noopener"><span>'+L.p_drive+'</span><span>↗</span></a>':'');
    var prev=PROJECTS[(idx+PROJECTS.length-1)%PROJECTS.length],next=PROJECTS[(idx+1)%PROJECTS.length];
    $("#pNav").innerHTML='<a class="btn" href="project.html?p='+prev.id+'"><span>'+L.p_prev+'</span></a><a class="btn" href="project.html?p='+next.id+'"><span>'+L.p_next+'</span></a>';
    store("eya-lang2",lang);
  }
  $("#lang").onclick=function(){lang=lang==="fr"?"en":"fr";draw()};
  lang=store("eya-lang2")==="en"?"en":"fr";
  draw();
}

if($("#cards"))initHome();
else if($("#pTitle"))initProject();