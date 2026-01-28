import { useState, useEffect, useRef } from "react";
import { Github, Linkedin } from "lucide-react";
import "./memberspanel.css";

const ScrollLinkedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const profileRefs = useRef([]);
  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const transitionTimeoutRef = useRef(null);

  const teamData = [
    {
      name: "spiderman",
      role: "BE with ironman",
      image: "https://placehold.co/400x400",
      vision: "Wannabe ironman"
    },
    {
      name: "Thanos",
      role: "aubergine",
      image: "https://placehold.co/400x400",
      vision: "let it be"
    },
    {
      name: "Captain America",
      role: "Serum guy",
      image: "https://placehold.co/400x400",
      vision: "Avengers Assemble!!!"
    },
    {
      name: "IRON MAN",
      role: "everything",
      image: "https://placehold.co/400x400",
      vision: "I AM IRON MAN"
    },
    {
      name: "HUlk",
      role: "BREAK STUFF",
      image: "https://placehold.co/400x400",
      vision: "Natasha kaha h yrr"
    }
  ];

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const scrollCenter = scrollTop + containerHeight / 2;

      let newActiveIndex = 0;
      let minDistance = Infinity;

      profileRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const cardCenter =
            rect.top -
            containerRect.top +
            rect.height / 2 +
            scrollTop;
          const distance = Math.abs(cardCenter - scrollCenter);

          if (distance < minDistance) {
            minDistance = distance;
            newActiveIndex = index;
          }
        }
      });

      if (newActiveIndex !== activeIndexRef.current) {
        setActiveIndex(newActiveIndex);
        setIsTransitioning(true);
        if (transitionTimeoutRef.current) {
          clearTimeout(transitionTimeoutRef.current);
        }
        transitionTimeoutRef.current = setTimeout(() => {
          setIsTransitioning(false);
        }, 200);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="scroll-linked-section">
      <div className="left-panel">
        <div className="vision-card">
          <h2 className="vision-title">Our Vision</h2>
          <div className="vision-content">
            <div
              className={`vision-text ${isTransitioning ? "transitioning-out" : "transitioning-in"}`}
              key={activeIndex}
            >
              <p>{teamData[activeIndex].vision}</p>
              <div className="vision-author">
                <span className="author-name">
                  {teamData[activeIndex].name}
                </span>
                <span className="author-role">
                  {teamData[activeIndex].role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="profiles-container" ref={containerRef}>
          <div className="scroll-spacer-top"></div>
          {teamData.map((member, index) => (
            <div
              key={index}
              ref={(el) => (profileRefs.current[index] = el)}
              className={`profile-card ${index === activeIndex ? "active" : ""} ${isTransitioning && index === activeIndex
                  ? "transitioning-in"
                  : ""
                } ${isTransitioning && index !== activeIndex
                  ? "transitioning-out"
                  : ""
                }`}
            >
              <div className="profile-info">
                <h3 className="profile-name">{member.name}</h3>
                <p className="profile-role">{member.role}</p>
                <div className="social-icons">
                  <a
                    href="#"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <Github />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
              <div className="profile-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="profile-image"
                />
              </div>
            </div>
          ))}
          <div className="scroll-spacer-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollLinkedSection;