import './SekeletonProductCard.scss';

export const SkeletonProductCard = () => {
  return (
    <li className='skeleton-item-product'>
      <div className='skeleton skeleton-img' />
      <div className='skeleton skeleton-text' />
      <div className='skeleton skeleton-text' />
      <div className='skeleton skeleton-text' />
      <div className='skeleton-info-container'>
        <div className='skeleton skeleton-price' />
        <div className='skeleton skeleton-shop' />
      </div>
      <div className='skeleton skeleton-main-image' />
    </li>
  );
};
