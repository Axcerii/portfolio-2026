"use client";

import { useMemo } from "react";
import { presentationContent } from "@/config/content";
import styles from "./Skills.module.css";

/* ────────────────────────────────────────────────────────────
   SkillCard – individual locker tile
   ──────────────────────────────────────────────────────────── */
function SkillCard({ name, icon }) {
  return (
    <article
      className={styles.card}
      aria-label={name}
      title={name}
    >
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.label}>{name}</span>
    </article>
  );
}

/* ────────────────────────────────────────────────────────────
   SkillColumn – infinite-scrolling vertical column
   ──────────────────────────────────────────────────────────── */
function SkillColumn({ skills, direction = "up", duration = 20 }) {
  // Duplicate items to create the seamless infinite loop illusion
  const doubled = useMemo(() => [...skills, ...skills], [skills]);

  return (
    <div className={styles.column}>
      <div
        className={`${styles.columnTrack} ${direction === "up" ? styles.scrollUp : styles.scrollDown}`}
        style={{ animationDuration: `${duration}s` }}
        aria-hidden="true"
      >
        {doubled.map((skill, idx) => (
          <SkillCard key={`${skill.name}-${idx}`} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Skills – main section
   ──────────────────────────────────────────────────────────── */
export default function Skills() {
  const { skills } = presentationContent;

  // Split skills into N columns, distributing evenly
  function splitIntoColumns(items, count) {
    const cols = Array.from({ length: count }, () => []);
    items.forEach((item, i) => cols[i % count].push(item));
    return cols;
  }

  // Column configs: direction and rhythm variation
  // Each column has a slightly shifted duration to create the locker feel
  // All columns share the same base speed (pixels/sec) but since card counts differ,
  // we adjust duration so that longer columns take proportionally longer.
  const BASE_DURATION = 18; // seconds for a reference column of ~6 items

  function getColumnConfig(colIndex, totalCols) {
    const directions = ["up", "down", "up", "down", "up"];
    // Stagger the duration by slightly varying per-column "rhythm"
    // Odd columns are a touch faster, even columns a tiny bit slower – same visual speed
    const rhythmOffsets = [0, 2.5, -1.5, 3.5, -2];
    return {
      direction: directions[colIndex % directions.length],
      rhythmOffset: rhythmOffsets[colIndex % rhythmOffsets.length],
    };
  }

  // We pick 5 columns on desktop, 4 on tablet, 3 on mobile.
  // To keep SSR/CSR consistent, we render 5 columns by default
  // and use CSS to hide extras on small screens via a CSS class on the column.
  const desktopCols = 5;
  const columns = splitIntoColumns(skills, desktopCols);

  return (
    <section
      id="maitrise"
      className={styles.section}
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading" className={styles.heading}>
        Mes <span className={styles.headingAccent}>Maîtrises</span>
      </h2>
      <p className={styles.subtitle} aria-label="Technologies and tools">
        Technologies &amp; Outils
      </p>

      <div
        className={styles.grid}
        role="list"
        aria-label="Skills grid"
      >
        {columns.map((colSkills, colIndex) => {
          const { direction, rhythmOffset } = getColumnConfig(colIndex, desktopCols);
          const duration = BASE_DURATION + colSkills.length * 1.2 + rhythmOffset;
          return (
            <SkillColumn
              key={colIndex}
              skills={colSkills}
              direction={direction}
              duration={Math.max(10, duration)}
            />
          );
        })}
      </div>

      {/* Screen-reader accessible list of all skills */}
      <ul aria-label="List of skills" className="sr-only">
        {skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
}
