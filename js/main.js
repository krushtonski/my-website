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
    title: 'Global Developer Community Relaunch',
    image: 'images/case-1.svg',
    summary: 'Rebuilt a fragmented developer community into one connected hub with clear rituals, roles, and recognition for 25,000+ members.',
    role: 'Community Strategy Lead',
    timeline: '9 months',
    challenge: 'Members were scattered across five unmoderated channels with no shared identity, and engagement had been declining for over a year.',
    approach: 'Ran member interviews and channel audits, then consolidated everything into a single platform with a clear onboarding path, contributor tiers, and monthly rituals like AMAs and show-and-tell threads.',
    outcome: 'Active weekly participation grew 3x within two quarters, and a volunteer moderator program now handles day-to-day support.',
    skills: ['Community Strategy', 'Stakeholder Interviews', 'Platform Migration', 'Program Design'],
  },
  {
    tag: 'Open Innovation',
    title: 'Open Innovation Challenge Platform',
    image: 'images/case-2.svg',
    summary: 'Designed and ran a company-wide open innovation program that turned employee and customer ideas into 12 shipped product features.',
    role: 'Open Innovation Program Lead',
    timeline: 'Ongoing since 2023',
    challenge: 'Good ideas from customers and staff had no clear route to the product team, so most went nowhere.',
    approach: 'Built a lightweight submission-to-shipping pipeline: a public idea board, quarterly challenge themes, a review panel, and a feedback loop back to every submitter.',
    outcome: 'Over 400 ideas were submitted in the first year, 12 shipped as product features, and submitter satisfaction with the process sits above 90%.',
    skills: ['Open Innovation', 'Program Design', 'Cross-team Facilitation', 'Idea Evaluation'],
  },
  {
    tag: 'UX Research',
    title: 'New Member Onboarding Redesign',
    image: 'images/case-3.svg',
    summary: 'Led research and redesign of new-member onboarding, cutting first-week drop-off by 40%.',
    role: 'UX Researcher & Designer',
    timeline: '3 months',
    challenge: 'Nearly half of new community members went silent after their first week, and exit surveys pointed to a confusing, text-heavy onboarding flow.',
    approach: 'Ran usability tests on the existing flow, mapped the drop-off points, then redesigned onboarding around three short guided steps with a clear first action for every new member.',
    outcome: 'First-week drop-off fell by 40%, and new members now complete their first meaningful action within an average of 6 minutes.',
    skills: ['UX Research', 'Usability Testing', 'Flow Design', 'Onboarding'],
  },
  {
    tag: 'AI & Community',
    title: 'AI Feature Beta Community',
    image: 'images/case-4.svg',
    summary: 'Built and moderated an early-access community that shaped the rollout of a new AI assistant feature.',
    role: 'Community Lead, Beta Program',
    timeline: '6 months',
    challenge: 'The product team needed fast, structured feedback on a new AI assistant before general release, without flooding support channels.',
    approach: 'Recruited and onboarded 200 beta testers, set up structured feedback templates and weekly office hours, and triaged findings directly into the product backlog.',
    outcome: 'Feedback from the beta community drove 18 pre-launch fixes and became the template now used for every subsequent AI feature rollout.',
    skills: ['Beta Program Management', 'AI Products', 'Community Moderation', 'Feedback Synthesis'],
  },
  {
    tag: 'Community Moderation',
    title: 'Trust & Safety Playbook',
    image: 'images/case-5.svg',
    summary: 'Created moderation guidelines and a triage workflow that cut harmful-content response time from 48 hours to under 4.',
    role: 'Community Moderation Lead',
    timeline: '4 months',
    challenge: 'Moderation was inconsistent and reactive, handled ad hoc by whoever was online, with no shared standards.',
    approach: 'Wrote a public community guidelines document, built a severity-based triage workflow, and trained a rotating team of volunteer moderators against it.',
    outcome: 'Average response time to harmful content dropped from 48 hours to under 4, and moderator turnover fell as expectations became clear and shared.',
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
  document.getElementById('case-modal-role').textContent = study.role;
  document.getElementById('case-modal-timeline').textContent = study.timeline;
  document.getElementById('case-modal-challenge').textContent = study.challenge;
  document.getElementById('case-modal-approach').textContent = study.approach;
  document.getElementById('case-modal-outcome').textContent = study.outcome;

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

  const img = document.createElement('img');
  img.src = study.image;
  img.alt = '';
  img.className = 'card-image';

  const content = document.createElement('div');
  content.className = 'card-content';
  content.innerHTML = `
    <span class="card-tag">${study.tag}</span>
    <h3 class="card-title">${study.title}</h3>
    <p class="card-desc">${study.summary}</p>
  `;

  card.appendChild(img);
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
