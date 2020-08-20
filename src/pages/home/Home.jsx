import React from 'react'
import { Table } from 'react-bootstrap'
import Main from '../../components/Template/main/Main'
import StoreContext from '../../components/Store/Context';
import { StarFill, Star } from 'react-bootstrap-icons';

const PagesHome = () => {
  const { dados, setDados } = React.useContext(StoreContext);

  function hadleClickStar(id) {
    const newDados = dados.map(repo => repo.id === id ? { ...repo, star: !repo.star } : repo);
    setDados(newDados);
  }

  return (
    <div>
      <Main title="Repositórios públicos">
        <Table className="container-fluid mb-5" striped bordered hover variant="dark">

          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Criado</th>
              <th>Alterado</th>
            </tr>
          </thead>
          {dados && dados.length !== 0 && dados.map(repo => {
            return (
              <tbody key={repo.id}>
                <tr >
                  <td>{repo.id}</td>
                  <td>{repo.name}</td>
                  <td>{repo.created_at}</td>
                  <td>{repo.updated_at}</td>
                  <td><span onClick={() => hadleClickStar(repo.id)}>{repo.star ? <StarFill color="yellow" /> : <Star />}</span> </td>
                </tr>
              </tbody>
            )
          })}
        </Table>
      </Main >
    </div >
  );
};

export default PagesHome;



