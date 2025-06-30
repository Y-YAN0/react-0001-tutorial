import Member from "./Member";

const members = [
  {id: 1, name: "百田夏菜子", emoji: "🍎"},
  {id: 2, name: "玉井詩織", emoji: "🍊"},
  {id: 3, name: "佐々木彩夏", emoji: "🍬"},
  {id: 4, name: "高城れに", emoji: "🍆"}
];

function HelloMomoclo() {
  return (
    <div>
      {members.map(m => (
        <Member key={m.id} name={m.name} emoji={m.emoji} />
      ))}
    </div>
  );
}

export default HelloMomoclo;