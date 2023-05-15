import { create } from 'apisauce';

const baseURL = 'https://openapi.izmir.bel.tr/api/ibb/nobetcieczaneler';

const client = create({
  baseURL
});

const getPharmacies = async () => {
  return await client.get();
};

export default { getPharmacies };
