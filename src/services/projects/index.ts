import { asterRecomenda } from "./asterRecomenda";
import { eventSubscription } from "./eventSubscription";
import { rentCalculator } from "./rentCalculator";
import { sitePortfolio } from "./sitePortfolio";
import { weekly } from "./weekly";

export const projectsService = [
  {
    tabId: "projects",
    tabName: "Projetos",
    projects: [sitePortfolio, rentCalculator, weekly],
  },

  {
    tabId: "freelancer",
    tabName: "Freelancer",
    projects: [asterRecomenda],
  },
  {
    tabId: "others",
    tabName: "Outros",
    projects: [eventSubscription],
  },
];
