const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "data", "banc-preguntes.js");
const source = fs.readFileSync(dataPath, "utf8");
const context = { window: {}, console };

vm.createContext(context);
vm.runInContext(source, context, { filename: dataPath });

const data = context.window.EXAM_DATA;

if (!data) {
  throw new Error("No s'ha trobat window.EXAM_DATA.");
}

const allQuestions = [...data.questionBank, ...data.caseQuestions];
const errors = [];

for (const question of allQuestions) {
  if (!question.id) errors.push("Pregunta sense id.");
  if (!question.theme) errors.push(`${question.id}: falta el tema.`);
  if (!question.prompt) errors.push(`${question.id}: falta l'enunciat.`);
  if (!Array.isArray(question.options) || question.options.length !== 4) {
    errors.push(`${question.id}: ha de tenir exactament 4 opcions.`);
  }
  if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) {
    errors.push(`${question.id}: index de resposta correcta invalid.`);
  }
  if (!question.explanation) errors.push(`${question.id}: falta explicacio.`);
  if (!Array.isArray(question.tags) || question.tags.length === 0) {
    errors.push(`${question.id}: falten etiquetes.`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Banc validat: ${data.questionBank.length} preguntes generals i ${data.caseQuestions.length} de cas practic.`);
