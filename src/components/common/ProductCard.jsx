const ProductCard = ({ product }) => {
  const { title, description, price, image } = product;
  return (
    <div className="bg-neutral-50 p-5">
      <img src={image} alt="Barber Studio - Icon" className="mx-auto" loading="eager" width={40} height={40} />
      <h4 className="dark:text-neutral-900 text-red-800 text-lg font-bold mt-3 mb-5 uppercase text-center tracking-widest">
        {title}
      </h4>
      <p className="text-neutral-900 font-serif text-justify leading-8">{description}</p>
      <p className="text-neutral-900 font-serif text-justify leading-8">{price}</p>
    </div>
  );
};

export default ProductCard;
