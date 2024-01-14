import axios from "axios";

const AIRTABLE_API_KEY =  process.env.REACT_APP_AIRTABLE_API_KEY;

const getAirtableInstance = (baseId, tableName) => {
  return axios.create({
    baseURL: `https://api.airtable.com/v0/${baseId}/${tableName}`,
    headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
    }
  });
};

export const createRecord = async (baseId, tableName, record) => {
    const airtable = getAirtableInstance(baseId, tableName);
    const response = await airtable.post('/', { fields: record });
    return response.data;
};

export const getRecords = async (baseId, tableName) => {
  const airtable = getAirtableInstance(baseId, tableName);
  const response = await airtable.get('/');
  return response.data.records.map(record => ({id:record.id, ...record.fields}));
};

export const updateRecord = async (baseId, tableName, recordId, record) => {
  const airtable = getAirtableInstance(baseId, tableName);
  const response = await airtable.patch(`/${recordId}`, { fields: record });
  return response.data;
}

export const deleteRecord = async (baseId, tableName, recordId) => {
  const airtable = getAirtableInstance(baseId, tableName);
  const response = await airtable.delete(`/${recordId}`);
  return response.data;
}