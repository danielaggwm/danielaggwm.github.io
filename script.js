// ── Project data ──
    // Set "image" to your screenshot filename, e.g. "img/taurizano.png", or leave "" for placeholder
const projects = [
  {
    title: "Miami Beach Botanical Garden",
    link: "https://www.mbgarden.org/",
    linkLabel: "Visit Site \u2192",
    image: "miamibeach.png",
    desc: "A visitor map and website design package for the Miami Beach Botanical Garden: a redesigned physical visitor map; an interactive visitor map featuring tree collections, garden routes, a pollinator catalogue, and location-based educational content; a new visitor parking map; and a full website redesign with new branding and logos.",
    tags: ["Design & Development", "HTML", "CSS", "JavaScript", "ArcGIS", "Mapbox", "Illustrator"]
  },
  {
    title: "My Journal",
    link: "https://danielaggwm.github.io/journal/",
    linkLabel: "Visit Site →",
    image: "journal.png",
    desc: "An online personal journal to track your habits, moods, and day to day adventures. It allows you to view your trends and search through your entries.",
    tags: ["Design & Development", "HTML", "CSS", "JavaScript", "Python", "Firebase"]
  },
  {
    title: "Arboretum Dashboard",
    link: "https://um-arboretum.github.io/dashboard/",
    linkLabel: "Visit Site →",
    image: "map.png",
    desc: "An interactive dashboard built for the University of Miami's John C. Gifford Arboretum to track and display climate data from 59 sensors.",
    tags: ["HTML", "CSS", "JavaScript", "Data Viz", "R", "Python", "Mapbox", "ArcGIS"]
  },
  {
    title: "Arboretum Website",
    link: "https://um-arboretum.github.io/home/",
    linkLabel: "Visit Site →",
    image: "arboretum.png",
    desc: "The home page for the University of Miami's John C. Gifford Arboretum, designed for accessibility and clarity.",
    tags: ["Design & Development","HTML", "CSS", "JavaScript"]
  },
  {
    title: "Arboretum StoryMaps",
    link: "https://storymaps.arcgis.com/stories/d7c026766a9a40aaa422b8c400009d1d",
    linkLabel: "View StoryMap →",
    image: "arcgis.png",
    desc: "An ArcGIS StoryMap that guides readers through the Arboretum's live data.",
    tags: ["ArcGIS", "Data Viz"]
  },
  {
    title: "Prize Money Calculator",
    link: "https://danielaggwm.github.io/prize_money/",
    linkLabel: "Visit Site →",
    image: "tennis.png",
    desc: "An interactive data visualization exploring prize money across professional tennis events. It's a tool current professional players can use to track their points, rankings, and prizes.",
    tags: ["JavaScript", "D3.js", "Python", "HTML", "CSS"]
  },
  {
    title: "Venezuela's Economic Downfall",
    link: "https://danielaggwm.github.io/venezuela-economy/",
    linkLabel: "Visit Site →",
    image: "venezuela.png",
    desc: "A data visualization project examining Venezuela's economic decline through illustrations, interactive visualizations, and storytelling.",
    tags: ["JavaScript", "D3.js", "Data Viz", "Research"]
  },
  {
    title: "Darién's Infographic",
    link: "darien_infographic.pdf",
    linkLabel: "Open PDF →",
    image: "darien.png",
    desc: "A visual infographic documenting the migration in the Darién Gap over the years, its geography, routes, and humanitarian impact.",
    tags: ["Illustration", "Data Viz", "Cartography"]
  },
  // {
  //   title: "Taurizano Corp.",
  //   link: "https://www.taurizano.com/",
  //   linkLabel: "Visit Site →",
  //   image: "taurizano.png",
  //   desc: "A full website design and development for the real estate company Taurizano Corp.",
  //   tags: ["Design & Development","HTML", "CSS", "JavaScript"]
  // }
];

    // ── Panel elements ──
    const panelContent = document.getElementById('panelContent');
    const panelImage   = document.getElementById('panelImage');
    const panelTitle   = document.getElementById('panelTitle');
    const panelLink    = document.getElementById('panelLink');
    const panelDesc    = document.getElementById('panelDesc');
    const panelTags    = document.getElementById('panelTags');
    const listItems    = document.querySelectorAll('.project-list-item');

    function renderPanel(index) {
      const p = projects[index];
      setTimeout(() => {
        panelImage.innerHTML = p.image
          ? `<img src="${p.image}" alt="${p.title}">`
          : `<div class="panel-image-placeholder">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                 <rect x="3" y="3" width="18" height="14" rx="2"/>
                 <path d="M3 17l4-4 3 3 4-5 4 6"/>
               </svg>
               <span>Add project image here</span>
             </div>`;
        panelTitle.textContent = p.title;
        panelLink.href = p.link;
        panelLink.textContent = p.linkLabel;
        panelDesc.textContent = p.desc;
        panelTags.innerHTML = p.tags.map(t => `<span class="panel-tag">${t}</span>`).join('');
      }, 280);
    }

    listItems.forEach(item => {
      item.addEventListener('click', () => {
        listItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        renderPanel(parseInt(item.dataset.index));
      });
    });


    function renderMobileCards() {
        const container = document.querySelector('.mobile-cards');
        if (!container) return;
        container.innerHTML = projects.map(p => `
            <div class="mobile-card">
            <div class="panel-image">
                ${p.image
                ? `<img src="${p.image}" alt="${p.title}">`
                : `<div class="panel-image-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                        <rect x="3" y="3" width="18" height="14" rx="2"/>
                        <path d="M3 17l4-4 3 3 4-5 4 6"/>
                    </svg>
                    <span>Add project image here</span>
                    </div>`}
            </div>
            <div class="panel-title-row">
                <span class="panel-title">${p.title}</span>
                <a href="${p.link}" target="_blank" class="panel-link">${p.linkLabel}</a>
            </div>
            <p class="panel-desc">${p.desc}</p>
            <div class="panel-tags">
                ${p.tags.map(t => `<span class="panel-tag">${t}</span>`).join('')}
            </div>
            </div>
        `).join('');
        }

    renderMobileCards();

    // ── Rotating text ──
    const inner = document.getElementById('rotatingInner');
    const spans = inner.querySelectorAll('span');
    const total = spans.length - 1;
    let current = 0;

    function getLineHeight() { return spans[0].getBoundingClientRect().height; }

    setInterval(() => {
      current++;
      inner.style.transform = `translateY(-${current * getLineHeight()}px)`;
      if (current >= total) {
        setTimeout(() => {
          inner.style.transition = 'none';
          inner.style.transform = 'translateY(0)';
          current = 0;
          requestAnimationFrame(() => requestAnimationFrame(() => {
            inner.style.transition = 'transform 0.55s cubic-bezier(0.77, 0, 0.18, 1)';
          }));
        }, 580);
      }
    }, 2600);

    // ── Smooth scroll ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });