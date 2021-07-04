import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x7C56fdb3B339eae3b2153a70eFa394eF60138421'
);

export default instance;