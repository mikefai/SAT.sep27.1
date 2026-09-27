import { 
  QuestionArchetype, 
  TrapDetectorItem, 
  VocabPredictorItem, 
  TurkishCognateItem,
  SecondaryDefinitionItem,
  TransitionSignalGroup, 
  QuestionStemTranslation 
} from '../types/sat';

// High-Frequency SAT Secondary Definitions & Turkish Comparison Data
export const SECONDARY_DEFINITION_ITEMS: SecondaryDefinitionItem[] = [
  {
    word: 'Qualify',
    primaryMeaning: 'To pass an official exam or meet requirements for a role (Sınavı geçmek, nitelik kazanmak).',
    satSecondaryMeaning: 'To limit, moderate, or restrict a claim (Bir iddiaya sınır getirmek, şerh düşmek).',
    satExample: 'The researcher qualified her optimism by emphasizing that the trial sample size was very small.',
    turkishComparison: {
      turkishWord: 'Şerh Düşmek / Sınırlamak',
      turkishSecondaryUsage: 'Türkçede "Haklısın ama..." diyerek bir düşünceye sınır koymaya / şerh düşmeye benzer.',
      bridgeExplanation: 'SAT\'ta "qualify an argument" kalıbı göründüğünde %90 ihtimalle yazar iddiayı tamamen reddetmiyor; sadece belli bir sınır veya şart getiriyordur.'
    }
  },
  {
    word: 'Compromise',
    primaryMeaning: 'To reach a mutual agreement by making concessions (Uzlaşmak, karşılıklı anlaşmak).',
    satSecondaryMeaning: 'To weaken, endanger, or expose to risk (Zayıflatmak, riske atmak, bütünlüğünü bozmak).',
    satExample: 'The structural integrity of the suspension bridge was compromised by decades of saltwater corrosion.',
    turkishComparison: {
      turkishWord: 'Kompromite Etmek / Riske Atmak',
      turkishSecondaryUsage: 'Türkçe tıbbi ve güvenlik dilinde "Bağışıklık sistemi kompromite oldu" (zayıfladı/riske girdi) denir.',
      bridgeExplanation: 'SAT\'ta bir sistem, köprü, güvenlik veya sağlık "compromised" olduysa uzlaşmadı; zayıfladı veya zarar gördü.'
    }
  },
  {
    word: 'Plastic / Plasticity',
    primaryMeaning: 'Synthetic polymer material (Sentetik plastik materyal).',
    satSecondaryMeaning: 'Flexible, adaptable, capable of being shaped or molded (Esnek, şekil alabilir).',
    satExample: 'Recent neurological studies demonstrate that the human brain remains plastic well into adulthood.',
    turkishComparison: {
      turkishWord: 'Plastisite / Esneklik',
      turkishSecondaryUsage: 'Türkçe psikoloji ve tıpta "Nöro-plastisite" (beynin esnekliği ve şekil alabilirliği) olarak aynen kullanılır.',
      bridgeExplanation: 'SAT metninde bir zihin, sanat veya organ "plastic" ise sentetik madde değil; esnek ve değişime açık demektir.'
    }
  },
  {
    word: 'Pedestrian',
    primaryMeaning: 'A person walking along a street (Yaya).',
    satSecondaryMeaning: 'Dull, ordinary, uninspired, or lacking imagination (Sıradan, monoton, renksiz).',
    satExample: 'The art critic dismissed the painter’s new exhibit as disappointing and pedestrian.',
    turkishComparison: {
      turkishWord: 'Sıradan / Yavan / Renksiz',
      turkishSecondaryUsage: 'Türkçede mecazi olarak "yaya kalmak" veya "ayağa düşmek" deyimlerindeki gibi sıradanlaşmış durumları çağrıştırır.',
      bridgeExplanation: 'SAT edebiyat pasajında bir üslup veya tablo "pedestrian" olarak tanımlanırsa yaya değil; çok basit ve heyecansız demektir.'
    }
  }
];

