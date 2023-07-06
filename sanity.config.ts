import {
    visionTool
} from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { PROJECT_ID as projectId, DATASET as dataset, API_VERSION as apiVersion } from './sanity/env';
import { schema } from './sanity/schema';

const config = defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    schema,
    plugins: [
        deskTool(),
        visionTool({ defaultApiVersion: apiVersion })
    ]
});

export default config;