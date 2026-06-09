// Navigation Logic
let sectionHistory = [];
let currentSectionId = 'home';

function showSection(sectionId, event, isBack = false) {
    if (event) event.preventDefault();
    
    if (!isBack && currentSectionId !== sectionId) {
        sectionHistory.push(currentSectionId);
    }
    
    // Update navigation active state
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.getElementById(`nav-${sectionId}`);
    if (activeLink) activeLink.classList.add('active');

    // Show selected section
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
    // small delay to allow display:block to apply before animating opacity if needed
    setTimeout(() => {
        targetSection.classList.add('active');
    }, 10);
    
    currentSectionId = sectionId;
    updateBackButton();
}

function updateBackButton() {
    const backBtn = document.getElementById('nav-back-btn');
    if (backBtn) {
        if (sectionHistory.length > 0) {
            backBtn.classList.remove('hidden');
        } else {
            backBtn.classList.add('hidden');
        }
    }
}

function goBack(event) {
    if (event) event.preventDefault();
    if (sectionHistory.length > 0) {
        const prevSection = sectionHistory.pop();
        showSection(prevSection, null, true);
    }
}

// Learning Hub Accordion Logic
function toggleUnit(unitId) {
    const unitContent = document.getElementById(unitId);
    const unitCard = unitContent.parentElement;
    unitCard.classList.toggle('open');
}

