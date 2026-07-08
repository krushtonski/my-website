// Mobile nav toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-triggered entrance animation (plays once; elements are fully
// visible by default regardless of whether this runs)
const animateTargets = document.querySelectorAll('.js-animate-in');
if (animateTargets.length && 'IntersectionObserver' in window) {
  const animateObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          animateObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  animateTargets.forEach((el) => animateObserver.observe(el));
}

// Featured work carousel + case study modal
const caseStudies = [
  {
    tag: 'Community Strategy',
    title: 'Explorers Community at Hilti',
    summary: 'Grew and diversified Hilti’s internal "Explorers" research community, driving product changes that lifted NPS by a third.',
    sections: [
      {
        heading: 'Managing the "Explorers" Community',
        body: 'I managed an internal community of employees for testing and feedback. Working with Product Owners, I identified research questions, then planned and carried out mixed-method research using triangulation. I led this alongside volunteer researchers, later presenting scored pain points to the Product Owners and external companies to help prioritise the product backlog. I also led a company-wide survey to benchmark HR tools against other internal software.',
      },
      {
        heading: 'Creating Inclusive Materials',
        body: 'I developed training and communications materials for the whole company, from software updates to new HR services. These were templatised and multi-format to ensure they were accessible to everyone.',
      },
      {
        heading: 'Embedding a Research Mindset',
        body: 'To help build an internal research culture, I planned and delivered training for my colleagues. I led workshops on user research, design thinking, and ideation, giving the HR team the tools to run their own sessions and improve their internal processes.',
      },
    ],
    highlights: [
      'Designed and led over 20 user research projects. These insights directly influenced roadmap decisions and led to the implementation of >10 product changes, contributing to a one-third increase in the overall NPS.',
      'Translated four major software releases into user-friendly training materials and guides, ensuring complex updates were digestible for a global workforce.',
      'Established robust acceptance criteria for tech products and set ambitious KPIs for user research and community engagement.',
      'Grew the "Explorers" community by 20% and improved representation across Hilti’s diverse geography, job roles, and experience levels to ensure more accurate and inclusive findings.',
    ],
    skills: ['Community Strategy', 'Community Management', 'Workshop Planning', 'User Research', 'Design Thinking'],
    tools: ['Microsoft Packages', 'Workday', 'ServiceNow', 'Figma', 'Mural', 'Miro', 'TalentLMS', 'Snagit'],
  },
  {
    tag: 'Community Strategy',
    title: "Deli Club for Hellmann's",
    summary: "Co-led a brand community from scratch at Iovia for a major Hellmann's product launch, growing from a single-country pilot into a thriving multi-region community.",
    sections: [
      {
        heading: 'Strategic Seeding & Scalable Growth',
        body: "I led the initial launch using a mix of influencers, social media ads, and brand collaborations. I benchmarked these channels to identify the most cost-effective 'sweet spot' for member acquisition. Then the growth strategy changed to organic growth through member referrals. As the community grew, we increasingly used a team of community assistants to handle operations across different territories.",
      },
      {
        heading: 'Creative Direction & Engagement',
        body: 'I was responsible for community content. This included content for user feedback through polls, small group discussions/focus groups and surveys; cooking and food competitions; topical discussions; and virtual events, which I hosted. I worked closely with an internal team of developers and designers to ensure all community assets met strict brand guidelines and technical requirements.',
      },
      {
        heading: 'Systems Design & Client Relations',
        body: 'I managed the client relationship through regular reporting and strategic updates. This included building the community framework and KPIs from scratch. As the community matured, I successfully devolved more responsibility to the community members themselves, empowering them to lead initiatives and hiring members to produce content.',
      },
    ],
    highlights: [
      'Community-generated content photography and video was an estimated 25% cheaper than content produced by traditional design agencies.',
      'Product feedback from the community delivered the same depth of insight as external research firms in less time, and at a lower cost.',
      'The community became self-sustaining, shifting from incentivized referrals to purely organic growth driven by genuine member loyalty.',
    ],
    skills: ['Community Strategy', 'Community Management', 'Project Management'],
  },
  {
    tag: 'Design Research',
    title: 'Design Researcher for OpenIDEO (part of IDEO)',
    summary: "Scouted and developed startups and entrepreneurs for OpenIDEO's global innovation challenges, helping shape three of the top five Bridge Builder Challenge winners.",
    sections: [
      {
        heading: 'Participant Recruitment & Development',
        body: "As a Design Researcher for OpenIDEO (IDEO's social impact challenges division), I was involved in the end-to-end participant journey for their global open innovation challenges. I scouted and recruited startups, entrepreneurs, and students to share their ideas for the challenges, then helped them develop and refine their solutions using design thinking through the challenge platform and via virtual and in-person workshops.",
      },
      {
        heading: 'Client Collaboration & Judging',
        body: 'On the client side, I shared data-driven progress updates, facilitated ideation sessions, and helped steer the final judging process.',
      },
      {
        heading: 'User-Centered Facilitation',
        body: 'Facilitated engaging design thinking sessions with end users to make sure we were designing with and for them.',
      },
    ],
    highlights: [
      "Scouted three of the top five winners of OpenIDEO's Bridge Builder Challenge.",
      'Worked on 10+ challenges with successive contract renewals with OpenIDEO.',
    ],
    skills: ['Community Management', 'Design Thinking', 'Design Research', 'Startup Scouting'],
  },
  {
    tag: 'Project Management',
    title: 'Red Bull Mind Gamers',
    summary: "Project and Challenge Manager for Red Bull Mind Gamers, launching multi-stage micro-learning challenges featured across regional Red Bull social channels worldwide.",
    sections: [
      {
        heading: 'Multi-Stage Challenge Design',
        body: "I was the Project and Challenge Manager for Red Bull Mind Gamers, creating multi-stage micro-learning challenges designed to test Gardner's mind skills (e.g., creativity and strategy). This involved creating the concept for each challenge in collaboration with partner institutions, such as the Quantum Physics Lab. Then executing an online three-stage \"micro-learning\" challenge with an introductory video, a short interactive experiment, and a final \"test\" of what they learnt.",
      },
      {
        heading: 'Production & Stakeholder Management',
        body: "My role included briefing, hiring, and managing payments for film crews, developers, designers, and special talent (such as gymnasts), and liaising with Red Bull's marketing team. I successfully launched multiple challenges for a worldwide audience, which were featured across various regional Red Bull social media channels.",
      },
    ],
    highlights: [
      'Developed and launched multiple global challenges for Red Bull Mind Gamers, with content featured across local Red Bull social media channels.',
    ],
    skills: ['Micro-Learning', 'Project Management', 'Challenges'],
  },
  {
    tag: 'Workshops',
    title: 'Workshops, Interviews & Podcasts',
    summary: "Facilitates workshops, interviews, and panels spanning conference stages, a global innovation podcast, and user research.",
    sections: [
      {
        heading: 'A Passion for Facilitation',
        body: "I love facilitating workshops, crafting the right questions, and leading interviews, whether it's for a conference stage or deep-dive user research. I also helped to plan Kaptivate's Solver's Edge podcast series and have been interviewed on the show myself.",
      },
    ],
    highlightsLabel: 'Highlights',
    highlights: [
      "Interviewed the winners of the Impact Award, Alganize, at the 2024 Impact Festival in Frankfurt as the Community Lead for Brighter Future, and caught up with the previous year's winners, Eeden, to discuss how the award helped them scale their business.",
      "Featured as a guest on the <em>Solver's Edge</em> podcast to share my perspective on open innovation from a user's point of view.",
      'Facilitated an ideation session for Kaptivate in February 2026, exploring ways to bridge the gap between high school and long-term career paths as part of #ForwardDMV.',
      'Designed a full-day Design Thinking workshop focused on developing practical solutions for scaling apprenticeships across the DMV region.',
      'Panelist for the Open and User Innovation Conference 2021, issued by RWTH Aachen University — Solver Panel: The Hidden Stars of Crowdsourcing. <a href="https://oui.open-innovation.com/daily-schedule/" target="_blank" rel="noopener noreferrer">View the session</a>.',
    ],
    skills: ['Workshops', 'Interviews', 'Research', 'Podcast'],
  },
];

