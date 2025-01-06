export default function Stats({ items }) {
  const numItems = items.length;

  if (numItems === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percent}%)`}
      </em>
    </footer>
  );
}
