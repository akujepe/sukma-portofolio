/* CONTENT EDITING GUIDE
 * Update the entries below to revise the case studies or project briefs.
 * All results tagged as "documented" are transcribed from the user's supplied CV.
 * Proposed Lab projects are concepts, not completed engagements.
 */
const projects = [
  {
    id:'QA-00', category:'operations', categoryLabel:'ACADEMIC QUALITY / DIGITAL MONITORING', art:'assessment', artLabel:'QUALITY IN ACTION', artNumber:'98%',
    title:'Building reliable academic operations through digital supervision',
    description:'Coordinated academic delivery for 200+ students using Satu Harmoni, with tutor supervision, schedule management, and learning-progress monitoring.',
    impact:'98%', impactLabel:'SCHEDULE EFFICIENCY', organization:'PT Bintang Pelajar · Branch Academic Supervisor',
    intro:'Academic quality depends on synchronized schedules, tutor performance, student progress, and timely communication with families.',
    situation:'Daily academic operations required instructor placement, room allocation, SOP monitoring, performance evaluations, and reporting across a learning center serving 200+ students.',
    contributions:['Used Satu Harmoni (Bintang Pelajar Operations Hub) and academic staff tools to monitor daily teaching performance and schedules.','Conducted teaching-quality audits and performance evaluations for 15+ tutors with digital tracking tools.','Coordinated educator placement and room allocation by subject competency for SNBT/SNBP learning streams.','Reviewed try-out score distributions and student progress dashboards to support parent reporting.','Supervised attendance workflows and academic service quality for students and parents.'],
    results:['98% reported operational schedule efficiency and 0% reported class delays.','22% reported improvement in teaching standards and 96% SOP compliance.','25% faster academic reporting to parents and a reported 15% increase in student target admissions.','18% reported increase in student and parent satisfaction index (CSI).'],
    metric:'22%', metricDescription:'Reported improvement in unit teaching standards.',
    tools:['Satu Harmoni','Instructional QA','Tutor supervision','Learning analytics','Scheduling','Stakeholder management'],
    evidence:'User-provided professional responsibility and achievement statements, November 2026. Metrics are self-reported; baselines, periods, definitions, and supporting evidence should be validated before public publication.'
  },
  {
    id:'EDU-01', category:'development', categoryLabel:'TEACHER DEVELOPMENT / PROGRAM DELIVERY', art:'education', artLabel:'LEARNING AT SCALE', artNumber:'27K',
    title:'Bringing financial literacy into elementary classrooms',
    description:'Supported the Cha-Ching Curriculum through teacher training, school monitoring, and large-scale beneficiary data stewardship.',
    impact:'250', impactLabel:'TEACHERS TRAINED', organization:'Prestasi Junior Indonesia · Cha-Ching Curriculum',
    intro:'Scaling a school-based curriculum requires more than delivering a lesson: teachers need support, program data must be consistent, and implementation must be monitored across schools.',
    situation:'The Cha-Ching Curriculum introduced elementary students to earning, saving, spending, and donating. Program delivery involved teachers, schools, participants, and substantial beneficiary records.',
    contributions:['Supported training logistics and database entry for 456 participants.','Trained 250 teachers, supporting implementation across more than 300 public elementary schools.','Managed approximately 27,000 student beneficiary records in Microsoft Excel.','Monitored program activity across 40+ schools for alignment with procedures.','Supported learning outreach to approximately 25,000 elementary students.'],
    results:['250 teachers trained and 300+ schools involved.','Approximately 27,000 beneficiary records managed.','8% reported improvement in financial-literacy knowledge among elementary students.'],
    metric:'8%', metricDescription:'Improvement in financial-literacy knowledge, as reported in the CV.',
    tools:['Training logistics','Microsoft Excel','Program monitoring','Teacher facilitation'],
    evidence:'CV, page 3. The source does not specify an experimental design, denominator, or measurement instrument behind the 8% gain.'
  },
  {
    id:'LND-02', category:'development', categoryLabel:'COMPETENCY ASSESSMENT / WORKFLOW', art:'assessment', artLabel:'ASSESSMENT OPERATIONS', artNumber:'400+',
    title:'Making civil-service competency assessment run at scale',
    description:'Supported enrollment, stakeholder coordination, results processing, and certification for functional-position competency tests.',
    impact:'400', impactLabel:'ASN ENROLMENTS', organization:'Ministry of Cooperatives, Republic of Indonesia',
    intro:'A competency assessment is also a complex operational system: participant records, communication, verification, scores, and certification must connect.',
    situation:'Competency tests for Entrepreneurship Developer functional-position officers required coordination between central and regional institutions and consistent administrative handling.',
    contributions:['Streamlined the registration flow for 100+ institutional accounts and 400 individual civil-servant enrollments.','Prepared administrative selections and competency test coordination documents.','Processed assessment results for 250+ participants and prepared 250+ certificates.','Coordinated certificate signing with senior officials and uploaded certification records.','Handled over 100 regulation-related inquiries and more than 50 assessment-related phone calls.'],
    results:['100+ institutional registrations supported.','400 participant enrollments handled.','250+ assessment results and certificates processed.'],
    metric:'250+', metricDescription:'Assessment results processed and corresponding certificates prepared.',
    tools:['Assessment administration','Data validation','Institutional coordination','Reporting'],
    evidence:'CV, pages 1–2. LinkedIn identifies the role as Competency and Training Development Support Officer.'
  },
  {
    id:'RES-03', category:'research', categoryLabel:'QUANTITATIVE RESEARCH / ACADEMIA', art:'research', artLabel:'ANALYZE & INTERPRET', artNumber:'1+3',
    title:'Turning quantitative research data into usable findings',
    description:'Provided analytical and editorial support to academic research while guiding students through statistical tools.',
    impact:'1+3', impactLabel:'RESEARCH PROJECTS', organization:'Freelance research support & Universitas Andalas',
    intro:'Useful research demands more than software proficiency: the analysis must be connected to the hypothesis, data structure, and interpretation.',
    situation:'Thesis and undergraduate research projects needed data processing, hypothesis-oriented analysis, language refinement, and practical statistical software guidance.',
    contributions:['Processed data for one thesis and three undergraduate research projects using SPSS and SmartPLS.','Conducted hypothesis-driven interpretation aligned with the reported empirical findings.','Taught SPSS and SmartPLS in one student class during an assistant-lecturer appointment.','Supported academic report writing and proofread a faculty-authored book.','Processed course grades for three classes using Microsoft Excel.'],
    results:['Supported 4 research projects (1 thesis + 3 undergraduate projects).','Delivered hands-on statistical software guidance to one class.','Contributed to academic reporting and editorial quality control.'],
    metric:'4', metricDescription:'Research projects supported, as detailed in the CV.',
    tools:['SPSS','SmartPLS','Hypothesis testing','Academic editing','Microsoft Excel'],
    evidence:'CV, page 4. Specific publications, causal findings and authorship roles have not been independently documented.'
  },
  {
    id:'PRG-04', category:'operations', categoryLabel:'SCHOOL PARTNERSHIPS / MENTORING', art:'competition', artLabel:'PROGRAM TO COMPLETION', artNumber:'16',
    title:'Keeping school-based financial literacy teams engaged',
    description:'Mentored student teams through a multi-stage competition while coordinating partnerships, data consistency, and program delivery.',
    impact:'16', impactLabel:'TEAMS COMPLETED', organization:'Prestasi Junior Indonesia · Financial Literacy Competition',
    intro:'Sustaining student engagement across stages of a competition takes reliable coordination, clear milestones, and individual support.',
    situation:'Financial Literacy Competition participants progressed through four stages from workshops to final events, alongside school stakeholder coordination.',
    contributions:['Supported 40 student groups through four program stages; 16 groups completed the final stages.','Mentored 16 campaign teams and provided input aligned with program standards.','Standardized and managed data for 25 groups.','Built working partnerships with 15 schools.','Trained 160 students and involved 16 public senior high schools, as noted in the CV.'],
    results:['16 campaign teams completed the program.','15 school partnerships supported.','Data management standardized for 25 groups.'],
    metric:'16', metricDescription:'Campaign groups completing the four-stage program, according to the CV.',
    tools:['Mentoring','School partnerships','Program coordination','Data standardization'],
    evidence:'CV, page 3. Completion counts are descriptive; no causal attribution is claimed.'
  }
];
const labProjects={
  training:{type:'PROPOSED PROJECT / LEARNING & DEVELOPMENT',title:'Training Effectiveness Evaluation Toolkit',intro:'A practical evaluation framework for educator training—not a completed employer engagement.',sections:[{title:'Problem to investigate',text:'Training attendance alone does not establish what educators learned, whether they applied it, or whether classroom practice changed.'},{title:'Proposed approach',list:['Conduct a short training needs analysis with educators and supervisors.','Define learning objectives and baseline indicators.','Use structured participant feedback and pre–post knowledge checks.','Plan follow-up observation or self-report to explore on-the-job application.','Produce an action brief with limitations and next steps.']},{title:'Proposed outputs',text:'A needs-analysis form, training logic model, evaluation questionnaire, data dictionary, and concise results dashboard.'},{title:'Data protection',text:'Use synthetic or consented data for public demonstration; avoid student identifiers or internal organizational records.'}],tags:['Training needs analysis','Learning evaluation','Pre–post design','Kirkpatrick as learning reference']},
  quality:{type:'PROPOSED PROJECT / EDUCATION QUALITY',title:'Academic Quality Monitoring Dashboard',intro:'A conceptual prototype translating academic operational signals into indicators and follow-up actions.',sections:[{title:'Problem to investigate',text:'Operational teams often have scattered records and no shared definition of what counts as a meaningful signal of academic quality.'},{title:'Proposed approach',list:['Select a narrow set of indicators: participation, assessment patterns, support cases, and action closure.','Write definitions, owner, reporting cadence, and acceptable data limitations for each KPI.','Prototype a dashboard with synthetic learner records and a simple issue log.','Conduct data validation checks before making comparisons.','Run a plan–do–check–act review to test whether the dashboard leads to decisions.']},{title:'Proposed outputs',text:'Indicator dictionary, sample anonymized dashboard, data-quality checks, and improvement-action register.'},{title:'Policy scope',text:'This is a general quality-management concept for academic operations. Indonesia’s Rapor Pendidikan (schools) and SPMI (higher education) have distinct regulatory scopes.'}],tags:['Academic KPIs','Process monitoring','PDCA','Data governance']},
  research:{type:'PROPOSED PROJECT / EDUCATIONAL RESEARCH',title:'Evidence-to-Action Education Research',intro:'A structured education research concept grounded in prior quantitative-analysis experience, but not yet a completed study.',sections:[{title:'Research question',text:'What factors are associated with educator training transfer or student engagement in a clearly defined educational setting?'},{title:'Proposed approach',list:['Review relevant evidence and preregister directional hypotheses where appropriate.','Select ethical, valid measures and appropriate sampling.','Document data cleaning and descriptive statistics before modeling.','Choose methods that suit the research design, not simply available software.','Discuss effect sizes, uncertainty, alternative explanations, and generalizability.']},{title:'Proposed outputs',text:'Research protocol, data dictionary, SPSS/SmartPLS analysis plan where suitable, and an actionable insight memo.'},{title:'Research ethics',text:'Any actual study requires permission and ethical handling of educator, learner, and institutional data.'}],tags:['Quantitative methodology','SPSS','SmartPLS','Responsible research']}
};
const projectGrid=document.getElementById('projectGrid');
const dialog=document.getElementById('caseDialog');
const dialogContent=document.getElementById('dialogContent');
const dialogType=document.getElementById('dialogType');
const escapeHTML=(text)=>String(text).replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
function cardMarkup(p){return `<button class="project-card" type="button" data-project="${p.id}" data-category="${p.category}" aria-label="Read case study: ${escapeHTML(p.title)}"><div class="project-art project-art--${p.art}"><div class="project-art-top"><span>FIELD NOTE / ${p.id}</span><span>↗</span></div><div class="art-inside"><div class="art-main"><small>${escapeHTML(p.artLabel)}</small><strong>${escapeHTML(p.artNumber)}</strong><i></i></div><div class="art-side"><span>${p.art==='research'?'∑':p.art==='education'?'✳':p.art==='competition'?'↗':'✓'}</span></div></div></div><div class="project-body"><div class="project-meta"><span class="project-category">${escapeHTML(p.categoryLabel)}</span><span class="project-id">${p.id}</span></div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.description)}</p><div class="project-bottom"><div class="project-impact"><strong>${escapeHTML(p.impact)}</strong><small>${escapeHTML(p.impactLabel)}</small></div><span class="project-cta">OPEN CASE STUDY ↗</span></div></div></button>`}
projectGrid.innerHTML=projects.map(cardMarkup).join('');
const filters=document.querySelectorAll('.filter');
filters.forEach(button=>button.addEventListener('click',()=>{const selected=button.dataset.filter;filters.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});document.querySelectorAll('.project-card').forEach(card=>{card.hidden=selected!=='all'&&!((selected==='development'&&card.dataset.category==='development')||(selected===card.dataset.category))})}));
function renderSections(sections){return sections.map(s=>`<section class="dialog-section"><h3>${escapeHTML(s.title)}</h3>${s.text?`<p>${escapeHTML(s.text)}</p>`:''}${s.list?`<ul>${s.list.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul>`:''}</section>`).join('')}
function openProject(id){const p=projects.find(item=>item.id===id);if(!p)return;dialogType.textContent='CASE STUDY / '+p.id;dialogContent.innerHTML=`<span class="dialog-eyebrow">${escapeHTML(p.organization)}</span><h2 id="dialogTitle">${escapeHTML(p.title)}</h2><p class="dialog-lead">${escapeHTML(p.intro)}</p><div class="dialog-metric"><strong>${escapeHTML(p.metric)}</strong><span>${escapeHTML(p.metricDescription)}</span></div>${renderSections([{title:'Context',text:p.situation},{title:'My documented contribution',list:p.contributions},{title:'Reported outputs and outcomes',list:p.results}])}<section class="dialog-section"><h3>Methods & tools</h3><div class="dialog-pills">${p.tools.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div></section><p class="dialog-disclaimer"><strong>Evidence note:</strong> ${escapeHTML(p.evidence)}</p>`;dialog.showModal()}
function openLab(id){const p=labProjects[id];if(!p)return;dialogType.textContent='RESEARCH & QUALITY LAB';dialogContent.innerHTML=`<span class="dialog-eyebrow">${escapeHTML(p.type)}</span><h2 id="dialogTitle">${escapeHTML(p.title)}</h2><p class="dialog-lead">${escapeHTML(p.intro)}</p>${renderSections(p.sections)}<section class="dialog-section"><h3>Suggested methods to explore</h3><div class="dialog-pills">${p.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div></section><p class="dialog-disclaimer"><strong>Status:</strong> Concept and professional development roadmap. No execution, results, certifications, or delivery to an organization are claimed.</p>`;dialog.showModal()}
projectGrid.addEventListener('click',e=>{const card=e.target.closest('[data-project]');if(card)openProject(card.dataset.project)});
document.querySelectorAll('[data-lab]').forEach(button=>button.addEventListener('click',()=>openLab(button.dataset.lab)));
document.getElementById('dialogClose').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const mobileToggle=document.getElementById('mobileToggle'),mobileNav=document.getElementById('mobileNav');
mobileToggle.addEventListener('click',()=>{const expanded=mobileToggle.getAttribute('aria-expanded')==='true';mobileToggle.setAttribute('aria-expanded',String(!expanded));mobileToggle.setAttribute('aria-label',expanded?'Open menu':'Close menu');mobileNav.hidden=expanded});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileNav.hidden=true;mobileToggle.setAttribute('aria-expanded','false');mobileToggle.setAttribute('aria-label','Open menu')}));
document.getElementById('year').textContent=String(new Date().getFullYear());
const counterElements=document.querySelectorAll('[data-count]');
function animateCounter(el){const target=Number(el.dataset.count),suffix=el.dataset.suffix||'';const start=performance.now(),duration=950;const frame=(now)=>{const t=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-t,3);el.textContent=new Intl.NumberFormat('en-US').format(Math.round(target*eased))+suffix;if(t<1)requestAnimationFrame(frame)};requestAnimationFrame(frame)}
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting){animateCounter(entry.target);observer.unobserve(entry.target)}}),{threshold:.5});counterElements.forEach(el=>observer.observe(el))}else{counterElements.forEach(el=>el.textContent=new Intl.NumberFormat('en-US').format(Number(el.dataset.count))+(el.dataset.suffix||''))}


