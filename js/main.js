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
    image: 'images/case-6.svg',
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
  },
  {
    tag: 'Community Strategy',
    title: 'Global Developer Community Relaunch',
    image: 'images/case-1.svg',
    summary: 'Rebuilt a fragmented developer community into one connected hub with clear rituals, roles, and recognition for 25,000+ members.',
    sections: [
      { heading: 'Challenge', body: 'Members were scattered across five unmoderated channels with no shared identity, and engagement had been declining for over a year.' },
      { heading: 'Approach', body: 'Ran member interviews and channel audits, then consolidated everything into a single platform with a clear onboarding path, contributor tiers, and monthly rituals like AMAs and show-and-tell threads.' },
      { heading: 'Outcome', body: 'Active weekly participation grew 3x within two quarters, and a volunteer moderator program now handles day-to-day support.' },
    ],
    highlights: [],
    skills: ['Community Strategy', 'Stakeholder Interviews', 'Platform Migration', 'Program Design'],
  },
  {
    tag: 'Open Innovation',
    title: 'Open Innovation Challenge Platform',
    image: 'images/case-2.svg',
    summary: 'Designed and ran a company-wide open innovation program that turned employee and customer ideas into 12 shipped product features.',
    sections: [
      { heading: 'Challenge', body: 'Good ideas from customers and staff had no clear route to the product team, so most went nowhere.' },
      { heading: 'Approach', body: 'Built a lightweight submission-to-shipping pipeline: a public idea board, quarterly challenge themes, a review panel, and a feedback loop back to every submitter.' },
      { heading: 'Outcome', body: 'Over 400 ideas were submitted in the first year, 12 shipped as product features, and submitter satisfaction with the process sits above 90%.' },
    ],
    highlights: [],
    skills: ['Open Innovation', 'Program Design', 'Cross-team Facilitation', 'Idea Evaluation'],
  },
  {
    tag: 'UX Research',
    title: 'New Member Onboarding Redesign',
    image: 'images/case-3.svg',
    summary: 'Led research and redesign of new-member onboarding, cutting first-week drop-off by 40%.',
    sections: [
      { heading: 'Challenge', body: 'Nearly half of new community members went silent after their first week, and exit surveys pointed to a confusing, text-heavy onboarding flow.' },
      { heading: 'Approach', body: 'Ran usability tests on the existing flow, mapped the drop-off points, then redesigned onboarding around three short guided steps with a clear first action for every new member.' },
      { heading: 'Outcome', body: 'First-week drop-off fell by 40%, and new members now complete their first meaningful action within an average of 6 minutes.' },
    ],
    highlights: [],
    skills: ['UX Research', 'Usability Testing', 'Flow Design', 'Onboarding'],
  },
  {
    tag: 'AI & Community',
    title: 'AI Feature Beta Community',
    image: 'images/case-4.svg',
    summary: 'Built and moderated an early-access community that shaped the rollout of a new AI assistant feature.',
    sections: [
      { heading: 'Challenge', body: 'The product team needed fast, structured feedback on a new AI assistant before general release, without flooding support channels.' },
      { heading: 'Approach', body: 'Recruited and onboarded 200 beta testers, set up structured feedback templates and weekly office hours, and triaged findings directly into the product backlog.' },
      { heading: 'Outcome', body: 'Feedback from the beta community drove 18 pre-launch fixes and became the template now used for every subsequent AI feature rollout.' },
    ],
    highlights: [],
    skills: ['Beta Program Management', 'AI Products', 'Community Moderation', 'Feedback Synthesis'],
  },
  {
    tag: 'Community Moderation',
    title: 'Trust & Safety Playbook',
    image: 'images/case-5.svg',
    summary: 'Created moderation guidelines and a triage workflow that cut harmful-content response time from 48 hours to under 4.',
    sections: [
      { heading: 'Challenge', body: 'Moderation was inconsistent and reactive, handled ad hoc by whoever was online, with no shared standards.' },
      { heading: 'Approach', body: 'Wrote a public community guidelines document, built a severity-based triage workflow, and trained a rotating team of volunteer moderators against it.' },
      { heading: 'Outcome', body: 'Average response time to harmful content dropped from 48 hours to under 4, and moderator turnover fell as expectations became clear and shared.' },
    ],
    highlights: [],
    skills: ['Trust & Safety', 'Moderation Guidelines', 'Process Design', 'Team Training'],
  },
];

const track = document.getElementById('carousel-track');
const dotsWrap = document.getElementById('carousel-dots');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
const modal = document.getElementById('case-modal');

function openCaseStudy(index) {
  const study = caseStudies[index];
  document.getElementById('case-modal-image').src = study.image;
  document.getElementById('case-modal-image').alt = study.title;
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
  const highlightsList = document.getElementById('case-modal-highlights');
  highlightsList.innerHTML = '';
  if (study.highlights && study.highlights.length) {
    highlightsWrap.hidden = false;
    study.highlights.forEach((highlight) => {
      const li = document.createElement('li');
      li.textContent = highlight;
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
    <div class="card-tags">${tagsHtml}</div>
    <p class="card-desc">${study.summary}</p>
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
