const GEO_TIMEOUT_MS = 1500;

// Brazil gets Portuguese; everyone else (and any failure) gets English.
export const detectLanguage = async () => {
  try {
    const response = await fetch("/api/geo", { signal: AbortSignal.timeout(GEO_TIMEOUT_MS) });
    if (!response.ok) return "en";
    const { country } = await response.json();
    return country === "BR" ? "pt" : "en";
  } catch {
    return "en";
  }
};