// Subtle editorial scroll motion, disabled for reduced-motion preferences.
(()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const progress=document.querySelector('.motion-progress');
  let scheduled=false;
  const updateProgress=()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    if(progress)progress.style.transform=`scaleX(${max>0?Math.min(1,window.scrollY/max):0})`;
    scheduled=false;
  };
  window.addEventListener('scroll',()=>{if(!scheduled){requestAnimationFrame(updateProgress);scheduled=true;}},{passive:true});
  window.addEventListener('resize',updateProgress,{passive:true});updateProgress();
  if(!reduced.matches && 'IntersectionObserver' in window){
    const targets=document.querySelectorAll('.section-heading,.split-title,.lab-heading,.lab-card,.timeline-entry,.method-grid article,.desk-feature,.resource-stack,.about-layout');
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}
    },{threshold:.09,rootMargin:'0px 0px -25px 0px'});
    targets.forEach(el=>{el.classList.add('motion-reveal');observer.observe(el);});
  }
})();


const workflowData=[
 {eyebrow:'BINTANG PELAJAR / ACADEMIC OPERATIONS',title:'Supporting learners through a quality feedback loop',summary:'Reconstructed from the current Academic Supervisor responsibilities: academic scheduling, instructional quality monitoring, learning analytics and family communication.',
 steps:[['Plan','Allocate tutors and classrooms by subject competency and SNBT/SNBP stream'],['Deliver','Monitor classes and attendance through Satu Harmoni and staff tools'],['Evaluate','Review tutor quality, SOP compliance and try-out score distributions'],['Improve','Communicate progress to parents and adjust academic support']],
 metrics:[['200+','Students served'],['15+','Tutors evaluated'],['98%','Reported schedule efficiency'],['96%','Reported SOP compliance']],
 evidence:'Current-role statements provided directly by Sukma; reported results are derived from internal organizational data. The CV PDF itself does not cover this newer role.'},
 {eyebrow:'PRESTASI JUNIOR INDONESIA / CHA-CHING',title:'Turning teacher development into student learning reach',summary:'A portfolio reconstruction of the teacher-training and school-monitoring activities documented in the CV.',
 steps:[['Coordinate','Prepare training logistics, participant registration and school coordination'],['Train','Support educator training and curriculum orientation'],['Monitor','Track program activities and beneficiary data across schools'],['Evaluate','Review financial-literacy outcomes and program coverage']],
 metrics:[['250','Teachers trained'],['300+','Schools engaged'],['~27k','Student records managed'],['8%','Reported knowledge improvement']],
 evidence:'CV documents training of 250 teachers, involvement of 300+ public elementary schools, management of ~27,000 student records, monitoring at 40+ schools and an 8% reported improvement. The detailed four-stage flow is a synthesized representation of these responsibilities.'},
 {eyebrow:'MINISTRY OF COOPERATIVES / CIVIL SERVICE DEVELOPMENT',title:'Making competency assessment administratively reliable',summary:'A reconstructed end-to-end view of the registration, assessment support, results and certification duties described in the CV.',
 steps:[['Register','Coordinate institutional accounts and ASN enrollment'],['Verify','Support administrative screening and competency-test preparation'],['Process','Handle test outcomes and participant records'],['Certify','Generate certificates and coordinate authorization']],
 metrics:[['100+','Institutional accounts'],['400','ASN enrollments'],['250+','Test results processed'],['250+','Certificates prepared']],
 evidence:'CV explicitly documents registration for 100+ institutional accounts and 400 individual ASN, processing 250+ competency results, issuing 250+ certificates, and coordinating leadership signatures. The stages are an explanatory reconstruction.'},
 {eyebrow:'UNIVERSITAS ANDALAS / QUANTITATIVE RESEARCH',title:'Helping people work confidently with academic data',summary:'A reconstructed support process based on assistant-lecturer and freelance quantitative research responsibilities.',
 steps:[['Organize','Maintain lecturer records and course assessment data'],['Teach','Guide students using SPSS and SmartPLS'],['Analyze','Support hypothesis-driven quantitative analysis'],['Communicate','Assist research reports, academic editing and interpretation']],
 metrics:[['3','Classes with final grades processed'],['1','Class taught SPSS / SmartPLS'],['1','Thesis supported'],['3','Undergraduate research projects']],
 evidence:'CV lists grading for three classes, SPSS/SmartPLS teaching for one class, report support, book proofreading, and quantitative data processing for one thesis and three undergraduate projects. The flow is illustrative, not a claimed formal research SOP.'}
];
(function(){
 const tabs=[...document.querySelectorAll('[data-system]')];
 const panel=document.getElementById('systemPanel');
 if(!panel)return;
 function render(i){
  const d=workflowData[i];
  document.getElementById('systemEyebrow').textContent=d.eyebrow;
  document.getElementById('systemTitle').textContent=d.title;
  document.getElementById('systemSummary').textContent=d.summary;
  document.getElementById('systemEvidence').textContent=d.evidence;
  const steps=document.getElementById('workflowSteps');steps.replaceChildren();
  d.steps.forEach(([title,desc],n)=>{
   const el=document.createElement('article');el.className='workflow-step';
   const small=document.createElement('small');small.textContent=`STEP 0${n+1}`;
   const h=document.createElement('h4');h.textContent=title;
   const p=document.createElement('p');p.textContent=desc;
   el.append(small,h,p);steps.append(el);
  });
  const metrics=document.getElementById('systemMetrics');metrics.replaceChildren();
  d.metrics.forEach(([value,label])=>{
   const el=document.createElement('div');el.className='systems-metric';
   const strong=document.createElement('strong');strong.textContent=value;
   const span=document.createElement('span');span.textContent=label;
   el.append(strong,span);metrics.append(el);
  });
  tabs.forEach((tab,n)=>{tab.setAttribute('aria-selected',String(n===i));tab.tabIndex=n===i?0:-1});
  panel.setAttribute('aria-labelledby',tabs[i].id);
 }
 tabs.forEach((tab,i)=>{
  tab.addEventListener('click',()=>render(i));
  tab.addEventListener('keydown',e=>{
   if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
   e.preventDefault();
   const next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
   render(next);tabs[next].focus();
  });
 });
 render(0);
})();
