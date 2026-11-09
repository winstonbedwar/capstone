import styles from "./MissionBenefits.module.css";

import Copy from "@/components/Copy";
import MissionSectionHeader from "@/components/MissionSectionHeader";

const benefits = [
  {
    id: "cancer",
    title: "Cancer Patients",
    body: "Adults whose treatment leaves them immunocompromised and who are healing deep wounds at home.",
  },
  {
    id: "immunosuppressed",
    title: "People on Immunosuppressants",
    body: "Patients who need wound monitoring that guides healing without adhesive wearables damaging their skin.",
  },
  {
    id: "cost",
    title: "Lower Costs",
    body: "Sepsis is largely preventable, yet septic shock treatment costs about $32,000 per patient and low-cost options are scarce.",
  },
  {
    id: "waste",
    title: "Less E-Waste",
    body: "Disposable sensors snap onto a reusable controller and battery pod, cutting e-waste by an estimated 80%.",
  },
];

export default function MissionBenefits() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <MissionSectionHeader className={styles.label} labelId="mission-serves-label">
          Who This Serves
        </MissionSectionHeader>

        <ol className={styles.grid}>
          {benefits.map(({ id, title, body }) => {
            const titleId = `mission-benefit-${id}-title`;

            return (
              <li key={title} className={styles.cell}>
                <Copy>
                  <h4 id={titleId} className={styles.title}>
                    {title}
                  </h4>
                </Copy>

                <div className={styles.copy}>
                  <Copy triggerPoint={`#${titleId}`} delay={0.1}>
                    <h4 className={styles.body}>{body}</h4>
                  </Copy>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