export const ARCHETYPES: QuestionArchetype[] = [
  {
    id: 'words-in-context',
    number: 1,
    title: 'Words in Context',
    subtitle: 'Vocabulary & Contextual Precision',
    iconName: 'BookOpen',
    theIssue: 'Panicking when seeing obscure words or getting stuck between two subtle synonyms.',
    theMethod: 'The Finger Cover Trick: Cover the choices with your hand, read context clues and direction transitions, write down your own simple replacement word, then match tone/definition.',
    methodSteps: [
      { step: '1. Cover the Choices', detail: 'Do NOT look at A, B, C, D first. Your brain will retroactively force wrong choices to sound right.' },
      { step: '2. Find Context Clues & Transitions', detail: 'Underline key adjectives, cause-effect pairs, or contrast words (e.g. "however", "similarly").' },
      { step: '3. Predict a Simple Word', detail: 'Write down a simple 5th-grade word (e.g., "useful", "hidden", "changed") that fits the sentence perfectly.' },
      { step: '4. Match Tone & Precision', detail: 'Uncover choices and pick the word that matches the EXACT meaning and formal academic tone of your prediction.' }
    ],
    trapsToFlag: [
      { 
        name: 'Secondary Definitions', 
        description: 'Using a word\'s primary dictionary meaning when the passage demands an uncommon academic secondary meaning.', 
        example: '1) "Qualify" = limit/restrict ("He qualified his praise").\n2) "Compromise" = weaken/endanger ("Immune system was compromised").\n3) "Plastic" = flexible/adaptable ("Brain plasticity").\n4) "Pedestrian" = dull/uninspired ("Pedestrian writing style").\n5) "Check" = restrain/stop ("Check the spread of disease").' 
      },
      { 
        name: 'Sound-Alikes & Smart Words', 
        description: 'Choices that sound sophisticated or look like the target word but have completely unrelated definitions.', 
        example: '1) "Ingenuous" (naive/candid) vs. "Ingenious" (clever/inventive).\n2) "Disinterested" (impartial/unbiased) vs. "Uninterested" (bored/not caring).\n3) "Appraise" (evaluate/assess value) vs. "Apprise" (inform/notify).\n4) "Complement" (complete/pair well with) vs. "Compliment" (praise/flatter).\n5) "Precede" (come before in time) vs. "Proceed" (continue forward).' 
      },
      { 
        name: 'Wrong Tone / Intensity', 
        description: 'Words with the correct general direction but way too aggressive or casual for academic prose.', 
        example: 'Using "devastated" when the text describes mild disappointment.' 
      }
    ],
    proTip: 'If you can replace the blank with your simple prediction word and the sentence retains 100% of its logical flow, any choice that alters that logic is provably wrong.',
    questions: [
      {
        id: 'wic-1',
        archetypeId: 'words-in-context',
        archetypeTitle: 'Words in Context',
        title: 'Ecological Restoration Dynamics',
        passage: 'In urban ecology, restoring native plant species to heavily industrialized soil often presents severe chemical obstacles. Far from being ________, native wildflowers require precise pH levels and mineral ratios that took centuries to establish prior to industrial contamination.',
        questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
        targetWord: '________',
        options: [
          { id: 'A', text: 'adaptable', isCorrect: true, fatalFlawReason: 'CORRECT: Matches the context clue "far from being [easy to adjust/thrive in bad soil]". The text states they require precise, rare conditions, meaning they are NOT easily adaptable.' },
          { id: 'B', text: 'prestigious', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Prestigious" refers to high status or renown, which has no logical relevance to plant growth or soil chemistry.' },
          { id: 'C', text: 'deleterious', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Deleterious" means harmful. Saying wildflowers are "far from being harmful" contradicts the focus on soil requirements.' },
          { id: 'D', text: 'intricate', isCorrect: false, trapType: 'Sound-Alike / Distractor', fatalFlawReason: 'PROVABLY WRONG: "Intricate" means complex. The wildflowers actually ARE complex/exacting in their needs, so saying they are "far from being complex" is incorrect.' }
        ],
        expertWalkthrough: 'Finger Cover Step: Cover choices. Context clue: "require precise pH levels and mineral ratios... far from being [flexible/easy]". Your prediction: "flexible" or "easy-going". "Adaptable" is an exact match for flexible.'
      },
      {
        id: 'wic-2',
        archetypeId: 'words-in-context',
        archetypeTitle: 'Words in Context',
        title: 'Literary History: The Novella',
        passage: 'While 19th-century critics initially dismissed serialized novellas as fleeting entertainment, modern literary scholars now ________ the form, citing its crucial role in shaping the modern psychological novel.',
        questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
        options: [
          { id: 'A', text: 'extol', isCorrect: true, fatalFlawReason: 'CORRECT: "While... dismissed... modern scholars now [praise/value]". "Extol" means to praise highly.' },
          { id: 'B', text: 'subvert', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Subvert" means to undermine or destroy. Modern scholars appreciate the form\'s crucial role, so they wouldn\'t destroy it.' },
          { id: 'C', text: 'qualify', isCorrect: false, trapType: 'Secondary Definition', fatalFlawReason: 'PROVABLY WRONG: "Qualify" in academic prose means to limit or moderate a claim. Here scholars are elevating the novel, not limiting it.' },
          { id: 'D', text: 'fabricate', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Fabricate" means invent or forge falsely. Scholars are analyzing history, not faking it.' }
        ],
        expertWalkthrough: 'Contrast transition: "While... dismissed [negative], scholars now ________ [positive]". Prediction: "praise" or "celebrate". Match: "extol".'
      },
      {
        id: 'wic-3',
        archetypeId: 'words-in-context',
        archetypeTitle: 'Words in Context',
        title: 'Urban Architecture & Policy',
        passage: 'Rather than pursuing ideological urban planning models that ignore real-world budget constraints, city engineers adopted a strictly ________ strategy, prioritizing cost-effective repairs to existing bridges before funding ambitious new landmarks.',
        questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
        options: [
          { id: 'A', text: 'pragmatic', isCorrect: true, fatalFlawReason: 'CORRECT: "Pragmatic" means practical and realistic. Contrasts directly with "ideological models that ignore real-world constraints".' },
          { id: 'B', text: 'ostentatious', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Ostentatious" means showy or pretentious, which contradicts cost-effective bridge repairs.' },
          { id: 'C', text: 'dogmatic', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Dogmatic" means rigidly ideological, which is what the text said they avoided.' },
          { id: 'D', text: 'ephemeral', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Ephemeral" means short-lived, which has no logical fit.' }
        ],
        expertWalkthrough: 'Prediction: "practical" or "realistic". Match: "pragmatic" (Turkish cognate: pragmatik).'
      },
      {
        id: 'wic-4',
        archetypeId: 'words-in-context',
        archetypeTitle: 'Words in Context',
        title: 'Environmental Policy',
        passage: 'To ________ the catastrophic effects of coastal flooding, urban planners constructed bioswales and barrier reefs to absorb ocean surges before water reached residential streets.',
        questionStem: 'Which choice completes the text with the most logical and precise word or phrase?',
        options: [
          { id: 'A', text: 'mitigate', isCorrect: true, fatalFlawReason: 'CORRECT: "Mitigate" means to make less severe or lessen the damage, matching the function of barrier reefs.' },
          { id: 'B', text: 'exacerbate', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Exacerbate" means to make worse, the exact opposite of what barrier reefs do.' },
          { id: 'C', text: 'sanction', isCorrect: false, trapType: 'Secondary Definition', fatalFlawReason: 'PROVABLY WRONG: "Sanction" means to authorize or penalize, which doesn\'t apply to physical flood damage.' },
          { id: 'D', text: 'promulgate', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Promulgate" means to announce a law publicly.' }
        ],
        expertWalkthrough: 'Prediction: "reduce" or "lessen". Match: "mitigate".'
      }
    ]
  },

  {
    id: 'central-ideas-details',
    number: 2,
    title: 'Central Ideas & Details',
    subtitle: 'Main Thesis & Scope Control',
    iconName: 'Target',
    theIssue: 'Focusing on an interesting detail rather than the overarching thesis; bringing in outside knowledge.',
    theMethod: 'Topic Sentence + Conclusion Synthesis. Test the scope of each answer choice (Is it too broad? Too narrow? Too extreme?).',
    methodSteps: [
      { step: '1. Identify Core Subject & Claim', detail: 'Who or what is the passage about, and what is the author\'s primary assertion about it?' },
      { step: '2. Perform the Scope Check', detail: 'Discard choices that only describe a single sentence (Too Narrow) or generalize to all of humanity (Too Broad).' },
      { step: '3. Eliminate Outside Knowledge', detail: 'Never choose an answer just because it is scientifically true in real life. It must be explicitly anchored in the text.' }
    ],
    trapsToFlag: [
      { 
        name: 'True But Irrelevant (Detail Trap)', 
        description: 'An answer choice that states a 100% accurate fact mentioned in line 3, but fails to summarize the main point of the whole passage.', 
        example: 'Selecting "Bees collect nectar" as the main idea of an article about colony collapse disorder.' 
      },
      { 
        name: 'Too Extreme Scope', 
        description: 'Using absolute terms ("always", "never", "completely") when the text only expressed a conditional or partial opinion.', 
        example: 'Claiming a scientist "proved all past theories wrong" when she only modified one experiment.' 
      }
    ],
    proTip: 'The main idea must act as an umbrella. Every paragraph in the text must fit under that umbrella. If a choice only covers paragraph 1, it is a detail, not the central idea.',
    questions: [
      {
        id: 'cid-1',
        archetypeId: 'central-ideas-details',
        archetypeTitle: 'Central Ideas & Details',
        title: 'Deep-Sea Bioluminescence',
        passage: 'Deep-sea anglerfish inhabit regions of the ocean devoid of sunlight, relying on a luminescent esca (lure) populated by symbiotic bacteria to attract prey. While early marine biologists hypothesized that this luminescent organ evolved purely for predatory advantage, recent observations reveal that male anglerfish use species-specific flashing patterns to locate mates in the pitch-black bathypelagic zone. Thus, bioluminescence in anglerfish serves dual evolutionary functions essential for survival and reproduction.',
        questionStem: 'Which choice best states the main idea of the text?',
        options: [
          { id: 'A', text: 'Anglerfish bioluminescence facilitates both feeding and mating, serving multiple evolutionary purposes.', isCorrect: true, fatalFlawReason: 'CORRECT: Encompasses the entire arc—predatory lure (feeding) + mate selection (mating) = dual evolutionary functions.' },
          { id: 'B', text: 'Early marine biologists were entirely incorrect about the bioluminescent properties of deep-sea marine life.', isCorrect: false, trapType: 'Too Extreme', fatalFlawReason: 'PROVABLY WRONG: "Entirely incorrect" is too extreme. Early biologists correctly identified the predatory lure; recent findings simply added mating function.' },
          { id: 'C', text: 'Male anglerfish rely on species-specific flashing patterns to navigate pitch-black bathypelagic zones.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Too narrow! This is a supporting detail from the last sentence, missing the predatory function and overall thesis.' },
          { id: 'D', text: 'Anglerfish are the only organisms in the bathypelagic zone capable of generating bioluminescent light.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Unmentioned outside claim. The passage never states anglerfish are the "only" luminescent organisms.' }
        ],
        expertWalkthrough: 'Umbrella Test: The passage explicitly concludes with "serves dual evolutionary functions essential for survival and reproduction". Choice A captures both functions.'
      }
    ]
  },

  {
    id: 'command-of-evidence-textual',
    number: 3,
    title: 'Command of Evidence (Textual & Scientific)',
    subtitle: 'Isolating Claims & Variables',
    iconName: 'FileText',
    theIssue: 'Getting overwhelmed by dense academic research, complex hypotheses, or technical terminology.',
    theMethod: 'Isolate the exact claim formula: Hypothesis → Test Condition → Expected Outcome. Match the exact dependent & independent variables mentioned.',
    methodSteps: [
      { step: '1. State the Hypothesis in Plain English', detail: 'What specific prediction is the researcher trying to prove or disprove?' },
      { step: '2. Identify Key Variables', detail: 'What is being changed (Independent)? What is being measured (Dependent)?' },
      { step: '3. Match the Finding', detail: 'Find the choice that DIRECTLY supports or weakens the EXACT hypothesis, not a related topic.' }
    ],
    trapsToFlag: [
      { 
        name: 'Reverse Causality / Wrong Direction', 
        description: 'Providing evidence that shows Variable B causes Variable A when the hypothesis claimed A causes B.', 
        example: 'Claiming sleep loss causes stress when the hypothesis was that stress causes sleep loss.' 
      },
      { 
        name: 'Evidence for a Different Claim', 
        description: 'Evidence that is scientifically fascinating but supports a different claim than the one asked in the prompt.', 
        example: 'Proving trees grow faster in summer when the prompt asked for evidence about winter root preservation.' 
      }
    ],
    proTip: 'If a question asks which finding "most directly supports the hypothesis", the correct choice MUST show the exact expected outcome under the exact condition tested.',
    questions: [
      {
        id: 'coe-text-1',
        archetypeId: 'command-of-evidence-textual',
        archetypeTitle: 'Command of Evidence (Textual & Scientific)',
        title: 'Plant Mycorrhizal Networks',
        passage: 'Ecologist Dr. Elena Rostova hypothesized that mature oak trees actively transfer carbon nutrients to saplings during severe droughts via underground fungal networks (mycorrhizae), thereby increasing sapling survival rates compared to isolated saplings without fungal connections.',
        questionStem: 'Which finding, if true, would most directly support Dr. Rostova’s hypothesis?',
        options: [
          { id: 'A', text: 'During droughts, saplings connected to fungal networks linked to mature oaks exhibit significantly higher carbon isotope levels and survival rates than unconnected saplings.', isCorrect: true, fatalFlawReason: 'CORRECT: Direct match! Connected saplings during drought = higher carbon (transferred nutrient) + higher survival rate.' },
          { id: 'B', text: 'Fungal networks thrive in moist soil conditions and absorb mineral nitrogen from surrounding leaf litter.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Describes fungal nutrition in moist soil, but says nothing about mature oaks transferring carbon to saplings during droughts.' },
          { id: 'C', text: 'Mature oak trees absorb more carbon dioxide through their leaves during wet seasons than during drought periods.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Focuses on leaf carbon absorption in wet seasons, completely ignoring sapling transfers via fungi.' },
          { id: 'D', text: 'Drought conditions reduce the overall density of subterranean fungal spores in oak forest soils.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Weakens or complicates the hypothesis by suggesting fungal networks collapse during drought.' }
        ],
        expertWalkthrough: 'Hypothesis: Oaks transfer carbon via fungi to saplings in drought → higher sapling survival. Choice A matches all 3 components: drought + connected to oak via fungi + higher carbon + higher survival.'
      }
    ]
  },

  {
    id: 'command-of-evidence-quantitative',
    number: 4,
    title: 'Command of Evidence (Quantitative)',
    subtitle: 'Data Tables, Graphs & Axes Verification',
    iconName: 'BarChart3',
    theIssue: 'Misreading chart labels, axes, or legends; making unwarranted extrapolations beyond the data.',
    theMethod: 'Three-Point Verification: Check X/Y axes labels, units/percentages vs. raw counts, and exact numerical trends.',
    methodSteps: [
      { step: '1. Read Chart Titles & Axes Labels', detail: 'Never jump into numbers before reading what X and Y represent and checking the unit scale (e.g. thousands vs. percentages).' },
      { step: '2. Read the Author\'s Written Claim', detail: 'Underline the specific sentence in the text that needs numerical evidence.' },
      { step: '3. Verify Data Coordinates', detail: 'Locate the exact row/bar referenced in each choice and cross-verify with the chart.' }
    ],
    trapsToFlag: [
      { 
        name: 'Percentages vs. Absolute Numbers Trap', 
        description: 'Confusing a high percentage with a high total count (or vice versa).', 
        example: 'Selecting a choice claiming "Group X had the most participants" when the graph only shows "Group X had the highest growth percentage".' 
      },
      { 
        name: 'Accurate Chart Data, Wrong Argument', 
        description: 'The numbers in the choice accurately reflect the chart, but do NOT support the author\'s specific written argument in the text.', 
        example: 'Stating sales increased in 2022 when the text is trying to explain why sales fell in 2023.' 
      }
    ],
    proTip: 'Treat quantitative choices like math equations. If a choice says "Group A was higher than Group B in 2020", check the 2020 column. If A <= B, strike it out immediately.',
    questions: [
      {
        id: 'coe-quant-1',
        archetypeId: 'command-of-evidence-quantitative',
        archetypeTitle: 'Command of Evidence (Quantitative)',
        title: 'Avian Migratory Patterns',
        passage: 'Researcher Dr. Sarah Chen investigated how urban light pollution affects the migratory timing of three songbird species (Warblers, Sparrows, and Finches). Chen argued that higher artificial light at night (ALAN) causes birds to initiate spring migration earlier than normal, but that this effect is significantly more pronounced in foliage-dwelling species like Warblers than in ground-foraging species like Sparrows.',
        chartData: {
          title: 'Spring Migration Departure Advancement by Light Exposure Level',
          headers: ['Species', 'Low Light (Days Early)', 'Moderate Light (Days Early)', 'High Light (Days Early)'],
          rows: [
            ['Warblers (Foliage)', '2.1', '5.4', '9.8'],
            ['Finches (Canopy)', '1.5', '3.8', '6.2'],
            ['Sparrows (Ground)', '0.8', '1.9', '3.1']
          ],
          caption: 'Data shows mean departure advancement in days relative to dark sky baseline.'
        },
        questionStem: 'Which choice uses data from the table to most effectively support Dr. Chen’s argument?',
        options: [
          { id: 'A', text: 'Under High Light conditions, Warblers initiated migration 9.8 days earlier than baseline, whereas Sparrows initiated migration only 3.1 days earlier.', isCorrect: true, fatalFlawReason: 'CORRECT: Directly supports BOTH parts of Chen\'s claim: high ALAN advances migration AND Warblers (9.8 days) are affected much more than Sparrows (3.1 days).' },
          { id: 'B', text: 'Finches experienced a greater departure advancement under High Light conditions than under Low Light conditions.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: While true according to the table (6.2 vs 1.5), this compares Finches to themselves across light levels, failing to support the comparison between foliage-dwellers (Warblers) and ground-foragers (Sparrows).' },
          { id: 'C', text: 'Sparrows initiated spring migration earlier under Low Light conditions than Warblers did under High Light conditions.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Factually false according to table! Sparrows under Low Light = 0.8 days; Warblers under High Light = 9.8 days.' },
          { id: 'D', text: 'Under Moderate Light conditions, canopy-dwelling Finches advanced their departure by more days than Warblers did.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Factually false! Finches under Moderate Light = 3.8 days, while Warblers = 5.4 days.' }
        ],
        expertWalkthrough: 'Check Chen\'s 2 claims: 1) Light advances migration. 2) Warblers advance MORE than Sparrows. Choice A cites Warblers (9.8 days) vs Sparrows (3.1 days) under High Light, perfectly matching Chen\'s thesis.'
      }
    ]
  },

  {
    id: 'inferences-logical-completion',
    number: 5,
    title: 'Inferences & Logical Completion',
    subtitle: 'The Baby Step Rule',
    iconName: 'GitCommit',
    theIssue: 'Leaping to wild speculative conclusions, guessing the future, or assuming unstated real-world facts.',
    theMethod: 'The Baby Step Rule: The correct inference is always the most conservative, boring, inescapable next logical step—never an imaginative leap.',
    methodSteps: [
      { step: '1. Treat Text as a Strictly Sealed Container', detail: 'If it is not 100% forced by the premise sentences, it is WRONG.' },
      { step: '2. Look for the Premise Bridge', detail: 'Combine Sentence A (If X happens...) with Sentence B (Y happened to X...) to reach Conclusion C.' },
      { step: '3. Red-Flag Extreme Modifiers', detail: 'Eliminate choices containing absolute language ("inevitable", "impossible", "universally", "never").' }
    ],
    trapsToFlag: [
      { 
        name: 'The Hollywood Twist (Wild Leap)', 
        description: 'An exciting, plausible real-world prediction that goes 3 steps beyond what the text actually proves.', 
        example: 'Inferring that a newly discovered enzyme will "revolutionize global medicine within a decade".' 
      },
      { 
        name: 'Unmentioned Assumption', 
        description: 'Assuming a cause that was never stated in the passage.', 
        example: 'Assuming a character failed an exam because they didn\'t study, when the text only stated they arrived late.' 
      }
    ],
    proTip: 'The right answer on SAT inference questions should feel almost redundant and boring. If an answer makes you think "Wow, that\'s a fascinating theory!", strike it out.',
    questions: [
      {
        id: 'inf-1',
        archetypeId: 'inferences-logical-completion',
        archetypeTitle: 'Inferences & Logical Completion',
        title: 'Cognitive Archaeology & Tools',
        passage: 'Archaeologists long believed that early hominins developed complex stone flaking techniques exclusively after brain volume reached 600 cubic centimeters. However, recent excavations at Lomekwi 3 in Kenya uncovered systematically shaped knapped stone tools dating back 3.3 million years—predating the earliest known specimens of the genus Homo by at least 500,000 years. Because these tools demonstrate intentional stone fracture patterns that require precise motor control, researchers conclude that ________',
        questionStem: 'Which choice most logically completes the text?',
        options: [
          { id: 'A', text: 'the cognitive capabilities required for intentional tool production emerged earlier in hominin evolution than previously assumed.', isCorrect: true, fatalFlawReason: 'CORRECT: Conservative baby step! Tools 3.3M years old predate Homo and show intentional flaking → tool-making capabilities emerged earlier than thought.' },
          { id: 'B', text: 'hominin species prior to 3.3 million years ago were more intelligent than modern primates.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Introduces a comparison to "modern primates" which was never mentioned or measured in the text.' },
          { id: 'C', text: 'stone tool manufacture was the primary driver of increased brain volume in early Homo specimens.', isCorrect: false, trapType: 'Reverse Causality', fatalFlawReason: 'PROVABLY WRONG: Claims tool-making caused brain growth, a causal leap not established by simply finding old tools.' },
          { id: 'D', text: 'early hominins in Kenya completely abandoned organic tool materials in favor of stone flaking.', isCorrect: false, trapType: 'Too Extreme', fatalFlawReason: 'PROVABLY WRONG: "Completely abandoned organic tools" is an extreme, unsupported speculation.' }
        ],
        expertWalkthrough: 'Premise A: Believed tool-making started at 600cc brain volume. Premise B: Found intentional tools 500,000 years earlier than Homo. Inescapable conclusion: Tool-making ability started earlier than previously assumed.'
      }
    ]
  },

  {
    id: 'text-structure-purpose',
    number: 6,
    title: 'Text Structure & Purpose',
    subtitle: 'Function Verbs & Passage Architecture',
    iconName: 'Layers',
    theIssue: 'Confusing what the text says (content) with what the author does (function); describing only part of the text.',
    theMethod: 'Function Verbs Analysis: Focus on action verbs (criticize, outline, qualify, illustrate). Break passage into Chunk 1 vs. Chunk 2 transitions.',
    methodSteps: [
      { step: '1. Chunk the Passage', detail: 'Split passage into Part 1 (Initial status/claim) and Part 2 (Pivot/Resolution).' },
      { step: '2. Name the Function Verb for Each Chunk', detail: 'Part 1 = "Presents a traditional view"; Part 2 = "Introduces counter-evidence".' },
      { step: '3. Verify Whole-Passage Scope', detail: 'Reject choices that accurately describe Part 1 but ignore Part 2.' }
    ],
    trapsToFlag: [
      { 
        name: 'Content vs. Function Confusion', 
        description: 'Choosing an answer that summarizes the subject matter instead of describing the author\'s structural strategy.', 
        example: 'Selecting "Discusses 18th century poetry" instead of "Presents an argument and evaluates counterarguments".' 
      },
      { 
        name: 'Half-Passage Trap', 
        description: 'A choice that correctly describes paragraph 1\'s function but completely ignores the major shift in paragraph 2.', 
        example: 'Stating the purpose is "to summarize a theory" when paragraph 2 actively refutes that theory.' 
      }
    ],
    proTip: 'Pay close attention to structural transition markers like "However," "To test this hypothesis," or "In contrast." They mark the structural boundary between Chunk 1 and Chunk 2.',
    questions: [
      {
        id: 'tsp-1',
        archetypeId: 'text-structure-purpose',
        archetypeTitle: 'Text Structure & Purpose',
        title: 'Architectural Acoustics History',
        passage: 'For decades, architectural historians maintained that ancient Greek amphitheaters achieved acoustic clarity solely through their steep tiered seating arrangement. However, acoustic engineer Dr. Nicoletta Karamanos recently conducted acoustic simulations showing that the porous limestone used in the seats acted as a natural sound filter, dampening low-frequency background noise like wind while preserving high-frequency performers’ voices. Karamanos’s work suggests that material selection was just as critical as geometric layout in ancient acoustic design.',
        questionStem: 'Which choice best describes the overall structure of the text?',
        options: [
          { id: 'A', text: 'It presents a long-standing historical belief, introduces recent engineering research that challenges that belief, and summarizes the implications of the new findings.', isCorrect: true, fatalFlawReason: 'CORRECT: Matches passage architecture: 1) Long-standing belief (steep seating alone), 2) Challenging research (limestone sound filter), 3) Implication (material selection critical).' },
          { id: 'B', text: 'It describes an architectural technique, details its failure in ancient Greece, and proposes a modern replacement.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Greek seating didn\'t "fail"; it succeeded, and Karamanos explained how limestone aided it.' },
          { id: 'C', text: 'It outlines a debate between two acoustic engineers and resolves it by introducing new mathematical formulas.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: There is no debate between two engineers, nor any mathematical formulas introduced.' },
          { id: 'D', text: 'It evaluates the physical composition of limestone and argues for its adoption in modern concert hall construction.', isCorrect: false, trapType: 'True But Irrelevant', fatalFlawReason: 'PROVABLY WRONG: Modern concert hall adoption is never mentioned in the passage.' }
        ],
        expertWalkthrough: 'Chunk 1: "For decades historians maintained..." (Long-standing belief). Chunk 2: "However... Dr. Karamanos conducted simulations..." (New research challenging belief). Chunk 3: "Karamanos\'s work suggests..." (Implications).'
      }
    ]
  },

  {
    id: 'cross-text-connections',
    number: 7,
    title: 'Cross-Text Connections',
    subtitle: 'Dual Passages & The 2x2 Attitude Matrix',
    iconName: 'GitCompare',
    theIssue: 'Conflating Passage 1\'s perspective with Passage 2\'s perspective or choosing a generic debate option.',
    theMethod: 'The 2x2 Attitude Matrix (+, -, or neutral). Identify Passage 1\'s core claim, Passage 2\'s core claim, and how Author 2 specifically responds to Author 1.',
    methodSteps: [
      { step: '1. Label Passage 1 Stance (+ / - / Neutral)', detail: 'Summarize Author 1\'s claim in 5 words.' },
      { step: '2. Label Passage 2 Stance (+ / - / Neutral)', detail: 'Does Author 2 Agree (+), Disagree (-), or Qualify/Modify Author 1?' },
      { step: '3. Answer from Author 2\'s Shoes', detail: 'Always keep your mind anchored in the specific perspective requested by the question stem.' }
    ],
    trapsToFlag: [
      { 
        name: 'Right Passage, Wrong Author', 
        description: 'Selecting an option that accurately describes Author 1\'s viewpoint when the prompt specifically asked for Author 2\'s perspective.', 
        example: 'Answering what Author A thinks about Author B instead of what Author B thinks about Author A.' 
      },
      { 
        name: 'Generic Debate Trap', 
        description: 'Choosing an answer that describes a broad disagreement rather than the specific, nuanced point where the two authors intersect.', 
        example: 'Selecting "Author 2 dislikes art" when Author 2 specifically disproved Author 1\'s date of a painting.' 
      }
    ],
    proTip: 'Before looking at choices, complete this sentence: "Author 2 would say Author 1\'s argument is [valid/flawed] because Author 1 ignored [X]." Then find the choice matching X.',
    questions: [
      {
        id: 'ctc-1',
        archetypeId: 'cross-text-connections',
        archetypeTitle: 'Cross-Text Connections',
        title: 'Megafauna Extinction Theories',
        passage: `Passage 1:
The sudden collapse of Pleistocene megafauna in North America approximately 13,000 years ago coincides precisely with the arrival of Clovis hunters armed with specialized projectile points. Given that large mammals like mammoths had survived multiple glacial cycles over hundreds of thousands of years, human overhunting ("overkill") remains the only plausible primary cause for their rapid disappearance.

Passage 2:
While human hunting undoubtedly exerted pressure on vulnerable populations, attributing the megafaunal extinction solely to Clovis hunters ignores critical paleoclimate data. Pollen records from the Younger Dryas period indicate abrupt vegetation shifts that fragmented megafaunal habitats right before extinction waves, suggesting that climate instability was an indispensable catalyst.`,
        questionStem: 'Based on the passages, how would the author of Passage 2 most likely respond to the author of Passage 1’s claim regarding the primary cause of megafaunal extinction?',
        options: [
          { id: 'A', text: 'By arguing that Passage 1 oversimplifies the extinction event by failing to account for environmental habitat disruptions caused by climate shifts.', isCorrect: true, fatalFlawReason: 'CORRECT: Author 2 explicitly states that attributing extinction solely to hunters "ignores critical paleoclimate data" (abrupt vegetation shifts).' },
          { id: 'B', text: 'By asserting that Clovis projectile points were inefficient tools incapable of hunting large mammals to extinction.', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: Author 2 agrees hunting exerted pressure and never attacks projectile point efficiency.' },
          { id: 'C', text: 'By agreeing that human overhunting was the sole cause of extinction but disputing the exact timeline of Clovis arrival.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Author 2 explicitly disagrees that overhunting was the sole cause.' },
          { id: 'D', text: 'By claiming that Pleistocene megafauna survived the Younger Dryas period without experiencing habitat fragmentation.', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: Passage 2 states megafauna DID experience habitat fragmentation during the Younger Dryas.' }
        ],
        expertWalkthrough: 'Passage 1 Stance: Overhunting = ONLY cause (+ Overkill). Passage 2 Stance: Overhunting alone is oversimplified; climate instability was an indispensable catalyst (- Sole cause). Choice A captures Author 2\'s critique.'
      }
    ]
  }
];

// Interactive Trap Detector Drills Data
export const TRAP_DETECTOR_DRILLS: TrapDetectorItem[] = [
  {
    id: 'td-1',
    passage: 'Sociologist Dr. Aris Thorne surveyed 500 remote workers and found that 68% reported higher subjective productivity when working flexible hours. Thorne concluded that flexible schedules unconditionally increase output for all modern corporate employees.',
    questionStem: 'Analyze Choice A below. Which specific SAT Trap Type makes Choice A provably wrong?',
    choiceToAnalyze: {
      id: 'A',
      text: 'Flexible work schedules will permanently replace traditional 9-to-5 shifts across every industry worldwide by 2030.'
    },
    correctTrap: 'Too Extreme',
    trapOptions: ['Too Extreme', 'Opposite', 'Out of Scope', 'True But Irrelevant', 'Reverse Causality'],
    explanation: 'Choice A uses extreme absolute predictions ("permanently replace", "every industry worldwide by 2030") that far exceed the limited scope of Dr. Thorne\'s survey of 500 remote workers.'
  },
  {
    id: 'td-2',
    passage: 'In a 2024 study on urban canopy cover, researchers noted that oak trees in public parks absorb an average of 48 pounds of carbon dioxide per year, providing substantial environmental mitigation in high-traffic corridors.',
    questionStem: 'The question asks for the central thesis of the study. Analyze Choice C below:',
    choiceToAnalyze: {
      id: 'C',
      text: 'Oak trees absorb 48 pounds of carbon dioxide annually.'
    },
    correctTrap: 'True But Irrelevant',
    trapOptions: ['Too Extreme', 'True But Irrelevant', 'Opposite', 'Secondary Definition', 'Out of Scope'],
    explanation: 'Choice C is factually 100% true according to the passage, but it is a single isolated data detail, NOT the overarching thesis about urban canopy mitigation.'
  },
  {
    id: 'td-3',
    passage: 'Botanist Maria Santos observed that orchids grown in high-humidity chambers exhibited a 40% increase in flower production compared to those in low-humidity environments.',
    questionStem: 'The question asks for evidence supporting Santos\'s finding. Analyze Choice B below:',
    choiceToAnalyze: {
      id: 'B',
      text: 'Orchids grown in low-humidity environments produced far more blossoms than those in high-humidity chambers.'
    },
    correctTrap: 'Opposite',
    trapOptions: ['Opposite', 'Too Extreme', 'Out of Scope', 'Secondary Definition', 'Reverse Causality'],
    explanation: 'Choice B directly flips the observed relationship, claiming low humidity produced more blossoms, which is the exact opposite of Santos\'s data.'
  }
];

// Interactive Vocab Predictor Engine Data
export const VOCAB_PREDICTOR_ITEMS: VocabPredictorItem[] = [
  {
    id: 'vp-1',
    passage: 'Although the initial budget proposal appeared modest, financial auditors discovered numerous hidden expenditures that made the total cost of the municipal transit project surprisingly ________.',
    targetWordBlank: '________',
    contextClues: ['Although initial proposal appeared modest', 'hidden expenditures discovered', 'surprisingly'],
    transitionDirection: 'Contrast / Turn (Modest vs. High)',
    suggestedPredictions: ['exorbitant', 'expensive', 'huge', 'excessive', 'high'],
    choices: [
      { id: 'A', text: 'exorbitant', isCorrect: true, fatalFlawReason: 'CORRECT: "Exorbitant" means unreasonably high, directly contrasting with "modest initial budget".' },
      { id: 'B', text: 'economical', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Economical" means inexpensive, which contradicts the hidden expenditures.' },
      { id: 'C', text: 'fraudulent', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: While expenditures were hidden, the sentence focuses on the total COST being high, not legal criminality.' },
      { id: 'D', text: 'negligible', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Negligible" means tiny, contradicting the cost increase.' }
    ]
  },
  {
    id: 'vp-2',
    passage: 'The novel’s protagonist is characterized by an unyielding dedication to her community; even when facing harsh public criticism, her resolve remained completely ________.',
    targetWordBlank: '________',
    contextClues: ['unyielding dedication', 'even when facing harsh criticism', 'resolve remained'],
    transitionDirection: 'Concession / Continuation (Steadfast)',
    suggestedPredictions: ['unshakable', 'firm', 'steadfast', 'unwavering', 'strong'],
    choices: [
      { id: 'A', text: 'steadfast', isCorrect: true, fatalFlawReason: 'CORRECT: "Steadfast" means resolutely firm and unwavering, perfectly matching context clues.' },
      { id: 'B', text: 'ambivalent', isCorrect: false, trapType: 'Opposite', fatalFlawReason: 'PROVABLY WRONG: "Ambivalent" means having mixed or uncertain feelings, opposing unyielding dedication.' },
      { id: 'C', text: 'superficial', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Superficial" means shallow, contradicting deep dedication.' },
      { id: 'D', text: 'ephemeral', isCorrect: false, trapType: 'Out of Scope', fatalFlawReason: 'PROVABLY WRONG: "Ephemeral" means short-lived.' }
    ]
  }
];

// Transition Signals Data for Cheat Sheet
export const TRANSITION_SIGNALS: TransitionSignalGroup[] = [
  {
    category: 'Contrast / Turn',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    signals: [
      { word: 'However / Nonetheless', function: 'Pivots to an opposing claim or surprising counter-fact.', example: 'The theory was popular; however, recent tests proved it false.' },
      { word: 'Conversely / On the other hand', function: 'Directly contrasts two distinct subjects or conditions.', example: 'Urban areas grew; conversely, rural populations declined.' },
      { word: 'Despite / Notwithstanding', function: 'Concedes a factor while asserting the main outcome.', example: 'Despite heavy rains, the excavation continued.' },
      { word: 'Rather / Instead', function: 'Replaces a rejected idea with the correct alternative.', example: 'He did not forfeit; rather, he doubled his efforts.' }
    ]
  },
  {
    category: 'Cause & Effect',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    signals: [
      { word: 'Consequently / Thus / Therefore', function: 'Introduces an inevitable logical result of prior premises.', example: 'Temperatures dropped; consequently, water froze.' },
      { word: 'Accordingly', function: 'Shows action taken in direct response to a condition.', example: 'Rules changed; accordingly, staff updated procedures.' },
      { word: 'Stemming from / Attributable to', function: 'Points backward to the underlying cause.', example: 'The success was attributable to rigorous testing.' }
    ]
  },
  {
    category: 'Concession / Nuance',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    signals: [
      { word: 'Admittedly / Granted', function: 'Acknowledges a valid limitation before reinforcing thesis.', example: 'Granted, costs are high, but long-term savings are vast.' },
      { word: 'To be sure / Granted', function: 'Signals a momentary concession to counter-arguments.', example: 'To be sure, risk exists, yet opportunity is greater.' }
    ]
  },
  {
    category: 'Amplification / Addition',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    signals: [
      { word: 'Furthermore / Moreover', function: 'Adds a stronger, supporting argument in the same direction.', example: 'The study was thorough; moreover, it was replicated.' },
      { word: 'Indeed / In fact', function: 'Emphasizes and expands upon a previous statement.', example: 'The result was rare; indeed, it had never been seen before.' },
      { word: 'Specifically / For instance', function: 'Transitions from a broad claim to concrete evidence.', example: 'Birds adapted; specifically, beak shapes altered.' }
    ]
  }
];

// Turkish Cognates & SAT Vocabulary Bridge Data
export const TURKISH_COGNATES: TurkishCognateItem[] = [
  {
    englishWord: 'Pragmatic',
    satMeaning: 'Dealing with things sensibly and realistically based on practical considerations rather than theoretical ones.',
    turkishCognate: 'Pragmatik / Pragmatist',
    turkishMeaning: 'Faydacı, uygulamaya ve pratik sonuçlara odaklanan yaklaşım.',
    satExample: 'The committee chose a pragmatic approach to solve the deficit rather than debating utopian models.',
    turkishBridgeTip: 'Türkçe akademik dilde "pragmatik çözüm" (pratik/gerçekçi çözüm) kalıbıyla 1:1 aynıdır.'
  },
  {
    englishWord: 'Ambiguous / Ambiguity',
    satMeaning: 'Open to more than one interpretation; exact meaning is unclear or double-sided.',
    turkishCognate: 'Ambigu / Muğlak',
    turkishMeaning: 'İki farklı anlama gelebilen, belirsiz, muğlak ifade.',
    satExample: 'The statute’s ambiguous phrasing led to conflicting interpretations by appellate judges.',
    turkishBridgeTip: 'Fransızca kökenli "ambigu" kelimesi Türkçe edebiyatta "muğlak/iki anlamlı" olarak kullanılır.'
  },
  {
    englishWord: 'Prevalent / Prevalence',
    satMeaning: 'Widespread, predominant, or occurring frequently in a particular area or time.',
    turkishCognate: 'Prevalan / Prevalans',
    turkishMeaning: 'Yaygın olan, sıklık gösteren (Tıp ve sosyolojide yaygınlık oranı).',
    satExample: 'Laptops have become prevalent in university lecture halls across the globe.',
    turkishBridgeTip: 'Türkçede tıbbi ve akademik metinlerde "hastalığın prevalansı" (yaygınlığı) olarak birebir yer alır.'
  },
  {
    englishWord: 'Spontaneous',
    satMeaning: 'Performed or occurring as a result of a sudden inner impulse or natural process without external force.',
    turkishCognate: 'Spontan',
    turkishMeaning: 'Kendiliğinden gelişen, anlık, doğrudan olan.',
    satExample: 'The audience erupted in spontaneous applause as the violinist completed her solo.',
    turkishBridgeTip: 'Türkçe günlük ve akademik dilde "spontan gelişti" (kendiliğinden oldu) şeklinde %100 aynı anlamda kullanılır.'
  }
];

// Stem Translators Data
export const QUESTION_STEM_TRANSLATIONS: QuestionStemTranslation[] = [
  {
    rawStem: '"Which choice completes the text with the most logical and precise word or phrase?"',
    plainEnglish: 'Find the single word that fits the context clues and transition direction without changing the text\'s tone.',
    mindsetKey: 'Cover choices $\\to$ Predict word $\\to$ Match precise definition.'
  },
  {
    rawStem: '"Which choice most logically completes the text?"',
    plainEnglish: 'What is the most boring, conservative, inescapable next sentence forced by the passage?',
    mindsetKey: 'The Baby Step Rule: No wild leaps, no Hollywood twists.'
  },
  {
    rawStem: '"Which choice best describes the overall structure of the text?"',
    plainEnglish: 'What is the author doing in Paragraph 1 vs Paragraph 2? (Ignore topic details; focus on function verbs).',
    mindsetKey: 'Chunk 1 action $\\to$ Transition marker $\\to$ Chunk 2 action.'
  },
  {
    rawStem: '"Which finding, if true, would most directly support the hypothesis?"',
    plainEnglish: 'Which option shows [Expected Outcome] occurring when [Test Condition] is applied to [Specific Variable]?',
    mindsetKey: 'Isolate hypothesis variables $\\to$ Match exact condition & outcome.'
  },
  {
    rawStem: '"Based on the passages, how would Author 2 respond to Author 1\'s claim?"',
    plainEnglish: 'What specific flaw or missing evidence in Author 1\'s argument does Author 2 point out?',
    mindsetKey: '2x2 Attitude Matrix $\\to$ Answer strictly from Author 2\'s shoes.'
  }
];
