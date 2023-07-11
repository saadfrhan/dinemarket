import { getProducts } from '../../../sanity/utils';
import SwiperSliderContainer from './SwiperSliderContainer';

export default async function SwiperSlider() {
  const products = await getProducts('all');
  return <SwiperSliderContainer products={products} />
}
