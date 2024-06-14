const Card = (props) => {
  const { title, children } = props;

  return (
    <div class="min-w-96 rounded overflow-hidden shadow-lg bg-white">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <h2>{children}</h2>
      </div>
    </div>
  );
};

export default Card;
