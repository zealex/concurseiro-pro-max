import type { TextoBase } from '../../../types';

/**
 * Textos-base de Língua Inglesa: todos elaborados para o app (nenhum é cópia ou paráfrase de artigo publicado).
 * Temas de saúde pública, ciência forense, epidemiologia e ética médica. Dados numéricos são hipotéticos e
 * declarados como tais no próprio texto. Ortografia americana (tx-ing-01, 02, 03, 05) ou britânica (tx-ing-06,
 * “programmes”), consistente dentro de cada texto; o tx-ing-04 não tem palavras de grafia divergente.
 */
const AUTORIA = 'Texto elaborado para o Concurseiro Pro Max';

export const TEXTOS: TextoBase[] = [
  {
    id: 'tx-ing-01',
    titulo: 'Clean hands, safer care',
    autoria: AUTORIA,
    dominioPublico: false,
    texto:
      'Healthcare-associated infections are among the most frequent adverse events in hospital care. Many of them are transmitted by the hands of health workers, which can carry microorganisms from one patient to another or from contaminated surfaces to a patient. For this reason, hand hygiene is widely regarded as one of the simplest and most effective measures to prevent such infections.\n\n' +
      'The idea is not new. In the 1840s, the Hungarian physician Ignaz Semmelweis observed that women who gave birth in a ward attended by doctors and medical students died of puerperal fever far more often than those attended by midwives. He suspected that the doctors, who often came directly from autopsies, were carrying “cadaverous particles” on their hands. After he required handwashing with a chlorinated lime solution, maternal deaths in that ward fell sharply. However, his conclusions were largely rejected by his contemporaries, and the germ theory of disease would only be accepted decades later.\n\n' +
      'Today, alcohol-based hand rubs are recommended for most clinical situations because they act quickly and are better tolerated by the skin than repeated washing. Nevertheless, they are not appropriate in every case: when hands are visibly soiled, they should be washed with soap and water. Some bacteria, such as Clostridioides difficile, form spores that alcohol does not reliably kill, so washing is also preferred when this pathogen is suspected.\n\n' +
      'Compliance remains the main challenge. Workers may forget, feel that they lack time, or underestimate the risk. Thus, successful programs usually combine education, easy access to hand rub at the point of care, and regular feedback on performance.',
  },
  {
    id: 'tx-ing-02',
    titulo: 'The chain of custody',
    autoria: AUTORIA,
    dominioPublico: false,
    texto:
      'In forensic science, physical evidence is only as valuable as the record that accompanies it. The chain of custody is the chronological documentation of every person who collected, handled, transferred, analyzed or stored an item of evidence, from the moment it is found until it is presented in court. Its purpose is to demonstrate that the item examined in the laboratory is the same item collected at the scene and that it has not been altered, replaced or contaminated along the way.\n\n' +
      'Each transfer must be recorded: who handled the item, when, where and for what purpose. Evidence should be packaged in sealed containers, and the seal should be signed or initialed by the person who closed it. If a seal is broken for analysis, the examiner must reseal the package and document the procedure. Biological samples, such as blood or tissue, are usually packaged in paper rather than plastic, since moisture trapped in plastic may encourage the growth of bacteria and fungi and degrade the material.\n\n' +
      'A gap in the chain does not necessarily mean that the evidence was tampered with. However, it gives the defense an opportunity to question its integrity, and the court may decide to give the evidence less weight or even to exclude it. For this reason, forensic physicians and technicians are trained to treat documentation as part of the examination itself, not as a bureaucratic task to be completed later.',
  },
  {
    id: 'tx-ing-03',
    titulo: 'Night-shift work and occupational injuries (hypothetical abstract)',
    autoria: AUTORIA,
    dominioPublico: false,
    texto:
      'Night-shift work and occupational injuries in hospital staff: a hypothetical cohort study\n\n' +
      'Background: Night-shift work disrupts circadian rhythms and has been associated with fatigue and reduced alertness. Whether it increases the risk of occupational injuries among hospital staff remains uncertain.\n\n' +
      'Methods: In this hypothetical prospective cohort, 2,400 nurses and nursing assistants from three teaching hospitals were followed for 24 months. Exposure was defined as working at least four night shifts per month. The primary outcome was any occupational injury reported to the occupational health service, including needlestick injuries, falls and musculoskeletal strains. Hazard ratios were adjusted for age, sex, years of experience and weekly working hours.\n\n' +
      'Results: A total of 312 injuries were recorded during follow-up. Workers exposed to night shifts had a higher risk of injury than those who worked day shifts only (adjusted hazard ratio 1.45; 95% confidence interval 1.15 to 1.83). Needlestick injuries accounted for the largest proportion of events in both groups. No significant association was found between night-shift work and falls.\n\n' +
      'Conclusions: Night-shift work was associated with a moderately higher risk of occupational injuries. Because this was an observational study, causality cannot be established, and unmeasured factors, such as sleep quality outside work, might have influenced the results. Nevertheless, the findings suggest that injury prevention programs should give special attention to staff working at night.',
  },
  {
    id: 'tx-ing-04',
    titulo: 'Informed consent',
    autoria: AUTORIA,
    dominioPublico: false,
    texto:
      'Informed consent is a cornerstone of modern medical ethics. It rests on the principle of respect for autonomy: competent adults have the right to decide what is done to their own bodies, even when their choices seem unwise to the doctor. Consent is therefore not a signature on a form but a process of communication between the clinician and the patient.\n\n' +
      'For consent to be valid, three elements are generally required. First, the patient must have decision-making capacity, that is, the ability to understand the relevant information, weigh it and communicate a choice. Second, the patient must receive adequate information about the nature of the proposed intervention, its expected benefits, its material risks and the reasonable alternatives, including the option of no treatment. Third, the decision must be voluntary, free from coercion or undue pressure from relatives, employers or health professionals.\n\n' +
      'Capacity is decision-specific: a patient may be unable to decide on complex surgery yet perfectly able to refuse a blood test. Moreover, it may fluctuate, as in delirium, so it should be reassessed over time. When a patient lacks capacity, doctors must act in accordance with the law of their jurisdiction, which usually involves a legal representative or, in emergencies, the patient’s best interests.\n\n' +
      'Consent may also be withdrawn at any time. A patient who agreed to a procedure yesterday is entitled to change their mind today, and the clinician should respect that decision, provided that the patient still has capacity.',
  },
  {
    id: 'tx-ing-05',
    titulo: 'Estimating the time since death',
    autoria: AUTORIA,
    dominioPublico: false,
    texto:
      'Estimating the time since death, also called the postmortem interval (PMI), is one of the most frequent questions asked of forensic pathologists. Unfortunately, it is also one of the most difficult to answer with precision. The body undergoes a series of changes after death, but the rate at which they occur depends on many variables, including ambient temperature, clothing, body mass and the cause of death.\n\n' +
      'Algor mortis, the cooling of the body, is often used in the first hours. Under typical conditions, a body loses heat gradually until it reaches the temperature of the environment. However, a body found in a cold river will cool much faster than one lying in a warm room, and a person who died with a high fever may start from an elevated temperature. Livor mortis, the purplish discoloration caused by the settling of blood in dependent areas, usually becomes visible within a few hours and later becomes fixed. Rigor mortis, the stiffening of the muscles, typically appears within a few hours, peaks and then gradually disappears as decomposition begins.\n\n' +
      'None of these signs should be interpreted in isolation. Experienced examiners combine several methods and express the result as a range rather than an exact time. In later stages, when these early signs are no longer useful, forensic entomology, the study of insects colonizing the body, may provide valuable information. A report that states that death occurred “at 3:15 a.m.” on the basis of body temperature alone should be regarded with suspicion.',
  },
  {
    id: 'tx-ing-06',
    titulo: 'What a positive screening test really means',
    autoria: AUTORIA,
    dominioPublico: false,
    texto:
      'Screening programmes aim to detect disease in people who have no symptoms, so that treatment can begin earlier. Yet a test that performs well in a hospital laboratory may behave quite differently when it is applied to the general population.\n\n' +
      'Two properties describe the accuracy of a test. Sensitivity is the proportion of people with the disease who test positive; specificity is the proportion of people without the disease who test negative. A highly sensitive test rarely misses a case, which makes a negative result useful for ruling the disease out. A highly specific test rarely labels a healthy person as ill, so a positive result helps to rule the disease in.\n\n' +
      'However, the meaning of a result also depends on how common the disease is. Consider a hypothetical test with 95% sensitivity and 95% specificity applied to 10,000 people, of whom only 100 have the disease. The test would correctly identify 95 of the 100 cases, but it would also produce 495 false positives among the 9,900 healthy individuals. In other words, only 95 of the 590 positive results, about 16%, would be correct: most of the positive results would be wrong. This is why the positive predictive value falls when prevalence is low, whereas the negative predictive value rises.\n\n' +
      'Consequently, a positive screening result should usually be confirmed by a more specific diagnostic test before any invasive treatment is offered. Screening is not harmless: false positives can cause anxiety, unnecessary procedures and costs.',
  },
];
