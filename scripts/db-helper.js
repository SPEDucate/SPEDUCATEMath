import { executeQuery } from "./database";

export const getChoicesData = async (QUESTIONS_TO_GET) => {
  var questions_sql_string = "";
  for (let i = 0; i < QUESTIONS_TO_GET.length; i++) {
    questions_sql_string += QUESTIONS_TO_GET[i];
    if (i != QUESTIONS_TO_GET.length - 1) questions_sql_string += ", ";
  }

  const [questionTexts, choicesRaw] = await Promise.all([
    executeQuery(
      `SELECT question_id, question_text FROM CourseQuestions WHERE question_id IN (${questions_sql_string});`
    ),
    executeQuery(
      `SELECT question_id, choice_text, correct FROM CourseChoices WHERE question_id IN (${questions_sql_string}) ORDER BY choice_id ASC;`
    ),
  ]);

  let cleaned = {};
  for (const q of QUESTIONS_TO_GET) {
    cleaned[q] = ["", []];
  }

  for (let i = 0; i < questionTexts.length; i++) {
    let id = questionTexts[i].question_id;
    cleaned[id][0] = questionTexts[i].question_text;
  }
  for (let i = 0; i < choicesRaw.length; i++) {
    let id = choicesRaw[i].question_id;
    cleaned[id][1].push([choicesRaw[i].choice_text, choicesRaw[i].correct]);
  }

  return cleaned;
};
