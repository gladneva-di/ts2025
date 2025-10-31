import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css'
import Button from '../../components/button/Button';
import cn from 'classnames';


export function Layout() {

    // const location = useLocation();

    // useEffect(() => {
    //     console.log(location);
    // }, [location])

    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img src='/avatar.png' alt='icon-menu' />
                <div className={styles['name']}>Антон Ларичев</div>
                <div className={styles['email']}>22@mail.ru</div>
            </div>
            <div className={styles['menu']}>
                <NavLink to='/' className={({ isActive }) => cn(styles['link'], {
                    [styles.active]:isActive
                })}><img src='/icon-menu.svg' alt='icon-menu' />Меню</NavLink>

                <NavLink to='/cart' className={({ isActive }) => cn(styles['link'], {
                    [styles.active]:isActive
                })}><img src='/icon-cart.svg' alt='icon-cart' />Корзина</NavLink>
            </div>
            <Button className={styles['exit']}>
                <img src='/exit.svg' alt='exit' />
                Выход
            </Button>
        </div>
        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>
}