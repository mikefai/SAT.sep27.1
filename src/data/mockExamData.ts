import { MockExamQuestion } from '../types/sat';

// ---------------------------------------------------------------------------
// SECTION 1: GUIDED PRACTICE MOCK EXAM (20 QUESTIONS WITH CHEAT WALKTHROUGH ENGINE)
// ---------------------------------------------------------------------------
export const GUIDED_PRACTICE_QUESTIONS: MockExamQuestion[] = [
  // 1. Words in Context
  {
    id: 'guided-1',
    archetypeId: 'words-in-context',
    archetypeTitle: 'Words in Context',
    title: 'Architectural Heritage',
    passage: 'Although urban revitalization projects often aim to modernize city centers, historic preservationists urge developers to ________ historic landmarks rather than demolishing them to make way for commercial skyscrapers.',
    questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'conserve', isCorrect: true, fatalFlawReason: 'CORRECT: "Conserve" means to protect or preserve from destruction, matching "rather than demolishing".' },
      { id: 'B', text: 'fabricate', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Fabricate" means to invent or construct from scratch, contrasting with existing landmarks.' },
      { id: 'C', text: 'dismantle', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Dismantle" means to take apart, which is synonymous with demolition.' },
      { id: 'D', text: 'adjudicate', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Adjudicate" means to make a formal judgment in legal matters.' }
    ],
    expertWalkthrough: 'Finger Cover prediction: "protect" or "save". Clue: "rather than demolishing them". Match: "conserve".',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Simple prediction: "protect" / "save". Key contrast transition: "rather than demolishing".',
      scopeAnalysis: 'The passage contrasts destroying old buildings with protecting them.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Perfect match for protecting historic structures from demolition.' },
        { optionId: 'B', trapName: 'Out of Scope', reasoning: 'Fabricate means to invent/construct new items, not protect old ones.' },
        { optionId: 'C', trapName: 'Opposite', reasoning: 'Dismantle is a synonym of demolish.' },
        { optionId: 'D', trapName: 'Sound-Alike / Smart Word', reasoning: 'Legal term that sounds academic but makes no sense regarding physical buildings.' }
      ]
    }
  },
  {
    id: 'guided-2',
    archetypeId: 'words-in-context',
    archetypeTitle: 'Words in Context',
    title: 'Scientific Objectivity',
    passage: 'To ensure her experimental results were completely ________, Dr. Vane conducted double-blind trials to eliminate confirmation bias from both researchers and trial participants.',
    questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'disinterested', isCorrect: true, fatalFlawReason: 'CORRECT: "Disinterested" in academic English means impartial/unbiased, matching "eliminate confirmation bias".' },
      { id: 'B', text: 'uninterested', isCorrect: false, trapType: 'Sound-Alike / Distractor', fatalFlawReason: 'PROVABLY WRONG: "Uninterested" means bored or lacking enthusiasm, not impartial.' },
      { id: 'C', text: 'partisan', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Partisan" means biased or favoring one side, the opposite of double-blind objective trials.' },
      { id: 'D', text: 'ambiguous', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Ambiguous" means unclear or open to multiple interpretations.' }
    ],
    expertWalkthrough: 'Secondary Definition & Sound-Alike Trap! SAT uses "disinterested" to mean impartial/unbiased.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Simple prediction: "unbiased" / "impartial". Key clue: "eliminate confirmation bias".',
      scopeAnalysis: 'Double-blind trials are designed to guarantee scientific objectivity.',
      optionTraps: [
        { optionId: 'A', trapName: 'Secondary Definition', reasoning: 'SAT classic: Disinterested = impartial/unbiased.' },
        { optionId: 'B', trapName: 'Sound-Alike Trap', reasoning: 'Uninterested means bored, a common distractor trap!' },
        { optionId: 'C', trapName: 'Opposite', reasoning: 'Partisan means biased/prejudiced.' },
        { optionId: 'D', trapName: 'Out of Scope', reasoning: 'Ambiguous means vague/unclear.' }
      ]
    }
  },
  {
    id: 'guided-3',
    archetypeId: 'words-in-context',
    archetypeTitle: 'Words in Context',
    title: 'Diplomatic Relations',
    passage: 'The ambassador’s proposed treaty served to ________ border tensions between the neighboring nations, reducing military presence and establishing peaceful trade channels.',
    questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'mitigate', isCorrect: true, fatalFlawReason: 'CORRECT: "Mitigate" means to lessen or make less severe, matching "reducing military presence".' },
      { id: 'B', text: 'aggravate', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Aggravate" means to worsen or intensify conflict.' },
      { id: 'C', text: 'promulgate', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Promulgate" means to announce a law publicly.' },
      { id: 'D', text: 'sanction', isCorrect: false, trapType: 'Secondary Definition', fatalFlawReason: 'PROVABLY WRONG: "Sanction" means to authorize or penalize, which doesn\'t fit lessening tension.' }
    ],
    expertWalkthrough: 'Finger cover prediction: "reduce" or "lessen". Match: "mitigate".',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Prediction: "reduce" / "ease". Clue: "reducing military presence and establishing peaceful trade".',
      scopeAnalysis: 'Peaceful treaty measures decrease border tensions.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Mitigate = lessen/alleviate severity.' },
        { optionId: 'B', trapName: 'Opposite', reasoning: 'Aggravate means to inflame or worsen.' },
        { optionId: 'C', trapName: 'Out of Scope', reasoning: 'Promulgate means to proclaim officially.' },
        { optionId: 'D', trapName: 'Secondary Definition', reasoning: 'Sanction means penalize/permit, not reduce tension.' }
      ]
    }
  },

  // 2. Central Ideas & Details
  {
    id: 'guided-4',
    archetypeId: 'central-ideas-details',
    archetypeTitle: 'Central Ideas & Details',
    title: 'Deep-Sea Ecosystems',
    passage: 'Hydrothermal vent communities exist thousands of meters below the ocean surface where sunlight cannot penetrate. Rather than relying on photosynthesis, primary producers in these ecosystems utilization chemosynthesis, oxidizing hydrogen sulfide emitted from geothermal fissures to generate organic carbon. This chemosynthetic foundation supports diverse organisms, including giant tube worms and vent shrimp, proving that complex ecosystems can thrive entirely independent of solar energy.',
    questionStem: 'Which choice best states the main idea of the text?',
    options: [
      { id: 'A', text: 'Hydrothermal vent communities demonstrate that complex marine ecosystems can be sustained entirely by chemosynthesis without solar energy.', isCorrect: true, fatalFlawReason: 'CORRECT: Encompasses the full passage thesis from vent environment to chemosynthesis to independence from solar energy.' },
      { id: 'B', text: 'Giant tube worms and vent shrimp are the only species capable of surviving extreme geothermal temperatures.', isCorrect: false, trapType: 'Too Extreme', fatalFlawReason: 'PROVABLY WRONG: "Only species" is an extreme, unmentioned claim.' },
      { id: 'C', text: 'Hydrogen sulfide oxidation is the most efficient metabolic process in deep-sea organisms.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: The passage never measures or compares "efficiency".' },
      { id: 'D', text: 'Hydrothermal vents emit geothermal fissures thousands of meters below the ocean surface.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Too narrow! This is a physical background detail from sentence 1.' }
    ],
    expertWalkthrough: 'Umbrella Test: The passage concludes "proving that complex ecosystems can thrive entirely independent of solar energy". Choice A captures the complete thesis.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Umbrella thesis: Vent ecosystems thrive on chemosynthesis without sunlight.',
      scopeAnalysis: 'Sentence 1 sets setting, Sentence 2 explains mechanism (chemosynthesis), Sentence 3 concludes main thesis.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Covers the full umbrella thesis of the passage.' },
        { optionId: 'B', trapName: 'Too Extreme', reasoning: 'Uses absolute language ("only species") unsupported by text.' },
        { optionId: 'C', trapName: 'Out of Scope', reasoning: 'Introduces unmentioned comparison of "most efficient metabolic process".' },
        { optionId: 'D', trapName: 'True But Irrelevant', reasoning: 'True sentence 1 background detail, missing the main conclusion!' }
      ]
    }
  },
  {
    id: 'guided-5',
    archetypeId: 'central-ideas-details',
    archetypeTitle: 'Central Ideas & Details',
    title: 'Cognitive Plasticity in Aging',
    passage: 'Neuroscientists long assumed that the adult human brain lost synaptic plasticity after early adulthood. However, longitudinal neuroimaging studies revealed that older adults engaged in intensive musical training or bilingual language acquisition exhibited significant structural remodeling in the hippocampus and prefrontal cortex. These findings indicate that the adult brain retains lifelong capacity for structural re-organization in response to novel cognitive challenges.',
    questionStem: 'Which choice best states the main thesis of the passage?',
    options: [
      { id: 'A', text: 'The adult brain maintains structural plasticity throughout life when exposed to novel cognitive activities.', isCorrect: true, fatalFlawReason: 'CORRECT: Full scope match: challenges old assumption + cites new studies = lifelong structural reorganization.' },
      { id: 'B', text: 'Musical training is more effective at preventing cognitive decline than learning a foreign language.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Unmentioned comparison between music and language.' },
      { id: 'C', text: 'Neuroscientists originally believed synaptic plasticity ceased after early adulthood.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: True detail from sentence 1, but ignores the new findings and main thesis!' },
      { id: 'D', text: 'Prefrontal cortex remodeling only occurs during intensive bilingual acquisition trials.', isCorrect: false, trapType: 'Too Extreme', fatalFlawReason: 'PROVABLY WRONG: "Only occurs" is false; music also triggered remodeling.' }
    ],
    expertWalkthrough: 'Umbrella Test: Sentence 3 states "adult brain retains lifelong capacity for structural re-organization". Choice A matches.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Main idea: Adult brain stays plastic/re-organizable throughout life.',
      scopeAnalysis: 'Old belief (P1) → New study evidence (P2) → Lifelong brain plasticity conclusion (P3).',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Umbrella thesis encompassing all 3 sentences.' },
        { optionId: 'B', trapName: 'Out of Scope', reasoning: 'Compares music vs language effectiveness, unmentioned in text.' },
        { optionId: 'C', trapName: 'True But Irrelevant', reasoning: 'Describes the obsolete belief in sentence 1, ignoring the new conclusion.' },
        { optionId: 'D', trapName: 'Too Extreme', reasoning: 'Falsely claims remodeling "only occurs" in language acquisition.' }
      ]
    }
  },

  // 3. Command of Evidence (Textual & Scientific)
  {
    id: 'guided-6',
    archetypeId: 'command-of-evidence-textual',
    archetypeTitle: 'Command of Evidence (Textual & Scientific)',
    title: 'Urban Heat Island Mitigation',
    passage: 'Environmental scientist Dr. Marcus Thorne hypothesized that retrofitting commercial rooftops with reflective white cool coatings decreases localized ambient temperatures more effectively than planting vegetative green roofs in arid desert climates, because green roof irrigation in low-humidity zones creates evaporative cooling losses.',
    questionStem: 'Which finding, if true, would most directly support Dr. Thorne’s hypothesis?',
    options: [
      { id: 'A', text: 'In arid desert cities, commercial buildings with reflective white roofs recorded 4.2°C lower ambient surface temperatures than buildings with irrigated green roofs.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct match! Desert climate + reflective white roofs = lower temperature than green roofs.' },
      { id: 'B', text: 'Reflective white roof coatings cost 30% less to install than vegetative green roofs.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Installation cost is irrelevant to temperature cooling efficacy.' },
      { id: 'C', text: 'Vegetative green roofs in humid tropical climates reduce building HVAC energy consumption by 25%.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Focuses on humid tropical climates, ignoring desert climates.' },
      { id: 'D', text: 'Ambient air temperatures in desert cities cause irrigated green roofs to lower temperatures more than white roofs.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Weakens Thorne\'s hypothesis by showing green roofs perform better.' }
    ],
    expertWalkthrough: 'Hypothesis: White roofs > green roofs for cooling in desert climates. Choice A provides direct temperature data in desert cities.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Expected finding: White roofs cool desert buildings better than green roofs.',
      scopeAnalysis: 'Target variables: Desert climate + White roof vs Green roof + Temperature drop.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Matches exact condition (desert) and variables (white < green temp).' },
        { optionId: 'B', trapName: 'True But Irrelevant', reasoning: 'Focuses on installation cost rather than cooling performance.' },
        { optionId: 'C', trapName: 'Out of Scope', reasoning: 'Shifts to tropical climates instead of desert conditions.' },
        { optionId: 'D', trapName: 'Opposite', reasoning: 'Directly refutes/weakens Thorne\'s hypothesis.' }
      ]
    }
  },
  {
    id: 'guided-7',
    archetypeId: 'command-of-evidence-textual',
    archetypeTitle: 'Command of Evidence (Textual & Scientific)',
    title: 'Avian Magnetoreception',
    passage: 'Biologist Dr. Clara Reyes hypothesized that migratory robins utilize cryptochrome proteins in their retinas to detect Earth’s magnetic field lines, and that disabling cryptochrome gene expression would disrupt their orientation during nocturnal migration under overcast skies.',
    questionStem: 'Which finding, if true, would most directly support Dr. Reyes’s hypothesis?',
    options: [
      { id: 'A', text: 'Robins with gene-edited inactive retinas failed to orient toward seasonal migratory routes under overcast skies, whereas unaltered control robins oriented accurately.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct match: gene inactive + overcast sky = orientation failure.' },
      { id: 'B', text: 'Cryptochrome proteins are found in the retinal cells of non-migratory avian species as well as migratory species.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Presence in non-migratory species does not prove it controls orientation.' },
      { id: 'C', text: 'Robins exposed to artificial magnetic fields during daylight hours exhibited increased heart rates.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Heart rates during daylight hours is unrelated to orientation in nocturnal migration.' },
      { id: 'D', text: 'Robins with inactive cryptochrome proteins oriented toward migratory routes more precisely under overcast skies than in clear weather.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Weakens hypothesis by showing inactive proteins improved orientation.' }
    ],
    expertWalkthrough: 'Hypothesis: Cryptochrome inactive → orientation failure under overcast skies. Choice A matches.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Finding needed: Disabling cryptochrome ruins orientation under overcast skies.',
      scopeAnalysis: 'Target variables: Cryptochrome active/inactive + Overcast sky + Orientation accuracy.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Directly validates hypothesis with control vs treatment group.' },
        { optionId: 'B', trapName: 'True But Irrelevant', reasoning: 'General protein presence doesn\'t prove orientation mechanism.' },
        { optionId: 'C', trapName: 'Out of Scope', reasoning: 'Measures heart rate in daylight instead of orientation at night.' },
        { optionId: 'D', trapName: 'Opposite', reasoning: 'Claims inactive protein improved orientation, contradicting hypothesis.' }
      ]
    }
  },

  // 4. Command of Evidence (Quantitative)
  {
    id: 'guided-8',
    archetypeId: 'command-of-evidence-quantitative',
    archetypeTitle: 'Command of Evidence (Quantitative)',
    title: 'Renewable Power Generation',
    passage: 'Energy analyst Dr. Aris Thorne argued that while solar power capacity grew rapidly between 2020 and 2024, wind energy consistently produced a higher total gigawatt-hour (GWh) output than solar energy in coastal grid districts throughout the four-year monitoring period.',
    chartData: {
      title: 'Coastal District Renewable Output (2020–2024 in GWh)',
      headers: ['Year', 'Wind Energy (GWh)', 'Solar Energy (GWh)', 'Hydroelectric (GWh)'],
      rows: [
        ['2020', '14,200', '6,800', '11,000'],
        ['2021', '16,500', '8,900', '10,800'],
        ['2022', '18,900', '11,400', '10,500'],
        ['2023', '21,100', '14,200', '10,200'],
        ['2024', '23,800', '17,500', '10,000']
      ],
      caption: 'Data source: Coastal Energy Grid Annual Monitoring Reports.'
    },
    questionStem: 'Which choice uses data from the table to most effectively support Dr. Thorne’s argument?',
    options: [
      { id: 'A', text: 'In 2024, wind energy generated 23,800 GWh in coastal districts compared to 17,500 GWh from solar energy, maintaining higher output in every year from 2020 to 2024.', isCorrect: true, fatalFlawReason: 'CORRECT: Directly verifies table data (Wind 23,800 vs Solar 17,500 in 2024) and confirms Wind > Solar in all years.' },
      { id: 'B', text: 'Solar energy increased its output from 6,800 GWh in 2020 to 17,500 GWh in 2024, representing the highest percentage growth of any source.', isCorrect: false, trapType: 'Accurate Chart Data, Wrong Argument', fatalFlawReason: 'PROVABLY WRONG: True data from table, but supports solar growth rather than Thorne\'s point that wind generated MORE total GWh than solar.' },
      { id: 'C', text: 'Hydroelectric power output declined from 11,000 GWh in 2020 to 10,000 GWh in 2024.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Irrelevant hydro trend data that fails to compare Wind vs Solar.' },
      { id: 'D', text: 'In 2022, solar energy produced 18,900 GWh, surpassing wind energy’s output of 11,400 GWh.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Factually false! In 2022, Wind was 18,900 GWh and Solar was 11,400 GWh (numbers flipped).' }
    ],
    expertWalkthrough: 'Thorne claim: Wind > Solar total GWh in all years. Choice A correctly cites Wind (23,800) > Solar (17,500) and confirms 2020-2024 trend.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Look for choice showing Wind GWh > Solar GWh across 2020-2024.',
      scopeAnalysis: 'Check 2024 row: Wind = 23,800, Solar = 17,500. Check all years: Wind is always higher.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Matches table coordinates and directly supports Thorne\'s claim.' },
        { optionId: 'B', trapName: 'Accurate Chart Data, Wrong Argument', reasoning: 'True solar growth data, but fails to prove Wind > Solar total output.' },
        { optionId: 'C', trapName: 'True But Irrelevant', reasoning: 'Hydroelectric data doesn\'t answer the Wind vs Solar argument.' },
        { optionId: 'D', trapName: 'Opposite', reasoning: 'Flys in the face of the data by flipping Wind and Solar numbers.' }
      ]
    }
  },
  {
    id: 'guided-9',
    archetypeId: 'command-of-evidence-quantitative',
    archetypeTitle: 'Command of Evidence (Quantitative)',
    title: 'Agricultural Crop Drought Resistance',
    passage: 'Agronomist Dr. Lin Chen evaluated four cereal crop varieties under simulated severe drought conditions. Chen asserted that while Variety X achieved the highest survival percentage, Variety Y generated the greatest total biomass mass per hectare despite having a lower survival percentage than Variety X.',
    chartData: {
      title: 'Crop Drought Performance Metrics',
      headers: ['Variety', 'Survival Rate (%)', 'Biomass Yield (kg/ha)', 'Water Use Efficiency'],
      rows: [
        ['Variety X', '88%', '3,200', ' High'],
        ['Variety Y', '72%', '4,800', 'Moderate'],
        ['Variety Z', '65%', '2,900', ' Low'],
        ['Variety W', '54%', '2,100', ' Low']
      ],
      caption: 'Evaluated across 12-week controlled soil moisture trials.'
    },
    questionStem: 'Which choice uses data from the table to support Dr. Chen’s assertion?',
    options: [
      { id: 'A', text: 'Variety X recorded an 88% survival rate compared to Variety Y’s 72%, but Variety Y produced 4,800 kg/ha of biomass whereas Variety X produced only 3,200 kg/ha.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct table match! Variety X survival (88%) > Y (72%), but Variety Y biomass (4,800) > X (3,200).' },
      { id: 'B', text: 'Variety X achieved high water use efficiency, while Variety Z and Variety W both exhibited low water use efficiency.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Describes water efficiency columns, ignoring biomass yield assertion.' },
      { id: 'C', text: 'Variety Z produced a higher biomass yield than Variety Y under severe drought conditions.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Factually false! Variety Z biomass = 2,900 kg/ha; Variety Y = 4,800 kg/ha.' },
      { id: 'D', text: 'Variety Y achieved the highest survival rate among all four cereal varieties evaluated in the trial.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Factually false! Variety X had the highest survival rate (88% vs 72%).' }
    ],
    expertWalkthrough: 'Chen claim: Variety X highest survival % (88%), Variety Y highest biomass (4,800). Choice A confirms both numbers.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Look for Choice citing Variety X survival = 88% and Variety Y biomass = 4,800.',
      scopeAnalysis: 'Check table: Survival (X=88% highest), Biomass (Y=4,800 highest).',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Matches exact coordinates for both survival % and biomass yield.' },
        { optionId: 'B', trapName: 'True But Irrelevant', reasoning: 'True water efficiency data, but misses Chen\'s biomass assertion.' },
        { optionId: 'C', trapName: 'Opposite', reasoning: 'Falsely claims Z (2,900) > Y (4,800).' },
        { optionId: 'D', trapName: 'Opposite', reasoning: 'Falsely claims Y had highest survival (X was highest with 88%).' }
      ]
    }
  },

  // 5. Inferences & Logical Completion
  {
    id: 'guided-10',
    archetypeId: 'inferences-logical-completion',
    archetypeTitle: 'Inferences & Logical Completion',
    title: 'Neanderthal Pigment Artifacts',
    passage: 'Archaeologists excavating Cueva de los Aviones in Spain discovered perforated marine shells containing traces of red and yellow mineral pigments dating to 115,000 years ago. Because modern humans (Homo sapiens) did not arrive in Iberia until 45,000 years ago, and Neanderthals were the sole hominin inhabitants of the region during the earlier period, researchers concluded that ________',
    questionStem: 'Which choice most logically completes the text?',
    options: [
      { id: 'A', text: 'symbolic body ornamentation practices in Europe originated among Neanderthals long before the arrival of modern humans.', isCorrect: true, fatalFlawReason: 'CORRECT: Conservative baby step: Shells with pigment at 115,000 YA + only Neanderthals present = symbolic practice predates Homo sapiens arrival.' },
      { id: 'B', text: 'Neanderthals traded marine shell ornaments across extensive long-distance routes with African Homo sapiens.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Invented trade routes with African Homo sapiens, unmentioned in text.' },
      { id: 'C', text: 'mineral pigments were used exclusively for practical hide tanning rather than decorative ornamentation.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Contradicts the inference of symbolic body ornamentation.' },
      { id: 'D', text: 'Homo sapiens learned pigment processing techniques from Iberian Neanderthals after 45,000 years ago.', isCorrect: false, trapType: 'The Hollywood Twist', fatalFlawReason: 'PROVABLY WRONG: Wild leap! Text does not state Homo sapiens learned processing from Neanderthals.' }
    ],
    expertWalkthrough: 'Baby Step Rule: Pigment shells 115k YA + Neanderthals only hominin = symbolic ornament use originated with Neanderthals.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Baby step: Neanderthals created symbolic pigment ornaments before modern humans arrived.',
      scopeAnalysis: 'Premise A: 115k YA pigment shells. Premise B: Modern humans arrived 45k YA. Conclusion: Neanderthals created them.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Boring, inescapable deduction anchored in both premises.' },
        { optionId: 'B', trapName: 'Unmentioned Assumption', reasoning: 'Invents African trade routes not mentioned in text.' },
        { optionId: 'C', trapName: 'Opposite', reasoning: 'Denies decorative/symbolic use mentioned in premise.' },
        { optionId: 'D', trapName: 'The Hollywood Twist', reasoning: 'Speculates cultural transmission from Neanderthals to humans.' }
      ]
    }
  },
  {
    id: 'guided-11',
    archetypeId: 'inferences-logical-completion',
    archetypeTitle: 'Inferences & Logical Completion',
    title: 'Plant Volatile Organic Compounds',
    passage: 'When attacked by herbivorous caterpillars, maize plants emit volatile organic compounds (VOCs) that attract parasitic wasps. The wasps lay eggs inside the caterpillars, neutralizing the pest. However, geneticists engineered a maize line unable to synthesize these specific VOCs. When planted in field trials exposed to caterpillar infestations, these modified plants ________',
    questionStem: 'Which choice most logically completes the text?',
    options: [
      { id: 'A', text: 'attracted fewer parasitic wasps and suffered greater herbivore damage than non-modified control maize.', isCorrect: true, fatalFlawReason: 'CORRECT: Inescapable baby step: No VOCs → fewer wasps attracted → caterpillars unchecked → more plant damage.' },
      { id: 'B', text: 'developed alternative chemical defenses that completely eliminated caterpillar threats.', isCorrect: false, trapType: 'The Hollywood Twist', fatalFlawReason: 'PROVABLY WRONG: Wild speculative leap that modified plants invented new defenses.' },
      { id: 'C', text: 'attracted wasps more quickly by emitting higher levels of root exudates.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Contradicts the premise that plants couldn\'t synthesize wasp-attracting signals.' },
      { id: 'D', text: 'caused herbivorous caterpillars to mutate into non-pest species.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Absurd biological mutation leap.' }
    ],
    expertWalkthrough: 'Baby Step Rule: VOCs attract wasps → wasps kill caterpillars. No VOCs = no wasps = more caterpillar damage. Choice A matches.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Inescapable step: Modified plants without VOCs won\'t attract wasps and will get eaten more.',
      scopeAnalysis: 'If X (VOC) causes Y (wasp attraction) to stop Z (caterpillars), removing X leads to more Z.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Direct logical chain: No VOCs → fewer wasps → more damage.' },
        { optionId: 'B', trapName: 'The Hollywood Twist', reasoning: 'Speculates miraculous alternative defense mechanism.' },
        { optionId: 'C', trapName: 'Opposite', reasoning: 'Claims wasps arrived faster despite missing VOC signal.' },
        { optionId: 'D', trapName: 'Out of Scope', reasoning: 'Absurd mutation claim unsupported by biology or text.' }
      ]
    }
  },

  // 6. Text Structure & Purpose
  {
    id: 'guided-12',
    archetypeId: 'text-structure-purpose',
    archetypeTitle: 'Text Structure & Purpose',
    title: 'Literary History',
    passage: 'For over a century, literary scholars asserted that 19th-century novelist Emily Brontë wrote Wuthering Heights in complete isolation from contemporary Victorian literary circles. However, recent archival discoveries of personal correspondence reveal that Brontë routinely exchanged drafts with London publishing editors and incorporated structural feedback. These letters demonstrate that Brontë was far more connected to the broader publishing ecosystem than previously acknowledged.',
    questionStem: 'Which choice best describes the overall structure of the text?',
    options: [
      { id: 'A', text: 'It presents a long-held scholarly assumption, introduces new archival evidence that refutes it, and summarizes the implications of the new evidence.', isCorrect: true, fatalFlawReason: 'CORRECT: Matches structural flow: 1) Long-held view, 2) Archival letters refuting it, 3) Implication of connection.' },
      { id: 'B', text: 'It analyzes a 19th-century novel, details its critical reception, and advocates for a new adaptation.', isCorrect: false, trapType: 'Content vs. Function Confusion', fatalFlawReason: 'PROVABLY WRONG: Summarizes generic topic content rather than structural function.' },
      { id: 'C', text: 'It outlines a debate between two Victorian authors and resolves it by evaluating sales figures.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: No debate between authors nor sales figures mentioned.' },
      { id: 'D', text: 'It summarizes the plot of Wuthering Heights and criticizes its structural flaws.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Plot summary and literary critique are absent from the text.' }
    ],
    expertWalkthrough: 'Chunk 1: "For over a century scholars asserted..." (Long-held view). Chunk 2: "However... recent discoveries reveal..." (New evidence refutes it). Chunk 3: "These letters demonstrate..." (Implication). Choice A.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Structural move: Old belief → New letters challenge it → New conclusion.',
      scopeAnalysis: 'Focus on action verbs: presents assumption, introduces evidence, summarizes implications.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Accurately maps the macro 3-part structural flow.' },
        { optionId: 'B', trapName: 'Content vs. Function Confusion', reasoning: 'Focuses on topic matter rather than author\'s structural strategy.' },
        { optionId: 'C', trapName: 'Out of Scope', reasoning: 'Invents author debate and sales figures.' },
        { optionId: 'D', trapName: 'Out of Scope', reasoning: 'Falsely claims plot summary and novel critique.' }
      ]
    }
  },
  {
    id: 'guided-13',
    archetypeId: 'text-structure-purpose',
    archetypeTitle: 'Text Structure & Purpose',
    title: 'Quantum Computing Frontiers',
    passage: 'Paragraph 1: Computer scientists initially predicted that quantum processors would render classical supercomputers obsolete within a decade by executing parallel algorithms at sub-atomic scales.\n\nParagraph 2: However, recent thermal decoherence testing indicates that maintaining qubit stability requires near-absolute-zero cooling infrastructure that remains impractical for general commercial deployment, suggesting classical supercomputers will remain essential for routine computing tasks.',
    questionStem: 'Which choice best describes the relationship between Paragraph 1 and Paragraph 2?',
    options: [
      { id: 'A', text: 'Paragraph 1 outlines an initial technological prediction, and Paragraph 2 presents experimental limitations that qualify that prediction.', isCorrect: true, fatalFlawReason: 'CORRECT: Perfect structural map: P1 = prediction of obsolescence; P2 = thermal limitations qualifying that claim.' },
      { id: 'B', text: 'Paragraph 1 describes a quantum algorithm, and Paragraph 2 provides a mathematical proof of its efficiency.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: P2 presents practical limitations, NOT a proof of efficiency.' },
      { id: 'C', text: 'Paragraph 1 introduces a computer scientist, and Paragraph 2 details his biographical achievements.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Biographical achievements are unmentioned.' },
      { id: 'D', text: 'Paragraph 1 states the primary function of quantum processors.', isCorrect: false, trapType: 'Half-Passage Trap', fatalFlawReason: 'PROVABLY WRONG: Half-passage trap! Ignores Paragraph 2 completely.' }
    ],
    expertWalkthrough: 'P1: Prediction of quantum superiority. P2: Practical thermal decoherence limits qualifying prediction. Choice A captures the relationship.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Relationship: P1 gives optimistic prediction; P2 presents practical limitations that qualify it.',
      scopeAnalysis: 'Must cover both P1 (prediction) and P2 (thermal limitation qualification).',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Accurately links P1 prediction with P2 qualification.' },
        { optionId: 'B', trapName: 'Opposite', reasoning: 'Claims P2 proved efficiency when P2 actually showed limitations.' },
        { optionId: 'C', trapName: 'Out of Scope', reasoning: 'Invents biographical details.' },
        { optionId: 'D', trapName: 'Half-Passage Trap', reasoning: 'Describes P1 while omitting P2 entirely!' }
      ]
    }
  },

  // 7. Cross-Text Connections (Dual Passages)
  {
    id: 'guided-14',
    archetypeId: 'cross-text-connections',
    archetypeTitle: 'Cross-Text Connections',
    title: 'Urban Green Space Development',
    passage: `Passage 1:
Municipal planners should prioritize creating large, centralized urban parks over small pocket parks. Centralized parks create continuous microclimates that effectively reduce urban heat islands, support greater biodiversity by offering un-fragmented habitats, and provide infrastructure for large community gatherings.

Passage 2:
While large parks offer ecological benefits, urban planner Dr. Nina Reis points out that densely populated neighborhoods often lack the contiguous land required for massive developments. Distributing smaller pocket parks across low-income urban zones ensures equitable park accessibility within a five-minute walk for all residents, addressing severe environmental justice gaps.`,
    questionStem: 'Based on the passages, how would Dr. Reis (Passage 2) most likely respond to the recommendation in Passage 1?',
    options: [
      { id: 'A', text: 'By arguing that prioritizing centralized parks neglects equity and accessibility in densely populated, low-income urban zones.', isCorrect: true, fatalFlawReason: 'CORRECT: Matches Author 2\'s critique: centralized parks ignore land constraints and environmental justice in low-income zones.' },
      { id: 'B', text: 'By claiming that pocket parks generate stronger microclimate cooling than large centralized parks.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Passage 2 concedes large parks offer ecological benefits and doesn\'t claim pocket parks cool better.' },
      { id: 'C', text: 'By agreeing that municipal budgets should be allocated exclusively to centralized park land acquisition.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Author 2 opposes exclusive centralized allocation, advocating pocket parks.' },
      { id: 'D', text: 'By asserting that centralized parks create continuous microclimates that support biodiversity.', isCorrect: false, trapType: 'Right Passage, Wrong Author', fatalFlawReason: 'PROVABLY WRONG: States Passage 1\'s claim, NOT Dr. Reis\'s response in Passage 2!' }
    ],
    expertWalkthrough: 'P1 Stance: Build centralized parks (+ Large parks). P2 Stance: Centralized parks ignore land limits and equity in low-income zones (- Exclusive focus). Choice A.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Author 2 response: Large parks are unrealistic in dense zones and ignore park equity.',
      scopeAnalysis: 'Always answer from Author 2\'s shoes! Author 2 highlights land limits and 5-min walk equity.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Accurately states Author 2\'s critique regarding equity and land constraints.' },
        { optionId: 'B', trapName: 'Out of Scope', reasoning: 'Falsely claims pocket parks cool microclimates better (conceded to large parks).' },
        { optionId: 'C', trapName: 'Opposite', reasoning: 'Claims Author 2 agrees with exclusive centralized budget.' },
        { optionId: 'D', trapName: 'Right Passage, Wrong Author', reasoning: 'Classic trap! States Author 1\'s point instead of Author 2\'s critique.' }
      ]
    }
  },
  {
    id: 'guided-15',
    archetypeId: 'cross-text-connections',
    archetypeTitle: 'Cross-Text Connections',
    title: 'Deep Sea Mining Regulation',
    passage: `Passage 1:
Deep-sea polymetallic nodule mining in international waters represents an imperative resource strategy for the green energy transition. Manganese nodules contain high concentrations of nickel, cobalt, and copper—essential minerals for electric vehicle batteries whose terrestrial mining causes severe deforestation and human rights violations.

Passage 2:
Marine biologist Dr. Samuel Vance cautions that seabed mining poses irreversible threats to benthic ecosystems. Nodule extraction destroys abyssal clay habitats that require millions of years to form and generates underwater sediment plumes that smother filter-feeding organisms across thousands of square kilometers.`,
    questionStem: 'Based on the passages, how would Dr. Vance (Passage 2) characterization of seabed mining compare to Passage 1’s portrayal?',
    options: [
      { id: 'A', text: 'Dr. Vance views seabed mining as ecologically destructive to abyssal habitats, whereas Passage 1 portrays it as an essential strategy for green energy materials.', isCorrect: true, fatalFlawReason: 'CORRECT: Accurately contrasts Passage 2 (ecosystem destruction) with Passage 1 (essential green strategy).' },
      { id: 'B', text: 'Dr. Vance agrees that seabed mining causes less deforestation than terrestrial mining.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Dr. Vance does not mention terrestrial deforestation.' },
      { id: 'C', text: 'Dr. Vance claims polymetallic nodules lack nickel and cobalt concentrations.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Dr. Vance does not deny mineral composition.' },
      { id: 'D', text: 'Dr. Vance advocates for immediate commercial nodule extraction in international waters.', isCorrect: false, trapType: 'Right Passage, Wrong Author', fatalFlawReason: 'PROVABLY WRONG: States Passage 1\'s position instead of Dr. Vance\'s caution!' }
    ],
    expertWalkthrough: 'P1: Seabed mining is essential for EV materials. P2: Seabed mining causes irreversible benthic destruction. Choice A captures the comparison.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Comparison: P1 sees mining as green necessity; P2 sees it as ecological disaster.',
      scopeAnalysis: 'P1 = + Resource imperative. P2 = - Irreversible ecosystem threat.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Accurately contrasts both authors\' perspectives.' },
        { optionId: 'B', trapName: 'Out of Scope', reasoning: 'Invents comparison regarding terrestrial deforestation not made by Vance.' },
        { optionId: 'C', trapName: 'Opposite', reasoning: 'Falsely claims Vance denied mineral content.' },
        { optionId: 'D', trapName: 'Right Passage, Wrong Author', reasoning: 'Attributes Passage 1\'s stance to Dr. Vance.' }
      ]
    }
  },

  // 16 - 20: Comprehensive Mix Across All Archetypes
  {
    id: 'guided-16',
    archetypeId: 'words-in-context',
    archetypeTitle: 'Words in Context',
    title: 'Literary Style Analysis',
    passage: 'Far from presenting a ________ narrative, the novelist constructed a complex non-linear timeline that interwove multiple character perspectives across three centuries.',
    questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'straightforward', isCorrect: true, fatalFlawReason: 'CORRECT: "Straightforward" means uncomplicated or direct, contrasting with "complex non-linear timeline".' },
      { id: 'B', text: 'convoluted', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Convoluted" means complex, which matches the novel rather than contrasting with "Far from".' },
      { id: 'C', text: 'fleeting', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Fleeting" means short-lived, unrelated to non-linear narrative structure.' },
      { id: 'D', text: 'austere', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Austere" means severe or unadorned, not relevant to timeline linearity.' }
    ],
    expertWalkthrough: 'Clue: "Far from presenting a [ _____ ] narrative... complex non-linear timeline". Contrast word needed: "straightforward".',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Prediction: "simple" / "linear". Transition: "Far from presenting a [ _____ ]".',
      scopeAnalysis: 'Contrast between the simple expectation and the complex non-linear reality.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Straightforward = simple/direct, perfect contrast to complex non-linear.' },
        { optionId: 'B', trapName: 'Opposite', reasoning: 'Convoluted means complex, breaking the "Far from" contrast.' },
        { optionId: 'C', trapName: 'Out of Scope', reasoning: 'Fleeting refers to duration, not narrative structure.' },
        { optionId: 'D', trapName: 'Out of Scope', reasoning: 'Austere refers to decoration/lifestyle, irrelevant here.' }
      ]
    }
  },
  {
    id: 'guided-17',
    archetypeId: 'central-ideas-details',
    archetypeTitle: 'Central Ideas & Details',
    title: 'Mycorrhizal Fungal Signals',
    passage: 'Plants connected to shared subterranean mycorrhizal networks can transmit warning signals to neighboring plants when attacked by pests. Upon receiving chemical signals through fungal hyphae, uninfested neighbors initiate defensive enzyme production prior to insect contact. This underground communication grid demonstrates that plant defense responses extend beyond individual organismic boundaries into cooperative community defense networks.',
    questionStem: 'Which choice best states the main idea of the text?',
    options: [
      { id: 'A', text: 'Subterranean mycorrhizal networks enable plants to communicate pest threats and coordinate community-wide defenses.', isCorrect: true, fatalFlawReason: 'CORRECT: Full scope match: covers fungal networks + warning signals + community defense.' },
      { id: 'B', text: 'Defensive enzyme production is the only mechanism plants use to deter pest attacks.', isCorrect: false, trapType: 'Too Extreme', fatalFlawReason: 'PROVABLY WRONG: "Only mechanism" is an extreme, unmentioned claim.' },
      { id: 'C', text: 'Insect pests avoid eating plants that are connected to subterranean fungal hyphae.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Insects attack plants; connection allows warnings to neighbors.' },
      { id: 'D', text: 'Mycorrhizal hyphae consist of subterranean fungal networks.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: True definition detail, but ignores the communication and defense thesis.' }
    ],
    expertWalkthrough: 'Umbrella Test: The passage demonstrates "plant defense responses extend beyond individual boundaries into cooperative community defense networks". Choice A.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Main thesis: Fungal networks allow plants to send warning signals and coordinate group defense.',
      scopeAnalysis: 'Sentence 1 (warning signals) → Sentence 2 (enzyme defense) → Sentence 3 (community network thesis).',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Captures the full umbrella thesis of shared plant defense.' },
        { optionId: 'B', trapName: 'Too Extreme', reasoning: 'Falsely claims enzyme production is the "only mechanism".' },
        { optionId: 'C', trapName: 'Opposite', reasoning: 'Claims pests avoid connected plants, contradicting the text.' },
        { optionId: 'D', trapName: 'True But Irrelevant', reasoning: 'Basic definition detail that misses the defense communication thesis.' }
      ]
    }
  },
  {
    id: 'guided-18',
    archetypeId: 'command-of-evidence-textual',
    archetypeTitle: 'Command of Evidence (Textual & Scientific)',
    title: 'Exoplanet Atmospheric Water',
    passage: 'Astrophysicist Dr. Elena Rostova hypothesized that giant gas exoplanets orbiting close to their host stars ("hot Jupiters") undergo atmospheric stripping that removes light hydrogen gas, resulting in water vapor concentrations significantly higher than predicted by standard planetary formation models.',
    questionStem: 'Which finding, if true, would most directly support Dr. Rostova’s hypothesis?',
    options: [
      { id: 'A', text: 'Spectroscopic analysis of close-orbit hot Jupiters revealed water vapor absorption spectra 35% higher than standard formation model predictions.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct match! Close-orbit hot Jupiters = 35% higher water vapor than standard models.' },
      { id: 'B', text: 'Hot Jupiters contain high proportions of iron and silicates in their core structures.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Core iron and silicates are irrelevant to atmospheric water vapor.' },
      { id: 'C', text: 'Cold gas giants orbiting far from host stars exhibit low concentrations of atmospheric hydrogen.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Focuses on cold gas giants far from stars instead of hot Jupiters.' },
      { id: 'D', text: 'Close-orbit hot Jupiters exhibit water vapor levels identical to standard formation model predictions.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Directly refutes Rostova\'s hypothesis of higher water vapor.' }
    ],
    expertWalkthrough: 'Hypothesis: Hot Jupiters close to stars → higher water vapor than models predict. Choice A matches.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Finding needed: Hot Jupiters close to stars have more water vapor than standard models predict.',
      scopeAnalysis: 'Target variables: Hot Jupiters + Close orbit + Water vapor higher than model.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Exact match for variables and higher water vapor finding.' },
        { optionId: 'B', trapName: 'True But Irrelevant', reasoning: 'Core iron/silicate composition is unrelated to atmospheric water vapor.' },
        { optionId: 'C', trapName: 'Out of Scope', reasoning: 'Shifts focus to cold distant gas giants.' },
        { optionId: 'D', trapName: 'Opposite', reasoning: 'Claims water vapor levels were identical, refuting the hypothesis.' }
      ]
    }
  },
  {
    id: 'guided-19',
    archetypeId: 'inferences-logical-completion',
    archetypeTitle: 'Inferences & Logical Completion',
    title: 'Dendrochronology & Climate',
    passage: 'Dendrochronologists analyzing ancient bristlecone pine tree rings in the White Mountains noted that annual ring growth correlates strictly with summer precipitation levels. Rings formed during the 6th century CE exhibit five consecutive ultra-narrow bands indicating severe multi-year drought. Given that local indigenous pottery styles underwent abrupt stylistic shifts during this exact decade, archaeologists conclude that ________',
    questionStem: 'Which choice most logically completes the text?',
    options: [
      { id: 'A', text: 'environmental stress from the 6th-century drought coincided with cultural shifts in local pottery production.', isCorrect: true, fatalFlawReason: 'CORRECT: Conservative baby step: Tree ring drought in 6th century + pottery shift in same decade = environmental stress coincided with cultural shift.' },
      { id: 'B', text: 'indigenous potters began using bristlecone pine wood to fire their ceramics during the 6th century.', isCorrect: false, trapType: 'The Hollywood Twist', fatalFlawReason: 'PROVABLY WRONG: Wild speculation that wood was used for firing ceramics.' },
      { id: 'C', text: 'the 6th-century drought caused the complete extinction of indigenous populations in the White Mountains.', isCorrect: false, trapType: 'Too Extreme', fatalFlawReason: 'PROVABLY WRONG: "Complete extinction" is an extreme, unsupported claim.' },
      { id: 'D', text: 'pottery stylistic shifts caused the 6th-century summer drought.', isCorrect: false, trapType: 'Reverse Causality', fatalFlawReason: 'PROVABLY WRONG: Absurd reverse causality claiming pottery shifts caused weather drought!' }
    ],
    expertWalkthrough: 'Baby Step Rule: 6th-century tree ring drought + 6th-century pottery shift = climate stress coincided with cultural change. Choice A.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Baby step: Drought conditions coincided with changes in pottery styles.',
      scopeAnalysis: 'Premise 1: 6th-century tree rings show drought. Premise 2: Pottery changed in same decade. Conclusion: They coincided.',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Conservative deduction anchored strictly in both premises.' },
        { optionId: 'B', trapName: 'The Hollywood Twist', reasoning: 'Speculates specific ceramic firing techniques unmentioned in text.' },
        { optionId: 'C', trapName: 'Too Extreme', reasoning: 'Falsely claims complete population extinction.' },
        { optionId: 'D', trapName: 'Reverse Causality', reasoning: 'Absurd claim that pottery making caused weather drought.' }
      ]
    }
  },
  {
    id: 'guided-20',
    archetypeId: 'cross-text-connections',
    archetypeTitle: 'Cross-Text Connections',
    title: 'Renaissance Portrait Attribution',
    passage: `Passage 1:
Art historian Dr. Julian Croft argues that the Portrait of a Young Nobleman should be attributed to Florentine master Sandro Botticelli. Croft points to the distinct brushwork in the drapery folds and infrared reflectography revealing underdrawings identical to Botticelli’s verified 1480 workshop studies.

Passage 2:
Conservator Dr. Elena Rostova agrees that the portrait originated in Botticelli’s 1480 workshop, but contends that the drapery folds were executed by Botticelli’s senior apprentice, Filippino Lippi. Rostova highlights pigment layer cross-sections showing lead-tin yellow application techniques unique to Lippi’s hand.`,
    questionStem: 'Based on the passages, on which point do Dr. Croft (Passage 1) and Dr. Rostova (Passage 2) AGREE?',
    options: [
      { id: 'A', text: 'The Portrait of a Young Nobleman originated in Botticelli’s workshop around 1480.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct agreement match: Croft cites 1480 workshop studies; Rostova explicitly "agrees that the portrait originated in Botticelli’s 1480 workshop".' },
      { id: 'B', text: 'Filippino Lippi painted the entire portrait without Botticelli’s involvement.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Neither author claims Lippi painted the entire portrait alone.' },
      { id: 'C', text: 'Infrared reflectography is an unreliable method for analyzing underdrawings.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Croft relies on reflectography and Rostova does not discredit it.' },
      { id: 'D', text: 'Sandro Botticelli personally executed every pigment layer in the drapery folds.', isCorrect: false, trapType: 'Right Passage, Wrong Author', fatalFlawReason: 'PROVABLY WRONG: This is Croft\'s view, but Rostova disagrees (crediting Lippi).' }
    ],
    expertWalkthrough: 'Point of Agreement: Both authors agree the painting originated in Botticelli\'s 1480 workshop. Choice A matches.',
    cheatWalkthrough: {
      fingerCoverPrediction: 'Agreement point: The painting came from Botticelli\'s 1480 workshop.',
      scopeAnalysis: 'P1: Botticelli 1480 workshop. P2: "agrees that the portrait originated in Botticelli\'s 1480 workshop".',
      optionTraps: [
        { optionId: 'A', trapName: 'Correct Choice', reasoning: 'Exact point of explicit agreement between both scholars.' },
        { optionId: 'B', trapName: 'Out of Scope', reasoning: 'Neither author claims Lippi painted the whole portrait.' },
        { optionId: 'C', trapName: 'Opposite', reasoning: 'Reflectography is trusted by Croft and not disputed by Rostova.' },
        { optionId: 'D', trapName: 'Right Passage, Wrong Author', reasoning: 'Only Croft holds this view; Rostova credits Lippi for drapery.' }
      ]
    }
  }
];


