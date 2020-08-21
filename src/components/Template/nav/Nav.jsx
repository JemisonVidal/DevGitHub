import React from 'react';
import { Navbar, Form, FormControl, Button, InputGroup, Overlay, Popover } from 'react-bootstrap';
import StoreContext from '../../Store/Context';
import useFetch from '../../../Hooks/useFetch';

const Menu = (props) => {
  const { setDados } = React.useContext(StoreContext);
  const [userName, setUserName] = React.useState(null);
  const { request } = useFetch();
  const [showTip, setShowTip] = React.useState(false);
  const [target, setTarget] = React.useState(null);
  const ref = React.useRef(null);

  async function handleOnClickBuscar(e) {
    const refTarget = e.target;
    if (!userName) {
      setShowTip(!showTip);
      setTarget(e.target);
    } else {
      const { json } = await request(`https://api.github.com/users/${userName}/repos`);
      if (Array.isArray(json) && json.length > 0)
        setDados([...json].map(x => ({ ...x, star: false })));
      else {
        setShowTip(!showTip);
        setTarget(refTarget);
      }
    }
  }

  function handleOnChangeUser(e) {
    if (showTip) setShowTip(false);
    setUserName(e.target.value);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          DevGitHub
      </Navbar.Brand>
        <Form inline className="ml-auto">
          <InputGroup className="mr-2">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Nome"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleOnChangeUser}
            />
          </InputGroup>
          <div ref={ref}>
            <Button variant="outline-info" onClick={handleOnClickBuscar}>Pesquisar</Button>
            <Overlay
              show={showTip}
              target={target}
              placement="bottom"
              container={ref.current}
              containerPadding={20}
            >
              <Popover id="popover-contained">
                <Popover.Title as="h3">Aviso</Popover.Title>
                <Popover.Content>
                  {!userName
                    ? <p>Preencha o <strong>nome do usuário</strong> para pesquisar.</p>
                    : <p><strong>Nome de usuário</strong> não encontrado.</p>}
                </Popover.Content>
              </Popover>
            </Overlay>
          </div>
        </Form>
      </Navbar>
    </>
  );
}

export default Menu