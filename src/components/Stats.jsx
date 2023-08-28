export const Stats = ({ stats }) => {
  let str = [];
  for (let key in stats) {
    str.push(
      <li key={key}>
        <span className="label">{key}</span>
        <span className="quantity">{stats[key]}</span>
      </li>
    );
  }
  return str;
};
