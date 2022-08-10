// import client from './pg-client.js';
//
// const composeQuery = (skip, take, categoryId, onlyActive) => {
//     let query = 'SELECT campaign.id FROM campaigns campaign';
//
//     if (categoryId !== undefined)
//         query += '\nLEFT JOIN campaigns_categories category ON category.campaign_id = campaign.id';
//
//     const conditionsExpression = [
//         onlyActive === true ? 'campaign.is_active = true' : null,
//         categoryId !== undefined ? `category.category_id = ${categoryId}` : null
//     ]
//     .filter(condition => condition != null)
//     .join(' AND ');
//
//     if (conditionsExpression.length !== 0)
//         query += '\nWHERE ' + conditions;
//
//     query += `\nLIMIT ${take} OFFSET ${skip}`;
//
//     return query;
// };
//
// /**
//  * @param {int} skip
//  * @param {int} take
//  * @param {int=} categoryId
//  * @param {boolean=} [onlyActive=true] default true
//  * @returns {int[]}
//  */
// const getCampaignsIds = async (skip, take, categoryId, onlyActive = true) => {
//     const query = composeQuery(skip, take, categoryId, onlyActive);
//     console.log(query);
//
//     await client.connect();
//     try {
//         const result = await client.query(query);
//         return result.rows.map(elem => elem.id);
//     } finally {
//         await client.end();
//     }
// }
//
// const CampaignsIndexator = async () => {};
// CampaignsIndexator.getCampaignsIds = getCampaignsIds;
//
// export default CampaignsIndexator;