import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics Textbook"
      description="Complete AI-Native textbook for mastering robotics, humanoids, ROS2, VLA systems, and digital twins."
    >
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            AI-Native Textbook for Physical AI & Humanoid Robotics
          </h1>
          <p className={styles.heroSubtitle}>
           A comprehensive guide to embodied intelligence—integrating humanoids, ROS 2, VLA systems, simulation, hardware, and advanced AI.
          </p>
          <Link className="button button--primary button--lg" to="/docs/introduction/intro">
            Start Reading →
          </Link>
        </div>
      </header>

      {/* ABOUT */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What This Textbook Covers</h2>
        <p className={styles.sectionText}>
          This AI-native engineering curriculum focuses on physical AI, humanoid robotics,
          embodied intelligence, ROS 2 programming, digital twins, and Vision-Language-Action systems.
        </p>
      </section>

      {/* MODULES */}
      <section className={styles.modulesSection}>
        <h2 className={styles.sectionTitle}>Explore All Modules</h2>
        <div className={styles.modulesGrid}>
          {modules.map((mod, i) => (
            <div key={i} className={styles.moduleCard}>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
              <Link to={mod.link} className={styles.moduleLink}>
                Open Module →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>
          Why This Textbook Is Future-Focused
        </h2>
        <div className={styles.featuresGrid}>
          {features.map((feat, i) => (
            <div key={i} className={styles.featureCard}>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Begin Your Robotics Journey</h2>
        <p>
          The future belongs to physical AI and humanoid robotics.
          Start mastering it today.
        </p>
        <Link className="button button--secondary button--lg" to="/docs/introduction/intro">
          Start Reading →
        </Link>
      </section>
    </Layout>
  );
}

/* DATA (UNCHANGED) */
const modules = [
  {
    title: "Module 1: ROS 2 Foundations",
    description: "Nodes, topics, services, actions, QoS, and real robot workflows.",
    link: "/docs/ros2-foundations/module-1-ros2",
  },
  {
    title: "Module 2: Simulation & Digital Twins",
    description: "Gazebo, Unity Robotics, Isaac Sim, and safe robot testing.",
    link: "/docs/simulation/module-2-simulation",
  },
  {
    title: "Module 3: Hardware Foundations",
    description: "Motors, actuators, sensors, IMUs, and embedded systems.",
    link: "/docs/hardware-basics/module-3-hardware",
  },
  {
    title: "Module 4: VLA — Vision, Language, Action",
    description: "Perception, LLM-driven commands, planners, embodied agents.",
    link: "/docs/vla-systems/module-4-vla-foundations",
  },
  {
    title: "Module 5: Advanced AI & Motion Control",
    description: "RL, MPC, motion planning, trajectory optimization.",
    link: "/docs/advanced-ai-control/module-5-advanced-ai",
  },
  {
    title: "Module 6: Designing Humanoid Robots",
    description: "Mechanical design, kinematics, actuators, energy systems.",
    link: "/docs/humanoid-design/module-6-humanoid-design",
  },
  {
    title: "Appendix",
    description: "Glossary, references, and research papers.",
    link: "/docs/appendix/glossary",
  },
];

const features = [
  {
    title: "AI-Driven Design",
    description: "Modern robotics workflows built around intelligent agents.",
  },
  {
    title: "Hands-On Learning",
    description: "Code, simulations, and real-world robotics practices.",
  },
  {
    title: "Industry-Inspired",
    description: "Aligned with real humanoid robotics pipelines.",
  },
];
