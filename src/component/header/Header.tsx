import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { AuthContext } from "../../App";
import './Header.scss';

const StyledMenu = styled((props: any) => (
  <Menu open={false} {...props}  />
))(() => ({
  '& .MuiPaper-root': {
    '& .MuiMenu-list': {
      backgroundColor: '#777',
      '& .MuiMenuItem-root': {
        fontSize: '18px',
        fontWeight: '300',
        lineHeight: '26px',
        color: '#fff'
      }
    },
  },
}));

const Header = ({ onLogin, onLogout }: { onLogin: any, onLogout: any }) => {
  const [navItems, setNavItems] = useState(Array<any>);

  const [menus, setMenus] = useState(Array<any>);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const isLogged = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const navList = [
      {
        icon: 'icon_memo.svg',
        label: '自分の記録',
        link: '/my-record',
      },
      {
        icon: 'icon_challenge.svg',
        label: 'チャレンジ',
        link: '',
      },
      {
        icon: 'icon_info.svg',
        label: 'お知らせ',
        link: '',
      },
    ];

    setNavItems(navList);
  }, []);

  useEffect(() => {
    const menuList = [
      {
        label: '自分の記録',
        link: '/my-record',
      },
      {
        label: '体重グラフ',
      },
      {
        label: '目標',
      },
      {
        label: '選択中のコース',
      },
      {
        label: 'コラム一覧',
      },
      {
        label: '設定',
        link: '/logout'
      }
    ];

    setMenus(menuList);
  }, []);

  const onNavigate = (link: string) => () => {
    navigate(link);
  }

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onMenuItemClick = (link: string) => () => {
    if (link) {
      link === '/logout' ? onLogout() : navigate(link);
    }
    handleClose();
  }

  return (  
    <div className="header">
      <div className="left">
        <div className="logo" onClick={onNavigate('/')}>
          <img src="/image/logo.svg" alt="logo" />
        </div>
      </div>
      <div className="right">
        <div className="list">
          {
            navItems.map((item: any, index: number) => (
              <div className="list--item" onClick={onNavigate(item.link)} key={index}>
                <div className="icon">
                  <img src={`/image/${item.icon}`} alt="icon" />
                </div>
                <div className="label">{ item.label }</div>
              </div>
            ))
          }
        </div>
        <div className="auth">
          <div className="icon">
            {
              isLogged ?
                <div
                aria-controls={open ? 'menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                  <img
                    id="button-menu"
                    src={`/image/icon_menu.svg`}
                    alt="icon"
                  /> 
                </div>:
                <div className="label" onClick={onLogin}>ログイン</div>
            }
          </div>

          <StyledMenu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'button-menu',
            }}
          >
            {
              menus.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    <MenuItem onClick={onMenuItemClick(item.link)}>{item.label}</MenuItem>
                    {index !== menus.length - 1 && <Divider />}
                  </div>
                )
              })
            }
          </StyledMenu>
        </div>
      </div>
    </div>
  )
}

export default Header;