const track = document.getElementById('carousel-track');
const dotsWrap = document.getElementById('carousel-dots');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
const modal = document.getElementById('case-modal');

function openCaseStudy(index) {
  const study = caseStudies[index];
  document.getElementById('case-modal-tag').textContent = study.tag;
  document.getElementById('case-modal-title').textContent = study.title;

  const sectionsWrap = document.getElementById('case-modal-sections');
  sectionsWrap.innerHTML = '';
  study.sections.forEach((section) => {
    const div = document.createElement('div');
    div.className = 'case-modal-section';
    const h4 = document.createElement('h4');
    h4.textContent = section.heading;
    const p = document.createElement('p');
    p.textContent = section.body;
    div.appendChild(h4);
    div.appendChild(p);
    sectionsWrap.appendChild(div);
  });

  const highlightsWrap = document.getElementById('case-modal-highlights-wrap');
  const highlightsHeading = document.getElementById('case-modal-highlights-heading');
  const highlightsList = document.getElementById('case-modal-highlights');
  highlightsList.innerHTML = '';
  if (study.highlights && study.highlights.length) {
    highlightsWrap.hidden = false;
    highlightsHeading.textContent = study.highlightsLabel || 'Key Measures for Success';
    study.highlights.forEach((highlight) => {
      const li = document.createElement('li');
      // Highlight strings are authored site content (not user input), so
      // innerHTML is safe here and lets a highlight embed a link or italics.
      li.innerHTML = highlight;
      highlightsList.appendChild(li);
    });
  } else {
    highlightsWrap.hidden = true;
  }

  const skillsList = document.getElementById('case-modal-skills');
  skillsList.innerHTML = '';
  study.skills.forEach((skill) => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  const toolsWrap = document.getElementById('case-modal-tools-wrap');
  const toolsList = document.getElementById('case-modal-tools');
  toolsList.innerHTML = '';
  if (study.tools && study.tools.length) {
    toolsWrap.hidden = false;
    study.tools.forEach((tool) => {
      const li = document.createElement('li');
      li.textContent = tool;
      toolsList.appendChild(li);
    });
  } else {
    toolsWrap.hidden = true;
  }

  modal.showModal();
}

caseStudies.forEach((study, index) => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `View case study: ${study.title}`);

  const content = document.createElement('div');
  content.className = 'card-content';
  const tagsHtml = study.skills.map((skill) => `<span class="card-tag-pill">${skill}</span>`).join('');
  content.innerHTML = `
    <h3 class="card-title">${study.title}</h3>
    <p class="card-desc">${study.summary}</p>
    <div class="card-tags">${tagsHtml}</div>
  `;

  card.appendChild(content);
  card.addEventListener('click', () => openCaseStudy(index));
  track.appendChild(card);

  const dot = document.createElement('button');
  dot.type = 'button';
  dot.className = 'carousel-dot';
  dot.setAttribute('aria-label', `Go to case study ${index + 1}`);
  dot.addEventListener('click', () => scrollToCard(index));
  dotsWrap.appendChild(dot);
});