// ---------------------------------------------------------------------------
// SECTION 2: STRICT TEST CONDITION MOCK EXAM (20 QUESTIONS - NO CHEAT BUTTON)
// ---------------------------------------------------------------------------
export const STRICT_EXAM_QUESTIONS: MockExamQuestion[] = [
  // 1. Words in Context
  {
    id: 'strict-1',
    archetypeId: 'words-in-context',
    archetypeTitle: 'Words in Context',
    title: 'Microbial Ecology',
    passage: 'While early soil microbiologists viewed soil fungi as uniform organismic mats, high-resolution DNA sequencing reveals that fungal colonies are remarkably ________, exhibiting distinct genetic variations across millimeter distances.',
    questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'heterogeneous', isCorrect: true, fatalFlawReason: 'CORRECT: "Heterogeneous" means diverse or varied in composition, contrasting with "uniform mats".' },
      { id: 'B', text: 'homogeneous', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Homogeneous" means uniform, the exact opposite of exhibiting distinct variations.' },
      { id: 'C', text: 'redundant', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Redundant" means unnecessary or repetitive, not relevant to genetic diversity.' },
      { id: 'D', text: 'ephemeral', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Ephemeral" means short-lived.' }
    ],
    expertWalkthrough: 'Contrast clue: "While early microbiologists viewed soil fungi as uniform... sequencing reveals colonies are remarkably [ _____ ] (heterogeneous)".',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-2',
    archetypeId: 'words-in-context',
    archetypeTitle: 'Words in Context',
    title: 'Economic Regulation',
    passage: 'The central bank governor’s statement was intended to ________ financial market volatility, reassuring investors with pledges of steady interest rates and liquidity support.',
    questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'allay', isCorrect: true, fatalFlawReason: 'CORRECT: "Allay" means to diminish or soothe fear/volatility, matching "reassuring investors".' },
      { id: 'B', text: 'instigate', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Instigate" means to incite or provoke.' },
      { id: 'C', text: 'corroborate', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Corroborate" means to confirm evidence.' },
      { id: 'D', text: 'obfuscate', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Obfuscate" means to confuse or render obscure.' }
    ],
    expertWalkthrough: 'Clue: "reassuring investors with pledges of steady rates". Target word: "allay" (soothe/calm).',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-3',
    archetypeId: 'words-in-context',
    archetypeTitle: 'Words in Context',
    title: 'Literary Critique',
    passage: 'Her essay did not merely summarize the poem’s surface themes; rather, it provided a ________ analysis that uncovered subtle structural metaphors and historical allegories.',
    questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'incisive', isCorrect: true, fatalFlawReason: 'CORRECT: "Incisive" means intelligently analytical and clear-thinking, contrasting with surface summary.' },
      { id: 'B', text: 'superficial', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Superficial" means shallow, synonymous with surface summary.' },
      { id: 'C', text: 'cursory', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Cursory" means hasty and detailed-lacking.' },
      { id: 'D', text: 'dogmatic', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Dogmatic" means asserting opinionated principles as indisputable truth.' }
    ],
    expertWalkthrough: 'Contrast clue: "did not merely summarize... surface themes; rather, it provided a [ _____ ] (incisive) analysis".',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },

  // 2. Central Ideas & Details
  {
    id: 'strict-4',
    archetypeId: 'central-ideas-details',
    archetypeTitle: 'Central Ideas & Details',
    title: 'Mangrove Coastal Protection',
    passage: 'Mangrove forests act as vital coastal bio-shields, reducing storm surge wave energy by up to 66% across 100 meters of forest width. Beyond physical wave attenuation, mangrove root systems trap fine sediments, preventing coastal erosion and building soil elevations that keep pace with sea-level rise. Consequently, marine ecologists advocate for mangrove restoration as a dual-purpose defense strategy protecting human infrastructure while preserving estuarine biodiversity.',
    questionStem: 'Which choice best states the central idea of the text?',
    options: [
      { id: 'A', text: 'Mangrove restoration provides a dual-purpose coastal defense that mitigates wave erosion and preserves marine biodiversity.', isCorrect: true, fatalFlawReason: 'CORRECT: Full scope match: wave attenuation + sediment trapping + biodiversity preservation = dual-purpose defense.' },
      { id: 'B', text: 'Mangrove roots are the only natural structures capable of trapping fine ocean sediments.', isCorrect: false, trapType: 'Too Extreme', fatalFlawReason: 'PROVABLY WRONG: "Only natural structures" is extreme and unmentioned.' },
      { id: 'C', text: 'Storm surge wave energy is reduced by exactly 66% in all coastal regions worldwide.', isCorrect: false, trapType: 'Too Extreme', fatalFlawReason: 'PROVABLY WRONG: Text stated "by up to 66% across 100 meters", not exactly 66% everywhere.' },
      { id: 'D', text: 'Coastal infrastructure is severely threatened by rising global sea levels.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Background premise detail, missing the central thesis on mangrove restoration.' }
    ],
    expertWalkthrough: 'Umbrella Test: The text concludes mangrove restoration is a "dual-purpose defense strategy protecting human infrastructure while preserving estuarine biodiversity". Choice A.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-5',
    archetypeId: 'central-ideas-details',
    archetypeTitle: 'Central Ideas & Details',
    title: 'Urban Soundscape Noise',
    passage: 'Urban soundscape ecology examines how anthropogenic noise alters wildlife behavior. Studies show that European robins in noisy city centers shift their singing schedules to night hours when traffic subsides. While night singing avoids acoustic masking, it increases energy expenditure and predation risks, demonstrating that behavioral adaptations to urban noise involve significant ecological trade-offs.',
    questionStem: 'Which choice best states the main idea of the text?',
    options: [
      { id: 'A', text: 'Robins’ behavioral adaptation of nocturnal singing in response to urban noise involves costly ecological trade-offs.', isCorrect: true, fatalFlawReason: 'CORRECT: Full scope match: shift to night singing to avoid noise carries energy and predation trade-offs.' },
      { id: 'B', text: 'Traffic noise in city centers completely prevents robins from communicating during daylight hours.', isCorrect: false, trapType: 'Too Extreme', fatalFlawReason: 'PROVABLY WRONG: "Completely prevents" is an extreme exaggeration.' },
      { id: 'C', text: 'European robins prefer night singing over day singing regardless of urban environment conditions.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Night singing was a response to traffic noise, not an innate preference.' },
      { id: 'D', text: 'Anthropogenic noise is the primary cause of bird population declines in European cities.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Unmentioned claim about overall population declines.' }
    ],
    expertWalkthrough: 'Umbrella Test: The text concludes "demonstrating that behavioral adaptations to urban noise involve significant ecological trade-offs". Choice A matches.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },

  // 3. Command of Evidence (Textual & Scientific)
  {
    id: 'strict-6',
    archetypeId: 'command-of-evidence-textual',
    archetypeTitle: 'Command of Evidence (Textual & Scientific)',
    title: 'Glacial Melt Bacteria',
    passage: 'Microbiologist Dr. Hiroshi Sato hypothesized that psychrophilic bacteria isolated from subglacial lakes under the Antarctic ice sheet synthesize specialized ice-binding proteins that prevent intracellular ice crystal formation during sub-zero freezing events.',
    questionStem: 'Which finding, if true, would most directly support Dr. Sato’s hypothesis?',
    options: [
      { id: 'A', text: 'Subglacial lake bacteria expressing ice-binding proteins maintained 94% cell membrane integrity during -15°C freezing, whereas mutant strains lacking the proteins suffered catastrophic intracellular ice rupture.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct match: expressing ice-binding protein → no ice rupture vs mutant strain suffering ice rupture.' },
      { id: 'B', text: 'Subglacial lakes contain high concentrations of dissolved mineral salts and dissolved organic carbon.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Lake mineral content is irrelevant to bacterial ice-binding protein function.' },
      { id: 'C', text: 'Psychrophilic bacteria reproduce more rapidly at 4°C than at sub-zero temperatures.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Growth rate at 4°C does not prove ice-binding protein protection against freezing.' },
      { id: 'D', text: 'Bacteria lacking ice-binding proteins exhibited higher survival rates in sub-zero ice than bacteria with the proteins.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Directly refutes Sato\'s hypothesis.' }
    ],
    expertWalkthrough: 'Hypothesis: Ice-binding proteins → prevent cell ice crystal formation during sub-zero freezing. Choice A matches.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-7',
    archetypeId: 'command-of-evidence-textual',
    archetypeTitle: 'Command of Evidence (Textual & Scientific)',
    title: 'Ocean Acidification Coral Recovery',
    passage: 'Marine biologist Dr. Maya Lin hypothesized that coral colonies in high-upwelling coastal zones exhibit higher thermal tolerance to marine heatwaves because frequent exposure to fluctuating pH levels upregulates heat-shock protein gene expression.',
    questionStem: 'Which finding, if true, would most directly support Dr. Lin’s hypothesis?',
    options: [
      { id: 'A', text: 'Corals in high-upwelling zones exhibited elevated baseline heat-shock protein levels and suffered 60% less bleaching during heatwaves than corals in stable pH zones.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct match: high upwelling + elevated heat-shock protein = 60% less bleaching in heatwaves.' },
      { id: 'B', text: 'Marine heatwaves cause coral bleaching across tropical reef systems worldwide.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: General background fact, failing to support the upwelling/protein hypothesis.' },
      { id: 'C', text: 'Upwelling coastal zones contain higher nutrient concentrations than lagoon reefs.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Nutrient concentrations are unrelated to heat-shock protein gene expression.' },
      { id: 'D', text: 'Corals in stable pH zones expressed higher heat-shock protein levels than corals in upwelling zones.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Contradicts Lin\'s hypothesis that upwelling zones upregulate the protein.' }
    ],
    expertWalkthrough: 'Hypothesis: High-upwelling pH fluctuations → heat-shock protein upregulation → higher thermal tolerance. Choice A.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },

  // 4. Command of Evidence (Quantitative)
  {
    id: 'strict-8',
    archetypeId: 'command-of-evidence-quantitative',
    archetypeTitle: 'Command of Evidence (Quantitative)',
    title: 'Global Semiconductor Market Share',
    passage: 'Economist Dr. Sophia Vance analyzed global semiconductor foundry revenue from 2021 to 2024. Vance asserted that while Region A maintained the highest market share in advanced sub-5nm chips, Region B experienced the fastest percentage growth rate in mature node (28nm+) chip production over the four-year period.',
    chartData: {
      title: 'Semiconductor Foundry Revenue Growth (2021 vs 2024)',
      headers: ['Region', 'Sub-5nm Share (2024)', 'Mature Node 2021 ($B)', 'Mature Node 2024 ($B)'],
      rows: [
        ['Region A', '62%', '$18.0', '$22.5'],
        ['Region B', '18%', '$4.0', '$12.0'],
        ['Region C', '12%', '$8.0', '$10.4'],
        ['Region D', '8%', '$5.0', '$6.0']
      ],
      caption: 'Data source: Global Semiconductor Industry Association Reports.'
    },
    questionStem: 'Which choice uses data from the table to support Dr. Vance’s assertion?',
    options: [
      { id: 'A', text: 'Region A held 62% of the sub-5nm market in 2024, but Region B’s mature node revenue grew by 200% (from $4.0B to $12.0B), outpacing Region A’s 25% growth.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct table match! Region A sub-5nm share highest (62%), Region B mature growth = +200% ($4B to $12B) vs Region A +25% ($18B to $22.5B).' },
      { id: 'B', text: 'Region A produced $22.5 billion in mature node revenue in 2024, generating a higher dollar total than Region B’s $12.0 billion.', isCorrect: false, trapType: 'Accurate Chart Data, Wrong Argument', fatalFlawReason: 'PROVABLY WRONG: True dollar data, but Vance asserted Region B had the fastest PERCENTAGE GROWTH RATE, not higher total revenue.' },
      { id: 'C', text: 'Region C generated $10.4 billion in mature node revenue in 2024, exceeding Region D’s $6.0 billion.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Region C vs D comparison is irrelevant to Vance\'s assertion about Region A and B.' },
      { id: 'D', text: 'Region B held a 62% market share in sub-5nm chips in 2024.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Factually false! Region A held 62%; Region B held 18%.' }
    ],
    expertWalkthrough: 'Vance assertion: Region A highest sub-5nm share (62%); Region B highest % growth in mature nodes (+200%). Choice A confirms both.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-9',
    archetypeId: 'command-of-evidence-quantitative',
    archetypeTitle: 'Command of Evidence (Quantitative)',
    title: 'Electric Vehicle Battery Chemistry',
    passage: 'Battery researcher Dr. Liam Patel compared energy density and manufacturing cost metrics across three lithium-ion battery chemistries (LFP, NMC-622, and NMC-811). Patel argued that while NMC-811 provides the highest volumetric energy density (Wh/L), LFP remains the most cost-effective chemistry per kilowatt-hour ($/kWh).',
    chartData: {
      title: 'Battery Chemistry Performance Metrics (2024)',
      headers: ['Chemistry', 'Energy Density (Wh/L)', 'Cell Cost ($/kWh)', 'Cycle Life (Cycles)'],
      rows: [
        ['NMC-811', '680', '$135', '1,500'],
        ['NMC-622', '580', '$120', '2,000'],
        ['LFP', '420', '$85', '3,500']
      ],
      caption: 'Data evaluated across standardized automotive test packs.'
    },
    questionStem: 'Which choice uses data from the table to support Dr. Patel’s argument?',
    options: [
      { id: 'A', text: 'NMC-811 achieved the highest energy density at 680 Wh/L, whereas LFP recorded the lowest cell cost at $85/kWh compared to $135/kWh for NMC-811.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct table match! NMC-811 energy density highest (680 Wh/L) and LFP cost lowest ($85/kWh vs $135/kWh).' },
      { id: 'B', text: 'LFP batteries achieved a cycle life of 3,500 cycles, outperforming NMC-811’s 1,500 cycles.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: True cycle life data, but ignores the energy density and cell cost argument.' },
      { id: 'C', text: 'NMC-622 recorded a lower energy density than LFP in 2024 testing.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Factually false! NMC-622 (580 Wh/L) > LFP (420 Wh/L).' },
      { id: 'D', text: 'NMC-811 achieved a cell cost of $85/kWh, making it cheaper to produce than LFP.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Factually false! NMC-811 cost = $135/kWh; LFP cost = $85/kWh.' }
    ],
    expertWalkthrough: 'Patel claim: NMC-811 highest energy density (680 Wh/L), LFP lowest cell cost ($85/kWh). Choice A confirms both.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },

  // 5. Inferences & Logical Completion
  {
    id: 'strict-10',
    archetypeId: 'inferences-logical-completion',
    archetypeTitle: 'Inferences & Logical Completion',
    title: 'Volcanic Eruption Aerosols',
    passage: 'Atmospheric scientists analyzing ice core samples following the 1815 Tambora eruption noted that sulfate aerosol injection into the stratosphere reduced global surface temperatures by 0.7°C for two consecutive years. Recent climate modeling indicates that high-latitude volcanic eruptions inject aerosols into lower stratospheric altitudes than equatorial eruptions do, causing aerosols to settle out of the atmosphere twice as fast. Therefore, scientists infer that high-latitude eruptions ________',
    questionStem: 'Which choice most logically completes the text?',
    options: [
      { id: 'A', text: 'produce shorter-lived global surface cooling effects than equatorial eruptions of comparable magnitude.', isCorrect: true, fatalFlawReason: 'CORRECT: Conservative baby step: Aerosols settle out twice as fast → shorter-lived cooling effect.' },
      { id: 'B', text: 'cause permanent climate warming by trapping longwave thermal radiation.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Sulfate aerosols cause cooling, not permanent warming.' },
      { id: 'C', text: 'completely eliminate ozone layer depletion in polar regions.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Ozone layer depletion is unmentioned in text.' },
      { id: 'D', text: 'trigger immediate volcanic activity in neighboring equatorial fault lines.', isCorrect: false, trapType: 'The Hollywood Twist', fatalFlawReason: 'PROVABLY WRONG: Wild speculative leap that atmospheric aerosols trigger volcanic eruptions elsewhere.' }
    ],
    expertWalkthrough: 'Premise 1: Aerosol injection causes cooling. Premise 2: High-latitude aerosols settle twice as fast. Conclusion: High-latitude eruptions cause shorter-lived cooling. Choice A.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-11',
    archetypeId: 'inferences-logical-completion',
    archetypeTitle: 'Inferences & Logical Completion',
    title: 'Antibiotic Resistance Enzymes',
    passage: 'Bacterial strains expressing the NDM-1 gene synthesize carbapenemase enzymes that hydrolyze beta-lactam antibiotic rings, rendering penicillin and carbapenem drugs ineffective. However, biochemists synthesized Compound X-7, a competitive inhibitor that binds irreversibly to NDM-1 enzyme active sites without harming human cellular tissue. In clinical trials combining carbapenem antibiotics with Compound X-7, resistant bacterial cultures ________',
    questionStem: 'Which choice most logically completes the text?',
    options: [
      { id: 'A', text: 'regained susceptibility to carbapenem antibiotics as NDM-1 enzyme activity was blocked.', isCorrect: true, fatalFlawReason: 'CORRECT: Inescapable baby step: Compound X-7 blocks NDM-1 → enzyme can\'t break antibiotics → bacteria become susceptible again.' },
      { id: 'B', text: 'mutated to produce human cellular tissue in response to Compound X-7.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Absurd biological claim that bacteria produce human tissue.' },
      { id: 'C', text: 'developed complete immunity to all known non-antibiotic chemical compounds.', isCorrect: false, trapType: 'The Hollywood Twist', fatalFlawReason: 'PROVABLY WRONG: Wild speculative leap.' },
      { id: 'D', text: 'hydrolyzed Compound X-7 more rapidly than carbapenem drugs.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Contradicts premise that Compound X-7 irreversibly binds and inhibits NDM-1.' }
    ],
    expertWalkthrough: 'Baby Step Rule: NDM-1 breaks antibiotics. Compound X-7 blocks NDM-1. Antibiotics + X-7 = bacteria become susceptible again. Choice A.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },

  // 6. Text Structure & Purpose
  {
    id: 'strict-12',
    archetypeId: 'text-structure-purpose',
    archetypeTitle: 'Text Structure & Purpose',
    title: 'Epigenetic Inheritance Debate',
    passage: 'Paragraph 1: For decades, evolutionary biologists asserted that epigenetic marks acquired during an organism’s lifetime were completely erased during germline reprogramming, preventing transgenerational inheritance of acquired traits.\n\nParagraph 2: However, recent mammalian studies demonstrate that small non-coding RNAs in sperm cells survive reprogramming and transmit metabolic adaptations to offspring, demonstrating that non-genetic inheritance plays a functional role in evolutionary adaptation.',
    questionStem: 'Which choice best describes the function of Paragraph 2 in relation to Paragraph 1?',
    options: [
      { id: 'A', text: 'It presents empirical evidence that refutes the long-held assumption described in Paragraph 1.', isCorrect: true, fatalFlawReason: 'CORRECT: Accurate structural map: P1 = long-held assumption of erasure; P2 = empirical evidence of RNA survival refuting P1.' },
      { id: 'B', text: 'It provides additional historical context supporting the consensus outlined in Paragraph 1.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: P2 refutes P1, rather than supporting P1.' },
      { id: 'C', text: 'It outlines a practical commercial application for the biological mechanism introduced in Paragraph 1.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: No commercial application mentioned.' },
      { id: 'D', text: 'It defines the molecular structure of non-coding RNA molecules.', isCorrect: false, trapType: 'Content vs. Function Confusion', fatalFlawReason: 'PROVABLY WRONG: Summarizes topic content rather than structural function.' }
    ],
    expertWalkthrough: 'P1: Long-held assumption (epigenetic marks erased). P2: Mammalian RNA studies refuting that assumption. Choice A.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-13',
    archetypeId: 'text-structure-purpose',
    archetypeTitle: 'Text Structure & Purpose',
    title: 'Urban Transportation History',
    passage: 'Historian Dr. David Miller examines the development of electric streetcars in early 20th-century American cities. Miller begins by outlining the widespread enthusiasm among urban planners who viewed streetcars as a permanent solution to city congestion. He then details how suburban sprawl, automobile mass production, and municipal transit bankruptcies dismantled streetcar networks by 1950. Finally, Miller considers how contemporary light-rail projects draw architectural inspiration from these historic streetcar routes.',
    questionStem: 'Which choice best describes the overall structure of the text?',
    options: [
      { id: 'A', text: 'It outlines initial optimism for an urban transit innovation, details the factors that led to its decline, and notes its influence on modern transit projects.', isCorrect: true, fatalFlawReason: 'CORRECT: Matches 3-part macro structure: 1) Initial enthusiasm, 2) Decline factors (autos/sprawl), 3) Modern light-rail influence.' },
      { id: 'B', text: 'It compares electric streetcars with modern automobiles and argues that streetcars were economically superior.', isCorrect: false, trapType: 'Content vs. Function Confusion', fatalFlawReason: 'PROVABLY WRONG: Focuses on topic comparison rather than structural progression.' },
      { id: 'C', text: 'It details a financial bankruptcy trial and evaluates municipal legal statutes.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: No legal trials or statutes discussed.' },
      { id: 'D', text: 'It describes the mechanical engineering design of early electric streetcar motors.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Mechanical motor design is unmentioned.' }
    ],
    expertWalkthrough: 'Macro structure: 1) Initial enthusiasm (P1) → 2) Factors of decline (P2) → 3) Modern light-rail influence (P3). Choice A.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },

  // 7. Cross-Text Connections (Dual Passages)
  {
    id: 'strict-14',
    archetypeId: 'cross-text-connections',
    archetypeTitle: 'Cross-Text Connections',
    title: 'Rewilding Apex Predators',
    passage: `Passage 1:
Ecological rewilding programs that reintroduce apex predators, such as wolves to river valleys, generate top-down trophic cascades that restore ecosystem balance. By controlling herbivore populations, wolves prevent overgrazing of riparian vegetation, stabilizing riverbanks and creating habitats for songbirds and beavers.

Passage 2:
While reintroducing predators can alter local herbivore behavior, ecologist Dr. Karen Voss cautions that attributing entire riverbank stabilization to wolves oversimplifies complex hydrology. Longitudinal stream data reveals that regional precipitation shifts and sediment flow dynamics played a far greater role in riverbank recovery than predator reintroduction alone.`,
    questionStem: 'Based on the passages, how would Dr. Voss (Passage 2) most likely respond to the claim in Passage 1?',
    options: [
      { id: 'A', text: 'By asserting that Passage 1 overestimates the impact of wolf reintroduction while ignoring physical hydrological and precipitation factors.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct match for Voss\'s critique: Passage 1 oversimplifies by ignoring precipitation shifts and sediment dynamics.' },
      { id: 'B', text: 'By agreeing that apex predators are the primary driver of riverbank stabilization in all river valleys.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Voss explicitly disagrees that wolves were the primary driver.' },
      { id: 'C', text: 'By claiming that wolf reintroduction caused total collapse of beaver and songbird populations.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Voss does not claim wolf reintroduction collapsed songbird populations.' },
      { id: 'D', text: 'By stating that wolves prevent overgrazing of riparian vegetation.', isCorrect: false, trapType: 'Right Passage, Wrong Author', fatalFlawReason: 'PROVABLY WRONG: States Passage 1\'s premise rather than Dr. Voss\'s response!' }
    ],
    expertWalkthrough: 'P1: Wolves cause top-down riverbank recovery. P2: Attribute recovery solely to wolves oversimplifies hydrology and climate. Choice A.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-15',
    archetypeId: 'cross-text-connections',
    archetypeTitle: 'Cross-Text Connections',
    title: 'Universal Basic Income Experiments',
    passage: `Passage 1:
Universal Basic Income (UBI) trials demonstrate that unconditional cash transfers provide essential financial stability to low-income households without reducing overall labor market participation. Recipients utilize funds for education, healthcare, and debt reduction, fostering long-term economic mobility.

Passage 2:
Economist Dr. Alan Reyes argues that small-scale municipal UBI trials fail to model the macroeconomic impacts of national implementation. Funding a permanent national UBI would require substantial tax increases that could disincentivize high-earner productivity and trigger inflationary pressures across consumer goods markets.`,
    questionStem: 'Based on the passages, how does Dr. Reyes’s perspective in Passage 2 differ from Passage 1’s focus?',
    options: [
      { id: 'A', text: 'Dr. Reyes focuses on the potential macroeconomic risks and tax burdens of national UBI, whereas Passage 1 focuses on household-level financial stability in small trials.', isCorrect: true, fatalFlawReason: 'CORRECT: Accurately contrasts Passage 2 (macroeconomic risk/taxes) with Passage 1 (household stability in trials).' },
      { id: 'B', text: 'Dr. Reyes claims low-income households spend UBI transfers on luxury items.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Dr. Reyes does not mention luxury item spending.' },
      { id: 'C', text: 'Dr. Reyes advocates for replacing all public education funding with unconditional cash transfers.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Education replacement is unmentioned.' },
      { id: 'D', text: 'Dr. Reyes agrees that municipal UBI trials accurately simulate national economic outcomes.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Dr. Reyes explicitly states municipal trials FAIL to model national outcomes.' }
    ],
    expertWalkthrough: 'P1: Focuses on positive household stability in trials. P2: Focuses on national macroeconomic risks and tax burdens. Choice A.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },

  // 16 - 20: Final Comprehensive Questions Across Archetypes
  {
    id: 'strict-16',
    archetypeId: 'words-in-context',
    archetypeTitle: 'Words in Context',
    title: 'Historical Biography',
    passage: 'Rather than offering a ________ appraisal of the general’s wartime decisions, the biographer presented a balanced account that acknowledged both his tactical brilliance and his devastating strategic blunders.',
    questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'hagiographic', isCorrect: true, fatalFlawReason: 'CORRECT: "Hagiographic" means overly flattering/uncritical, contrasting with "balanced account acknowledging blunders".' },
      { id: 'B', text: 'equitable', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Equitable" means fair/balanced, matching the account rather than contrasting with "Rather than".' },
      { id: 'C', text: 'scrupulous', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Scrupulous" means diligent and attentive to details.' },
      { id: 'D', text: 'tentative', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Tentative" means hesitant or unconfirmed.' }
    ],
    expertWalkthrough: 'Contrast clue: "Rather than offering a [ _____ ] appraisal... biographer presented a balanced account". Target: "hagiographic" (uncritically flattering).',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-17',
    archetypeId: 'central-ideas-details',
    archetypeTitle: 'Central Ideas & Details',
    title: 'Deep-Sea Bioluminescent Lures',
    passage: 'Deep-sea dragonfish possess specialized suborbital photophores that emit far-red light invisible to most marine prey species. While most deep-sea organisms can only perceive blue-green light wavelengths, dragonfish synthesize visual pigments sensitive to 700-nanometer wavelengths. This unique bioluminescent channel allows dragonfish to illuminate prey and communicate with conspecifics without revealing their location to predators or targets.',
    questionStem: 'Which choice best states the main thesis of the text?',
    options: [
      { id: 'A', text: 'Far-red bioluminescence provides dragonfish with a covert illumination system invisible to most marine organisms.', isCorrect: true, fatalFlawReason: 'CORRECT: Full scope match: far-red photophores + invisible to prey/predators = covert illumination advantage.' },
      { id: 'B', text: 'Blue-green light is the only wavelength that can penetrate deep ocean waters.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Wavelength ocean penetration is unmentioned.' },
      { id: 'C', text: 'Suborbital photophores are found in all species of deep-sea marine life.', isCorrect: false, trapType: 'Too Extreme', fatalFlawReason: 'PROVABLY WRONG: "Found in all species" is an extreme exaggeration.' },
      { id: 'D', text: 'Dragonfish communicate with conspecifics using suborbital photophores.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: True detail from sentence 3, but misses the core thesis of covert illumination.' }
    ],
    expertWalkthrough: 'Umbrella Test: Sentence 3 concludes dragonfish illuminate prey and communicate "without revealing location". Choice A matches.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-18',
    archetypeId: 'command-of-evidence-textual',
    archetypeTitle: 'Command of Evidence (Textual & Scientific)',
    title: 'Soil Fungal Carbon Sequestration',
    passage: 'Ecologist Dr. Elena Rostova hypothesized that ectomycorrhizal fungal species sequester carbon in boreal forest soils more effectively than arbuscular mycorrhizal species because ectomycorrhizal fungi produce recalcitrant chitin-rich cell walls that resist microbial decomposition.',
    questionStem: 'Which finding, if true, would most directly support Dr. Rostova’s hypothesis?',
    options: [
      { id: 'A', text: 'Boreal forest plots dominated by ectomycorrhizal fungi contained 40% higher soil organic carbon stocks and exhibited significantly slower necromass decomposition rates than plots dominated by arbuscular fungi.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct match: ectomycorrhizal plots = 40% higher carbon stock + slower decomposition than arbuscular plots.' },
      { id: 'B', text: 'Arbuscular mycorrhizal fungi form symbiotic associations with agricultural crop plants.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Crop association is irrelevant to carbon sequestration in boreal forest soils.' },
      { id: 'C', text: 'Boreal forest soils experience freezing temperatures during winter months.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Winter temperatures do not compare fungal carbon sequestration.' },
      { id: 'D', text: 'Arbuscular fungi cell walls decomposed 50% slower than ectomycorrhizal chitin cell walls.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Directly refutes Rostova\'s hypothesis that ectomycorrhizal chitin resists decomposition.' }
    ],
    expertWalkthrough: 'Hypothesis: Ectomycorrhizal fungi → slower decomposition → higher soil carbon sequestration than arbuscular. Choice A matches.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-19',
    archetypeId: 'inferences-logical-completion',
    archetypeTitle: 'Inferences & Logical Completion',
    title: 'Avian Magnetoreception Cryptochromes',
    passage: 'Songbird retinas contain Cryptochrome 4 (Cry4) proteins that form radical pairs when exposed to blue light, functioning as a quantum compass. Biochemists engineered a Cry4 variant with mutated tryptophan residues that prevented radical pair formation upon blue light absorption. When migratory robins expressing this mutated Cry4 were tested in magnetic orientation cages under blue light, they ________',
    questionStem: 'Which choice most logically completes the text?',
    options: [
      { id: 'A', text: 'were unable to orient towards seasonal migratory directions, demonstrating that radical pair formation is necessary for magnetoreception.', isCorrect: true, fatalFlawReason: 'CORRECT: Inescapable baby step: Mutated Cry4 prevents radical pairs → compass fails → robins cannot orient.' },
      { id: 'B', text: 'oriented toward migratory routes with greater accuracy than wild-type robins.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Contradicts the premise that radical pair formation is required for compass function.' },
      { id: 'C', text: 'developed nocturnal vision capabilities equal to owls.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Absurd vision claim unsupported by text.' },
      { id: 'D', text: 'emitted blue light from their retinal tissue to navigate in dark cages.', isCorrect: false, trapType: 'The Hollywood Twist', fatalFlawReason: 'PROVABLY WRONG: Wild speculative leap.' }
    ],
    expertWalkthrough: 'Baby Step Rule: Cry4 radical pairs needed for compass. Mutated Cry4 stops radical pairs. Robins with mutated Cry4 cannot orient. Choice A.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  },
  {
    id: 'strict-20',
    archetypeId: 'cross-text-connections',
    archetypeTitle: 'Cross-Text Connections',
    title: 'Subterranean Carbon Sequestration',
    passage: `Passage 1:
Direct Air Capture (DAC) systems coupled with deep basaltic mineralization offer a permanent solution to climate change. Injecting CO2 dissolved in water into subterranean basalt formations triggers rapid chemical reactions that convert CO2 into solid carbonate minerals within two years, permanently locking away carbon.

Passage 2:
While basaltic mineralization permanently traps carbon, environmental engineer Dr. Maya Lin emphasizes that DAC plants require immense electrical energy and freshwater resources. Operating DAC at gigaton scale would consume up to 25% of global renewable energy output and divert critical freshwater supplies from agricultural regions.`,
    questionStem: 'Based on the passages, how would Dr. Lin (Passage 2) most likely respond to Passage 1’s portrayal of DAC mineralization as a "permanent solution"?',
    options: [
      { id: 'A', text: 'By pointing out that scaling DAC mineralization presents major energy and water resource constraints that Passage 1 fails to address.', isCorrect: true, fatalFlawReason: 'CORRECT: Accurately captures Dr. Lin\'s critique: DAC requires massive energy and freshwater resources at scale.' },
      { id: 'B', text: 'By denying that CO2 reacts with basalt to form solid carbonate minerals.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Dr. Lin concedes mineralization permanently traps carbon.' },
      { id: 'C', text: 'By asserting that DAC plants generate renewable electricity for agricultural regions.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Dr. Lin states DAC CONSUMES renewable energy and diverts water from agriculture.' },
      { id: 'D', text: 'By claiming that subterranean basalt formations convert CO2 into carbonate minerals within two years.', isCorrect: false, trapType: 'Right Passage, Wrong Author', fatalFlawReason: 'PROVABLY WRONG: States Passage 1\'s premise rather than Dr. Lin\'s resource critique!' }
    ],
    expertWalkthrough: 'P1: DAC basalt mineralization is a permanent solution. P2: Concedes permanent trapping, but warns of immense energy and freshwater constraints. Choice A.',
    cheatWalkthrough: { fingerCoverPrediction: '', scopeAnalysis: '', optionTraps: [] }
  }
];
