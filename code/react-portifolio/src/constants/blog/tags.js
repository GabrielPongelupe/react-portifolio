// Keys are the tag ids used in each post's meta.json; labels are shown per language.
const BLOG_TAGS = {
  "system-design": { br: "System Design", eng: "System Design" },
  arquitetura: { br: "Arquitetura", eng: "Architecture" },
  "sistemas-distribuidos": { br: "Sistemas distribuídos", eng: "Distributed systems" },
  escalabilidade: { br: "Escalabilidade", eng: "Scalability" },
  backend: { br: "Backend", eng: "Backend" },
  aprendizagem: { br: "Aprendizagem", eng: "Learning" },
  estudo: { br: "Estudo", eng: "Studying" },
  memoria: { br: "Memória", eng: "Memory" },
  produtividade: { br: "Produtividade", eng: "Productivity" },
  "ciencia-cognitiva": { br: "Ciência cognitiva", eng: "Cognitive science" },
  algoritmos: { br: "Algoritmos", eng: "Algorithms" },
  complexidade: { br: "Complexidade", eng: "Complexity" },
  "big-o": { br: "Big O", eng: "Big O" },
  "estrutura-de-dados": { br: "Estruturas de dados", eng: "Data structures" },
  javascript: { br: "JavaScript", eng: "JavaScript" },
  pesquisa: { br: "Pesquisa", eng: "Research" },
  "open-source": { br: "Open source", eng: "Open source" },
  github: { br: "GitHub", eng: "GitHub" },
};

// Falls back to the raw id so a tag missing from the dictionary still renders.
export const getTagLabel = (tag, portuguese) => BLOG_TAGS[tag]?.[portuguese ? "br" : "eng"] ?? tag;
