import CampaignsIndexator from "./src/services/campaigns_indexes/campaigns-indexer.js";

const f = async () => {
    const campaignsIds = await CampaignsIndexator.getCampaignsIds(0, 10, 3, false);
    console.log(campaignsIds);
}

f();