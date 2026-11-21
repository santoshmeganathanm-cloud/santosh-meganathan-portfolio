import HeroScene from "./HeroScene";

const linkedinUrl = "https://www.linkedin.com/in/santosh-meganathan-29390121a/";

const navigation = [
  { label: "About", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#skills" },
  { label: "Learning", href: "#certifications" },
];

const skills = [
  "Project & Program Management (Scope, Schedule, Budget, RAID Logs, Risk Mitigation)",
  "Agile & Scrum Facilitation (Daily Stand-ups, Sprint Planning, Retrospectives, Backlog Grooming)",
  "Stakeholder Management & Executive Reporting (Status Updates, Steering Committees, SLA Governance)",
  "Cross-Functional Team Leadership & Vendor/Client Coordination",
  "HPE GreenLake Platform Support (Provisioning, Ticket Resolution, Root-Cause Analysis, Customer Onboarding)",
  "AI Functional Consulting (Use Cases, Requirements Gathering, User Stories, Acceptance Criteria, Process Mapping)",
  "Generative AI & Prompt Design (AI-Assisted Reporting, Documentation, Ticket Summarization)",
  "AI Solution Testing & Validation (User Acceptance Testing, Output Accuracy Checks, Defect Tracking)",
  "Responsible AI & Governance (Data Privacy, Human-in-the-Loop Review, Risk & Limitation Documentation)",
  "Change Management & User Adoption (End-User Training, User Guides, Feedback Loops)",
  "Business Analysis & Value Measurement (KPIs, Benefit Tracking, Service-Health Reporting)",
  "Tools: Jira, Confluence, ERP, S4 ERP, ServiceNow, Excel, Salesforce, MS Azure Devops, ChatGPT, Claude",
  "Communication, Conflict Resolution, Problem Solving, Team Mentoring",
];

const experience = [
  {
    title: "AI Functional Consultant",
    employer: "HPE (Hewlett Packard Enterprise)",
    location: "Bengaluru, India",
    dates: "Feb 2026 – Present",
    details: [
      "Partner with business stakeholders and support teams to identify repetitive, high-volume tasks in GreenLake operations that can be improved with AI and automation, and prioritize use cases by business value and feasibility.",
      "Translate business needs into functional requirements, user stories, and acceptance criteria, acting as the link between business users, engineering, and data teams so AI solutions match real operational needs.",
      "Map current support and fulfilment processes and document AI-assisted workflows, defining where automation applies and where human review is required.",
      "Use generative AI tools to summarize tickets, draft reports, and speed up documentation; design and refine prompts to improve consistency and quality of AI outputs.",
      "Run user acceptance testing and validate AI outputs for accuracy, relevance, and consistency, logging defects and feedback for resolution before rollout.",
      "Train team members on AI-enabled tools and create user guides and best-practice documentation to drive adoption across the support team.",
      "Track and report the impact of AI and process improvements (effort saved, repeat-ticket reduction, SLA compliance) to stakeholders to guide the next set of improvements.",
      "Apply responsible-AI practices, including data privacy, human oversight of AI-generated outputs, and clear documentation of limitations and risks.",
    ],
  },
  {
    title: "GreenLake Cloud consultant (AI-Enabled Operations)",
    employer: "HPE (Hewlett Packard Enterprise)",
    location: "Bengaluru, India",
    dates: "March 2025 – Jan 2026",
    details: [
      "Manage end-to-end delivery of enterprise customer requests on the HPE GreenLake hybrid-cloud platform, coordinating provisioning, subscription changes, and technical escalations within SLA targets, consistently achieving [98%+] SLA compliance.",
      "Own the full lifecycle of platform-related issues from intake through resolution, acting as the single point of coordination between customers, engineering, and account teams to ensure timely closure.",
      "Lead root-cause analysis (RCA) efforts for recurring incidents, partnering with engineering and account teams to define permanent fixes and prevent repeat escalations.",
      "Drive problem-management initiatives that reduced repeat ticket volume by 75% and cut manual effort across the support team through process standardization.",
      "Author and present weekly service-health and utilization reports to stakeholders, converting complex platform telemetry into clear, actionable insights that inform customer decision-making.",
      "Manage competing priorities across multiple enterprise accounts simultaneously, applying project-management discipline (timelines, ownership, follow-through) to a high-volume operational environment.",
      "Mentor junior support engineers on troubleshooting workflows and customer communication best practices.",
    ],
  },
  {
    title: "Associate Project Manager",
    employer: "Carelon Global Solutions",
    location: "Bengaluru, India",
    dates: "December 2021 – November 2024",
    details: [
      "Coordinated projects with business, delivery, and QA teams, making sure tasks were completed on time, and project goals were met across multiple projects.",
      "Maintained project plans, RAID Logs, and provided regular project updates. Identified and escalated problems early to help ensure projects were completed on time.",
      "Partnered with business analysts and delivery leads to translating business requirements into structured task lists and sprint backlogs, improving requirement-to-delivery turnaround time.",
      "Conducted weekly status meetings and stakeholder reviews to share project updates, align expectations, and reduce misunderstandings and rework.",
      "Planned and assigned resources across teams to balance workloads and avoid delays during busy periods.",
      "Created standard documentation and reports that helped the team stay organized, prepare for audits, and easily share knowledge during team changes.",
      "Used Confluence to create and maintain project documentation, track key updates, and share project information with team members and stakeholders",
    ],
  },
  {
    title: "Junior Scrum Master",
    employer: "Cognizant Technologies Solution",
    location: "Coimbatore, India",
    dates: "August 2018 – December 2021",
    details: [
      "Facilitated Agile ceremonies (daily stand-ups, sprint planning, sprint review, and retrospectives) for a development team of 10 members, improving sprint predictability and team accountability.",
      "Owned sprint boards and backlogs in Jira, ensuring user stories were correctly prioritized, estimated, and tracked to completion.",
      "Tracked team velocity and prepared burndown/burnup charts, giving stakeholders real-time visibility into sprint health and delivery risk.",
      "Identified and removed process blockers proactively, escalating larger impediments to senior Scrum Masters and delivery managers to minimize delivery delays.",
      "Coordinated with product owners to refine and prioritize the backlog, ensuring alignment between business priorities and sprint commitments.",
      "Onboarded new team members to Agile practices and internal tools, accelerating time-to-productivity for new hires.",
    ],
  },
];

const certifications = [
  "AI Fundamentals with Claude",
  "AI Tools & Claude Workshop",
  "Generative AI for Project Managers (Specialization)",
  "Managing Projects with AI",
  "Project Management with ChatGPT: AI for Project Managers",
  "Google AI Essentials (Specialization)",
  "Google Prompting Essentials (Specialization)",
  "Prompt Engineering Certification: Master AI",
  "AI for Business Leaders",
  "ITIL 4 Foundation (Specialization)",
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="arrow-icon"
    >
      <path
        d="M4.25 10h11.5m-4.75-4.75L15.75 10 11 14.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Santosh Meganathan, home">
          SM<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-mark" /> AI · CLOUD · DELIVERY
            </p>
            <h1 id="hero-title">
              Santosh
              <br />
              <span>Meganathan</span>
            </h1>
            <p className="hero-statement">
              Making complex work feel <em>clearer.</em>
            </p>
            <p className="hero-roles">
              AI Functional Consultant at HPE, bringing together people,
              processes, and technology to move work forward.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                Explore my experience <ArrowIcon />
              </a>
              <a
                className="text-link"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
            <figure className="portrait-card">
              <img
                src={`${import.meta.env.BASE_URL}images/headshot.jpg`}
                alt="Santosh Meganathan"
              />
              <figcaption>
                <strong>Santosh Meganathan</strong>
                <span>Bengaluru, India</span>
              </figcaption>
            </figure>
          </div>

          <div className="hero-artwork">
            <HeroScene />
            <div className="hero-artwork-label">
              <span className="label-dot" />
              PEOPLE-FIRST. FUTURE-READY.
            </div>
          </div>

          <a className="scroll-cue" href="#profile">
            <span>Scroll to explore</span>
            <span className="scroll-cue-line" aria-hidden="true" />
          </a>
        </section>

        <section
          className="profile-section section-wrap"
          id="profile"
          aria-labelledby="profile-title"
        >
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT</p>
            <h2 id="profile-title">Clarity is a team effort.</h2>
          </div>
          <div className="profile-layout">
            <p className="section-lead">
              I work where business needs meet technology—helping teams turn
              complex operations into practical, measurable improvements.
            </p>
            <div className="profile-copy">
              <p>
                My experience spans AI functional consulting, hybrid-cloud
                operations, project management, and Agile delivery. I translate
                stakeholder needs into clear requirements, support teams
                through delivery, and keep human oversight at the center of
                responsible AI adoption.
              </p>
              <a
                className="text-link"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                More about my work <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="principle-row" aria-label="Areas of focus">
            <span>People &amp; process</span>
            <span>AI with oversight</span>
            <span>Reliable delivery</span>
          </div>
        </section>

        <section
          className="experience-section section-wrap"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2 id="experience-title">A path through progress.</h2>
            </div>
            <p className="section-aside">
              Four roles across consulting, cloud operations, and Agile
              delivery.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((role, index) => (
              <details
                className="experience-card"
                key={`${role.employer}-${role.title}`}
              >
                <summary>
                  <span className="experience-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="experience-copy">
                    <span className="card-overline">{role.dates}</span>
                    <span className="experience-title">{role.title}</span>
                    <span className="experience-employer">
                      {role.employer} <span aria-hidden="true">·</span>{" "}
                      {role.location}
                    </span>
                  </span>
                  <span className="experience-toggle">
                    <span className="toggle-label">View details</span>
                    <span className="toggle-icon" aria-hidden="true">
                      +
                    </span>
                  </span>
                </summary>
                <ul className="experience-details">
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        <section
          className="skills-section section-wrap"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="skills-panel">
            <div className="skills-heading">
              <p className="eyebrow">03 / EXPERTISE</p>
              <h2 id="skills-title">A toolkit for moving work forward.</h2>
              <p>
                A blend of delivery discipline, operational experience, and
                emerging AI capabilities.
              </p>
            </div>
            <ul className="skill-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="certifications-section section-wrap"
          id="certifications"
          aria-labelledby="certifications-title"
        >
          <div className="section-heading">
            <p className="eyebrow">04 / LEARNING</p>
            <h2 id="certifications-title">Always in progress.</h2>
          </div>
          <ul className="certification-list">
            {certifications.map((certification, index) => (
              <li key={certification}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{certification}</strong>
                <span className="certification-mark" aria-hidden="true">
                  ↗
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="contact-section section-wrap"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">05 / CONTACT</p>
          <div className="contact-layout">
            <h2 id="contact-title">
              Let’s make
              <br />
              <em>good work</em> happen.
            </h2>
            <div className="contact-details">
              <p>For conversations about AI, cloud operations, or project delivery.</p>
              <a
                className="contact-email"
                href="mailto:Santosh.meganathan@gmail.com"
              >
                Santosh.meganathan@gmail.com{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <div className="contact-links">
                <a href="tel:+918610253016">+91 86102 53016</a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-name" href="#top">
          Santosh Meganathan<span>.</span>
        </a>
        <p>© {currentYear} Santosh Meganathan. All rights reserved.</p>
        <a className="back-to-top" href="#top">
          BACK TO TOP <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
