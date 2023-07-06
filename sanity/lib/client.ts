import {
    createClient
} from 'next-sanity';
import {API_VERSION,DATASET,PROJECT_ID,USE_CDN} from '../env';

export const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: API_VERSION,
    useCdn: USE_CDN
});