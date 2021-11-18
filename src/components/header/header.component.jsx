import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown-component';

import { auth } from '../../firebase/firebase.utils';
import { selectCarHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { HeaderContainer, LogoContainer,OptionContainer, OptionsLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer className='logo-container' to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionContainer>
      <OptionsLink to='/shop'>
        SHOP
      </OptionsLink>
      <OptionsLink to='/shop'>
        CONTACT
      </OptionsLink>
      {currentUser ? (
        <OptionsLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionsLink>
      ) : (
        <OptionsLink to='/signin'>
          SIGN IN
        </OptionsLink>
      )}
      <CartIcon/>
    </OptionContainer>
    { 
      hidden?null:
      <CartDropDown/>
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector(
{
  currentUser :  selectCurrentUser,
  hidden: selectCarHidden
}
);

export default connect(mapStateToProps)(Header);