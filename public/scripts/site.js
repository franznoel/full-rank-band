(function () {
  const fallbackPage = {
    heroTitle: "FULL RANK",
    heroSubtitle: "Indie Rock Night",
    heroDate: "Dec 28 - 9 PM",
    venueName: "Moon Moon's Bar & Cafe",
    addressLine1: "Triangle Island Plaza, 2nd Floor Narra Street",
    addressLine2: "Shopping - Bacolod City",
    callout: "NO DOOR CHARGE",
    footerText: "\u00a9 2024 Full Rank | All Rights Reserved",
    heroImageUrl: "images/full-rank-bank-wish-bg.jpeg",
    customHtml: ""
  };

  const pageRef = window.fullRankFirebase.db.collection("site").doc("home");
  const eventsRef = window.fullRankFirebase.db.collection("events");

  function setText(field, value) {
    const element = document.querySelector(`[data-page-field="${field}"]`);
    if (element && value) {
      element.textContent = value;
    }
  }

  function renderPage(page) {
    const content = { ...fallbackPage, ...page };
    const hero = document.getElementById("hero-section");
    const homeContent = document.getElementById("home-content");

    if (hero && content.heroImageUrl) {
      hero.style.backgroundImage = `url("${content.heroImageUrl}")`;
    }

    if (homeContent && content.customHtml && content.customHtml.trim()) {
      homeContent.classList.add("cms-content");
      homeContent.innerHTML = content.customHtml;
    } else {
      Object.keys(fallbackPage).forEach((field) => setText(field, content[field]));
    }
  }

  function formatEventDate(event) {
    const parts = [event.date, event.time].filter(Boolean);
    return parts.join(" - ");
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    }[character]));
  }

  function renderEvents(events) {
    const section = document.getElementById("events-section");
    const grid = document.getElementById("events-grid");

    if (!section || !grid) {
      return;
    }

    const publishedEvents = events.filter((event) => event.isPublished !== false);
    section.hidden = publishedEvents.length === 0;
    grid.innerHTML = "";

    publishedEvents.forEach((event) => {
      const card = document.createElement("article");
      card.className = "event-card";

      const image = event.imageUrl
        ? `<img src="${escapeHtml(event.imageUrl)}" alt="${escapeHtml(event.title || "Full Rank event")}">`
        : "";
      const location = [event.venue, event.address].filter(Boolean).join(" | ");

      card.innerHTML = `
        ${image}
        <div class="event-card-body">
          <h3>${escapeHtml(event.title || "Full Rank Event")}</h3>
          <p class="event-meta">${escapeHtml(formatEventDate(event))}</p>
          <p class="event-location">${escapeHtml(location)}</p>
          ${event.ticketInfo ? `<p class="event-ticket">${escapeHtml(event.ticketInfo)}</p>` : ""}
          ${event.description ? `<p class="event-description">${escapeHtml(event.description)}</p>` : ""}
        </div>
      `;

      grid.appendChild(card);
    });
  }

  pageRef.onSnapshot(
    (snapshot) => renderPage(snapshot.exists ? snapshot.data() : fallbackPage),
    () => renderPage(fallbackPage)
  );

  eventsRef.orderBy("sortOrder", "asc").onSnapshot((snapshot) => {
    const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    renderEvents(events);
  });
})();