// Exam Data
const examQuestions = [
    // --- ORIGINAL QUESTIONS ---
    // Part 1: MCQs
    { type: 'mcq', text: 'Research is best defined as:', options: ['Random collection of information', 'Systematic investigation to discover knowledge', 'Guessing based on experience', 'Memorizing facts'], answer: 1 },
    { type: 'mcq', text: 'Which of the following is NOT a characteristic of research?', options: ['Systematic', 'Controlled', 'Emotional', 'Empirical'], answer: 2 },
    { type: 'mcq', text: 'Research mainly aims to:', options: ['Confuse people', 'Avoid problems', 'Discover truth and solve problems', 'Repeat existing knowledge only'], answer: 2 },
    { type: 'mcq', text: 'Knowledge becomes useful when it is:', options: ['Ignored', 'Random', 'Organized and structured', 'Hidden'], answer: 2 },
    { type: 'mcq', text: 'Which statement is correct?', options: ['All knowledge is science', 'All science is knowledge', 'No science is knowledge', 'Knowledge and science are unrelated'], answer: 1 },
    { type: 'mcq', text: 'Which is NOT a general purpose of research?', options: ['Predict outcomes', 'Solve problems', 'Increase confusion', 'Understand phenomena'], answer: 2 },
    { type: 'mcq', text: 'Exploration research mainly focuses on:', options: ['Predicting future', 'Understanding unknown areas', 'Explaining causes', 'Final conclusions'], answer: 1 },
    { type: 'mcq', text: 'Description research answers:', options: ['Why', 'How', 'What', 'When'], answer: 2 },
    { type: 'mcq', text: 'Explanation research focuses on:', options: ['What happens', 'Why something happens', 'When it happens', 'Who did it'], answer: 1 },
    { type: 'mcq', text: 'Prediction research focuses on:', options: ['Past events', 'Present events', 'Future outcomes', 'Random guesses'], answer: 2 },
    { type: 'mcq', text: 'A fact is:', options: ['A guess', 'A theory', 'A verified observation', 'A prediction'], answer: 2 },
    { type: 'mcq', text: 'A hypothesis is:', options: ['A proven fact', 'A testable assumption', 'A law', 'A random idea'], answer: 1 },
    { type: 'mcq', text: 'A scientific theory explains:', options: ['What happens', 'Why it happens', 'When it happens', 'Who causes it'], answer: 1 },
    { type: 'mcq', text: 'A scientific law describes:', options: ['Why something happens', 'What happens', 'Who did it', 'How to test'], answer: 1 },
    { type: 'mcq', text: 'Inductive reasoning goes from:', options: ['General to specific', 'Specific to general', 'Theory to fact', 'Law to theory'], answer: 1 },
    { type: 'mcq', text: 'Deductive reasoning goes from:', options: ['Specific to general', 'General to specific', 'Observation to theory', 'Guess to fact'], answer: 1 },
    { type: 'mcq', text: 'The first step in research is:', options: ['Data analysis', 'Selecting a topic', 'Writing report', 'Testing results'], answer: 1 },
    { type: 'mcq', text: 'Which comes after data collection?', options: ['Topic selection', 'Data analysis', 'Hypothesis', 'Report writing'], answer: 1 },
    { type: 'mcq', text: 'A research problem is:', options: ['A solved issue', 'A gap in knowledge', 'A final conclusion', 'A method'], answer: 1 },
    { type: 'mcq', text: 'Practical research focuses on:', options: ['Expanding theory only', 'Solving real-world problems', 'Ignoring data', 'Writing reports'], answer: 1 },
    { type: 'mcq', text: 'Theoretical research focuses on:', options: ['Practical solutions only', 'Expanding knowledge', 'Ignoring theories', 'Business problems only'], answer: 1 },
    { type: 'mcq', text: 'Which is NOT a good researcher trait?', options: ['Curiosity', 'Objectivity', 'Carelessness', 'Critical thinking'], answer: 2 },
    // Part 2: True / False
    { type: 'tf', text: 'Research is a random process.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Research must be systematic and controlled.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'All knowledge is considered science.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Exploration is usually enough for a dissertation.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Explanation research answers "why".', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Prediction focuses on future events.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'A hypothesis is always proven true.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'A theory explains why something happens.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'A law explains why something happens.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Inductive reasoning moves from general to specific.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Deductive reasoning tests hypotheses.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Data analysis comes before data collection.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'A research problem identifies a gap in knowledge.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Practical research aims to solve real-world issues.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Creativity is not important for researchers.', options: ['True', 'False'], answer: 1 },
    // Part 3: Fill in the Blank
    { type: 'fib-mcq', text: 'Research is a ______ investigation process.', options: ['Random', 'Systematic', 'Emotional', 'Irregular'], answer: 1 },
    { type: 'fib-mcq', text: 'A ______ is a testable explanation.', options: ['Fact', 'Law', 'Hypothesis', 'Theory'], answer: 2 },
    { type: 'fib-mcq', text: 'A ______ explains why something happens.', options: ['Law', 'Theory', 'Fact', 'Prediction'], answer: 1 },
    { type: 'fib-mcq', text: 'A ______ predicts what will happen.', options: ['Hypothesis', 'Theory', 'Law', 'Observation'], answer: 2 },
    { type: 'fib-mcq', text: 'Inductive reasoning moves from ______ to general.', options: ['Specific', 'Theory', 'Law', 'Prediction'], answer: 0 },
    { type: 'fib-mcq', text: 'Deductive reasoning moves from ______ to specific.', options: ['Data', 'General', 'Observation', 'Guess'], answer: 1 },
    { type: 'fib-mcq', text: 'A research problem is a ______ in knowledge.', options: ['Solution', 'Gap', 'Result', 'Answer'], answer: 1 },
    { type: 'fib-mcq', text: '______ research focuses on solving real problems.', options: ['Theoretical', 'Practical', 'Exploratory', 'Descriptive'], answer: 1 },
    { type: 'fib-mcq', text: '______ research focuses on expanding knowledge.', options: ['Practical', 'Theoretical', 'Descriptive', 'Predictive'], answer: 1 },
    { type: 'fib-mcq', text: 'The first step of research is selecting a ______.', options: ['Method', 'Topic', 'Result', 'Data'], answer: 1 },
    { type: 'fib-mcq', text: 'Data is collected before ______.', options: ['Topic selection', 'Data analysis', 'Hypothesis', 'Conclusion'], answer: 1 },
    { type: 'fib-mcq', text: 'A good researcher must have ______ thinking.', options: ['Weak', 'Critical', 'Emotional', 'Random'], answer: 1 },

    // --- NEW QUESTIONS ---
    // Part 1: MCQs
    { type: 'mcq', text: 'The first step in the research process is:', options: ['Data analysis', 'Selecting a research problem', 'Writing the report', 'Collecting data'], answer: 1 },
    { type: 'mcq', text: 'A research problem statement is best described as:', options: ['A long general discussion', 'A vague idea', 'A brief and focused description of an issue', 'A list of references'], answer: 2 },
    { type: 'mcq', text: 'Which of the following is NOT a purpose of a problem statement?', options: ['Explaining importance', 'Identifying gaps', 'Providing final results', 'Setting research direction'], answer: 2 },
    { type: 'mcq', text: 'Which element defines the boundaries of research?', options: ['Significance', 'Scope', 'Context', 'Hypothesis'], answer: 1 },
    { type: 'mcq', text: 'A good research question should be:', options: ['Yes/No answerable', 'Vague', 'Clear and feasible', 'Extremely broad'], answer: 2 },
    { type: 'mcq', text: 'What is the relationship between X and Y? is a:', options: ['Descriptive question', 'Relational question', 'Causal question', 'Analytical question'], answer: 1 },
    { type: 'mcq', text: 'A hypothesis is:', options: ['A proven fact', 'A random guess', 'A testable prediction', 'A research method'], answer: 2 },
    { type: 'mcq', text: 'Which variable is manipulated?', options: ['Dependent', 'Independent', 'Control', 'Random'], answer: 1 },
    { type: 'mcq', text: 'Operational definition refers to:', options: ['Theoretical meaning', 'General idea', 'How a variable is measured', 'Research objective'], answer: 2 },
    { type: 'mcq', text: 'Which is NOT part of a problem statement?', options: ['Research questions', 'Hypotheses', 'Literature review', 'Scope'], answer: 2 },
    { type: 'mcq', text: 'Research significance explains:', options: ['How data is collected', 'Why the study is important', 'What tools are used', 'Who the participants are'], answer: 1 },
    { type: 'mcq', text: 'Which type of question investigates cause and effect?', options: ['Descriptive', 'Relational', 'Causal', 'Exploratory'], answer: 2 },
    { type: 'mcq', text: 'Which research type aims to create new knowledge?', options: ['Applied', 'Evaluation', 'Basic', 'Diagnostic'], answer: 2 },
    { type: 'mcq', text: 'Applied research focuses on:', options: ['Theory only', 'Practical problems', 'Historical data', 'Philosophy'], answer: 1 },
    { type: 'mcq', text: 'Exploratory research is:', options: ['Structured', 'Flexible', 'Experimental', 'Statistical'], answer: 1 },
    { type: 'mcq', text: 'Conclusive research is:', options: ['Open-ended', 'Informal', 'Structured and formal', 'Unplanned'], answer: 2 },
    { type: 'mcq', text: 'Which research describes characteristics?', options: ['Causal', 'Descriptive', 'Analytical', 'Experimental'], answer: 1 },
    { type: 'mcq', text: 'Causal research focuses on:', options: ['Description', 'Observation', 'Cause-effect relationships', 'Literature review'], answer: 2 },
    { type: 'mcq', text: 'Quantitative research uses:', options: ['Interviews only', 'Words', 'Numbers and statistics', 'Opinions'], answer: 2 },
    { type: 'mcq', text: 'Qualitative research focuses on:', options: ['Numbers', 'Meanings and experiences', 'Equations', 'Graphs'], answer: 1 },
    { type: 'mcq', text: 'Cross-sectional studies:', options: ['Study over time', 'Study one time point', 'Use experiments', 'Are qualitative only'], answer: 1 },
    { type: 'mcq', text: 'Longitudinal studies:', options: ['One-time study', 'No data', 'Study over time', 'Only surveys'], answer: 2 },
    { type: 'mcq', text: 'Research design is:', options: ['Data collection only', 'Analysis only', 'Overall research plan', 'Hypothesis'], answer: 2 },
    { type: 'mcq', text: 'Research methodology is:', options: ['Research topic', 'Detailed procedures', 'Results', 'Title'], answer: 1 },
    { type: 'mcq', text: 'A good research design should:', options: ['Increase bias', 'Reduce reliability', 'Minimize bias', 'Ignore errors'], answer: 2 },
    // Part 2: True / False
    { type: 'tf', text: 'A research topic alone is enough for conducting research.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'A research problem statement must be clear and focused.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Research questions should be vague.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Hypotheses must be testable.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Dependent variables are manipulated by the researcher.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Operational definitions improve clarity and consistency.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Exploratory research is highly structured.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Descriptive research answers "what" questions.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Causal research examines cause-effect relationships.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Quantitative research uses non-numerical data.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Qualitative research focuses on meanings and experiences.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Cross-sectional studies are conducted over long periods.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Research design and methodology mean exactly the same thing.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'A good research design reduces errors.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Applied research focuses on solving real-world problems.', options: ['True', 'False'], answer: 0 },
    // Part 3: Fill in the Blank
    { type: 'fib-mcq', text: 'The first step in research is ______.', options: ['Data analysis', 'Selecting a research problem', 'Writing report', 'Sampling'], answer: 1 },
    { type: 'fib-mcq', text: 'A research problem statement must be ______.', options: ['Vague', 'Long', 'Clear and focused', 'Complex'], answer: 2 },
    { type: 'fib-mcq', text: 'The ______ defines research boundaries.', options: ['Hypothesis', 'Scope', 'Variable', 'Method'], answer: 1 },
    { type: 'fib-mcq', text: 'A testable prediction is called a ______.', options: ['Theory', 'Hypothesis', 'Variable', 'Concept'], answer: 1 },
    { type: 'fib-mcq', text: 'The variable that is measured is the ______ variable.', options: ['Independent', 'Dependent', 'Random', 'Control'], answer: 1 },
    { type: 'fib-mcq', text: 'The variable that is manipulated is the ______.', options: ['Dependent', 'Independent', 'Constant', 'External'], answer: 1 },
    { type: 'fib-mcq', text: 'Research questions should not be answered with ______.', options: ['Explanation', 'Analysis', 'Yes/No', 'Data'], answer: 2 },
    { type: 'fib-mcq', text: 'Exploratory research is ______.', options: ['Rigid', 'Flexible', 'Experimental', 'Numerical'], answer: 1 },
    { type: 'fib-mcq', text: 'Descriptive research answers ______ questions.', options: ['Why', 'How', 'What', 'When'], answer: 2 },
    { type: 'fib-mcq', text: 'Causal research focuses on ______.', options: ['Description', 'Relationships', 'Cause and effect', 'Opinions'], answer: 2 },
    { type: 'fib-mcq', text: 'Quantitative research uses ______.', options: ['Words', 'Numbers', 'Stories', 'Opinions'], answer: 1 },
    { type: 'fib-mcq', text: 'Qualitative research uses ______ data.', options: ['Numerical', 'Statistical', 'Non-numerical', 'Mathematical'], answer: 2 },
    { type: 'fib-mcq', text: 'A one-time study is called ______.', options: ['Longitudinal', 'Cross-sectional', 'Experimental', 'Analytical'], answer: 1 },
    { type: 'fib-mcq', text: 'A study over time is called ______.', options: ['Cross-sectional', 'Experimental', 'Longitudinal', 'Descriptive'], answer: 2 },
    { type: 'fib-mcq', text: 'Research design is the ______ of the study.', options: ['Result', 'Plan/blueprint', 'Data', 'Variable'], answer: 1 },

    // --- NEW QUESTIONS FROM TEST.DOCX ---
    // Part 1: MCQs (Sampling and Data Analysis)
    { type: 'mcq', text: 'A sample is:', options: ['Entire population', 'Small representative group', 'Data collection tool', 'Research design'], answer: 1 },
    { type: 'mcq', text: 'Sampling reduces:', options: ['Accuracy', 'Time and cost', 'Reliability', 'Validity'], answer: 1 },
    { type: 'mcq', text: 'A sampling frame is:', options: ['Data table', 'Population list used for selection', 'Questionnaire', 'Variable'], answer: 1 },
    { type: 'mcq', text: 'Which influences representativeness?', options: ['Sample size', 'Weather', 'Research title', 'Font size'], answer: 0 },
    { type: 'mcq', text: 'First step in sampling process:', options: ['Determine sample size', 'Define population', 'Analyze data', 'Report results'], answer: 1 },
    { type: 'mcq', text: 'EPS means:', options: ['Equal Probability Selection', 'Easy Population Sample', 'Error Probability Scale', 'None'], answer: 0 },
    { type: 'mcq', text: 'Which is probability sampling?', options: ['Convenience', 'Snowball', 'Stratified Random Sampling', 'Judgmental'], answer: 2 },
    { type: 'mcq', text: 'Simple random sampling uses:', options: ['Lottery system', 'Convenience', 'Snowball', 'Quotas'], answer: 0 },
    { type: 'mcq', text: 'WOR means:', options: ['With ordered replacement', 'Without replacement', 'Weighted random', 'Wide range'], answer: 1 },
    { type: 'mcq', text: 'Systematic sampling selects:', options: ['Every kth element', 'Experts only', 'Clusters only', 'Volunteers'], answer: 0 },
    { type: 'mcq', text: 'Formula for systematic sampling interval:', options: ['Sample/Population', 'Population/Sample', 'Population²', 'Sample²'], answer: 1 },
    { type: 'mcq', text: 'Stratified sampling divides population into:', options: ['Clusters', 'Strata', 'Tables', 'Groups randomly'], answer: 1 },
    { type: 'mcq', text: 'Cluster sampling is:', options: ['Three-stage', 'Two-stage', 'Four-stage', 'One-stage'], answer: 1 },
    { type: 'mcq', text: 'Non-probability sampling:', options: ['Known probabilities', 'Unknown probabilities', 'Equal probabilities', 'Random probabilities'], answer: 1 },
    { type: 'mcq', text: 'Quota sampling is:', options: ['Random', 'Non-random', 'Probability', 'Experimental'], answer: 1 },
    { type: 'mcq', text: 'Convenience sampling is useful for:', options: ['Pilot testing', 'Census', 'Theory building', 'Forecasting'], answer: 0 },
    { type: 'mcq', text: 'Judgmental sampling relies on:', options: ['Random selection', 'Researcher judgment', 'Lottery', 'Computer selection'], answer: 1 },
    { type: 'mcq', text: 'Snowball sampling recruits:', options: ['Through referrals', 'Randomly', 'Systematically', 'Equally'], answer: 0 },
    { type: 'mcq', text: 'First research process step:', options: ['Collect data', 'Select sample', 'Prepare setting', 'Analyze data'], answer: 2 },
    { type: 'mcq', text: 'Data coding means:', options: ['Deleting data', 'Classifying data with labels', 'Graphing', 'Forecasting'], answer: 1 },
    { type: 'mcq', text: 'Marital status coding is:', options: ['Numeric', 'Nominal', 'Interval', 'Ratio'], answer: 1 },
    { type: 'mcq', text: 'Satisfaction scale is:', options: ['Nominal', 'Dichotomous', 'Ordinal', 'Ratio'], answer: 2 },
    { type: 'mcq', text: 'Male=0 Female=1 is:', options: ['Numeric', 'Ordinal', 'Dichotomous', 'Nominal'], answer: 2 },
    { type: 'mcq', text: 'Data cleaning removes:', options: ['Duplicates', 'Hypotheses', 'Variables', 'Findings'], answer: 0 },
    { type: 'mcq', text: 'Tabular representation improves:', options: ['Readability', 'Cost', 'Sampling', 'Coding'], answer: 0 },
    { type: 'mcq', text: 'Pie chart is also called:', options: ['Histogram', 'Circle graph', 'Line graph', 'Plot graph'], answer: 1 },
    { type: 'mcq', text: 'Histogram displays:', options: ['Categories', 'Frequency distribution', 'Percentages only', 'Maps'], answer: 1 },
    { type: 'mcq', text: 'SPSS is used mainly for:', options: ['Quantitative analysis', 'Qualitative analysis only', 'Drawing', 'Coding'], answer: 0 },
    { type: 'mcq', text: 'Qualitative research answers:', options: ['How and Why', 'How many', 'How much', 'None'], answer: 0 },
    { type: 'mcq', text: 'Quantitative research measures:', options: ['Opinions only', 'Variables numerically', 'Stories', 'Interviews only'], answer: 1 },
    { type: 'mcq', text: 'Clustering groups data by:', options: ['Randomness', 'Similarity', 'Time', 'Geography'], answer: 1 },
    { type: 'mcq', text: 'K-means is:', options: ['Regression', 'Clustering algorithm', 'Sampling method', 'Coding method'], answer: 1 },
    { type: 'mcq', text: 'Regression analysis studies:', options: ['Relationships between variables', 'Themes', 'Populations', 'Clusters'], answer: 0 },
    { type: 'mcq', text: 'In Y=a+bX+ε, Y is:', options: ['Independent variable', 'Dependent variable', 'Error', 'Constant'], answer: 1 },
    { type: 'mcq', text: 'Monte Carlo analysis uses:', options: ['Random variation', 'Themes', 'Interviews', 'Coding'], answer: 0 },
    { type: 'mcq', text: 'Time series analysis studies:', options: ['Intervals over time', 'Themes', 'Groups', 'Locations'], answer: 0 },
    { type: 'mcq', text: 'Cohort analysis studies:', options: ['Related groups', 'Variables only', 'Samples only', 'Tables'], answer: 0 },
    { type: 'mcq', text: 'Content analysis examines:', options: ['Themes and words', 'Equations', 'Samples', 'Charts'], answer: 0 },
    { type: 'mcq', text: 'Grounded theory:', options: ['Tests existing theories', 'Builds theory from data', 'Uses only statistics', 'Uses only surveys'], answer: 1 },
    { type: 'mcq', text: 'Predictive analysis identifies:', options: ['Past trends', 'Future trends', 'Current errors', 'Tables'], answer: 1 },

    // Part 2: True/False (Sampling and Data Analysis)
    { type: 'tf', text: 'A sample is a representative subset of a population.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Sampling always includes the entire population.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'The sampling frame is the source list for selecting participants.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Sample size affects representativeness.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Simple random sampling gives equal selection chances.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Systematic sampling uses every kth element.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Stratified sampling divides populations into strata.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Cluster sampling is a two-stage process.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Non-probability sampling has known selection probabilities.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Convenience sampling is highly representative of the population.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Snowball sampling is useful for hard-to-reach groups.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Data coding organizes information for analysis.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Ordinal coding involves ordered categories.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Data cleaning removes duplicates and formatting errors.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'A pie chart is also called a circle graph.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'SPSS is used for quantitative analysis.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Qualitative research mainly answers how many questions.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Regression analysis helps make predictions.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Content analysis is a qualitative analysis technique.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Prescriptive analysis recommends actions to take.', options: ['True', 'False'], answer: 0 },

    // Part 3: MCQs (Statistics and Research Reporting)
    { type: 'mcq', text: 'Statistics help researchers to:', options: ['Design buildings', 'Analyze and interpret data', 'Write novels', 'Create advertisements'], answer: 1 },
    { type: 'mcq', text: 'Which type of statistics summarizes collected data?', options: ['Inferential', 'Predictive', 'Descriptive', 'Experimental'], answer: 2 },
    { type: 'mcq', text: 'Which measure is most suitable for ordinal data?', options: ['Mean', 'Median', 'Variance', 'Standard deviation'], answer: 1 },
    { type: 'mcq', text: 'Which is a measure of variability?', options: ['Mean', 'Mode', 'Standard deviation', 'Percentage'], answer: 2 },
    { type: 'mcq', text: 'Cross-tabulation categorizes data based on:', options: ['One variable', 'More than one variable', 'No variables', 'Time only'], answer: 1 },
    { type: 'mcq', text: 'Inferential statistics are mainly used to:', options: ['Draw pictures', 'Generalize findings to populations', 'Count frequencies', 'Rank observations'], answer: 1 },
    { type: 'mcq', text: 'Gender is an example of:', options: ['Ratio variable', 'Interval variable', 'Ordinal variable', 'Nominal variable'], answer: 3 },
    { type: 'mcq', text: 'Which data type has an absolute zero?', options: ['Ordinal', 'Nominal', 'Ratio', 'Interval'], answer: 2 },
    { type: 'mcq', text: 'Which test is used for numeric vs numeric data?', options: ['Chi-square', 'Regression', 'ANOVA', 'Frequency analysis'], answer: 1 },
    { type: 'mcq', text: 'A t-test compares:', options: ['More than two groups', 'Two groups', 'Four groups', 'No groups'], answer: 1 },
    { type: 'mcq', text: 'One-Way ANOVA compares:', options: ['Two groups', 'Three variables', 'Two or more groups', 'Frequencies'], answer: 2 },
    { type: 'mcq', text: 'Chi-square is used for:', options: ['Numeric vs numeric', 'Numeric vs ordinal', 'Nominal vs nominal', 'Ratio vs interval'], answer: 2 },
    { type: 'mcq', text: 'Which is an example of dependence techniques?', options: ['Cluster analysis', 'Factor analysis', 'Multiple regression', 'Ranking'], answer: 2 },
    { type: 'mcq', text: 'A research project is:', options: ['Random activity', 'Systematic investigation', 'Marketing plan only', 'Business proposal only'], answer: 1 },
    { type: 'mcq', text: 'Which is NOT a type of research project?', options: ['Academic', 'Market', 'Scientific', 'Architectural Design'], answer: 3 },
    { type: 'mcq', text: 'The abstract is approximately:', options: ['50 words', '100 words', '300 words', '1000 words'], answer: 2 },
    { type: 'mcq', text: 'The introduction provides:', options: ['Statistical results', 'Research context', 'References only', 'Recommendations only'], answer: 1 },
    { type: 'mcq', text: 'Literature review should identify:', options: ['Knowledge gaps', 'Grammar mistakes', 'Funding sources', 'Tables only'], answer: 0 },
    { type: 'mcq', text: 'Results section should be:', options: ['Interpretive', 'Emotional', 'Objective', 'Persuasive'], answer: 2 },
    { type: 'mcq', text: 'APA style uses:', options: ['Number citation', 'Author-date citation', 'Footnotes only', 'Endnotes only'], answer: 1 },

    // Part 4: True/False (Statistics and Research Reporting)
    { type: 'tf', text: 'Descriptive statistics are used to summarize data.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'Inferential statistics cannot be used to generalize findings to a population.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Gender is an ordinal variable.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Ratio data have an absolute zero point.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'A t-test is used to compare more than two groups.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'Chi-square tests relationships between categorical variables.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'The literature review should only list sources.', options: ['True', 'False'], answer: 1 },
    { type: 'tf', text: 'The methodology section should explain why methods were chosen.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'The discussion section explains the meaning of the results.', options: ['True', 'False'], answer: 0 },
    { type: 'tf', text: 'APA citation style uses the author-date system.', options: ['True', 'False'], answer: 0 }
];

// Exam State
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let isAnswerSubmitted = false;

// Exam Logic
function startExam() {
    document.getElementById('exam-setup').classList.add('hidden');
    document.getElementById('exam-interface').classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    isAnswerSubmitted = false;
    selectedOptionIndex = null;
    
    const question = examQuestions[currentQuestionIndex];
    
    // Update progress
    document.getElementById('question-counter').innerText = `Question ${currentQuestionIndex + 1} / ${examQuestions.length}`;
    document.getElementById('score-live').innerText = `Score: ${score}`;
    
    const progressPercent = ((currentQuestionIndex) / examQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;

    // Setup Question UI
    document.getElementById('question-text').innerText = question.text;
    
    const qTypeBadge = document.getElementById('q-type-badge');
    const optionsContainer = document.getElementById('options-container');
    const fibContainer = document.getElementById('fib-container');
    const fibInput = document.getElementById('fib-input');
    
    optionsContainer.innerHTML = '';
    fibInput.value = '';
    
    document.getElementById('feedback-area').classList.add('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');

    if (question.type === 'mcq' || question.type === 'tf' || question.type === 'fib-mcq') {
        if (question.type === 'mcq') qTypeBadge.innerText = 'Multiple Choice';
        else if (question.type === 'tf') qTypeBadge.innerText = 'True / False';
        else qTypeBadge.innerText = 'Fill in the Blank';
        optionsContainer.classList.remove('hidden');
        fibContainer.classList.add('hidden');
        
        question.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => selectOption(index, btn);
            optionsContainer.appendChild(btn);
        });
    } else if (question.type === 'fib') {
        qTypeBadge.innerText = 'Fill in the Blank';
        optionsContainer.classList.add('hidden');
        fibContainer.classList.remove('hidden');
    }
}

function selectOption(index, btnElement) {
    if (isAnswerSubmitted) return;
    
    selectedOptionIndex = index;
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach(btn => btn.classList.remove('selected'));
    btnElement.classList.add('selected');
}

function submitAnswer() {
    if (isAnswerSubmitted) return;
    
    const question = examQuestions[currentQuestionIndex];
    let isCorrect = false;
    let correctAnswerText = '';

    if (question.type === 'mcq' || question.type === 'tf' || question.type === 'fib-mcq') {
        if (selectedOptionIndex === null) {
            alert('Please select an option.');
            return;
        }
        
        const allOptions = document.querySelectorAll('.option-btn');
        allOptions.forEach(btn => btn.classList.add('disabled'));
        
        if (selectedOptionIndex === question.answer) {
            isCorrect = true;
            allOptions[selectedOptionIndex].classList.add('correct');
        } else {
            allOptions[selectedOptionIndex].classList.add('wrong');
            allOptions[question.answer].classList.add('correct');
        }
        correctAnswerText = question.options[question.answer];
        
    } else if (question.type === 'fib') {
        const inputVal = document.getElementById('fib-input').value.trim().toLowerCase();
        if (inputVal === '') {
            alert('Please type an answer.');
            return;
        }
        document.getElementById('fib-input').disabled = true;
        
        if (inputVal === question.answer.toLowerCase()) {
            isCorrect = true;
        }
        correctAnswerText = question.answer;
    }

    if (isCorrect) score++;

    showFeedback(isCorrect, correctAnswerText);
    
    isAnswerSubmitted = true;
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    
    // Update score display
    document.getElementById('score-live').innerText = `Score: ${score}`;
    
    if (currentQuestionIndex === examQuestions.length - 1) {
        document.getElementById('next-btn').innerHTML = 'Finish Exam <i class="fa-solid fa-flag-checkered"></i>';
    }
}

function showFeedback(isCorrect, correctText) {
    const feedbackArea = document.getElementById('feedback-area');
    feedbackArea.className = `feedback-area ${isCorrect ? 'correct' : 'wrong'}`;
    
    if (isCorrect) {
        feedbackArea.innerHTML = `<i class="fa-solid fa-circle-check"></i> Correct!`;
    } else {
        feedbackArea.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Incorrect. The correct answer is: ${correctText}`;
    }
    
    feedbackArea.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < examQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('exam-interface').classList.add('hidden');
    document.getElementById('exam-results').classList.remove('hidden');
    
    const percentage = Math.round((score / examQuestions.length) * 100);
    const circlePath = document.getElementById('result-circle-path');
    const resultPercentage = document.getElementById('result-percentage');
    
    // Stroke colors based on score
    let strokeColor = '#ef4444'; // Red
    let msg = 'Keep practicing!';
    
    if (percentage >= 70) {
        strokeColor = '#10b981'; // Green
        msg = 'Great Job!';
    } else if (percentage >= 50) {
        strokeColor = '#f59e0b'; // Yellow
        msg = 'Almost there!';
    }
    
    circlePath.style.stroke = strokeColor;
    // Animate stroke dasharray
    setTimeout(() => {
        circlePath.setAttribute('stroke-dasharray', `${percentage}, 100`);
    }, 100);
    
    resultPercentage.textContent = `${percentage}%`;
    document.getElementById('result-message').innerText = msg;
    document.getElementById('result-details').innerText = `You scored ${score} out of ${examQuestions.length}.`;
}

function resetExam() {
    document.getElementById('exam-results').classList.add('hidden');
    document.getElementById('exam-setup').classList.remove('hidden');
}



// Password Protection Logic
async function verifyPassword() {
    const passInput = document.getElementById('site-password');
    const pass = passInput.value;
    const errorMsg = document.getElementById('login-error');
    
    if (!pass) return;

    try {
        const msgBuffer = new TextEncoder().encode(pass);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        // Target hash for "finallras"
        const targetHash = '35e17d00552081ccd5d0229db52b7d68756634aa3c02789377eb2679089c9320';

        if (hashHex === targetHash) {
            document.getElementById('login-overlay').style.display = 'none';
            document.getElementById('app-content').style.display = 'block';
            errorMsg.classList.add('hidden');
        } else {
            errorMsg.classList.remove('hidden');
            passInput.value = '';
        }
    } catch (e) {
        console.error("Error verifying password", e);
    }
}

function handleLoginKeyPress(e) {
    if (e.key === 'Enter') {
        verifyPassword();
    }
}