const dots = Array.from(dotsWrap.children);

function scrollToCard(index) {
  const card = track.children[index];
  if (card) {
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }
}

function updateActiveDot() {
  const trackRect = track.getBoundingClientRect();
  let closestIndex = 0;
  let closestDist = Infinity;
  Array.from(track.children).forEach((card, i) => {
    const dist = Math.abs(card.getBoundingClientRect().left - trackRect.left);
    if (dist < closestDist) {
      closestDist = dist;
      closestIndex = i;
    }
  });
  dots.forEach((dot, i) => dot.classList.toggle('active', i === closestIndex));
}

let scrollTimeout;
track.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateActiveDot, 100);
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -track.clientWidth * 0.85, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: track.clientWidth * 0.85, behavior: 'smooth' });
});

updateActiveDot();

document.getElementById('case-modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});

// Contact form — submits to Web3Forms, which emails the site owner directly
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submitBtn = form.querySelector('.btn-submit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  status.textContent = 'Sending…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    const result = await response.json();

    if (response.ok && result.success) {
      status.textContent = "Thanks for reaching out — I'll get back to you soon.";
      form.reset();
    } else {
      status.textContent = "Something went wrong sending your message. Please email katherinerushton7@gmail.com directly.";
    }
  } catch (err) {
    status.textContent = "Something went wrong sending your message. Please email katherinerushton7@gmail.com directly.";
  } finally {
    submitBtn.disabled = false;
  }
});
