const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    REF: { type: String, default: "" },
    TOUT: { type: String, default: "" },
    ACCES: { type: String, default: "" },
    ACTIV: { type: String, default: "" },
    ADRESSE: { type: String, default: "" },
    ADRL1_M: { type: String, default: "" },
    AMIS: { type: String, default: "" },
    AN_CREAT: { type: String, default: "" },
    ANNEE_FE: { type: String, default: "" },
    ANNEXE: { type: String, default: "" },
    ANTARIF: { type: String, default: "" },
    ARTISTE: { type: String, default: "" },
    ATOUT: { type: String, default: "" },
    CEDEX_AD: { type: String, default: "" },
    COPY: { type: String, default: "" },
    CP_M: { type: String, default: "" },
    CTRLTECH: { type: String, default: "" },
    DOMPAL: { type: String, default: "" },
    DPT: { type: String, default: "" },
    DT_CREAT: { type: String, default: "" },
    DT_MODIF: { type: String, default: "" },
    DT_SAISI: { type: String, default: "" },
    GESTION: { type: String, default: "" },
    HIST: { type: String, default: "" },
    INTERET: { type: String, default: "" },
    ITI2_M: { type: String, default: "" },
    ITI_M: { type: String, default: "" },
    JOCONDE: { type: String, default: "" },
    LABEL: { type: String, default: "" },
    LEGS: { type: String, default: "" },
    LIEU_M: { type: String, default: "" },
    MEL: { type: String, default: "" },
    MONOPLUR: { type: String, default: "" },
    NB_AMI: { type: String, default: "" },
    NOM_AMI: { type: String, default: "" },
    NOMANC: { type: String, default: "" },
    NOMOFF: { type: String, default: "" },
    NOMUSAGE: { type: String, default: "" },
    OBS_AMI: { type: String, default: "" },
    OBS_TOUR: { type: String, default: "" },
    PHARE: { type: String, default: "" },
    PROPBAT: { type: String, default: "" },
    PROPCOLL: { type: String, default: "" },
    PROT: { type: String, default: "" },
    PROT: { type: String, default: "" },
    PUBLI: { type: String, default: "" },
    REGION: { type: String, default: "" },
    REPCOLL: { type: String, default: "" },
    SERVICES: { type: String, default: "" },
    SIGLE_M: { type: String, default: "" },
    STATUT: { type: String, default: "" },
    SURFACES: { type: String, default: "" },
    TEL_M: { type: String, default: "" },
    THEMES: { type: String, default: "" },
    URL_M2: { type: String, default: "" },
    URL_M: { type: String, default: "" },
    VIDEO: { type: String, default: "" },
    VILLE_M: { type: String, default: "" },
    RESP: { type: String, default: "" },
    GRESP: { type: String, default: "" },
    PSC: { type: String, default: "" },
    DPSC: { type: String, default: "" },
    DPSC: { type: String, default: "" },
    DMDF: { type: String, default: "" },
    SPUB: { type: String, default: "" },
    SPUB: { type: String, default: "" },
    INVR: { type: String, default: "" },
    NUMER: { type: String, default: "" },
    LGN: { type: String, default: "" },
    REST: { type: String, default: "" },
    ACQU: { type: String, default: "" },
    RECOL: { type: String, default: "" },
    location: {
      lat: { type: Number, default: 0 },
      lon: { type: Number, default: 0 }
    },
  },
  { collection: "museo" }
);

const object = mongoose.model("museo", Schema);

module.exports = object;
