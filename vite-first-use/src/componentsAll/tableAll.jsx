import "../assets/App.css";
import "../assets/tableAll.css";
function TableAll({ columns, users }) {
  return (
    <div className="tableAll h-100 w-1045">
      <div className="tableAllWrapper borderRadius10">
        <table>
          <thead>
            <tr>
              {columns?.map((e) => {
                return <td>{e.title}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {users?.map((e) => {
              return (
                <tr className="tableRow">
                  <td>{e?.need1}</td>
                  <td>{e?.need2}</td>
                  <td>{e?.need3}</td>
                  <td>{e?.need4}</td>
                  <td>{e?.need5}</td>
                  <td>{e?.need8}</td>
                  <td>{e?.need9}</td>
                  <td>
                    <div className="d-flex gap5 a-center j-center">
                      {e.need6} {e.need7} {e.need10}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableAll;
