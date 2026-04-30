export const projects = [
  {
    id: "01",
    status: "Ongoing",
    title: "Digital Health-Seeking Pathways Among Adolescents in Southwest Nigeria: A Mixed-Methods Study",
    body: "Nigerian adolescents avoid formal healthcare even when they are sick. Cost, stigma, distance, and distrust all play a role. No comprehensive study has mapped these barriers in the Nigerian context and no digital solution has been designed around what the evidence actually shows.\n\nThis study uses qualitative interviews and structured surveys to document the health-seeking pathways of adolescents in Southwest Nigeria. The findings will directly inform the development of a digital triage tool that helps young people self-assess, understand when they need care, and navigate their options with confidence.",
    focusAreas: ["Digital Health", "Adolescent Health", "Mixed-Methods Research"],
    expectedOutput: "Peer-reviewed manuscript and digital triage tool prototype"
  },
  {
    id: "02",
    status: "Coming Soon",
    title: "Mapping Adolescent Health Data Gaps in Nigerian Primary Healthcare: A Situational Analysis",
    body: "Nigeria has no reliable routine data on adolescent health outcomes at community level. Primary healthcare facilities do not consistently record patient data by age group. Community health workers operate without standardized digital tools. Decisions affecting millions of young Nigerians are being made without the evidence to support them.\n\nThis situational analysis will document the adolescent health data gaps within Nigeria's primary healthcare system and produce a practical digital data collection tool that community health workers can realistically use in resource-limited settings.",
    focusAreas: ["Digital Health", "Adolescent Health", "Health Data Systems"],
    expectedOutput: "Situational analysis report and community-level digital data collection tool"
  },
  {
    id: "03",
    status: "Coming Soon",
    title: "Reach, Relevance and Rigor: Designing Digital Health Interventions for Out-of-School Adolescents in Nigeria",
    body: "Between ten and fifteen million Nigerian adolescents are not in school. Every adolescent health program targets school-based youth. This population is completely excluded from health research, programming, and digital health interventions even though they carry some of the highest health risks.\n\nThis project will assess the health vulnerabilities and digital access patterns of out-of-school adolescents in Nigeria and design digital health education modules built for the channels these young people actually use.",
    focusAreas: ["Digital Health", "Adolescent Health", "Community Health"],
    expectedOutput: "Needs assessment report and digital health education module package"
  },
  {
    id: "04",
    status: "Coming Soon",
    title: "Left Out of the Conversation: A Qualitative Study of Digital Health Engagement Among Male Adolescents in Nigeria",
    body: "Every adolescent health program in Nigeria is designed primarily for girls. Male adolescents carry significant health risks including substance use, high-risk behaviors, and near-complete avoidance of formal healthcare. Yet they are systematically excluded from research, programming, and digital health interventions.\n\nThis qualitative study will explore the health-seeking attitudes and digital health barriers of male adolescents in Nigeria through focus groups and in-depth interviews. Findings will be used to develop a gender-responsive digital health engagement framework built specifically for young Nigerian men.",
    focusAreas: ["Digital Health", "Adolescent Health", "Gender and Health"],
    expectedOutput: "Peer-reviewed qualitative study and gender-responsive digital engagement framework"
  }
];

// In the future, this can be swapped with a database call or CMS fetch.
export async function getProjects() {
  return projects;
}
