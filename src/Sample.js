import "./Sample.css";

function Sample() {
  const data = [
    {
      id: 1,
      name: "Harika",
      age: 21,
    },
    {
      id: 2,
      name: "sravya",
      age: 22,
    },
    {
      id: 3,
      name: "jainika",
      age: 20,
    },
    {
      id: 4,
      name: "ramya",
      age: 18,
    },
    {
      id: 5,
      name: "hasini",
      age: 15,
    },
  ];
  return (
    <div>
      <h1 style={{color:"purple",textAlign:"center"}}>STUDENTS DATA</h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>AGE</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td class="m1">{row.id}</td>
              <td class="m2">{row.name}</td>
              <td class="m3">{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Sample;
