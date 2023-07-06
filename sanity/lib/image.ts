import createImageUrl from '@sanity/image-url';
import type { Image } from 'sanity';
import { client } from './client';

const imageUrlBuilder = createImageUrl(client);

export function urlForImage(source: Image) {
    return imageUrlBuilder?.image(source);
}