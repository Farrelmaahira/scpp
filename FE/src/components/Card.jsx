const Card = (props) => {
  const { title, content } = props;

  return (
    <div class="min-w-96 rounded overflow-hidden shadow-lg bg-white">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <h2>{content}</h2>
      </div>
    </div>
  );
};

export default Card;
