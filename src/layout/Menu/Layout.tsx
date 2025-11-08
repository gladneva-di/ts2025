import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css'
import Button from '../../components/button/Button';
import cn from 'classnames';


export function Layout() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('jwt');
        navigate('/ts2025/auth/login');
    }

    // const location = useLocation();

    // useEffect(() => {
    //     console.log(location);
    // }, [location])

    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img src='/ts2025/avatar.png' alt='icon-menu' />
                <div className={styles['name']}>Антон Ларичев</div>
                <div className={styles['email']}>22@mail.ru</div>
            </div>
            <div className={styles['menu']}>
                <NavLink to='/ts2025' className={({ isActive }) => cn(styles['link'], {
                    [styles.active]:isActive
                })}><img src='/ts2025/icon-menu.svg' alt='icon-menu' />Меню</NavLink>

                <NavLink to='/ts2025/cart' className={({ isActive }) => cn(styles['link'], {
                    [styles.active]:isActive
                })}><img src='/ts2025/icon-cart.svg' alt='icon-cart' />Корзина</NavLink>
            </div>
            <Button className={styles['exit']} onClick={logout}>
                <img src='/ts2025/exit.svg' alt='exit' />
                Выход
            </Button>
        </div>
        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>
}