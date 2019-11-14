var DB = {};

// Catania
DB.CT = {
  LABEL: "Catania",
  DESCRIPTION: "Dalle 20 alle 22:30",
  RIFIUTO: {
    INDIFFERENZIATO: {
      COLOR: "#455660",
      TEXT_COLOR: "#fff",
      LABEL: "Indifferenziato"
    },
    ORGANICO: {
      COLOR: "#7E543B",
      TEXT_COLOR: "#fff",
      LABEL: "Organico"
    },
    CARTA: {
      COLOR: "#016AAB",
      TEXT_COLOR: "#fff",
      LABEL: "Carta"
    },
    PLASTICA: {
      COLOR: "#E9C74B",
      TEXT_COLOR: "#000",
      LABEL: "Plastica"
    },
    VETRO: {
      COLOR: "#4E6F16",
      TEXT_COLOR: "#fff",
      LABEL: "Vetro"
    }
  }
};

DB.CT.GIORNO = {
  DOMENICA: DB.CT.RIFIUTO.VETRO,
  LUNEDI: DB.CT.RIFIUTO.INDIFFERENZIATO,
  MARTEDI: DB.CT.RIFIUTO.ORGANICO,
  MERCOLEDI: DB.CT.RIFIUTO.CARTA,
  GIOVEDI: DB.CT.RIFIUTO.ORGANICO,
  VENERDI: DB.CT.RIFIUTO.PLASTICA,
  SABATO: DB.CT.RIFIUTO.ORGANICO
};
