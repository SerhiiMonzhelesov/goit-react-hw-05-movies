import { Outlet } from 'react-router-dom';
import { NavLinkStyled, StyledHeader } from './StyledHeader';

function Layout() {
  return (
    <>
      <StyledHeader>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="movies">Movies</NavLinkStyled>
        </nav>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
